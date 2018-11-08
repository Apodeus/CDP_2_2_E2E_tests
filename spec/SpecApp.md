- ServletConnectedHome.js
  - Méthode get(..) répondant à une requete GET renvoyant la page bien formée en complétant le bouton d'id=MesProjets.

- ProjetDAO.js :
  - Liste des méthodes :
    - ```List<Project> getAllByUser(User user);```
    - ```Project save(Project Project) throws Exception;```

- UserDAO.js :
  - Liste des méthodes :
    - ```User getUserByName(String username) throws Exception;```
    - ```User save(User user) throws Exception;```

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
