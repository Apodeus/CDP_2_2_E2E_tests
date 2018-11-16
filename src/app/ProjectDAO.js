const Project = require('./Project');

module.exports = class ProjectDAO {
  constructor(connection) {
    this.connection = connection;
  }

  getAllByUser(user, callback) {
    let projectsList = [];
    this.connection.query('SELECT * FROM projects_participants  WHERE user = ? ', [user.id], function(err, result) {
      if (err) {
        throw err;
      }
      result.forEach(function(element) {
        this.connection.query('SELECT * FROM projects WHERE id = ? ', [element.projet], function(err, result) {
          projectsList += new Project(result[0].name, result[0].description, result[0].start_date,
              result[0].sprintLength, result[0].owner);
        });
      }, this);
    });
    return callback(projectsList);
  }
  save(project, callback) {
    if (project.id === undefined) {
      const connectionDB = this.connection;
      this.connection.query('INSERT INTO projects SET name = ?, description = ?, start_date = ?, ' +
                'sprint_length = ?, owner = ?', [project._name, project._description, project._startDate,
        project._sprintLength, project._owner], function(err, result) {
        if (err) {
          throw err;
        }
        connectionDB.query('INSERT INTO projects_participants SET user = ?, project = ? ;',
            [project._owner, result.insertId], function(err2, result2) {
              if (err2) {
                throw err2;
              }
              const project2 = new Project(project._name, project._description, project._startDate,
                  project._sprintLength, project._owner);
              project2._id = result.insertId;
              console.log('project '+ project2._name + ' was saved !' );
              return callback(project2);
            });
      });
    } else {
      this.connection.query('UPDATE projects SET name = ?, description = ?, start_date = ?, sprint_length = ?, ' +
                'owner = ? WHERE id = ?', [project._name, project._description, project._startDate,
        project._sprintLength, project._owner, project._id], function(err, result) {
        if (err) {
          throw err;
        }
        console.log('project '+ project._name + ' was saved !' );
        return callback(project);
      });
    }
  }
};
