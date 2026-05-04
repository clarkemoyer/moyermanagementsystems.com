import { test, expect } from '@playwright/test'

test('coming-soon page renders the site name and domain', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Moyer Management Systems/i })).toBeVisible()
  await expect(page.getByText('moyermanagementsystems.com')).toBeVisible()
  await expect(page.getByText(/coming soon/i).first()).toBeVisible()
})
