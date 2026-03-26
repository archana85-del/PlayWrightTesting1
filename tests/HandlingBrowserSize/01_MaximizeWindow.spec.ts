import test from "@playwright/test";

test('Maximize the browser window', async ({ page }) => {
  await page.goto('https://www.google.com');
   await page.setViewportSize({ width: 1920, height: 1080 });
   const searchBox = page.getByRole('combobox', { name: /search/i });
   await searchBox.fill('Playwright');
   await searchBox.press('Enter');
   await page.waitForTimeout(5000);
});