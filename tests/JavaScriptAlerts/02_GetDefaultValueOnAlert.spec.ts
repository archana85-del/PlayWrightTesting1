import { test } from "@playwright/test";

test("Handle multiple dialogs", async ({ page }) => {


  await page.goto("https://senthilsmartqahub.blogspot.com/2025/01/prompt.html");

  page.on('dialog',async popup=>{
    
    await page.waitForTimeout(2000)
    console.log("dialog message ", popup.message())
    console.log("dialog type ",popup.type())
    console.log("Get Deafult text", popup.defaultValue());
    await popup.accept(); 

  })

    await page.getByRole('button', { name: 'Ask for Name' }).click();

 await page.waitForTimeout(2000)

});