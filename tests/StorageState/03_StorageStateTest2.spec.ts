import test, { expect } from "@playwright/test";


test("Test Login",async({page})=>{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Page Title: " + await page.title());
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(5000);
    
    console.log("Login Successful");
    console.log("Page Title: " + await page.title());
    expect(await page.title()).toBe("OrangeHRM");

    
    expect(await page.locator(".oxd-userdropdown-tab").isVisible()).toBeTruthy();
    await page.context().storageState({path:'resources/storageState2.json'});
    
});