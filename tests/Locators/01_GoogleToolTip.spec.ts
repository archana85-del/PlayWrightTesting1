import { test, expect } from '@playwright/test';

test('Google - fetch tooltip using getAttribute', async ({ page }) => {
  await page.goto('https://www.google.com/');

 const logoImg = page.locator('img[alt="Ice Hockey 2026"]').first();

  const title = await logoImg.getAttribute('title');

    console.log('Tooltip ', title);

  await page.waitForTimeout(2000);

});