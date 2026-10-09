import { expect, test } from '@playwright/test'

const routes = [
  '/',
  '/projects/aigc-creative-practice',
  '/projects/perfume-lab',
  '/projects/pals-go',
  '/projects/idea-tree',
  '/projects/odor-land',
  '/projects/textual-scent-lab',
  '/projects/forest-wardrobe',
  '/projects/stitch-revival',
  '/projects/art-exhibitions',
]

for (const route of routes) {
  test(route + ' renders the Figma canvas without overflow or failed assets', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('response', (response) => { if (response.status() >= 400) errors.push(response.status() + ' ' + response.url()) })
    await page.goto(route, { waitUntil: 'load' })
    await expect(page.locator('main')).toBeVisible()
    const state = await page.evaluate(() => ({
      failedImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0 && !image.src.endsWith('.svg')).map((image) => image.src),
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      temporaryFigmaAssets: [...document.images].filter((image) => image.src.includes('figma.com/api/mcp/asset')).map((image) => image.src),
    }))
    expect(state.overflow).toBeFalsy()
    expect(state.failedImages).toEqual([])
    expect(state.temporaryFigmaAssets).toEqual([])
    expect(errors).toEqual([])
  })
}

test('project directory links jump to the requested Figma section', async ({ page }) => {
  await page.goto('/projects/perfume-lab')
  const directory = page.getByRole('navigation', { name: '项目目录' })
  await expect(directory).toBeVisible()
  await directory.getByRole('link', { name: /产品价值/ }).click()
  await expect(page).toHaveURL(/#product-value$/)
  await expect(page.locator('#product-value')).toBeInViewport()
})

test('Pals Go and Idea Tree directories mirror their in-page chapter axes', async ({ page }) => {
  await page.goto('/projects/pals-go')
  const palsSections = page.locator('[aria-label="Pals Go"] section')
  const gaps = await palsSections.evaluateAll((sections) => sections.slice(1).map((section, index) => {
    const previous = sections[index] as HTMLElement
    return (section as HTMLElement).offsetTop - previous.offsetTop - previous.offsetHeight
  }))
  expect(gaps.every((gap) => gap === 0)).toBeTruthy()
  await expect(page.locator('[data-node-id="290:377"]')).toHaveCSS('mix-blend-mode', 'multiply')
  await expect(page.locator('[data-node-id="290:379"]')).toHaveCSS('mix-blend-mode', 'normal')
  const palsDirectory = page.getByRole('navigation', { name: '项目目录' })
  await expect(palsDirectory.getByRole('link')).toHaveText(['01用户洞察', '02核心功能', '03用户研究', '04运营验证'])
  await page.getByRole('link', { name: '跳转到用户研究章节' }).click()
  await expect(page).toHaveURL(/#user-research$/)
  await expect(page.locator('#user-research')).toBeInViewport()

  await page.goto('/projects/idea-tree')
  const ideaDirectory = page.getByRole('navigation', { name: '项目目录' })
  await expect(ideaDirectory.getByRole('link')).toHaveText(['01项目概览', '02问题与假设', '03验证与洞察', '04产品定义', '05核心机制', '06原型与结果'])
})

test('Odor Land and Textual Scent Lab render their restored visual assets', async ({ page }) => {
  await page.goto('/projects/odor-land', { waitUntil: 'networkidle' })
  const topNote = page.locator('[data-node-id="490:631"] img')
  await expect(topNote).toHaveAttribute('src', /odor-top-note\.png$/)
  await expect.poll(() => topNote.evaluate((image: HTMLImageElement) => ({ height: image.naturalHeight, width: image.naturalWidth }))).toEqual({ height: 380, width: 280 })
  const odorArtboard = page.locator('[aria-label="Odor Land 气味可视化工作流"]')
  await expect(odorArtboard.locator(':scope > div').first()).toHaveCSS('height', '7716px')

  await page.goto('/projects/textual-scent-lab#architecture', { waitUntil: 'networkidle' })
  const architectureMap = page.getByRole('img', { name: '文字气味实验室信息架构图' })
  await expect(architectureMap).toBeVisible()
  await expect(architectureMap.locator('rect')).toHaveCount(24)
})

test('Textual Scent Lab keeps the complete Figma technology framework', async ({ page }) => {
  await page.goto('/projects/textual-scent-lab#technology', { waitUntil: 'networkidle' })
  const framework = page.getByRole('img', { name: '技术框架流程图' })
  await expect(framework).toBeVisible()
  await expect(framework.locator('[data-node-id^="537:15"], [data-node-id^="537:160"]')).toHaveCount(34)
  await expect(framework.getByText('数据爬取')).toBeVisible()
  await expect(framework.getByText('随机森林训练')).toBeVisible()
  await expect(framework.getByText('基于 TD 的气味感官可视化')).toBeVisible()
})

test('every project exposes return and previous/next controls, with directories only where designed', async ({ page }) => {
  for (const route of routes.slice(1)) {
    await page.goto(route, { waitUntil: 'domcontentloaded' })
    await expect(page.getByRole('navigation', { name: '项目导航' })).toBeVisible({ timeout: 15_000 })
    const directory = page.getByRole('navigation', { name: '项目目录' })
    if (route.endsWith('aigc-creative-practice') || route.endsWith('art-exhibitions')) {
      await expect(directory).toHaveCount(0)
    } else {
      await expect(directory).toBeVisible()
    }
    await expect(page.getByRole('navigation', { name: '相邻项目' })).toBeVisible()
  }
})

test('home sequential link opens AIGC before the AI product overview', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: '按顺序进入 AIGC 创作实践' }).click()
  await expect(page).toHaveURL(/aigc-creative-practice/)
  const canvases = page.locator('[aria-label="AIGC 创作实践"], [aria-label="AI 产品项目总览"]')
  await expect(canvases).toHaveCount(2)
  await expect(canvases.nth(0)).toHaveAttribute('aria-label', 'AIGC 创作实践')
  await expect(canvases.nth(1)).toHaveAttribute('aria-label', 'AI 产品项目总览')
})

test('AIGC video sits between the opening artwork and the original content', async ({ page }) => {
  await page.goto('/projects/aigc-creative-practice')

  const hero = page.locator('[data-node-id="503:785"]')
  const videoSection = page.locator('[data-aigc-video]')
  const video = videoSection.getByLabel('播放《合成大西瓜》AIGC 视频作品')
  const originalContent = page.locator('[data-node-id="535:947"]')

  await expect(videoSection).toBeVisible()
  await expect(video).toHaveAttribute('controls', '')
  await expect(video).toHaveAttribute('playsinline', '')
  await expect(video).toHaveAttribute('preload', 'metadata')
  await expect(video).toHaveAttribute('poster', '/assets/media/aigc-watermelon-poster.webp')
  await expect(video).toHaveAttribute('src', /aigc\/hecheng-daxigua-2-20260916\.mp4$/)
  await expect(video).not.toHaveAttribute('autoplay', '')
  await expect(video).not.toHaveAttribute('loop', '')
  await video.dispatchEvent('error')
  await expect(videoSection.getByText('视频暂时无法加载')).toBeVisible()
  await expect(videoSection.getByRole('link', { name: '在新窗口打开视频' })).toHaveAttribute('href', /aigc\/hecheng-daxigua-2-20260916\.mp4$/)

  const positions = await Promise.all([hero, videoSection, originalContent].map((locator) => locator.boundingBox()))
  expect(positions.every(Boolean)).toBeTruthy()
  expect(positions[1]!.y).toBeCloseTo(positions[0]!.y + positions[0]!.height, 0)
  expect(positions[2]!.y).toBeCloseTo(positions[1]!.y + positions[1]!.height, 0)
})

test('deep chapter links survive refresh and browser back', async ({ page }) => {
  await page.goto('/projects/perfume-lab#product-value')
  await expect(page.locator('#product-value')).toBeInViewport()
  await page.reload({ waitUntil: 'networkidle' })
  await expect(page.locator('#product-value')).toBeInViewport()
  await page.getByRole('link', { name: '返回作品索引' }).click()
  await expect(page).toHaveURL(/\/$/)
  await page.goBack()
  await expect(page).toHaveURL(/#product-value$/)
})

test('home contact and project hotspots are keyboard reachable', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: '发送邮件至 13187688338@163.com' })).toHaveAttribute('href', 'mailto:13187688338@163.com')
  const projectLink = page.getByRole('link', { name: '打开 AIGC 创作实践' })
  await projectLink.focus()
  await expect(projectLink).toBeFocused()
  await projectLink.press('Enter')
  await expect(page).toHaveURL(/aigc-creative-practice/)
})

test('intermediate responsive widths remain free of document overflow', async ({ page }) => {
  for (const width of [1024, 768, 390]) {
    await page.setViewportSize({ width, height: 900 })
    for (const route of routes) {
      await page.goto(route, { waitUntil: 'domcontentloaded' })
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBeTruthy()
    }
  }
})

test('reduced motion disables smooth scrolling', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/projects/perfume-lab')
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto')
})

test('unknown route shows custom 404', async ({ page }) => {
  await page.goto('/not-a-real-project')
  await expect(page.getByRole('heading', { name: '这条路径没有作品。' })).toBeVisible()
})
