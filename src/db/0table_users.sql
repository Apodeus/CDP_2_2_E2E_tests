DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id INTEGER PRIMARY KEY NOT NULL,
  pseudo VARCHAR(20) NOT NULL,
  email VARCHAR(60) NOT NULL,
  password VARCHAR(20) NOT NULL
)ENGINE=InnoDB;