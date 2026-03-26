

import { test, expect } from '@playwright/test';

test('Verify Delete Button is hidden before Clicking submit', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');

    const deleteAccountBtn = page.locator('#deleteAccountBtn');
    await expect(deleteAccountBtn).not.toBeVisible();

    await page.locator("#submitBtn").click();
    await expect(deleteAccountBtn).toBeVisible();
    await page.waitForTimeout(3000);
});