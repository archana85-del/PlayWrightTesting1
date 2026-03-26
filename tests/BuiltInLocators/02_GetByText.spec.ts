import { test, expect } from '@playwright/test';

test('Search on mail.com', async ({ page }) => {

  // Navigate to mail.com
  await page.goto('https://www.mail.com');

  // Accept cookies if popup appears (very common)
  const acceptBtn = page.getByRole('button', { name: /accept|agree/i });
  if (await acceptBtn.isVisible().catch(() => false)) {
    await acceptBtn.click();
  }

  // Locate search box using title and fill text
  const searchBox = page.getByTitle('Enter searchterm here');

  await expect(searchBox).toBeVisible(); // good practice
  await searchBox.fill('testing');
  await page.waitForTimeout(5000); // just to see the filled text before the test ends
});