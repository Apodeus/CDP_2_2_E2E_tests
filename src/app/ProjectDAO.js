const Project = require('./Project');
const util = require('util');

module.exports = class ProjectDAO {
  constructor(connection) {
    this.connection = connection;
  }


  async getAllByUser(user) {
    const projectsList = [];
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
                const project = new Project(resultProject[0].name, resultProject[0].description,
                    resultProject[0].start_date, resultProject[0].sprint_length, user);
                project._id = resultProject[0].id;
                await projectsList.push( project);
              } catch (e) {
              }
            })();
          }
        })(rows);
      } catch (e) {
      }
    })();
    return projectsList;
  }
  async save(project) {
    const connection = this.connection;
    const query = util.promisify(connection.query).bind(connection);
    let res;
    await(async () =>{
      if (project.id === undefined) {
        try {
          const result = await query('INSERT INTO projects SET name = ?, description = ?, start_date = ?, ' +
          'sprint_length = ?, owner = ?', [project._name, project._description, project._startDate,
            project._sprintLength, project._owner._id]);
          await query('INSERT INTO projects_participants SET user = ?, project = ? ;',
              [project._owner._id, result.insertId]);
          res = new Project(project._name, project._description, project._startDate,
              project._sprintLength, project._owner);
          res._id = result.insertId;
          console.log('project '+ res._name + ' was saved !' );
        } catch (e) {
          console.log(e);
          throw e;
        }
      } else {
        try {
          await query('UPDATE projects SET name = ?, description = ?, start_date = ?,'
          + 'sprint_length = ?, ' + 'owner = ? WHERE id = ?', [project._name, project._description, project._startDate,
            project._sprintLength, project._owner._id, project._id]);
          console.log('project '+ project._name + ' was edited !' );
          res = project;
        } catch (e) {
          console.log(e);
          throw e;
        }
      }
    })();
    return res;
  }
};
