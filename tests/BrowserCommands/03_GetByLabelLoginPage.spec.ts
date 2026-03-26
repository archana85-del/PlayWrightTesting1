import { test, expect } from '@playwright/test';

test('Search using getByLabel on LoginPage', async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/login-page.html');

await expect(page).toHaveTitle('Login Page');

await page.getByLabel('Username:').fill('senthilsmartqahub');
await page.getByLabel('Password:').fill('senthilsmartqahub');


  // Locate search input by label and type text
  const rememberMe = page.getByLabel('Remember Me');

 

  await rememberMe.check();
await expect(rememberMe).toBeChecked();

  await page.waitForTimeout(2000); // just to see the result before the test ends

  await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://www.youtube.com/@SenthilSmartQAHub/playlists');
      await page.waitForTimeout(2000); 

      //await page.getByLabel('Search').click()
});

test.only("Locate the element using getByRole",async({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/smart-bank-login.html")

    await page.getByRole("textbox",{name:'Username'}).fill("admin")

    await page.getByRole("textbox",{name:'Password'}).fill("12345")

    await page.getByRole("checkbox",{name:"Remember Me"}).check()

    await page.getByRole("button",{name:'Login'}).click()

    await page.waitForTimeout(5000)

})