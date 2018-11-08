DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS projects_participants;

CREATE TABLE projects(
  id INTEGER NOT NULL auto-increment PRIMARY KEY ,
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
