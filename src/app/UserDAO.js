const User = require('./User');
const util = require('util');

module.exports= class UserDAO {
  constructor(connection) {
    this.connection = connection;
  }

  async getUserByName(username) { // throws Exception;
    const connection = this.connection;
    const query = util.promisify(connection.query).bind(connection);
    let res;
    await (async () => {
      try {
        const result = await query('SELECT * FROM users WHERE pseudo = ? ', [username]);
        const user = new User(result[0].pseudo, result[0].email, result[0].password);
        user.id = result[0].id;
        res = user;
      } catch (e) {
        console.log(e);
        throw e;
      }
    })();
    return res;
  }

  async save(user) {// throws Exception;
    const connection = this.connection;
    const query = util.promisify(connection.query).bind(connection);
    let res;
    try {
      await (async () => {
        if (user.id === undefined) {
          try {
            const result = await query('INSERT INTO users SET pseudo = ? , email = ? , password = ? ;',
                [user.pseudo, user.email, user.password]);
            res = new User(user.pseudo, user.email, user.password);
            res.id = result.insertId;
            console.log(res.toString() + ' Was saved ! ');
          } catch (e) {
            console.log(e);
            throw e;
          }
        } else {
          try {
            await query('UPDATE users SET pseudo = ? , email = ? , password = ?  WHERE id = ? ',
                [user.pseudo, user.email, user.password, user.id]);
            res = user;
            console.log(user.toString() + ' was edited in DB ! ');
          } catch (e) {
            console.log(e);
            throw e;
          }
        }
      })();
    } catch (e) {
      console.log(e);
      throw e;
    }

    return res;
  }
};
