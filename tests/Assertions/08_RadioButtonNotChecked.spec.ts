
import { test, expect } from '@playwright/test';

test('Verify Radio Button is not checked ', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');
    
    const title = await page.title();
    expect(title).toContain("Assertions Practice Page");
    console.log("Navigated to "+ title);
    
    const disabledRadio =  page.getByLabel('Disabled');
    expect(disabledRadio).not.toBeChecked();
    await page.waitForTimeout(2000);

});