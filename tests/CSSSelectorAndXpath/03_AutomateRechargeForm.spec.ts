import { test, expect } from '@playwright/test';

test('Mobile recharge using XPath axes', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/01/mobile-recharge.html');


  const mobileInput = page.locator(
    "//label[contains(text(),'Mobile Number')]/ancestor::div[1]/descendant::input[@type='tel']"
  );
  await mobileInput.fill('9876543210');

  const operatorSelect = page.locator(
    "//label[contains(.,'Operator')]/ancestor::*[1]//descendant::select[1]"
  );

    await operatorSelect.selectOption({ label: 'Jio' });

  const amountInput = page.locator(
    "//label[contains(text(),'Recharge Amount')]/ancestor::div[@data-section='amount']/descendant::input[1]"
  );
  await amountInput.fill('199');

  const rechargeNowBtn = page.locator(
    "//button[@data-button='clear']/ancestor::form/descendant::button[@data-button='recharge']" );
  await rechargeNowBtn.first().click();

  await expect(page.getByText('recharge completed successfully!')).toHaveCSS('display', 'block');
    await page.waitForTimeout(5000);
});
