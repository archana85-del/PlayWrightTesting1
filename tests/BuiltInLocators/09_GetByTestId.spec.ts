import { test, expect } from '@playwright/test';

test('Click image using getByTestId and verify page', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/name-address-form.html');

  
  await page.getByTestId('username').fill('John Doe');  
 

     await page.waitForTimeout(5000); 
});