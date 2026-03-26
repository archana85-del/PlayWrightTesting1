import { test } from "@playwright/test";

test("Handle Photo Upload", async ({ page }) => {

await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/update-profile-photo.html");
await page.getByText("Upload Photo").click()
page.on('filechooser', async file  => {
await file.setFiles("resources/screenshot.png");
})
    
    

await page.waitForTimeout(1000);

});

test("Handle Photo Upload - another way", async ({ page }) => {

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/update-profile-photo.html");
    await page.getByText("Upload Photo").click()
    const file = await page.waitForEvent('filechooser')
    await file.setFiles("resources/screenshot.png");
    await page.waitForTimeout(1000);

});