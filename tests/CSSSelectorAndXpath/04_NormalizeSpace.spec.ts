import { test, expect } from '@playwright/test';

test('Click Name and Address Form link using normalize-space()', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/text.html');

  const acceptBtn = page.getByRole('button', { name: 'accept|agree' });
  if (await acceptBtn.isVisible().catch(() => false)) await acceptBtn.click();

  await page.locator('//a[normalize-space()="Name and Address Form"]').click();
  //await page.locator("//a[normalize-space()='Name and Address Form']").click()

  //await expect(page).toHaveURL('name-address-form.html');
  await expect(page).toHaveTitle('Name & Address Form');
  await page.waitForTimeout(5000);
});
