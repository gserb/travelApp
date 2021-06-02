const playwright = require('playwright');

(async () => {
  const browserType = ['chromium'];
  const browser = await playwright[browserType].launch({
    headless: false,
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.screenshot({
    path: `screenshot-${browserType}.png`,
  });

  await page.goto('https://travelatravelapp.netlify.app/');

  const [request] = await Promise.all([
    page.waitForEvent('requestfinished'),
    page.goto('https://travelatravelapp.netlify.app/places-to-travel'),
  ]);
  console.log(request.timing());

  const fontSize = await page.$eval(
    'div',
    el => window.getComputedStyle(el).fontSize
  );
  expect(fontSize === '16px').toBeTruthy();
  console.log(fontSize);

  await browser.close();
})();
