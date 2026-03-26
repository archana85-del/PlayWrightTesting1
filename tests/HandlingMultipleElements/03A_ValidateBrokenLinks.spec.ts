import { test, expect } from '@playwright/test';
test('Get links under Playwright Topics with Intentional Broken Links', async ({ page, request }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/broken-links.html');

  const items = page.locator("//h2[contains(text(),'Playwright Topics with Intentional Broken Links')][1]/following-sibling::li"); 
   console.log(`Total links found: ${await items.count()}`);
  const links = items.locator('a');
  console.log(`Total anchor tags found: ${await links.count()}`);
  const linkElements = await links.all();

  const brokenLinks: string[] = [];

  for (const link of linkElements) {
    const href = await link.getAttribute('href');

    console.log(`Checking link: ${href}`);
    if(href === null || href.trim() === '') {
      console.log(`Skipping invalid link: ${href}`);
      continue;
    }
    const response = await request.get(href as string);
    const status = response.status();

    console.log(`${href} -> ${status}`);

    if (status !== 200) {
      brokenLinks.push(`${href} -> ${status}`);
    }
  }

  console.log(`Broken links found:\n${brokenLinks.join('\n')}`);
});
