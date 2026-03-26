


import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/11/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('index');

  await page.close();
});

test.only('current page URL', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/11/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('index');
  await expect(page).toHaveURL(/index\.html/);
  await page.close();
});