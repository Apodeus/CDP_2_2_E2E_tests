const puppeteer = require('puppeteer');

describe('Test Home page', () => {
  var browser, page;
  var url = 'http://localhost:3000';

beforeEach (async () => {
	browser = await puppeteer.launch({
	    args: [
	      '--no-sandbox',
	      '--disable-setuid-sandbox',
	    ],
	  });
	page = await browser.newPage();
})

afterEach (() => {
    browser.close()
})

test('Title == Accueil', async () => {
    await page.goto(url);
    const title = await page.title();
    expect(title).toBe("Accueil");
  });

test("Title == Projects", async () => {
    await page.goto(url);
    const res = await Promise.all([
        page.waitForNavigation(),
        page.click('#MesProjets'),
    ]);
    const title = await page.title();
    expect(title).toBe("Projects");
  });
})
/*
(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const title = await page.title();
  expect(title).toBe("Accueil");
  await page.click('#MesProjets');
  await browser.close();
})();
*/
