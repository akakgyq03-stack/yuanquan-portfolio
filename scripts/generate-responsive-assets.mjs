import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = path.resolve(import.meta.dirname, '..')
const manifestPath = path.join(projectRoot, 'figma-assets.json')
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))
const publicRoot = path.join(projectRoot, 'public')
const widths = [720, 1440]
const results = new Map()

async function createResponsiveSet(publicPath) {
  if (results.has(publicPath)) return results.get(publicPath)
  if (!publicPath.endsWith('.webp')) return null

  const absoluteSource = path.join(publicRoot, ...publicPath.slice(1).split('/'))
  const metadata = await sharp(absoluteSource).metadata()
  if (!metadata.width) throw new Error(`Missing width for ${publicPath}`)

  const extension = path.extname(absoluteSource)
  const stem = absoluteSource.slice(0, -extension.length)
  const publicStem = publicPath.slice(0, -extension.length)
  const variantWidths = widths.filter((width) => width < metadata.width)
  const webp = []
  const avif = []

  for (const width of variantWidths) {
    const webpFile = `${stem}-${width}.webp`
    const avifFile = `${stem}-${width}.avif`
    await sharp(absoluteSource).resize({ width, withoutEnlargement: true }).webp({ quality: 84, alphaQuality: 92 }).toFile(webpFile)
    await sharp(absoluteSource).resize({ width, withoutEnlargement: true }).avif({ quality: 58, effort: 4 }).toFile(avifFile)
    webp.push(`${publicStem}-${width}.webp ${width}w`)
    avif.push(`${publicStem}-${width}.avif ${width}w`)
  }

  const avifFile = `${stem}.avif`
  await sharp(absoluteSource).avif({ quality: 60, effort: 4 }).toFile(avifFile)
  webp.push(`${publicPath} ${metadata.width}w`)
  avif.push(`${publicStem}.avif ${metadata.width}w`)

  const result = {
    avifPublicPath: `${publicStem}.avif`,
    avifSrcSet: avif.join(', '),
    webpSrcSet: webp.join(', '),
  }
  results.set(publicPath, result)
  return result
}

const uniquePaths = [...new Set(manifest.assets.map((asset) => asset.publicPath).filter((value) => value?.endsWith('.webp')))]
const concurrency = 4
let cursor = 0

await Promise.all(Array.from({ length: concurrency }, async () => {
  while (cursor < uniquePaths.length) {
    const current = uniquePaths[cursor]
    cursor += 1
    await createResponsiveSet(current)
  }
}))

for (const asset of manifest.assets) {
  const responsive = results.get(asset.publicPath)
  if (responsive) Object.assign(asset, responsive)
}

manifest.responsiveAt = new Date().toISOString()
await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Generated responsive WebP and AVIF sets for ${results.size} assets.`)
