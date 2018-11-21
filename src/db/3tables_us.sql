DROP TABLE IF EXISTS us;

CREATE TABLE us(
  id INTEGER NOT NULL auto_increment PRIMARY KEY ,
  title VARCHAR(60) NOT NULL,
  description VARCHAR(280) NOT NULL,
  difficulty INTEGER NOT NULL,
  priority VARCHAR(10) NOT NULL,
  sprint INTEGER,
  FOREIGN KEY (sprint) REFERENCES sprints(id)
) ENGINE=InnoDB;
