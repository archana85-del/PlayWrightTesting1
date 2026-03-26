import { test } from "@playwright/test";

test("Handle multiple dialogs", async ({ page }) => {

  await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/smart-shop-checkout.html");

  let alertAction = "";
  let promptValue = "SenthilSmartQAHub";

  page.on('dialog', async popup => {

    console.log("Dialog Message:", popup.message());
    console.log("Dialog Type:", popup.type());

    if (alertAction === "Accept") {
      await popup.accept();
    } 
    else if (alertAction === "Cancel") {
      await popup.dismiss();
    } 
    else if (alertAction === "Prompt") {
      await popup.accept(promptValue);
    } 
    else {
      await popup.accept(); // default action
    }

  });

  // Alert → Accept
  alertAction = "Accept";
  await page.getByRole('button', { name: 'Add To Cart' }).first().click();

  // Confirm → Cancel
  alertAction = "Cancel";
  await page.locator(".removeBtn").click();

  // Prompt → Enter value
  alertAction = "Prompt";
  //await page.getByText("Apply Coupon").click();

  await page.waitForTimeout(3000);

});




test("Handle multiple dialogs -2", async ({ page }) => {

  await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/");

  let alertAction = "";
  let promptValues = ["SenthilSmartQAHub", "change me"];
  let promptIndex = 0;

  page.on('dialog', async popup => {

    console.log("Dialog Message:", popup.message());
    console.log("Dialog Type:", popup.type());
await page.waitForTimeout(2000);
    if (alertAction === "Accept") {
      await popup.accept();
    } 
    else if (alertAction === "Cancel") {
      await popup.dismiss();
    } 
    else if (alertAction === "Prompt") {
      await popup.accept(promptValues[promptIndex]);
      promptIndex++; // move to next value
    } 
    else {
      await popup.accept();
    }

  });

  // Alert
  alertAction = "Accept";
  await page.getByText("Show alert box").click();
  // Confirm
  alertAction = "Cancel";
  await page.getByText("Show confirm box").click();
  // Two prompts
  alertAction = "Prompt";
  await page.getByText("Show prompt box").click();

});