const User = require('./User');

module.exports= class UserDAO {
  constructor(connection) {
    this.connection = connection;
  }

  getUserByName(username, callback) { // throws Exception;
    this.connection.query('SELECT * FROM users WHERE pseudo = ? ', [username], function(err, result) {
      if (err) {
        throw err;
      }
      const user = new User(result[0].pseudo, result[0].email, result[0].password);
      user.id = result[0].id;
      return callback(user);
    });
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
