import { test, expect } from "@playwright/test";
import { CustomerManagementPortal } from "../../Pages/CustomerManagementPortal";

test("save Customer", async ({ page }) => {

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/customer-management-portal.html")

    const customerManagementPortal = new CustomerManagementPortal(page);
    await customerManagementPortal.saveCustomer("ABCD", "abcd@example.com", "New York", "Regular");
    await page.waitForTimeout(5000);


});