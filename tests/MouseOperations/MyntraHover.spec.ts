
import test from "@playwright/test";


test('Hover on Myntra', async ({ page }) => {   

    await page.goto('https://www.myntra.com/');

    await page.locator('(//a[text()="Men"])[1]').hover();
    await page.waitForTimeout(5000);

      await page.getByRole('link', { name: 'T-Shirts', exact: true }).click();

await page.waitForTimeout(5000);
});


test('Double Click Test', async ({ page }) => {   
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/scrum-status-board.html');
    await page.locator('tr').locator('td').nth(1).dblclick();
    await page.waitForTimeout(5000);
   await page.getByRole('textbox').pressSequentially('Login Automation   Test');
    await page.waitForTimeout(5000);
});