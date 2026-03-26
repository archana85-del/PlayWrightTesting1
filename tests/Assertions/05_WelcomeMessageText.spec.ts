
import { test, expect } from '@playwright/test';

test('verify welcome message text', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');

    const welcomeMessage = page.locator('#welcomeMessage');
    await expect(welcomeMessage).toBeVisible();
    await expect(welcomeMessage).toHaveText('Welcome back! Manage your account and preferences below.');
    await page.waitForTimeout(2000);
});