

import { test, expect } from '@playwright/test';

test('Enter text in label and click search button', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/label.html');

   await page.getByLabel('Search input for developer resources').fill('testing');

  //await page.getByRole('button', { name: /^Search$/i }).click();

await page.locator('button[type="button"]:has-text("Search")').click();
  await page.waitForTimeout(4000); // Wait for search results to load

  const popupMessage = await page.locator('#popupMessage').textContent()
  console.log('Popup Message: ' + popupMessage);
  await expect(popupMessage).toBe('You searched for: "testing"');
  
  await page.waitForTimeout(4000);

});