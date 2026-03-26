import { test, expect } from "@playwright/test";

test("Drag and drop - XPath child assertion", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const source = page.locator("//p[normalize-space()='Drag me to my target']");
  const targetBox = page.locator("//div[@id='droppable']");

  await source.scrollIntoViewIfNeeded();
  await source.dragTo(targetBox);

  // ✅ XPath assert on CHILD element inside droppable (text usually becomes 'Dropped!')
  const targetChildText = page.locator("//div[@id='droppable']//p");
  await expect(targetChildText).toHaveText(/Dropped!/i);
});
