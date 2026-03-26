


import { test, expect } from '@playwright/test';
test('Click first Job Application Form', async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/label.html');

  // Click the FIRST matching link
  await page.getByLabel('Search Documentation:').fill(('testing'));
  await page.getByText('Search').click();

  let searchedForText = await page.getByTestId('popupMessage').textContent();
  console.log(searchedForText);
    await expect(searchedForText).toBe('You searched for: "testing"');

  

});