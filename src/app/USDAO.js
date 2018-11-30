const US = require('./US');
const util = require('util');

module.exports= class USDAO {
  constructor(connection) {
    this.connection=connection;
  }

  async getAllUSByProject(project) {
    const usList = [];
    const connection=this.connection;
    const query=util.promisify(connection.query).bind(connection);
    await (async () => {
      try {
        const rows= await query('SELECT * FROM us WHERE project = ?', [project.id]);
        await (async (result) => {
          let sprint;
          for (let i = 0; i < result.length; i++) {
            if(result[i].sprint===null){
              sprint=undefined;
            }else{
              sprint=result[i].sprint;
            }
            const us = new US(result[i].title, result[i].description,
                result[i].difficulty, result[i].priority, project, sprint);
            us.id = result[i].id;
            usList.push( us);
          }
        })(rows);
      } catch (e) {
        console.err(e);
        throw e;
      }
    })();
    return usList;
  }


  async save(us) { // throws Exception;
    const values=[us.title, us.description, us.difficulty, us.priority, us.project.id];
    const connection=this.connection;
    const query=util.promisify(connection.query).bind(connection);
    let res;
    if (us.sprint!==undefined) {
      values.push(us.sprint);
    }
    await(async () =>{
      if (us.id===undefined) {
        let q='INSERT INTO us SET title = ? , description = ? , difficulty = ? , priority = ? , project = ?';
        if (us.sprint!==undefined) {
          q+=', sprint = ?';
        }
        q+=' ;';
        try {
          const result = await query(q, values);
          const us1=new US(us.title, us.description, us.difficulty, us.priority, us.project, us.sprint);
          us1.id=result.insertId;
          console.log(us1.toString()+ 'was saved !');
          res = us1;
        } catch (e) {
          console.log(e);
          throw e;
        }
      } else {
        values.push(us.id);
        let q='UPDATE us SET title = ? , description = ? , difficulty = ? , priority = ? , project = ?';
        if (us.sprint!==undefined) {
          q+=', sprint = ?';
        }
        q+=' WHERE id = ? ';
        try {
          await query(q, values);
          console.log(us.toString() + ' was updated in DB ! ');
          res = us;
        } catch (e) {
          console.log(e);
          throw e;
        }
      }
    })();
    return res;
  }
};
