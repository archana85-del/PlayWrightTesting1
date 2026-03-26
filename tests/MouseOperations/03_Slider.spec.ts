import { test, expect } from "@playwright/test";

test("Volume slider movement", async ({ page }) => {
  await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/slider-movement.html");

    const slider = page.locator('input[type="range"]');
    const displayedvalue = page.locator('#value');
    await expect(displayedvalue).toHaveText('50');

    for (let i = 0; i < 30; i++) {
        await slider.press('ArrowRight');
    }

    // Verify slider value is 80
    let sliderValue = await slider.inputValue();
    expect(sliderValue).toBe('80');

    // Verify displayed text shows Value: 80
    await expect(displayedvalue).toHaveText('80');

    await page.waitForTimeout(2000);

     //start a loop to press right arrow 60 times on slider
    for (let i = 0; i < 60; i++) {
        await slider.press('ArrowLeft');
    }


    // Verify slider value is 80
     sliderValue = await slider.inputValue();
    expect(sliderValue).toBe('20');

    // Verify displayed text shows Value: 80
    await expect(displayedvalue).toHaveText('20');

    await page.waitForTimeout(2000);

});