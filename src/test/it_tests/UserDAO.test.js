const User = require('../../app/User');
const UserDAO = require('../../app/UserDAO');
const util = require('util');
const mysql = require('mysql2');

async function newQuery(connectionDB, request){
    await connectionDB.execute(request);
}

async function clearDatabase(connectionDB){
    await Promise.all([
        newQuery(connectionDB, "SET FOREIGN_KEY_CHECKS = 0"),
        newQuery(connectionDB, "TRUNCATE TABLE projects_participants"),
        newQuery(connectionDB, "TRUNCATE TABLE projects"),
        newQuery(connectionDB, "TRUNCATE TABLE users"),
        newQuery(connectionDB, "SET FOREIGN_KEY_CHECKS = 1"),
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
        await clearDatabase(connectionDB);
        dao = new UserDAO(connectionDB);
        dao.save(new User("user", "user@gmail.com", "user"), (usr) => {});
    });

    test('it_should_return_one_user', async () => {
        await dao.getUserByName("user", (usr) => {
            console.log(usr.id);
            expect(usr.id).toBe(1);
            expect(usr.pseudo).toBe("user");
            expect(usr.email).toBe("user@gmail.com");
            expect(usr.password).toBe("user");
        });
    });

    test('it_should_save_one_user', async () => {
        const name = "name_test";
        const email = "email@test.com";
        const password = "password_test";
        const user = new User(name, email, password);
        //when saving this user in database
        dao.save(user, (usr) => {
            expect(usr.id).not.toBe(null);
            expect(usr.pseudo).toBe(name);
            expect(usr.email).toBe(email);
            expect(usr.password).toBe(password);
        });
        //then i should get back with the same information and an id
        let resultUser = await dao.getUserByName(name, (usr) => {
            expect(usr.pseudo).toBe(name);
            expect(usr.email).toBe(email);
            expect(usr.password).toBe(password);
        });
    });


    afterAll( () => {
        connectionDB.close();
    });

});
