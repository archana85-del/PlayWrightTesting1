import { test, expect } from '@playwright/test';

test('Click image using getByTitle and verify page', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/04/imageclick.html');

  
  const img = page.getByTitle('Online Mobile Store').first();
  await expect(img).toBeVisible();

    await img.click();


await expect(page).toHaveTitle('E-Commerce');
});