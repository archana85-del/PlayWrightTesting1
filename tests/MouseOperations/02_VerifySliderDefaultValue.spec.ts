import { test, expect } from '@playwright/test';

test('Verify slider default value is 50', async ({ page }) => {
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/slider-movement.html');
    
    // Get slider element
    const slider = page.locator('input[type="range"]');
    
    // Verify slider value is 50
    const sliderValue = await slider.inputValue();
    expect(sliderValue).toBe('50');
    
    // Verify displayed text shows Value: 50
    const displayedValue = await page.locator("#value").textContent();
    console.log(displayedValue);

     expect(displayedValue).toBe(sliderValue);
});