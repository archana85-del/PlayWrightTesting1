import test, { expect } from "@playwright/test";



test("Handling Mulitple windows - Open Course Video ", async ({ page }) => {
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/smart-job-portal.html");
    const supportElement = page.getByRole('link', { name: 'Support' })   
    await supportElement.click();
    await page.waitForTimeout(2000);
    const allpages = page.context().pages()
    console.log("Total Pages Count: " + allpages.length); 
    const supportTab = page.context().pages()[1];
    await supportTab.bringToFront()
    const emailText = await supportTab.locator("div[id='footer'] p").nth(0).textContent();
    console.log("Email Text: " + emailText);
    const email = emailText?.replace("Email: ", "").trim();
    console.log("Extracted Email: " + email);
    const landingPageTab = page.context().pages()[0]
    await landingPageTab.bringToFront();
    await landingPageTab.getByRole('button', { name: 'Sign In' }).click();
    await landingPageTab.waitForTimeout(2000)
    const allpages2 = page.context().pages()
    console.log("Total Pages Count: " + allpages2.length)
    for (const page of allpages2) {
        console.log("WebPage Title", await page.title())

        if (await page.title() == 'Login - Job Portal') {
            console.log(page.url())
            await page.bringToFront()
            await page.locator('#email').evaluate(el => {
                el.style.border = '3px solid red';
                el.style.backgroundColor = '#ffe6e6';});
            await page.locator('#email').fill(email!);
           const password = await page.locator('#dynamicPassword').textContent();
            console.log("Extracted Password: " + password);
            const passwordText = password?.replace("Password: ", "").trim();
            console.log("Extracted Password: " + passwordText);
            await page.locator('#password').fill(passwordText!);
            await page.getByRole('button', { name: /Sign In/i }).click();
            await page.waitForTimeout(5000);
            await landingPageTab.bringToFront();
            landingPageTab.reload();
            await page.waitForTimeout(5000);
            const welcomeMessage = await landingPageTab.locator('#userSection span').textContent();
            console.log("Welcome Message: " + welcomeMessage);
            expect(welcomeMessage).toContain("Welcome senthilSmartQAHub");
        }
    }

});
