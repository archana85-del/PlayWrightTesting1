import test, { expect } from "@playwright/test";

test("Getting textbox current value",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")

   
   const cityName=await page.locator("#city").getAttribute("value");

   console.log("city value is ",cityName)

   expect(cityName).toBe("Bangalore")

   await page.locator("#city").fill("Chennai")

  // const updatedCityName=await page.locator("#city").getAttribute("value");

   const updatedCityName=await page.locator("#city").inputValue();

   console.log("updated city value is ",updatedCityName)

    expect(updatedCityName).toBe("Chennai")

   await page.waitForTimeout(2000);

    await page.locator("#city").isEnabled()
})
