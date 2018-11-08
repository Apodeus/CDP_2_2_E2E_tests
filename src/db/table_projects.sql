DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS projects_participants;

CREATE TABLE projects(
  id INTEGER PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL,
  description VARCHAR(280) NOT NULL,
  start_date DATE NOT NULL,
  sprint_length INTEGER NOT NULL,
  owner INTEGER NOT NULL,
  FOREIGN KEY (owner) REFERENCES users (id)
) ENGINE=InnoDB;

CREATE TABLE projects_participants(
  user INTEGER NOT NULL,
  project INTEGER NOT NULL,
  PRIMARY KEY (user,project),
  FOREIGN KEY (user) REFERENCES users (id),
  FOREIGN KEY (project) REFERENCES projects (id)
) ENGINE=InnoDB;

INSERT INTO projects(id, name, description, start_date, sprint_length, owner) VALUES (0, "test", "test", DATE '2012-12-12', 2, 0);

SELECT projects.*, users.pseudo FROM projects INNER JOIN users ON owner=users.id;

INSERT INTO projects_participants(user, project) VALUES (0,0);
SELECT * FROM projects_participants;
