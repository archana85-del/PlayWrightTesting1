import test, { expect } from "@playwright/test";
test("Handling Alert popup",async({page})=>{   
     await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/smart-shop-checkout.html")   
      const popup=page.waitForEvent('dialog')    
       page.getByText("Proceed To Payment").click()  
      
        const dialog=await popup    
         console.log("Dialog message ", dialog.message())  
            console.log("Dialog type ", dialog.type())  
            await page.waitForTimeout(2000)
               await dialog.accept()  
                  
                })

 