import { test, expect } from '@playwright/test';
test('Click first Job Application Form', async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/text.html');

  // Click the FIRST matching link
  await page.getByText('Job Application Form').nth(1).click();

  let jobPageTitle = await page.title();
  console.log('Job Application Form Page Title: ' + jobPageTitle);
  await expect(jobPageTitle).toBe('Job Application Form');

});