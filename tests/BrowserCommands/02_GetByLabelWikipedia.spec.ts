import { test, expect } from '@playwright/test';

test('Search using getByLabel on Wikipedia', async ({ page }) => {

  await page.goto('https://www.wikipedia.org/');

  // Locate search input by label and type text
  const searchBox = page.getByLabel('Search Wikipedia');

  await expect(searchBox).toBeVisible();

  await searchBox.fill('Playwright');


  await searchBox.press('Enter');

  // Verify navigation happened
  await expect(page).toHaveURL(/Playwright/i);

  await page.waitForTimeout(5000); // just to see the result before the test ends
});