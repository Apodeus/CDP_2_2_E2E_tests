const Project = require('./Project');
const util = require('util');

module.exports = class ProjectDAO {
  constructor(connection) {
    this.connection = connection;
  }


  async getAllByUser(user, callback) {
    let projectsList = [];
    const connection = this.connection;
    const query = util.promisify(connection.query).bind(connection);
    await (async () => {
      try {
        const rows = await query('SELECT * FROM projects_participants  WHERE user = ? ', [user.id]);
        await (async (result) => {
          for (let i = 0; i < result.length; i++) {
            await(async () =>{
              try {
                const resultProject = await query('SELECT * FROM projects WHERE id = ? ', [result[i].project]);
                projectsList.push( new Project(resultProject[0].name, resultProject[0].description,
                    resultProject[0].start_date, resultProject[0].sprintLength, user));
              } catch (e) {
                throw e;
              }
            })();
          }
        })(rows);
      } catch (e) {
        throw e;
      }
    })();
    callback(projectsList);
  }
  save(project, callback) {
    if (project.id === undefined) {
      const connectionDB = this.connection;
      this.connection.query('INSERT INTO projects SET name = ?, description = ?, start_date = ?, ' +
                'sprint_length = ?, owner = ?', [project._name, project._description, project._startDate,
        project._sprintLength, project._owner._id], function(err, result) {
        if (err) {
          throw err;
        }
        connectionDB.query('INSERT INTO projects_participants SET user = ?, project = ? ;',
            [project._owner._id, result.insertId], function(err2, result2) {
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
        project._sprintLength, project._owner._id, project._id], function(err, result) {
        if (err) {
          throw err;
        }
        console.log('project '+ project._name + ' was saved !' );
        return callback(project);
      });
    }
  }
};
