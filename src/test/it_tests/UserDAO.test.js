const User = require('../../app/User');
const UserDAO = require('../../app/UserDAO');
const mysql = require('mysql2');

async function newQuery(connectionDB, request) {
  await connectionDB.execute(request);
}

async function clearDatabase(connectionDB) {
  await Promise.all([
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 0'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects_participants'),
    newQuery(connectionDB, 'TRUNCATE TABLE projects'),
    newQuery(connectionDB, 'DELETE FROM users WHERE id != 1'),
    newQuery(connectionDB, 'SET FOREIGN_KEY_CHECKS = 1'),
  ]);
}

describe('Test DAO', () => {
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
  let dao;
  beforeEach(async () => {
    jest.setTimeout(10000);
    dao = new UserDAO(connectionDB);
  });
  clearDatabase(connectionDB);

  const name = 'name_test';
  const email = 'email@test.com';
  const password = 'password_test';
  test('it_should_save_one_user', async () => {
    const user = await new User(name, email, password);
    // when saving this user in database
    const usr = await dao.save(user);
    expect(usr.id).not.toBe(null);
    expect(usr.pseudo).toBe(name);
    expect(usr.email).toBe(email);
    expect(usr.password).toBe(password);
  });

  test('it_should_return_one_user', async () => {
    // then i should get back with the same information and an id
    const usr = await dao.getUserByName(name);
    expect(usr.pseudo).toBe(name);
    expect(usr.email).toBe(email);
    expect(usr.password).toBe(password);
  });

  test('it_should_edit_one_user', async () => {
    const user = await dao.getUserByName(name);
    const saveID = user.id;
    user.pseudo = 'new name';
    const usr = await dao.save(user);
    expect(usr.id).toBe(saveID);
    expect(usr.pseudo).toBe('new name');
    expect(usr.email).toBe(email);
    expect(usr.password).toBe(password);
    // when saving this user in database
  });
  afterAll( async () => {
    connectionDB.close();
  });
});
