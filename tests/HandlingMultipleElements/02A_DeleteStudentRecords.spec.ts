import { test, expect } from '@playwright/test';

test('Select all student records and delete selected rows', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/table-with-checkboxes.html');

  const rows = page.locator('table tbody tr');
  await expect(rows).toHaveCount(10);

  const studentNames = (await page.locator('table tbody tr td:nth-child(2)').allTextContents())
    .map(text => text.trim());

  const checkboxes = await page.locator('table tbody tr input[type="checkbox"]').all();

  for (const checkbox of checkboxes) {
    await checkbox.check();
  }

  await page.getByRole('button', { name: /Delete Selected Rows/i }).click();

  await expect(rows).toHaveCount(0);

 
  await page.waitForTimeout(3000);
});