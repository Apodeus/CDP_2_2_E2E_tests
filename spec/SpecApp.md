- ServletConnectedHome.js
  - Méthode get(..) répondant à une requete GET renvoyant la page bien formée en complétant le bouton d'id=MesProjets.

- ServletCreateProject.js
  - Méthode get("/") répond à une requête GET renvoyant la page bien formée avec le formulaire possédant les champs :
    - nom*
    - description
    - date de début*
    - durée des sprints*

  - Méthode post(...) répond à la requête POST qui traite, valide les informations saisie dans le formulaire. Renvoie l'utilisateur la page des listes des projets. Cette méthode sera appellée par le bouton "Valider & Créer"

- ServletProject.js
  - Méthode get("/") répondant à une requête GET renvoyant une page html combiné avec un un script js (Projects.js).
  La page html renvoyé doit être composée de la liste des projets, pour ça le servlet rempli la balise div qui a l'id "ProjectsList".
  Le script js permet de donner un comportement au bouton "créer un projet" de la page html existante Projects.html"; le bouton doit fair eune redirection vers le servlet ServletAddProject.

- ServletAddUS.js
  - Méthode get("/") répond à une requête GET renvoyant la page bien formée avec le formulaire possédant les champs :
    - id*
    - titre*
    - description*
    - difficulté*
    - priorité*
    - planification

  - Méthode post(...) répond à la requête POST qui traite,valide les informations saisie dans le formulaire.Renvoie l'utilisateur la page des listes des US (Backlog).Cette méthode sera appellée par le bouton "Ajouter User-Story"

- ServletBacklog.js
  - Méthode get("/") répondant à une requête GET, renvoyant une page html basée sur Backlog.html en rajoutant plusieurs éléments:
  La page html renvoyé doit être composée de la barre d'onglet (construite avec TabBuilder.js), donner un texte au bouton pour ajouter une US et doit remplir la balise div de Backlog.html avec la liste des US. Une US dans la liste doit regroupé toutes ses informations et également 2 boutons (modifier et supprimer).
  Tous les boutons devront être ajoutés avec la balise form et la balise input.
  - Méthode post("/")
  Donc le servlet doit également ajouter un comportement aux boutons "ajouter us", "modifier" et "supprimer", pour cela le servlet doit utiliser la méthode POST pour ainsi rediriger l'utilisateur vers le servlet "ServletAddUS.js", "ServletEditUS.js" et simplement supprimer une US dans la base et rafraichir la page.


- ProjectDAO.js :
  - Liste des méthodes :
    - ```List<Project> getAllByUser(User user);```
    - ```Project save(Project Project) throws Exception;```

- UserDAO.js :
  - Liste des méthodes :
    - ```User getUserByName(String username) throws Exception;```
    - ```User save(User user) throws Exception;```

- USDAO.js :
  - Liste des méthodes :
    - ```US save(US us) throws Exception;```
    - ```List<US> getAllUSByProject(Project project) throws Exception;```

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
- US.js
  - Liste des champs:
    - id : number
    - titre : String
    - description : String
    - difficulty : number
    - priority : number
    - sprint : number
  - Liste des méthodes:
    - constructeur (titre, description, difficulty, priority, sprint)
    - getteurs
    - setteurs

- TabBuilder.js
  - Liste des méthodes :
    - ```void addButton(title, url)```
      - ajoute un bouton à la barre d'onglet, ce bouton est constitué d'un titre et d'une url pour rediriger l'utilisateur.
    - ```void build(document)```
      - permet d'ajouter au document html la barre d'onglet.
