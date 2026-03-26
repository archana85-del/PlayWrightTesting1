import * as dotenv from 'dotenv';   
import {test, expect} from '@playwright/test';
dotenv.config({path:'./testdata/.env'});

test("Read .env file", async ({page}) => {
    console.log("URL from .env file: " + process.env.url);
    const url = process.env.url as string; // Type assertion to ensure it's treated as a string
    // You can use the URL in your test, for example:
    await page.goto(url);
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page loads
     console.log("Page Title: " + await page.title());
     expect(await page.title()).toContain("SenthilSmartQAHub");
    // You can also add assertions here to validate the URL if needed
});