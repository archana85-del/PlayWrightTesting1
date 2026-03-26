
import test, { expect } from "@playwright/test";

test("Targeting the specific element using has property of filter function",async({page})=>{

    await page.goto("https://playwright.dev/")

    await page.locator(".theme-layout-navbar-left *").filter({has:page.getByText("API")}).click()


    await page.waitForTimeout(8000)
})

mport { test, expect } from "@playwright/test";

test("hasNot example on playwright.dev homepage", async ({ page }) => {
  await page.goto("https://playwright.dev/", { waitUntil: "domcontentloaded" });

  const headerLinksExceptDocs = page
    .locator("header a")
    .filter({ hasNot: page.getByText(/^Docs$/) });

  await expect(headerLinksExceptDocs.first()).toBeVisible();

 // const apiLink = headerLinksExceptDocs.filter({
    has: page.getByText(/^API$/),
  });

  await expect(apiLink).toHaveCount(1);
  await apiLink.first().click();

  await expect(page).toHaveURL(/\/docs\/api/);
});