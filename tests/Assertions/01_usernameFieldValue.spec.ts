import { test, expect } from '@playwright/test';

test('Get and assert default value from username textbox', async ({ page }) => {
    // Launch browser and navigate to the URL
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/assertions-practice-page.html');


    // Locate username textbox and get its default value
    const usernameField = page.locator('#usernameField');
    //const defaultValue = await usernameField.inputValue();

    // Assert the default value
    await expect(usernameField).toHaveValue("SenthilSmartQAHub");
    console.log("Default value in username field is " +  await usernameField.inputValue());
    await page.waitForTimeout(5000);
});