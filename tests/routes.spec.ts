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
  test(`${route} renders without overflow or failed assets`, async ({ page }) => {
    const errors: string[] = []
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
    page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
    await page.goto(route, { waitUntil: 'networkidle' })
    await expect(page.locator('main')).toBeVisible()
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)
    expect(overflow).toBeFalsy()
    expect(errors).toEqual([])
  })
}

test('directory axis updates the hash and remains keyboard reachable', async ({ page }) => {
  await page.goto('/projects/perfume-lab')
  const axis = page.getByRole('navigation', { name: '项目章节目录' })
  await expect(axis).toBeVisible()
  await axis.getByRole('button', { name: /产品价值/ }).click()
  await expect(page).toHaveURL(/#product-value$/)
  await expect(page.locator('#product-value')).toBeInViewport()
})

test('deep chapter links refresh, return to top, and restore with browser back', async ({ page }) => {
  await page.goto('/projects/perfume-lab#product-value')
  await expect(page.locator('#product-value')).toBeInViewport()
  await page.reload({ waitUntil: 'networkidle' })
  await expect(page.locator('#product-value')).toBeInViewport()

  await page.getByRole('navigation', { name: '项目章节目录' }).getByRole('button', { name: 'TOP ↑' }).click()
  await expect(page).toHaveURL(/\/projects\/perfume-lab$/)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(8)

  await page.goBack()
  await expect(page).toHaveURL(/#product-value$/)
  await expect(page.locator('#product-value')).toBeInViewport()
})

test('home exposes email contact without a telephone link', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: '13187688338@163.com' })).toHaveAttribute('href', 'mailto:13187688338@163.com')
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0)
})

test('project pager and index return work', async ({ page }) => {
  await page.goto('/projects/art-exhibitions')
  await page.getByRole('link', { name: /NEXT/ }).click()
  await expect(page).toHaveURL(/aigc-creative-practice/)
  await page.getByRole('link', { name: 'BACK TO WORK INDEX' }).click()
  await expect(page).toHaveURL(/\/#work-index$/)
})

test('unknown route shows custom 404', async ({ page }) => {
  await page.goto('/not-a-real-project')
  await expect(page.getByRole('heading', { name: '这条路径没有作品。' })).toBeVisible()
})
