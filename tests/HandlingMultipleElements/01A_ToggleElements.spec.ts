import { test, expect } from '@playwright/test';

test('Enable all stocks and validate selected stocks', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/trading-values-table.html');

  const rows = page.locator('table tbody tr');
  await expect(rows).toHaveCount(4);

  const stockNames = (await rows.locator('td:first-child').allTextContents())
    .map(text => text.trim());

  const count = await rows.count();

  for (let i = 0; i < count; i++) {
    await rows.nth(i).locator('span[class="slider"]').check();
  }

  await page.getByRole('button', { name: 'Submit Enabled Stocks' }).click();

  for (const stock of stockNames) {
    console.log(stock)
    await expect(page.locator('body')).toContainText(stock);
  }
  await page.waitForTimeout(2000);
});



