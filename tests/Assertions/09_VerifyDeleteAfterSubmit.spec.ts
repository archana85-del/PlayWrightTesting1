

import { test, expect } from '@playwright/test';

test('Verify Delete Button is displayed after clicking Submit', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');

    const deleteAccountBtn = page.locator('#deleteAccountBtn');
    await expect(deleteAccountBtn).not.toBeVisible();

    await page.locator("#submitBtn").click();
    await expect(deleteAccountBtn).toBeVisible();
    //Wbhy is this assert failing ?
   // expect(deleteAccountBtn).toBeDisabled
    await page.waitForTimeout(3000);
});