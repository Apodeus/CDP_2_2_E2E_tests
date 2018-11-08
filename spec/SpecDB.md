# Table users

| id | pseudo | email | password |
|:--:|:--:|:--:|:--:|
| INTEGER (primary Key) NOT NULL | VARCHAR(20) NOT NULL | VARCHAR(60) NOT NULL | VARCHAR (20) NOT NULL|

# Table projects
| id | name | description | start_date | sprint_length | owner |
|:--:|:--:|:--:|:--:|:--:|:--:|
| INTEGER (primary Key) NOT NULL| VARCHAR(20) NOT NULL | VARCHAR(280) NOT NULL | DATE NOT NULL | INTEGER NOT NULL | INTEGER FOREIGN KEY REFERENCES users(id) NOT NULL |

# Table projects_participants
| user | project |
|:--:|:--:|
| INTEGER FOREIGN KEY REFERENCES users(id) NOT NULL | INTEGER FOREIGN KEY REFERENCES projects(id) NOT NULL |
