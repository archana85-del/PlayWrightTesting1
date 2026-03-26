import { test, expect } from '@playwright/test';

  

  

  test('clear text box', async ({ page }) => {
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/city-and-area-code-body-font-family.html');
    
     const title = await page.title();
    console.log('Quantity Update Page Title: ' + title);
    await expect(title).toBe('City and Area Code');

    const cityValue = await page.locator('#city').inputValue();
    console.log('City value before clearing:', cityValue);
    await page.locator('#city').clear();

    await page.reload();
    
    const cityValueAfterReload = await page.locator('#city').inputValue();
    console.log('City value after reload:', cityValueAfterReload);
    await expect(cityValueAfterReload).toBe(cityValue);
    
  });