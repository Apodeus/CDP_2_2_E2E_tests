const puppeteer = require('puppeteer');

describe('Test US 3', () => {
  let browser; var page;
  let url = 'http://localhost:3000';

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test('Scenario 1', async () => {
    await page.goto(url);
    await Promise.all([
      page.waitForNavigation(),
      page.click('#MesProjets'),
    ]);
    let actualUrl = await page.url();
    expect(actualUrl).toBe('http://localhost:3000/projects');

    const h2HandleArray = await page.$$('h2');
    const firstH2Content = await page.evaluate((h2) => h2.textContent, h2HandleArray[0]);
    const secondH2Content = await page.evaluate((h2) => h2.textContent, h2HandleArray[1]);
    expect(firstH2Content).toBe('Liste des projets de user : ');
    expect(secondH2Content).toBe('Liste des projets auquels user participe : ');

    await page.goBack();
    actualUrl = await page.url();
    expect(actualUrl).toBe('http://localhost:3000/');
  });
});
