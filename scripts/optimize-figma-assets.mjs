import { createHash } from 'node:crypto'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = path.resolve(import.meta.dirname, '..')
if (path.basename(projectRoot) !== 'yuanquan-portfolio') {
  throw new Error(`Unexpected project root: ${projectRoot}`)
}

const manifestPath = path.join(projectRoot, 'figma-assets.json')
const publicRoot = path.join(projectRoot, 'public')
const sourceRoot = path.join(publicRoot, 'assets', 'figma')
const libraryRoot = path.join(sourceRoot, 'library')
await fs.mkdir(libraryRoot, { recursive: true })

const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))
const canonicalByHash = new Map()
const sourceFiles = new Set()

for (const asset of manifest.assets) {
  const absoluteSource = path.resolve(projectRoot, asset.file)
  if (!absoluteSource.startsWith(`${sourceRoot}${path.sep}`)) {
    throw new Error(`Refusing out-of-scope asset: ${absoluteSource}`)
  }
  const input = await fs.readFile(absoluteSource)
  const hash = createHash('sha256').update(input).digest('hex')
  const sourceExt = path.extname(absoluteSource).toLowerCase()

  let canonical = canonicalByHash.get(hash)
  if (!canonical) {
    const isSvg = sourceExt === '.svg'
    const outputExt = isSvg ? '.svg' : '.webp'
    const relativePublic = path.posix.join('assets', 'figma', 'library', `${hash.slice(0, 20)}${outputExt}`)
    const absoluteOutput = path.join(publicRoot, ...relativePublic.split('/'))

    if (isSvg) {
      await fs.writeFile(absoluteOutput, input)
    } else {
      await sharp(input)
        .rotate()
        .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 88, alphaQuality: 95, smartSubsample: true })
        .toFile(absoluteOutput)
    }

    canonical = { hash, file: `public/${relativePublic}`, publicPath: `/${relativePublic}` }
    canonicalByHash.set(hash, canonical)
  }

  asset.originalFile = asset.file
  asset.file = canonical.file
  asset.publicPath = canonical.publicPath
  asset.sha256 = hash
  delete asset.url
  sourceFiles.add(absoluteSource)
}

manifest.uniqueAssets = canonicalByHash.size
manifest.optimizedAt = new Date().toISOString()
await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

for (const source of sourceFiles) {
  if (!source.startsWith(`${libraryRoot}${path.sep}`)) {
    await fs.rm(source, { force: true })
  }
}

for (const entry of await fs.readdir(sourceRoot, { withFileTypes: true })) {
  if (entry.isDirectory() && entry.name !== 'library') {
    const target = path.join(sourceRoot, entry.name)
    if (!target.startsWith(`${sourceRoot}${path.sep}`)) throw new Error(`Unsafe cleanup target: ${target}`)
    await fs.rm(target, { recursive: true, force: true })
  }
}

console.log(`Optimized ${manifest.assets.length} references into ${canonicalByHash.size} unique assets.`)
