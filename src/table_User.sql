DROP TABLE IF EXISTS User;

CREATE TABLE User(
  id INTEGER PRIMARY KEY NOT NULL,
  pseudo VARCHAR(20) NOT NULL,
  email VARCHAR(60) NOT NULL,
  password VARCHAR(20) NOT NULL
);

INSERT INTO User (id, pseudo, email, password) values (0, "admin", "admin", "admin");
