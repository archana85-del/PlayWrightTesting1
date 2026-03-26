import { test, expect } from '@playwright/test';

test('Drag Task 4 and drop above Task 1', async ({ page }) => {
    // Navigate to Task Management page
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/rearrange-tasks.html');
    const task4 = page.getByText('Task 4 - Report Generation');

    const task1 = page.getByText('Task 1 - Login Automation');
    await task4.dragTo(task1);
    await page.waitForTimeout(2000); 

   
    const firstItemText = await page.locator("#list").locator('li').nth(0).textContent();
    console.log("First item after drag and drop: " + firstItemText);

const secondItemText = await page.locator("#list").locator('li').nth(1).textContent();
    console.log("Second item after drag and drop: " + secondItemText);
});