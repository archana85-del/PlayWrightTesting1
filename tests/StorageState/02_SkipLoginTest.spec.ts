import test, { expect } from "@playwright/test";

test("Skip Login Test", async ({ page }) => {

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/banking-application.html");

    await page.waitForTimeout(5000);
    
    expect(await page.title()).toBe("Banking Application");

    expect(await page.locator("#welcomeUser").textContent()).toBe("Welcome to SenthilSmartQAHub");
    

});