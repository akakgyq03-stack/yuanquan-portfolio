import { chromium } from 'playwright'
import { promises as fs } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const baseUrl = (process.env.CAPTURE_BASE_URL ?? 'http://127.0.0.1:4173').replace(/\/$/, '')
const outputRoot = path.join(
  projectRoot,
  '.impeccable',
  'review',
  process.env.CAPTURE_SUBDIRECTORY ?? '',
)
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
const selectedRoutes = process.env.CAPTURE_ROUTE
  ? routes.filter(([name]) => name === process.env.CAPTURE_ROUTE)
  : routes

const browser = await chromium.launch({
  headless: true,
  proxy: process.env.CAPTURE_PROXY ? { server: process.env.CAPTURE_PROXY } : undefined,
})
const report = []

const viewports = [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
].filter(([name]) => !process.env.CAPTURE_VIEWPORT || name === process.env.CAPTURE_VIEWPORT)

for (const [viewportName, viewport] of viewports) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 })
  for (const [name, route] of selectedRoutes) {
    const failedRequests = []
    const consoleErrors = []
    const assetResponses = []
    const onRequestFailed = (request) => failedRequests.push({
      url: request.url(),
      error: request.failure()?.errorText ?? 'request failed',
    })
    const onResponse = (response) => {
      if (/\.(?:js|css)(?:\?|$)/.test(response.url())) {
        assetResponses.push({
          url: response.url(),
          status: response.status(),
          contentType: response.headers()['content-type'] ?? null,
        })
      }
      if (response.status() >= 400) {
        failedRequests.push({ url: response.url(), error: `HTTP ${response.status()}` })
      }
    }
    const onConsole = (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    }
    const onPageError = (error) => consoleErrors.push(error.message)
    page.on('requestfailed', onRequestFailed)
    page.on('response', onResponse)
    page.on('console', onConsole)
    page.on('pageerror', onPageError)
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' })
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
      rootChildren: document.querySelector('#root')?.children.length ?? null,
      moduleScripts: [...document.querySelectorAll('script[type="module"]')].map((script) => script.src),
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
    report.push({
      name,
      viewport: viewportName,
      url: `${baseUrl}${route}`,
      status: response?.status() ?? null,
      ...metrics,
      screenshot: filename,
      fullPage,
      failedRequests,
      consoleErrors,
      assetResponses,
    })
    page.off('requestfailed', onRequestFailed)
    page.off('response', onResponse)
    page.off('console', onConsole)
    page.off('pageerror', onPageError)
  }
  await page.close()
}

await browser.close()
await fs.writeFile(path.join(outputRoot, 'metrics.json'), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report, null, 2))
