import test from "@playwright/test";


test('Delete items from cart', async ({ page }) => {   
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/table-with-checkboxes.html');
    const checkboxesBeforeDelete = page.locator('input[type="checkbox"]').all();
    var noOfcheckboxes = await checkboxesBeforeDelete.count();
    console.log("Total number of checkboxes before delete: " + noOfcheckboxes);
    const deleteButtons = page.getByRole('button', { name: 'Delete Selected Rows' })
  
    // Select the first 5 items
    for (let i = 0; i < 5; i++) {
      //await checkboxesBeforeDelete.nth(i).check();
      await checkboxesBeforeDelete
    }
    // Click the delete button
    await deleteButtons.click();
  
    // Wait for the deletion to complete (you may want to adjust this based on your app's behavior)
    await page.waitForTimeout(5000);   
    const checkboxesAfterDelete = page.locator('input[type="checkbox"]');
    const noOfcheckboxesAfterDelete = await checkboxesAfterDelete.count();
    console.log("Total number of checkboxes after delete: " + noOfcheckboxesAfterDelete);
    
});

test('Check Browser Size', async ({ page }) => {   
    await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/table-with-checkboxes.html');

    await page.waitForTimeout(5000);
});
    