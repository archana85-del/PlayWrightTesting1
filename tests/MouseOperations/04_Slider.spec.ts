/*https://senthilsmartqahub.blogspot.com/2026/02/product-filter.html 
Open the Product Filter System page.
 Move the mouse cursor over the Category ▼ dropdown button.
 Verify that the dropdown options (Electronics, Clothing, Accessories) are displayed.
 Click on Electronics from the dropdown.
Verify that only Electronics products are displayed on the page.*/

import { test, expect } from "@playwright/test";

test("Volume slider movement", async ({ page }) => {
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/product-filter.html ");

//Move the mouse cursor over the Category ▼ dropdown button.
    const dropdownButton = page.locator('button:has-text("Category")');
    await dropdownButton.hover();

// Verify that the dropdown options (Electronics, Clothing, Accessories) are displayed.
    const dropdownOptions = page.locator('div.dropdown-content').locator('a');
    await expect(dropdownOptions).toHaveCount(6);
    await expect(dropdownOptions.nth(0)).toHaveText("Electronics");
    await expect(dropdownOptions.nth(1)).toHaveText("Clothing");
    await expect(dropdownOptions.nth(2)).toHaveText("Accessories");

// Click on Electronics from the dropdown.
    await dropdownOptions.nth(0).click();

//first product name contains iPhone - Electronics - Apple is visible   
 const firstProductName = page.locator('.product').nth(0)
    //await expect(firstProductName).toContainText("iPhone - Electronics - Apple");   

    await page.waitForTimeout(5000);
});

   