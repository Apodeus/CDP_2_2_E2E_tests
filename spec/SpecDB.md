# Table users

| id | pseudo | email | password |
|:--:|:--:|:--:|:--:|
| INTEGER NOT NULL auto-increment (primary Key)  | VARCHAR(20) NOT NULL | VARCHAR(60) NOT NULL | VARCHAR (20) NOT NULL|

# Table projects
| id | name | description | start_date | sprint_length | owner |
|:--:|:--:|:--:|:--:|:--:|:--:|
| INTEGER NOT NULL auto-increment (primary Key) | VARCHAR(20) NOT NULL | VARCHAR(280) | DATE NOT NULL | INTEGER NOT NULL | INTEGER FOREIGN KEY REFERENCES users(id) NOT NULL |

# Table projects_participants
| user | project |
|:--:|:--:|
| INTEGER FOREIGN KEY REFERENCES users(id) NOT NULL | INTEGER FOREIGN KEY REFERENCES projects(id) NOT NULL |

# Table us
| id | title | description | difficulty | priority | project | sprint |
|:--:|:--:|:--:|:--:|:--:|:--:|
| INTEGER NOT NULL auto-increment (primary Key) | VARCHAR(60) NOT NULL | VARCHAR(280) NOT NULL | INTEGER NOT NULL | VARCHAR(10) NOT NULL | INTEGER FOREIGN KEY REFERENCES projects(id) NOT NULL | INTEGER FOREIGN KEY REFERENCES sprints(id) |

# Table sprints
| id | name | project |
|:--:|:--:|:--:|:--:|:--:|:--:|
| INTEGER NOT NULL auto-increment (primary Key) | INTEGER NOT NULL | INTEGER FOREIGN KEY REFERENCES projects(id) NOT NULL |
