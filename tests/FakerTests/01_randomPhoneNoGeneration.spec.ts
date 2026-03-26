import test from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en"; // Import the locale to access name and other properties

test ("Generate random phone no using Faker", async ({page}) => {
    
    // Generate a 10-digit random phone number using replaceSymbols
    console.log("Random Phone No is ", faker.helpers.replaceSymbols('##########')); //10 digit random phone no;
    console.log("Random Phone No with country code: ", faker.phone.number()); 
    // generates random phone number with country code and special characters
    console.log("Random seed: ", faker.seed(123)); // Set a seed for reproducibility

    for (let i = 0; i < 10; i++) {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        const phone = faker.phone.number();
        console.log(`Person ${i + 1}: Name: ${name}, Email: ${email}, Phone: ${phone}`);
    }
})