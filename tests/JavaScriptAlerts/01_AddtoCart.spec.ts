import { test } from "@playwright/test";

test("Handle multiple dialogs", async ({ page }) => {


  await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/smart-shop-checkout.html");

  page.on('dialog',async popup=>{
    
    await page.waitForTimeout(5000)
    console.log("dialog message ", popup.message())
    console.log("dialog type ",popup.type())
    await popup.dismiss(); 

  })

    await page.getByRole('button', { name: 'Add To Cart' }).first().click();
  await page.locator(".removeBtn").click();



 await page.waitForTimeout(5000)

});