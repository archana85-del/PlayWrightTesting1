import { test, expect } from '@playwright/test';

test('Create user using mouse move', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/user-management-operations.html');

  // Test data
  const userName = 'Archana';

  // Locate the User Actions menu
  const userActionsMenu = page.getByText('User Actions', { exact: false });

  // Move mouse to the menu using mouse.move()
  const menuBox = await userActionsMenu.boundingBox();
  if (!menuBox) {
    throw new Error('User Actions menu not found');
  }

  await page.mouse.move(
    menuBox.x + menuBox.width / 2,
    menuBox.y + menuBox.height / 2
  );

  // Click on Create User option
  await page.getByText('Create User', { exact: true }).click();

  // Enter user name
  const nameInput = page.locator('input[type="text"]').first();
  await nameInput.fill(userName);

  // Click Add User button
  await page.getByRole('button', { name: 'Add User' }).click();

  // Verify the user is added in the table
  const userRow = page.locator('table tbody tr').filter({
    hasText: userName
  });

  await expect(userRow).toHaveCount(1);
});∏