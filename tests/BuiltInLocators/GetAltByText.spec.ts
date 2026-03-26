
import { test, expect } from '@playwright/test';
test('Click first image by alt text and verify title', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/06/e-commerce.html');


  const firstImage = page.getByAltText('Samsung Galaxy S24').first();

  await expect(firstImage).toBeVisible();

  // Click the image
  await firstImage.click();

  // ✅ Verify page title (change expected title to what it should be after click)
  await expect(page).toHaveTitle('SenthilSmartQAHub');
});