import { test, expect } from '@playwright/test';

test('Search Product Using GetByRole', async ({ page }) => {
  
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/06/e-commerce.html');

    await page.getByRole('searchbox').fill('iPhone');
    await page.getByRole('searchbox').press('Enter');;
    await page.waitForTimeout(5000);
   
  const visibleProducts = page.locator('#productList div.product');

  await expect(visibleProducts).toHaveCount(1);
  await expect(visibleProducts.first()).toContainText('iPhone 15 Pro');
    await page.waitForTimeout(5000);
});