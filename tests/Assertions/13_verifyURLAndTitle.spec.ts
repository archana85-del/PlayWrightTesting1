import { test, expect } from '@playwright/test';

test('Verify  URL and Title ', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');
    
    const title = await page.title();
    expect(title).toContain("Assertions Practice Page");
    console.log("Navigated to "+ title);

    const currentURL = page.url();
    expect(currentURL).toBe('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');
    expect(currentURL).toContain('assertions-practice-page');
    console.log("Current URL is "+ currentURL);
    
    await page.waitForTimeout(2000);

});
