import { expect ,test } from "@playwright/test"
//import fs from 'fs'
import * as fs from "fs";
//const fs = require("fs");

test("Handle File Download ", async ({ page }) => {


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/employee-documents.html")

    page.getByText("Download").first().click()
    const downloadfile =  await page.waitForEvent('download')
    downloadfile.saveAs(`resources/${downloadfile.suggestedFilename()}`)
    //expect(downloadfile).toBeTruthy();
   // fs.existsSync(`resources/${downloadfile.suggestedFilename()}`).toBeTruthy();

    await page.waitForTimeout(5000);

});