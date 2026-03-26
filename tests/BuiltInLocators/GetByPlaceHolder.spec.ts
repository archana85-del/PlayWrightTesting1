import { test, expect } from '@playwright/test';

test('Click first Job Application Form', async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/login-page.html');

  await page.getByPlaceholder('Enter your username').fill('demo');
  await page.getByPlaceholder('Enter your password').fill('demo');
    await page.getByRole('button', { name: 'Login' }).click();



 // await page.getByTitle('Playwright *Vibium *Selenium Automation Testing - YouTube')
  let title = await page.title();
  console.log('Page Title: ' + title);
  await expect(title).toBe('Playwright *Vibium *Selenium Automation Testing - YouTube');
 await page.waitForTimeout(5000); 
});
