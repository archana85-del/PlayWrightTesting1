import { test, expect } from "@playwright/test";

test("India State/District/Taluka - select and submit", async ({ page }) => {
  await page.goto(
    "https://senthilsmartqahub.blogspot.com/2025/01/india-state-and-district-selector-body.html"
  );


  const stateSelect = page.locator("#state").selectOption("Tamil Nadu")
    const districtSelect = page.locator("#district").selectOption("Coimbatore");
    const talukaSelect = page.locator("#taluka").selectOption("Annur");


  await page.getByRole("button", { name: "Submit" }).click();

  await page.waitForTimeout(5000); // Wait for any dialog or UI update
});