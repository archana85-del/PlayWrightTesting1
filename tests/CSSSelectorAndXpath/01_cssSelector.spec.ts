import { test, expect } from '@playwright/test';

test('Enter Form Details Using CSS (id, name, class, text) + verify success', async ({ page }) => {
  
await page.goto('https://senthilsmartqahub.blogspot.com/2026/01/information-form.html');

await page.locator('#userName').fill('ABC');

  await page.locator('input[name="userEmail"]').fill('abc@gmail.com');

  await page.locator('input.userPhone').fill('4085551234');

  await page.getByText('Submit', { exact: true }).click();

  await expect(page.getByText('Form submitted successfully!')).toHaveCSS('display', 'block');

   await page.waitForTimeout(5000);
});
