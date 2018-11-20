const Project = require('./Project');
const util = require('util');

module.exports = class ProjectDAO {
  constructor(connection) {
    this.connection = connection;
  }


  async getAllByUser(user, callback) {
    const projectsList = [];
    const connection = this.connection;
    const query = util.promisify(connection.query).bind(connection);

    await (async () => {
      try {
        const rows = await query('SELECT * FROM projects_participants  WHERE user = ? ', [user.id]);
        console.log(rows);
        async function iterateResult(result) {
          await result.forEach(async function(element) {
            await (async function findProject() {
              console.log('add project');
            });
            console.log('fin fonction iterate');
          }, this);
        }
        await iterateResult(rows);
        console.log('fin première fonction');
      } finally {
        // connection.end();
      }
    })();
    /*
    function(err, result) {
        console.log("AH0");
        if (err) {
          throw err;
        }
        result.forEach(function(element) {
          connection.execute('SELECT * FROM projects WHERE id = ? ', [element.project], function(err, result) {
            if (err) {
              throw err;
            }
            projectsList += new Project(result[0].name, result[0].description, result[0].start_date,
                result[0].sprintLength, user);
          });
        }, (liste) => callback(liste));
      });
      console.log("ah1");
    */
    console.log('voilou: '+projectsList[0]);
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
