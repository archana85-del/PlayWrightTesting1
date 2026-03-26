
import { test, expect } from '@playwright/test';

test('Verify Success Message is hidden before clicking Submit', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');

    const successMsg = page.locator('#successMessage');
    await expect(successMsg).not.toBeVisible();

    const usernameField = page.locator("#usernameField");
    await usernameField.clear();
    const isEmpty =  await usernameField.inputValue();
    
    expect(isEmpty).toBe('');

    //how to use toBeEmpty assertion here ?
    
    await page.waitForTimeout(5000);

});
