import { test, expect } from '@playwright/test';


  test('Login and verify home page', async ({ page }) => {
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/06/banking-application.html');

    await page.locator('#username').fill('SenthilSmartQAHub');
    await page.locator('#password').fill('demo');

    await page.getByRole('button', { name: 'Login' }).click();

     await page.waitForTimeout(2000);

     const welcomeUser = page.locator('#welcomeUser');

     console.log(welcomeUser.textContent());

  });
