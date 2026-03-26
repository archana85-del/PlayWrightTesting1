import test from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en"; // Import the locale to access name and other properties

test ("Generate random data using Faker", async ({page}) => {

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/user-info-form.html");

    await page.getByPlaceholder('Enter your name').fill(faker.person.fullName());
    await page.getByPlaceholder('Enter your age').fill(faker.number.int({ min: 1, max: 120 }).toString());
    await page.locator('#country').selectOption({value:"India"});
    await page.locator("#submitBtn").click();

    await page.waitForTimeout(5000);
});