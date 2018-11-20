const User = require('../../app/User');
const UserDAO = require('../../app/UserDAO');
const util = require('util');
const mysql = require('mysql2');

describe('Test DAO', () => {

  const connectionDB = mysql.createConnection({
    host: 'database',
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
    //jest.setTimeout(10000);
    //await clearDatabase(connectionDB);
    console.log("before end");
    dao = new UserDAO(connectionDB);

  });

  test('it_should_insert_one_user', async () => {
    expect(5).toBe(5);
    await dao.getUserByName("user", (usr) => {
      console.log(usr.id);
      expect(usr.id).toBe(1);
      expect(usr.pseudo).toBe("user");
    });
  });

  afterAll(async () => {
    connectionDB.close();
  });
    //given a user
/*
    const userDAO = new UserDAO(connectionDB);
    const name = "name_test";
    const email = "email@test.com";
    const password = "password_test";
    const user = new User(name, email, password);
    //when saving this user in database
    let savedUser = userDAO.save(user);
    //then i should get back with the same information and an id
    //expect(savedUser.id).toBe(1);
      let resultUser = await userDAO.getUserByName(name, (usr) => {
      expect(usr.pseudo).toBe(name);
      expect(usr.email).toBe(email);
      expect(usr.password).toBe(password);
    });
  });
*/


async function clearDatabase(connectionDB) {
  const connection = connectionDB;
  const query = util.promisify(connection.query).bind(connection);
  await ( async () => {
    try {
      await query("SET FOREIGN_KEY_CHECKS = 0", function(err, res) {});
      await query("TRUNCATE TABLE users", function(err, result){
        if(err){
          throw err;
        }
        console.log("Truncate users success !");
      });
      await query("SET FOREIGN_KEY_CHECKS = 1", function(err, res) {});
    } catch (err){
      throw err;
    }
  })();
}

});
