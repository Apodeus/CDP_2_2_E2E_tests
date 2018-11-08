DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id INTEGER PRIMARY KEY NOT NULL,
  pseudo VARCHAR(20) NOT NULL,
  email VARCHAR(60) NOT NULL,
  password VARCHAR2(20) NOT NULL
);

INSERT INTO users (id, pseudo, email, password) values (0, "admin", "admin@admin.com", "admin");
