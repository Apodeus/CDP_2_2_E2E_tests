const puppeteer = require('puppeteer');
const mysql = require('mysql2');
const ProjectDAO = require('../../app/ProjectDAO');
const UserDAO = require('../../app/UserDAO');
const Project = require('../../app/Project');
const User = require('../../app/User');

async function newQuery(connectionDB, request) {
  await connectionDB.execute(request);
}

async function clearUserStoriesDB(connectionDB) {
  await Promise.all([
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 0'),
    newQuery(connectionDB, 'TRUNCATE TABLE us'),
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 1'),
  ]);
}

async function clearProjectsDB(connectionDB) {
  await Promise.all([
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 0'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects_participants'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects'),
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 1'),
  ]);
}


describe('Test US 8', () => {
  let browser;
  let page;
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
/*
  beforeAll(async () => {
    await clearProjectsDB(connectionDB);
    const projectDAO = new ProjectDAO(connectionDB);
    const userDAO = new UserDAO(connectionDB);
    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
      timeout: 0,
    });
    page = await browser.newPage();
    const user = new User("user", "useruser@gmail.com@gmail.com", "user");
    let savedUser = await userDAO.save(user);
    const project = new Project("toto", "descr", "2019-11-23", "2", savedUser);
    await projectDAO.save(project);

  });
*/
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

    await Promise.all([
      page.waitForNavigation(),
      page.click('[name="open"]'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/backlog');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#AddUs'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/addus');

    //Saisie formulaire
    const titre = 'usTest';
    const description = 'description de test';
    const difficulte = '5';

    const inputTitleHandle = await page.$('[name="title"]');
    await inputTitleHandle.click();
    await page.keyboard.type(titre);

    const inputDescrHandle = await page.$('[name="description"]');
    await inputDescrHandle.click();
    await page.keyboard.type(description);

    const inputDiffHandle = await page.$('[name="difficulty"]');
    await inputDiffHandle.click();
    await page.keyboard.type(difficulte);

    await page.select('[name="priority"]', 'HAUTE');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#validate'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/backlog');

    const form1Handle = await page.$$('form');
    //console.log(form1Handle[0]);

    const contentForm1 = await page.evaluate((f1) => f1.innerHTML, form1Handle[1]);
    expect(contentForm1).toContain(titre);
    expect(contentForm1).toContain(description);
    expect(contentForm1).toContain('5');
    expect(contentForm1).toContain('undefined');
  });

  test('Scenario 2', async () => {
    console.log('start scenario 2');
    let actualURL = await page.url();
    expect(actualURL).toBe(url);

    await Promise.all([
      page.waitForNavigation(),
      page.click('[name="open"]'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/backlog');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#AddUs'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/addus');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#validate'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/addus');
  });

  test('Scenario 3', async () => {
    console.log('start scenario 3');
    let actualURL = await page.url();
    expect(actualURL).toBe(url);

    await Promise.all([
      page.waitForNavigation(),
      page.click('[name="open"]'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/backlog');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#AddUs'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/addus');


    //Saisie formulaire
    const titre = 'usTest';
    const description = '';
    const difficulte = '5';

    const inputTitleHandle = await page.$('[name="title"]');
    await inputTitleHandle.click();
    await page.keyboard.type(titre);

    const inputDescrHandle = await page.$('[name="description"]');
    await inputDescrHandle.click();
    await page.keyboard.type(description);

    const inputDiffHandle = await page.$('[name="difficulty"]');
    await inputDiffHandle.click();
    await page.keyboard.type(difficulte);

    await page.select('[name="priority"]', 'HAUTE');

    await Promise.all([
      page.waitForNavigation(),
      page.click('#validate'),
    ]);

    actualURL = await page.url();
    expect(actualURL).toBe('http://localhost:3000/addus');
  });


});

























//
