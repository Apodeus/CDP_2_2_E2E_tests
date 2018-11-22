const User = require('./User');
const util = require('util');

module.exports= class UserDAO {
  constructor(connection) {
    this.connection = connection;
  }

  async getUserByName(username, callback) { // throws Exception;
    const connection = this.connection;
    const query = util.promisify(connection.query).bind(connection);
    await (async () => {
      try {
        const result = await query('SELECT * FROM users WHERE pseudo = ? ', [username]);
        const user = new User(result[0].pseudo, result[0].email, result[0].password);
        user.id = result[0].id;
        return callback(user);
      } catch (e) {
        console.err(e);
        throw e;
      }
    })();
  }

  save(user, callback) {// throws Exception;
    if (user.id === undefined) {
      this.connection.query('INSERT INTO users SET pseudo = ? , email = ? , password = ? ;',
          [user.pseudo, user.email, user.password], function(err, result) {
            if (err) {
              throw err;
            }
            const user1 = new User(user.pseudo, user.email, user.password);
            user1.id = result.insertId;
            console.log(user1.toString() + ' Was saved ! ');
            return callback(user1);
          });
    } else {
      this.connection.query('UPDATE users SET pseudo = ? , email = ? , password = ?  WHERE id = ? ',
          [user.pseudo, user.email, user.password, user.id],
          function(err, result) {
            if (err) {
              throw err;
            }
            console.log(user.toString() + ' was saved in DB ! ');
            return callback(user);
          });
    }
  }
};
