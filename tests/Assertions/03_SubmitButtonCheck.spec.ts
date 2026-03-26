
import { test, expect } from '@playwright/test';

test('Submit and Check if user name is displayed', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');

    await page.locator("#usernameField").clear();
    await page.locator('#usernameField').fill('ABCDEFGH');
    await page.locator('#submitBtn').click();
    const successMsg = page.locator('#successMessage');
    await expect(successMsg).toBeVisible();
    await expect(successMsg).toContainText('ABCDEFGH');
    await page.waitForTimeout(5000);

});
