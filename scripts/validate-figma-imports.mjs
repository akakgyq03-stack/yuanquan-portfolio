import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = path.resolve(import.meta.dirname, '..')
const generatedRoot = path.join(projectRoot, 'src', 'figma', 'generated')
const publicRoot = path.join(projectRoot, 'public')
const manifest = JSON.parse(await fs.readFile(path.join(projectRoot, 'figma-assets.json'), 'utf8'))
const contracts = JSON.parse(await fs.readFile(path.join(import.meta.dirname, 'figma-layer-contracts.json'), 'utf8'))
const errors = []
const verifiedAssets = new Set()

async function walk(directory) {
  const files = []
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(target))
    else files.push(target)
  }
  return files
}

function localAssetPath(publicPath) {
  if (!publicPath?.startsWith('/assets/figma/')) return null
  const resolved = path.resolve(publicRoot, ...publicPath.slice(1).split('/'))
  return resolved.startsWith(`${publicRoot}${path.sep}`) ? resolved : null
}

async function verifyAsset(publicPath, label) {
  if (!publicPath || verifiedAssets.has(publicPath)) return
  verifiedAssets.add(publicPath)
  const localPath = localAssetPath(publicPath)
  if (!localPath) {
    errors.push(`Out-of-scope Figma asset path for ${label}: ${publicPath}`)
    return
  }
  try {
    const stat = await fs.stat(localPath)
    if (stat.size === 0) {
      errors.push(`Empty Figma asset for ${label}: ${publicPath}`)
      return
    }
    if (publicPath.endsWith('.svg')) {
      const source = await fs.readFile(localPath, 'utf8')
      if (!/<svg[\s>]/i.test(source)) errors.push(`Invalid SVG asset for ${label}: ${publicPath}`)
    } else {
      const metadata = await sharp(localPath).metadata()
      if (!metadata.width || !metadata.height) errors.push(`Unreadable raster asset for ${label}: ${publicPath}`)
    }
  } catch {
    errors.push(`Missing or unreadable Figma asset for ${label}: ${publicPath}`)
  }
}

function srcSetPaths(srcSet) {
  return (srcSet ?? '').split(',').map((item) => item.trim().split(/\s+/)[0]).filter(Boolean)
}

const manifestByKey = new Map()
for (const asset of manifest.assets) {
  const key = `${asset.nodeId}/${asset.name}`
  const previous = manifestByKey.get(key)
  if (previous && previous.publicPath !== asset.publicPath) {
    errors.push(`Conflicting Figma asset alias ${key}: ${previous.publicPath} vs ${asset.publicPath}`)
  } else {
    manifestByKey.set(key, asset)
  }

  await verifyAsset(asset.publicPath, key)
  await verifyAsset(asset.avifPublicPath, key)
  for (const publicPath of srcSetPaths(asset.avifSrcSet)) await verifyAsset(publicPath, key)
  for (const publicPath of srcSetPaths(asset.webpSrcSet)) await verifyAsset(publicPath, key)
}

const assetSource = await fs.readFile(path.join(projectRoot, 'src', 'figma', 'assetSrc.ts'), 'utf8')
const manualAssets = new Map(
  [...assetSource.matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)].map((match) => [match[1], match[2]]),
)
const generatedFiles = (await walk(generatedRoot)).filter((file) => file.endsWith('.tsx'))
let assetCalls = 0

for (const file of generatedFiles) {
  const source = await fs.readFile(file, 'utf8')
  if (source.includes('figma.com/api/mcp/asset')) {
    errors.push(`Temporary Figma URL remains in ${path.relative(projectRoot, file)}`)
  }
  for (const match of source.matchAll(/assetSrc\('([^']+)',\s*'([^']+)'\)/g)) {
    assetCalls += 1
    const key = `${match[1]}/${match[2]}`
    if (!manifestByKey.has(key) && !manualAssets.has(key)) {
      errors.push(`Unresolvable assetSrc call ${key} in ${path.relative(projectRoot, file)}`)
    } else if (manualAssets.has(key)) {
      await verifyAsset(manualAssets.get(key), key)
    }
  }
}

for (const frame of contracts.frames) {
  const file = path.resolve(projectRoot, frame.file)
  const source = await fs.readFile(file, 'utf8')
  for (const nodeId of frame.requiredNodeIds) {
    if (!source.includes(`data-node-id="${nodeId}"`) && !source.includes(`id: '${nodeId}'`)) {
      errors.push(`Figma layer ${nodeId} from frame ${frame.nodeId} is missing in ${frame.file}`)
    }
  }
}

for (const requirement of contracts.assetRequirements ?? []) {
  const file = path.resolve(projectRoot, requirement.path)
  try {
    const metadata = await sharp(file).metadata()
    if (metadata.width !== requirement.width || metadata.height !== requirement.height) {
      errors.push(`Unexpected dimensions for ${requirement.path}: ${metadata.width}x${metadata.height}, expected ${requirement.width}x${requirement.height}`)
    }
  } catch {
    errors.push(`Missing or unreadable required asset: ${requirement.path}`)
  }
}

if (errors.length) {
  console.error(`Figma import validation failed with ${errors.length} error(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Validated ${manifest.assets.length} Figma references, ${verifiedAssets.size} local files, ${assetCalls} asset callsites, and ${contracts.frames.length} layer contract(s).`)
