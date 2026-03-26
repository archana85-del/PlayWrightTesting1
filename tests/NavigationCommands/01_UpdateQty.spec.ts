import { test, expect } from '@playwright/test';


  

  

  test('should update quantity', async ({ page }) => {
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/11/quantity-update.html');

    const title = await page.title();
    console.log('Quantity Update Page Title: ' + title);
    await expect(title).toBe('Quantity Update');

    await page.locator('#qty').first().fill('4');
    
    await page.locator('#updateBtn').click();
    await page.getByRole('heading', { name: 'success' })
    //await page.getByTitle('success').waitFor({ state: 'visible' });


    const message = await page.locator('#msg').textContent();
    console.log('Message: ' + message);
    await expect(message).toContain('Your quantity has been updated to: 4');
    // ✅ Go back (wait until page finishes loading)
    await page.goBack({ waitUntil: 'domcontentloaded' });

    // ✅ Read & store quantity displayed on the page
    // If it's an input textbox, use inputValue() (NOT textContent)
    const displayedQty = await page.locator('#qty').inputValue();
    console.log('Displayed quantity after going back:', displayedQty);

    // Optional: assert it is still 4
    await expect(page.locator('#qty')).toHaveValue('4');

    await page.goForward({ waitUntil: 'domcontentloaded' });

    const messageAfterForward = await page.locator('#msg').textContent();
    console.log('Message after going forward: ' + messageAfterForward);
    await expect(messageAfterForward).toContain('Your quantity has been updated to: 4');

  });

  

  
