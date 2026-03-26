import { test , expect} from '@playwright/test';

test('alert accept', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  const [dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    page.locator('button.btn.btn-danger').click()
  ]);

  console.log(dialog.message());
  console.log(dialog.type());

  await dialog.accept();
});

test('Handle authentication popup', async ({ browser }) => {

  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });

  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  await page.waitForTimeout(5000);
});



  test('basic auth using username and password in url', async ({ page }) => {
  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

  await expect(page.locator('p')).toContainText('Congratulations');

  await page.waitForTimeout(5000);
});