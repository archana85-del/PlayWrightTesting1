import test from "@playwright/test";

test("Screenshot",async({page},testinfo)=>{
await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto('https://www.amazon.com/Multivitamin-Multimineral-Toddlers-MaryRuths-Wellness/dp/B0BHKVBC4R/?_encoding=UTF8&pd_rd_w=PJXLq&content-id=amzn1.sym.b99c2d90-30ca-4345-872a-b9f481c1e1e2&pf_rd_p=b99c2d90-30ca-4345-872a-b9f481c1e1e2&pf_rd_r=C9P4S0Y1ND7JVKMSAW9V&pd_rd_wg=sjy3D&pd_rd_r=bcec78b7-056e-4ac2-b05b-d77c2c1c7dac&ref_=pd_hp_d_atf_dealz_cs&th=1', {
    waitUntil: 'load'
  });

  await page.waitForTimeout(5000);



    // const ss=await page.screenshot({fullPage:true})

     //testinfo.attach("homepage",{body:ss,contentType:'image/png'})
  // await page.locator('#submitBtn').screenshot({path:'Evidence/Submitbutton.png'})

  await page.screenshot({path: 'resources/homepage.png',fullPage: true,animations: 'disabled'});

});