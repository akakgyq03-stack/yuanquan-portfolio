import { chromium } from 'playwright'
import { promises as fs } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const outputRoot = path.join(projectRoot, '.impeccable', 'review')
await fs.mkdir(outputRoot, { recursive: true })

const routes = [
  ['home', '/'],
  ['aigc', '/projects/aigc-creative-practice'],
  ['perfume-lab', '/projects/perfume-lab'],
  ['pals-go', '/projects/pals-go'],
  ['idea-tree', '/projects/idea-tree'],
  ['odor-land', '/projects/odor-land'],
  ['textual-scent-lab', '/projects/textual-scent-lab'],
  ['forest-wardrobe', '/projects/forest-wardrobe'],
  ['stitch-revival', '/projects/stitch-revival'],
  ['art-exhibitions', '/projects/art-exhibitions'],
]

const browser = await chromium.launch({ headless: true })
const report = []

for (const [viewportName, viewport] of [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 })
  for (const [name, route] of routes) {
    await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.evaluate(async () => {
      const images = [...document.images]
      images.forEach((image) => { image.loading = 'eager' })
      await Promise.all(images.map(async (image) => {
        if (!image.complete) {
          await new Promise((resolve) => {
            image.addEventListener('load', resolve, { once: true })
            image.addEventListener('error', resolve, { once: true })
          })
        }
        await image.decode().catch(() => undefined)
      }))
    })
    const metrics = await page.evaluate(() => ({
      height: document.documentElement.scrollHeight,
      width: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }))
    await page.evaluate(async () => {
      const step = Math.max(400, Math.floor(window.innerHeight * 0.8))
      for (let top = 0; top < document.documentElement.scrollHeight; top += step) {
        window.scrollTo(0, top)
        await new Promise((resolve) => setTimeout(resolve, 35))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(300)
    const fullPage = metrics.height <= 40000
    const filename = `${name}-${viewportName}${fullPage ? '' : '-top'}.png`
    await page.screenshot({ path: path.join(outputRoot, filename), fullPage })
    report.push({ name, viewport: viewportName, ...metrics, screenshot: filename, fullPage })
  }
  await page.close()
}

await browser.close()
await fs.writeFile(path.join(outputRoot, 'metrics.json'), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report, null, 2))
