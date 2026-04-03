import {test, expect} from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import * as dotenv from 'dotenv';   
dotenv.config({path:'./testdata/.env'});

const csvdata = parse<Record<string, string>>(
  fs.readFileSync("resources/sample_users.csv"),
  {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
  }
);

test("Reading data from csv", async ({ page }) => {
    console.log("URL from .env file: " + process.env.user_info_url);
        const url = process.env.user_info_url as string; // Type assertion to ensure it's treated as a string
        // You can use the URL in your test, for example:
        await page.goto(url);
        await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page loads
         console.log("Page Title: " + await page.title());
         expect(await page.title()).toContain("User Info Form");

         const beforerowsCount = page.locator('#userTable tbody tr').count;
           console.log('Number of rows Before adding Data:', beforerowsCount);

 //await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/user-info-form.html")
    
    for (const row of csvdata) {
        console.log(`Name: ${row.Name}, Age: ${row.Age}, Country: ${row.Country}`);
        await page.getByPlaceholder("Enter your name").fill(row.Name)
        await page.getByPlaceholder("Enter your age").fill(row.Age);
          await page.locator("#country").selectOption({ label: row.Country })
          await page.locator("#submitBtn").click()
    await page.waitForTimeout(1000);
    }

await page.waitForTimeout(5000);

//get data from table userTable and iterate and log on console
  const rows = page.locator('#userTable tbody tr');

  const rowCount = await rows.count();
  console.log('Number of rows added:', rowCount);

  for (let i = 0; i < rowCount; i++) {
    const rowText = await rows.nth(i).allTextContents();
    console.log(`Row ${i + 1}:`, rowText.join(' ').trim());
  }
});