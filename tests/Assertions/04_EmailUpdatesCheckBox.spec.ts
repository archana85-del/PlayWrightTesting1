
import { test, expect } from '@playwright/test';

test('Email Updates Checkbox is checked', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');

   const isEmailUpdatesChecked = await page.locator('#emailUpdates').isChecked();
   expect(isEmailUpdatesChecked).toBe(true);
   await page.waitForTimeout(2000);
});