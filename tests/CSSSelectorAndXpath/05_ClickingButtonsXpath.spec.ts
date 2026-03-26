import { test, expect } from '@playwright/test';

test('Click buttons using XPath position', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/01/button-click-example.html');

  const output = page.locator('#output, #result, #msg, p, div').first();

  await page.locator("//button[contains(@class,'btn')][1]").click();
  await expect(page.locator('#output')).toContainText('Button 1 clicked');

  await page.locator("//button[contains(@class,'btn')][last()]").click();
    await expect(page.locator('#output')).toContainText('Button 4 clicked');

  await page.locator("//button[contains(@class,'btn')][position()=2]").click();
  await expect(page.locator('#output')).toContainText('Button 2 clicked');

  await page.locator("//button[contains(@class,'btn')][3]").click();
  await expect(page.locator('#output')).toContainText('Button 3 clicked');

  await page.waitForTimeout(5000);
});
