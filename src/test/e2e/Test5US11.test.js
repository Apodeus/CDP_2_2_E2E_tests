const puppeteer = require('puppeteer');
const mysql = require('mysql2');

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

describe('Test US 11', () => {
  let browser; let page;
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
  const url = 'http://localhost:3000';
  beforeEach(async () => {
    jest.setTimeout(100000);
    console.log('Clearing database...');
    await clearDatabase(connectionDB);
    console.log('End of clearing...');
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: ['--start-fullscreen'],
      timeout: 0,
    });
    page = await browser.newPage();
    // we will create one project (creation had been tested in Test2US4.test.js)
    await page.goto(url);
    await page.goto(url + '/projects');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#CreateProject'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe(url+'/createproject');

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
      buttonValideHandle.click({clickCount: 3}),
      page.waitForNavigation(),
    ]);
    await page.url(); // we are now on /projects
  });
  afterEach(() => {
    browser.close();
  });
  afterAll(async ()=>{
    await connectionDB.close();
  });

  test('Scenario 1: Open project and see 0 US on Backlog', async () =>{
    expect(await page.url()).toBe(url+'/projects');
    await Promise.all([
      page.click('#open1'),
      page.waitForNavigation(),
    ]);
    await expect(await page.url()).toBe(url+'/backlog');
    const listUS = await page.$('#IssueList');
    await expect(listUS).toBeDefined();
    await page.goBack();
    actualUrl = await page.url();
    await expect(actualUrl).toBe(url+'/projects');
  });
});
