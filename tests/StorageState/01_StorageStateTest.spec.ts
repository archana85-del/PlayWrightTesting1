import test, { expect } from "@playwright/test";


test("Screenshot",async({page})=>{
    
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/banking-application.html");
    await page.getByPlaceholder('Enter your username').fill("SenthilSmartQAHub");
    await page.getByPlaceholder('Enter your password').fill("demo");
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(5000);
    
    expect(await page.title()).toBe("Banking Application");

    expect(await page.locator("#welcomeUser").textContent()).toBe("Welcome to SenthilSmartQAHub");

    await page.context().storageState({path:'resources/storageState.json'});
    
});
