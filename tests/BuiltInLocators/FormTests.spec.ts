import { test, expect } from '@playwright/test';

test('Click Form', async ({ page }) => {
  try {
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/text.html');

    await page.getByText('Form', { exact: true }).click();

    await expect(page).toHaveTitle('Login Form');
  } catch (error) {
    console.error('Test failed with error:', error);
    throw error;
  }
});