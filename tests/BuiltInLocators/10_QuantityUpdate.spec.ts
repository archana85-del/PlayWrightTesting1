import { test, expect } from '@playwright/test';

test.describe('Quantity Update Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/11/quantity-update.html');
    
    // Defensive cookie consent handling
    const acceptBtn = page.getByRole('button', { name: /accept|agree/i });
    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
    }
  });

  test('should verify page loads', async ({ page }) => {
    const title = await page.title();
    console.log('Quantity Update Page Title: ' + title);
    await expect(title).toBeTruthy();
  });

  test.only('should increment quantity', async ({ page }) => {
    const quantityInput = page.locator('input[type="number"]').first();
    await expect(quantityInput).toBeVisible();
    
    const initialValue = await quantityInput.inputValue();
    const incrementBtn = page.getByText('Update Quantity').first();
    
    await incrementBtn.click();
    
    const updatedValue = await quantityInput.inputValue();
    await expect(parseInt(updatedValue)).toBe(parseInt(initialValue) + 1);
  });

  test('should decrement quantity', async ({ page }) => {
    const quantityInput = page.locator('input[type="number"]').first();
    await expect(quantityInput).toBeVisible();
    
    const initialValue = await quantityInput.inputValue();
    const decrementBtn = page.getByText('Update Quantity');
    await decrementBtn.click();
    
    const updatedValue = await quantityInput.inputValue();
    await expect(parseInt(updatedValue)).toBe(parseInt(initialValue) - 1);
  });

  test('should update quantity by direct input', async ({ page }) => {
    const quantityInput = page.locator('input[type="number"]').first();
    await expect(quantityInput).toBeVisible();
    
    await quantityInput.clear();
    await quantityInput.fill('5');
    
    await expect(quantityInput).toHaveValue('5');
  });
});