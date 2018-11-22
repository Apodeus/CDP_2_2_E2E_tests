const puppeteer = require('puppeteer');
const mysql = require('mysql2');
const util = require('util');

async function newQuery(connectionDB, request) {
  await connectionDB.execute(request);
}

async function clearDatabase(connectionDB) {
  await Promise.all([
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 0'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects_participants'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects'),
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 1'),
  ]);
}

describe('Test US 4', () => {
  let browser; let page;
  const url = 'http://localhost:3000/projects';
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
    console.log('Clearing database...');
    await clearDatabase(connectionDB);
    console.log('End of clearing...');
    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
      timeout: 0,
    });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  afterAll(async () => {
    connectionDB.close();
  });

  test('Scenario 1', async () => {
    console.log('start scenario 1');
    await page.goto(url);
    let actualURL = await page.url();
    expect(actualURL).toBe(url);

    await Promise.all([
      page.waitForNavigation(),
      page.click('#CreateProject'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/createproject');

    const projectName = 'ProjetTest';
    const description = 'Mon projet de test';
    const date = '12122018';
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
      buttonValideHandle.click({clickCount: 3}),
      page.waitForNavigation(),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe(url);

    const expectedResult = 'ProjetTest Mon projet de test Fri Nov 15 2019 00:00:00 GMT+0000 (Coordinated Universal Time) 2 user user';
    const form1Handle = await page.$('#form1');
    const contentForm1 = await page.evaluate((f1) => f1.innerHTML, form1Handle);
    expect(contentForm1).toContain(expectedResult);
  });

  test('Scenario 2', async () => {
    await page.goto(url);
    let actualURL = await page.url();
    expect(actualURL).toBe(url);

    await Promise.all([
      page.waitForNavigation(),
      page.click('#CreateProject'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/createproject');

    const projectName = 'ProjetTest2';
    const description = '';
    const date = '12122018';
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
      buttonValideHandle.click({clickCount: 3}),
      page.waitForNavigation(),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe(url);

    const expectedResult = 'ProjetTest2  Fri Nov 15 2019 00:00:00 GMT+0000 (Coordinated Universal Time) 2 user user';
    const form1Handle = await page.$('#form1');
    const contentForm1 = await page.evaluate((f1) => f1.innerHTML, form1Handle);
    expect(contentForm1).toContain(expectedResult);
  });

  test('Scenario 3', async () => {
    await page.goto(url);
    let actualURL = await page.url();
    expect(actualURL).toBe(url);

    await Promise.all([
      page.waitForNavigation(),
      page.click('#CreateProject'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/createproject');

    const description = 'Test avec Mauvaise saisie';
    const dureeSprint = '3';

    const inputDescHandle = await page.$('[name="description"]');
    await inputDescHandle.click();
    await page.keyboard.type(description);

    const inputSprintHandle = await page.$('[name="sprint"]');
    await inputSprintHandle.click();
    await page.keyboard.type(dureeSprint);

    const buttonValideHandle = await page.$('#validate');
    await buttonValideHandle.click({clickCount: 3});

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/createproject');

    await Promise.all([
      page.waitForNavigation(),
      page.goto(url),
    ]);
    actualURL = await page.url();
    expect(actualURL).toBe(url);

    const expectedResult = 'Test avec Mauvaise saisie';
    const form1Handle = await page.$('#form1');
    expect(form1Handle).toBe(null);
  });
});
