import { test, expect } from '@playwright/test';

test('Select first 5 checkboxes and check grand total', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/online-store.html');

  const noOfcheckboxes = page.locator('input[type="checkbox"]').count();

  console.log("Total number of checkboxes: " + noOfcheckboxes);

    const checkboxes = page.locator('input[type="checkbox"]');
    let grandTotal = 0;

  for (let i = 0; i < 5; i++) {
    await checkboxes.nth(i).check();
    const priceText = await page.locator("#productTable tr").nth(i).locator('td').nth(5).textContent();
    console.log("Price Text for checkbox " + (i) + ": " + priceText);
    
    const priceValue = priceText ? parseFloat(priceText.replace(/[^0-9.]/g, '')) : 0;
    console.log("Grand Total: " + priceValue);
    grandTotal += priceValue;
  }

    console.log("Final Grand Total after checking 5 checkboxes: " + grandTotal);

    const displayedGrandTotalText = await page.locator("#grandTotal").textContent();
    const displayedGrandTotal = displayedGrandTotalText ? parseFloat(displayedGrandTotalText.replace(/[^0-9.]/g, '')) : 0;

    console.log("Displayed Grand Total: " + displayedGrandTotal);

    expect(displayedGrandTotal).toBe(grandTotal);

  await page.waitForTimeout(4000); 
});