const puppeteer = require('puppeteer');
const mysql = require('mysql2');


describe('Test US 10', () => {
  let browser;
  let page;
  const url = 'http://localhost:3000/backlog';
  const connectionDB = mysql.createConnection({
    host: 'localhost',
    database: 'cdp',
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    user: 'user',
    password: 'root',
  });
  beforeEach(async () => {
    jest.setTimeout(100000);
    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
      timeout: 0,
    });
    page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.goto('http://localhost:3000/projects');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#CreateProject'),
    ]);

    const projectName = 'ProjetTest';
    const description = 'Mon projet de test';
    const dureeSprint = '2';

    const inputNameHandle = await page.$('[name="name"]');
    await inputNameHandle.click();
    await page.keyboard.type(projectName);

    const inputDescHandle = await page.$('[name="description"]');
    await inputDescHandle.click();
    await page.keyboard.type(description);

    const inputDateHandle = await page.$('[name="start"]');
    await inputDateHandle.click();
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.type('11');
    await page.keyboard.type('15');
    await page.keyboard.type('2019');

    const inputSprintHandle = await page.$('[name="sprint"]');
    await inputSprintHandle.click();
    await page.keyboard.type(dureeSprint);

    const buttonValideHandle = await page.$('#validate');
    await Promise.all([
      page.waitForNavigation(),
      buttonValideHandle.click({clickCount: 3}),
      page.waitForNavigation(),
    ]);

    await Promise.all([
      page.waitForNavigation(),
      page.click('[name="open"]'),
    ]);

    await Promise.all([
      page.waitForNavigation(),
      page.click('#AddUs'),
    ]);

    const titre = 'usTest';
    const descriptionUs = 'description de test';
    const difficulte = '5';

    const inputTitleHandle = await page.$('[name="title"]');
    await inputTitleHandle.click();
    await page.keyboard.type(titre);

    const inputDescrHandle = await page.$('[name="description"]');
    await inputDescrHandle.click();
    await page.keyboard.type(descriptionUs);

    const inputDiffHandle = await page.$('[name="difficulty"]');
    await inputDiffHandle.click();
    await page.keyboard.type(difficulte);

    await page.select('[name="priority"]', 'HAUTE');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#validate'),
    ]);
  });

  afterEach(() => {
    browser.close();
  });

  afterAll(async () => {
    connectionDB.close();
  });

  test('Scenario 1', async () => {
    console.log('start scenario 1');
    let actualURL = await page.url();
    expect(actualURL).toBe(url);

    const form1Handle = await page.$$('form');
    const initialLenght= form1Handle.length;

    await Promise.all([
      page.waitForNavigation(),
      page.click('[name="delete"]'),
    ]);

    const form2Handle = await page.$$('form');
    const finalLenght= form2Handle.length;
    expect(finalLenght).toBe(initialLenght-1);
  });
});
