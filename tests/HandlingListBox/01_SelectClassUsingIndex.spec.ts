import { test, expect } from '@playwright/test';

test('Select Bus Class using index', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/05/bus-booking-portal.html');

  const busClassDropdown = page.locator('#busClass');

  const options = await busClassDropdown.locator('option').allTextContents();
  console.log(options);

  await busClassDropdown.selectOption({ index: 2 });

  await expect(busClassDropdown).toHaveValue('AC Sleeper');
  await page.waitForTimeout(3000);
});

test('Select Delivery Option using value', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/online-store.html');

  const deliveryDropdown = page.locator('#delivery')
 await page.locator('#delivery').scrollIntoViewIfNeeded();
  await deliveryDropdown.selectOption({ value: '10' });

  await expect(deliveryDropdown).toHaveValue('10');

  await page.waitForTimeout(3000);
});



test('Select ISP Provider using label', async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/modem-registration.html');

  const ispDropdown = page.locator('.isp-provider');
  await page.locator('.isp-provider').scrollIntoViewIfNeeded();

  // Select using label
  await ispDropdown.selectOption({ label: 'BSNL' });

  // Verify selected value
  await expect(ispDropdown.locator('option:checked')).toHaveText('BSNL');
 await page.waitForTimeout(3000);
});


test('Verify default selected option in dropdown', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/flight-booking.html');

 const classDropdown = page.locator('label:has-text("Class") + select');
 classDropdown.scrollIntoViewIfNeeded();
  const defaultOption = classDropdown.locator('option:checked');

  console.log('Default selected option:', await defaultOption.textContent());

  await expect(defaultOption).toHaveText('Economy');

  await page.waitForTimeout(3000);
});



test('Select two continents and validate countries map in alphabetical order', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2025/07/continent.html');

  await page.getByLabel('Choose a continent1').selectOption('North America');
  await page.getByLabel('Choose a continent2').selectOption('North America');

  const countries1 = (await page.locator('#countries1 option').allTextContents())
    .map(text => text.trim())
    .filter(text => text !== '')
    .sort((a, b) => a.localeCompare(b));

  const countries2 = (await page.locator('#countries2 option').allTextContents())
    .map(text => text.trim())
    .filter(text => text !== '')
    .sort((a, b) => a.localeCompare(b));

  const countryMap1 = new Map<number, string>();
  const countryMap2 = new Map<number, string>();

  countries1.forEach((country, index) => {
    countryMap1.set(index, country);
  });

  countries2.forEach((country, index) => {
    countryMap2.set(index, country);
  });

  console.log('Countries Map 1:', [...countryMap1.entries()]);
  console.log('Countries Map 2:', [...countryMap2.entries()]);

  expect(countryMap1.size).toBe(countryMap2.size);

  for (const [index, country] of countryMap1) {
    expect(countryMap2.get(index)).toBe(country);
  }

  expect(countries1).toEqual(countries2);
});


test('Select Singapore from custom dropdown and validate population', async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/02/country-population-finder.html');

  // Open custom dropdown
  await page.locator('#countryDropdown').click();

  // Type Singapore in search box
  await page.locator('#countrySearch').fill('Singapore');

  // Select Singapore from filtered list
  await page.locator('#countryOptions li', { hasText: 'Singapore' }).click();

  // Verify selected country is Singapore
  await expect(page.locator('#countryDropdown')).toContainText('Singapore');

  // Click Show Population
  await page.getByRole('button', { name: /show population/i }).click();

  // Verify population is displayed correctly
  await expect(page.locator('#populationResult')).toContainText('5,637,000');
});
