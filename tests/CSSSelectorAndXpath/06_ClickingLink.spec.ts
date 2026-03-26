import { test, expect } from '@playwright/test';

test('Click buttons using XPath position', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/text.html');

  await page.locator('//a[contains(text(),"Doctor Appointment Form")]').click();

  await expect(page).toHaveTitle('Doctor Appointment Form');
  await page.waitForTimeout(5000);
});