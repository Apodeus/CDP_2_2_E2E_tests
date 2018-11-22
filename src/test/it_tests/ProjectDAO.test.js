
const User = require('../../app/User');
const UserDAO = require('../../app/UserDAO');
const ProjectDAO = require('../../app/ProjectDAO');
const Project = require('../../app/Project');
const mysql = require('mysql2');

async function newQuery(connectionDB, request) {
  await connectionDB.execute(request);
}

async function clearDatabase(connectionDB) {
  await Promise.all([
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 0'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects_participants'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects'),
    newQuery(connectionDB, 'TRUNCATE TABLE users'),
  ]);
}

describe('Test Project DAO', () => {
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

  let userDAO;
  let projectDAO;
  beforeEach(async () => {
    jest.setTimeout(10000);
    userDAO = new UserDAO(connectionDB);
    projectDAO = new ProjectDAO(connectionDB);
  });
  clearDatabase(connectionDB);

  const projectName = 'project1';
  const projectDescription = 'description';
  const projectDate = (new Date());
  const projectSprintLength = 1;
  test('it_should_save_one_project_for_user', async ()=>{
    let userTest = new User('user', 'user@mail.com', 'user');
    await userDAO.save(userTest, async (user)=>{
      userTest = user;
    });
    const projectToSave = new Project(projectName, projectDescription, projectDate, projectSprintLength, userTest);
    await projectDAO.save(projectToSave, (res) =>{});
    let projects;
    await projectDAO.getAllByUser(userTest, (res) => {
      projects = res;
    });
    expect(projects.length).toBe(1);
    expect(projects[0]).not.toBe(null);
    expect(projects[0].name).toBe(projectName);
    expect(projects[0].description).toBe(projectDescription);
    // expect(projects[0].startDate).toBe(projectDate);
    expect(projects[0].sprintLength).toBe(projectSprintLength);
  });

  test('it_should_change_name_of_a_project', async () =>{
    let userTest;
    await userDAO.getUserByName('user', async (user) =>userTest = user);
    console.log('debut test');
    const projectToSave = await new Project(projectName, projectDescription, projectDate,
        projectSprintLength, userTest);
    await projectDAO.save(projectToSave, (res) =>{});
    let projects;
    await projectDAO.getAllByUser(userTest, (res) => {
      projects = res;
    });
    const saveId = projects[0].id;
    const saveDescription = projects[0].description;
    const saveStartDate = projects[0].startDate;
    const saveSprintLength = projects[0].sprintLength;
    projects[0].name= 'new project';
    let editedProject;
    await projectDAO.save(projects[0], function(project) {
      editedProject = project;
    });
    expect(editedProject.name).toBe('new project');
    expect(editedProject.id).toBe(saveId);
    expect(editedProject.description).toBe(saveDescription);
    expect(editedProject.startDate).toBe(saveStartDate);
    expect(editedProject.sprintLength).toBe(saveSprintLength);
  });

  afterAll( () => {
    connectionDB.close();
  });
});
