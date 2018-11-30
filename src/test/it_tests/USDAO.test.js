const US = require('../../app/US');
const USDAO = require('../../app/USDAO');
const Project = require('../../app/Project');
const ProjectDAO = require('../../app/ProjectDAO');
const UserDAO = require('../../app/UserDAO');
const User = require('../../app/User');
const util = require('util');
const mysql = require('mysql2');

async function newQuery(connectionDB, request){
  await connectionDB.execute(request);
}

async function clearDatabase(connectionDB){
  await Promise.all([
    newQuery(connectionDB, "SET FOREIGN_KEY_CHECKS = 0"),
    newQuery(connectionDB, "TRUNCATE TABLE us"),
    newQuery(connectionDB, "TRUNCATE TABLE sprints"),
    newQuery(connectionDB, "TRUNCATE TABLE projects_participants"),
    newQuery(connectionDB, "TRUNCATE TABLE projects"),
    newQuery(connectionDB, 'TRUNCATE TABLE users'),
    newQuery(connectionDB, "SET FOREIGN_KEY_CHECKS = 1"),
  ]);
 }

describe('Test USDAO', () => {

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

  let usDao;
  let projectDao;
  const title="test US";
  const description="test of us dao";
  const difficulty=1;
  const priority="HIGH";
  const sprint=undefined;
  let usr;
  let project;
  beforeEach(async () => {
    jest.setTimeout(10000);
    dao = new UserDAO(connectionDB);
    projectDao=new ProjectDAO(connectionDB);
    usDao = new USDAO(connectionDB);
    clearDatabase(connectionDB);
    usr=await dao.save(new User('user', 'user@mail.com', 'user'));
    project=await projectDao.save(new Project ("test", "project test", '2018-12-24', 2, usr));
  });

  test('it_should_return_one_us', async () => {
    await usDao.save(new US(title, description, difficulty, priority, project, sprint));
    let us=await usDao.getAllUSByProject(project);
    console.log(us.id);
    expect(us[0].id).toBe(1);
    expect(us[0].title).toBe(title);
    expect(us[0].description).toBe(description);
    expect(us[0].difficulty).toBe(difficulty);
    expect(us[0].priority).toBe(priority);
    expect(us[0].project.id).toBe(project.id);
    expect(us[0].sprint).toBe(sprint);
  });

  test('it_should_save_one_user', async () => {
    let us=await usDao.save(new US(title, description, difficulty, priority, project, sprint));
    console.log(us.id);
    expect(us.id).toBe(1);
    expect(us.title).toBe(title);
    expect(us.description).toBe(description);
    expect(us.difficulty).toBe(difficulty);
    expect(us.priority).toBe(priority);
    expect(us.project.id).toBe(project.id);
    expect(us.sprint).toBe(sprint);
  });


  afterAll( () => {
    connectionDB.close();
  });

});
