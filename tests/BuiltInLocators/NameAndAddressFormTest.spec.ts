import { test, expect } from '@playwright/test';

test('Click first Job Application Form', async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/text.html');

  // Click the FIRST matching link
 await page.getByText('Name and Address Form').click();

  let title = await page.title();
  console.log('Name and Address Form Page Title: ' + title);
  await expect(title).toBe('Name & Address Form');
 await page.waitForTimeout(5000); 
});
