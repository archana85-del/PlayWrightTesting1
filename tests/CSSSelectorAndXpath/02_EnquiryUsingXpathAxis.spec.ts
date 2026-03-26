
import { test, expect } from '@playwright/test';

test('Enquiry Form - automate using XPath Axis + verify success', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/01/enquiry-form.html');


  const nameInput = page.locator('//label[contains(text(),\'Name\')]/following::input[1]');
  await nameInput.fill('ABC');
    
  const emailInput = page.locator('//label[contains(text(),\'Email\')]/following-sibling::input[1]');
  await emailInput.fill('abc@gmail.com');


  const phoneInput = page.locator('//label[contains(text(),\'Enquiry Message\')]/preceding::input[1]');
  await phoneInput.fill('4085551234');


  const messageBox = page.locator('//label[contains(text(),\'Message\')]/following::textarea[1]');
  await messageBox.fill('Hi, I would like to know more details about your services.');


  const sendBtn = page.locator('//button[text()=\'Send Enquiry\']');
  await sendBtn.click();


const successMsg = page.locator('//*[text()="Your enquiry has been sent successfully!"]');
  await expect(successMsg).toBeVisible();

  await page.waitForTimeout(5000); 
});
