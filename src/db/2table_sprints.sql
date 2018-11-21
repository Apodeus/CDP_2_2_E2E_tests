DROP TABLE IF EXISTS sprints;

CREATE TABLE sprints(
  id INTEGER NOT NULL auto_increment PRIMARY KEY ,
  name INTEGER NOT NULL,
  project INTEGER NOT NULL,
  FOREIGN KEY (project) REFERENCES projects(id)
) ENGINE=InnoDB;
