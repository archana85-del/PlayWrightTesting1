import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Read CSV data and submit User Info Form', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/user-info-form.html');

  // Update this path if your CSV is stored somewhere else
  const filePath = path.join(process.cwd(), 'sample_users.csv');

  const fileContent = fs.readFileSync(filePath, 'utf-8').trim();
  const lines = fileContent.split('\n');

  // Skip header row
  const rows = lines.slice(1).map(line => {
    const [name, age, country] = line.split(',');
    return {
      name: name.trim(),
      age: age.trim(),
      country: country.trim()
    };
  });

  for (const user of rows) {
    await page.getByLabel('Name').fill(user.name);
    await page.getByLabel('Age').fill(user.age);
    await page.getByLabel('Country').selectOption({ label: user.country });
    await page.getByRole('button', { name: 'Submit' }).click();

    // Optional validation after submit
    await expect(page.locator('table')).toContainText(user.name);
    await expect(page.locator('table')).toContainText(user.age);
    await expect(page.locator('table')).toContainText(user.country);
  }
});