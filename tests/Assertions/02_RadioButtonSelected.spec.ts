import { test, expect } from '@playwright/test';

test('Get and assert default value from username textbox', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');

    const activeRadioButton = page.locator('input[value="Active"]');
    await expect(activeRadioButton).toBeChecked();
    await page.waitForTimeout(5000);

});
