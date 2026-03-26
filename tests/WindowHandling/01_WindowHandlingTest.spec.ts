import test from "@playwright/test";

test("Handling Mulitple windows",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/01/open-course-video-body-font-family.html")

    await page.locator('#openYouTubeTab').click();


    await page.bringToFront();

      await page.waitForTimeout(5000)
  
    const secondtab=page.context().pages()[1]

    await secondtab.bringToFront()
    

    await page.waitForTimeout(8000)
     

})


test('handle single popup ', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/open-course-video-body-font-family.html');

  const popup = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Course Video' }).click();

  const popup1 = await popup;
  await popup1.waitForLoadState();

  console.log('Popup URL:', popup1.url());
  console.log('Popup Title:', await popup1.title());
});

test.only("Handling Mulitple windows - Open Course Video ",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/01/open-course-video-body-font-family.html")

    await page.getByRole('button', { name: 'Open Course Videos' }).click();


    //await page.bringToFront();
//await page.waitForTimeout(5000)

      const allpages=page.context().pages()
      console.log("Total Pages Count: " + allpages.length)
    for(const page of allpages)
    {
        console.log("WebPage Title",await page.title())

        const title=await page.title();

      if(title=='Facebook')
        {
            console.log( page.url())
              await page.bringToFront()
              await page.locator('input[name="email"]').fill("archana@gmail.com") 
              await page.locator('input[name="pass"]').fill("archana123")
              
              await page.waitForTimeout(5000);
            
        }
        if(title=='Google'){
            console.log( "Google page URL: " + page.url())
              await page.bringToFront()
              await page.getByRole('combobox', { name: 'Search' }).fill("Playwright Testing")
              await page.waitForTimeout(2000);
              await page.getByRole('combobox', { name: 'Search' }).press('Enter')
              await page.waitForTimeout(5000);
        }
        }
      });
    

    

     

