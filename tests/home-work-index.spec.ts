import { expect, test } from '@playwright/test'

test('home project previews link to their corresponding work', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('香迹档案（AI 叙事与感官创作工具）')).toBeVisible()
  await expect(page.getByText('Pals Go（羽毛球运动训练APP）')).toBeVisible()

  const previews = [
    ['打开 AIGC 项目缩略图', '/projects/aigc-creative-practice'],
    ['打开香迹档案项目缩略图', '/projects/perfume-lab'],
    ['打开 Pals Go 项目缩略图', '/projects/pals-go'],
    ['打开 Pals Go 用户研究缩略图', '/projects/pals-go#research'],
    ['打开 Pals Go 运营缩略图', '/projects/pals-go#operation'],
    ['打开艺术展览作品缩略图', '/projects/art-exhibitions'],
  ] as const

  for (const [label, href] of previews) {
    await expect(page.getByRole('link', { name: label })).toHaveAttribute('href', href)
  }

  await page.getByRole('link', { name: '打开 AIGC 项目缩略图' }).click()
  await expect(page).toHaveURL(/\/projects\/aigc-creative-practice$/)
})
