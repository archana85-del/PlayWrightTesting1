import { test, expect } from '@playwright/test';

test('Upload file and click Convert on online2pdf', async ({ page }) => {
  await page.goto('https://online2pdf.com/');

  
  page.locator('.browse_button').click();
    const fileChooser = await page.waitForEvent('filechooser');
    

  await fileChooser.setFiles('resources/stephen_curry_speech.pdf');

  await page.getByRole('button', { name: /convert/i }).click();

  await page.waitForTimeout(5000); // Wait for the conversion to complete

  const message = page.locator('body');
  await expect(message).toContainText('Conversion and download completed.');

});