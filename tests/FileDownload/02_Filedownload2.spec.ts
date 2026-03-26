import test, { expect } from "@playwright/test"
import fs from 'fs'
test("File Download",async({page})=>{    
await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/employee-documents.html")  

   page.getByText("Download").first().click()   
   page.waitForTimeout(1000);
   const downloadfile =  await page.waitForEvent('download')
    downloadfile.saveAs(`resources/${downloadfile.suggestedFilename()}`)
    let filepath= `resources/${downloadfile.suggestedFilename()}`
  await page.waitForTimeout(5000)
  expect(fs.existsSync(filepath)).toBeTruthy() 
});