



import { test, expect } from '@playwright/test';

test("Handling Frame", async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/smartshoppingpayment.html');

  await page.getByText("Proceed to Checkout").last().click();

  const firstframe = page.frame({ name: 'checkoutFrame' });
  //const firstframe = page.frame({url: 'https://senthilsmartqahub.blogspot.com/2026/03/smartshoppingcheckout.html'}); // Switch to first frame

  await firstframe?.getByText('Pay Now').click();

  const childframe = firstframe?.childFrames()[0]; // Switch to child frame

  await page.waitForTimeout(5000);

  await childframe?.getByPlaceholder('Card Number').fill('124353');

  await page.waitForTimeout(5000);

});


test("Handling Frame 2",async({page})=>{

     await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/smartshoppingpayment.html")

     await page.getByText("Proceed to Checkout").last().click()


     const firstframe=page.frameLocator('#checkoutFrame') // Switch To Outerframe


     await firstframe.getByText('Pay Now').click()


     const innerframe=firstframe.frameLocator("#paymentFrame") // Switch To InnerFrame

     await innerframe.getByPlaceholder("Card Number").fill("124343")

     await page.waitForTimeout(5000)
     
    
})



test("Handling Frame 3", async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/smartshoppingpayment.html');

  await page.getByText('Proceed to Checkout').last().click();

  const firstframe = page.frame({ name: 'checkoutFrame' });
  expect(firstframe).not.toBeNull();

  await firstframe!.getByText('Pay Now').click();

  await page.waitForTimeout(2000); // temporary only for debugging

  const childFrames = firstframe!.childFrames();
  console.log('Child frames count:', childFrames.length);

  const childframe = childFrames[1];
  expect(childframe).toBeTruthy();

  await childframe.getByPlaceholder('Card Number').waitFor();
  await childframe.getByPlaceholder('Card Number').fill('124353');
});