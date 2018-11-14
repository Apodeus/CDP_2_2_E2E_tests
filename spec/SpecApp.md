- ServletConnectedHome.js
  - Méthode get(..) répondant à une requete GET renvoyant la page bien formée en complétant le bouton d'id=MesProjets.

- ServletProject.js
  - Méthode get("/") répondant à une requête GET renvoyant une page html combiné avec un un script js (Projects.js).
  La page html renvoyé doit être composée de la liste des projets, pour ça le servlet rempli la balise div qui a l'id "ProjectsList".
  Le script js permet de donner un comportement au bouton "créer un projet" de la page html existante Projects.html"; le bouton doit fair eune redirection vers le servlet ServletAddProject.

Les valeurs renvoyés par les DAO sont renvoyées dans les fonctions callback passée en paramètre des méthodes. 
- ProjectDAO.js :
  - Liste des méthodes :
    - ```List<Project> getAllByUser(User user, function(resultProjects));```
    - ```Project save(Project Project, function(resultProject)) throws Exception;```

- UserDAO.js :
  - Liste des méthodes :
    - ```User getUserByName(String username, function(resultUser)) throws Exception;```
    - ```User save(User user, function(resultUser)) throws Exception;```

- USDAO.js :
  - Liste des méthodes :
    - ```US save(US us, function(resultUser)) throws Exception;```
    - ```List<US> getAllUSByProject(Project project, function(resultAllUS)) throws Exception;```

- User.js
  - Liste des champs :
    - id
    - pseudo
    - email
    - password
  - Liste des méthodes :
    - constructeur (pseudo, email, password)
    - getteurs
    - setteurs

- Project.js
  - Liste des champs :
    - name
    - description
    - startDate
    - sprintLength
    - owner
    - participants
  - Liste des méthodes :
    - constructeur (name, description, startDate, sprintLength, owner)
    - getteurs
    - setteurs
