- ServletConnectedHome.js
  - Méthode get(..) répondant à une requete GET renvoyant la page bien formée en complétant le bouton d'id=MesProjets.

- ServletCreateProject.js
  - Méthode get("/") répond à une requête GET renvoyant la page bien formée avec le formulaire possédant les champs :
    - nom*
    - description
    - date de début*
    - durée des sprints*

  - Méthode post(...) répond à la requête POST qui traite, valide les informations saisie dans le formulaire. Renvoie l'utilisateur la page des listes des projets. Cette méthode sera appellée par le bouton "Valider & Créer".

- ProjectDAO.js :
  - Liste des méthodes :
    - ```List<Project> getAllByUser(User user, function(resultProjects));```
    - ```Project save(Project Project, function(resultProject)) throws Exception;```

- UserDAO.js :
  - Liste des méthodes :
    - ```User getUserByName(String username, function(resultUser)) throws Exception;```
    - ```User save(User user, function(resultUser)) throws Exception;```

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
