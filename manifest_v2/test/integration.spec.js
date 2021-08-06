/**
 * @jest-environment puppeteer
 */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
require('dotenv').config(); // include extension pem and
const pti = require('puppeteer-to-istanbul');

const extensionID = process.env.EXTENSION_ID;

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

describe('integration test', () => {
  beforeEach(async () => {
    // change color theme - best pair with accessibility test
    // await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
    await page.coverage.startJSCoverage();

    await page
      .goto(`chrome-extension://${extensionID}/popup.html`);

    jest.setTimeout(10000);
  }, 5000);

  afterEach(async () => {
    const [jsCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
    ]);
    pti.write([...jsCoverage], {
      storagePath: './.nyc_output',
    });
  });

  test('test popup', async () => {
    await expect(page.title()).resolves.toMatch('My extension title');
  });
});
