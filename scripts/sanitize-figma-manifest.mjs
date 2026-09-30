import { promises as fs } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const manifestPath = path.join(projectRoot, 'figma-assets.json')
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))

for (const asset of manifest.assets) delete asset.url

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Sanitized ${manifest.assets.length} Figma asset references.`)
