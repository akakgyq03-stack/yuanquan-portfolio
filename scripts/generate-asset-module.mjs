import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = path.resolve(import.meta.dirname, '..')
const manifest = JSON.parse(await fs.readFile(path.join(projectRoot, 'figma-assets.json'), 'utf8'))
const grouped = new Map()
const dimensionsByPath = new Map()

async function dimensions(publicPath) {
  if (publicPath.endsWith('.svg')) return {}
  if (!dimensionsByPath.has(publicPath)) {
    const metadata = await sharp(path.join(projectRoot, 'public', ...publicPath.slice(1).split('/'))).metadata()
    dimensionsByPath.set(publicPath, { width: metadata.width, height: metadata.height })
  }
  return dimensionsByPath.get(publicPath)
}

for (const asset of manifest.assets) {
  const key = asset.nodeId
  const list = grouped.get(key) ?? []
  if (!list.some((item) => item.src === asset.publicPath)) {
    list.push({
      name: asset.name,
      src: asset.publicPath,
      kind: asset.publicPath.endsWith('.svg') ? 'svg' : 'image',
      sourceNode: asset.nodeId,
      ...await dimensions(asset.publicPath),
    })
  }
  grouped.set(key, list)
}

const output = `// Generated from figma-assets.json. Do not edit by hand.\n` +
`export type FigmaAsset = { name: string; src: string; kind: 'image' | 'svg'; sourceNode: string; width?: number; height?: number }\n\n` +
`export const assetsByNode: Record<string, FigmaAsset[]> = ${JSON.stringify(Object.fromEntries(grouped), null, 2)}\n`

await fs.writeFile(path.join(projectRoot, 'src', 'data', 'assetManifest.ts'), output)
console.log(`Generated asset module for ${grouped.size} nodes.`)
