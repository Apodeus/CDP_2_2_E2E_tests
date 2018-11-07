| id | description | Issue affiliée | Dépendances | Chiffrage en J/H | Affectation | Statut
|-|-|-|-|-|-|-|
|Tt1d | Spécifier le(s) scénario(s) de test de l'issue 3 dans le fichier Test1Issue3.md concernant le listage des projets | 3 |  | 0.5 | Clément Fontenay | DOING  |
|Tt2d | Spécifier le(s) scénario(s) de test de l'issue 4 dans le fichier Test2Issue4.md concernant la création de projet| 4 |  | 0.5 | | TODO  |
|Tt3d | Spécifier le(s) scénario(s) de test de l'issue 5 dans le fichier Test3Issue5.md concernant la modification d'un projet| 5 |  |  0.5 | | TODO |
|Tt4d | Spécifier le(s) scénario(s) de test de l'issue 8 dans le fichier Test4Issue8.md concernant la création d'issue | 8 |  | 0.5 | | TODO  |  
|Tt5d | Spécifier le(s) scénario(s) de test de l'issue 11 dans le fichier Test5Issue11.md concernant le listage des issues d'un projet | 11 |  | 0.5 | | TODO  |
|Tt1i | Créer le(s) test(s) du fichier Test1Issue3.md concernant le listage des projets | 3 | Tt1d | 0.5 | | TODO  |
|Tt2i | Créer le(s) test(s) du fichier Test2Issue4.md concernant l'ajout de projets | 4 | Tt2d | 0.5 | | TODO  |
|Tt3i | Créer le(s) test(s) du fichier Test3Issue5.md concernant la modification d'un projet| 5 | Tt3d | 0.5 | |  TODO |
|Tt4i | Créer le(s) test(s) du fichier Test4Issue8.md concernant la création d'issue | 8 | Tt4d | 0.5 | | TODO  |  
|Tt5i | Créer le(s) test(s) du fichier Test5Issue11.md concernant le listage des issues d'un projet | 11 | Tt5d | 0.5 | | TODO  |
|-- | -- BDD --|--|--|--|--|--|
|Tc1d | Spécifier les champs de la table Projet en base de donnée dans le fichier SpecDB.md | 3, 4, 5 |  | 0.5 | | TODO |
|Tc1i | Créer un fichier table_projet.sql, créant une nouvelle table Projet à la base de donnée CP. | 3, 4, 5 | Tc1d | 0.5 | | TODO |
|Tc2d | Spécifier les champs de la table Issue en base de donnée dans le fichier SpecDB.md | 8,11 |  | 0.5 | | TODO
|Tc2i | Créer un fichier table_issue.sql créant une nouvelle table Issue à la base de donnée CP.  | 8,11 | Tc2d | 0.5 | | TODO |
|Tc3d | Spécifier les champs de la table User en base de donnée dans le fichier SpecDB.md | 3, 4 |  | 0.5 | Antonin Rebufat | DONE |
|Tc3i | Créer un fichier table_User.sql créant une nouvelle table User à la base de donnée CP.  | 8,11 | Tc3d | 0.5 | Antonin Rebufat | DOING |
|-- | -- Application (Middle) -- |--|--|--|--|--|
|Tc4d | Spécifier les méthodes fournies par le DAO ProjetDAO.js dans le fichier SpecApp.md | 3, 4, 5 | | 0.5 | | TODO |
|Tc4i | Implémenter la classe ProjectDAO.js en suivant le fichier SpecApp.md | 3, 4, 5 | Tc4d | 0.5 | | TODO |
|Tc5d | Spécifier les méthodes fournies par le DAO IssueDAO.js dans le fichier SpecApp.md | 8, 11 | | 0.5 | | TODO |
|Tc5i | (Design Tc5d) Implémenter la classe IssueDAO.js en suivant le fichier SpecApp.md | 8, 11 | Tc5d | 0.5 | | TODO |
|Tc6d | Spécifier les méthodes fournies par le DAO UserDAO.js dans le fichier SpecApp.md | 3, 4, 5 | | 0.5 | | TODO |
|Tc6i | (Design Tc6d) Implémenter la classe UserDAO.js en suivant le fichier SpecApp.md | 3, 4, 5 | Tc6d | 0.5 | | TODO |
|Tc7d | Spécifier l'objet Projet qui permet d'utiliser le DAO ProjectDAO.js dans le fichier SpecApp.md  | 3,4,5 | (Tc4d) | 0.5 | | TODO |
|Tc7i | (Design Tc7d) Implémenter la classe Project.js en suivant le ficiher SpecApp.md | 3,4,5 | | 0.5 | | TODO |
|Tc8d | Spécifier l'objet Issue qui permet d'utiliser le DAO IssueDAO.js dans le fichier SpecApp.md  | 8,11 | (Tc5d) | 0.5 | | TODO |
|Tc8i | (Design Tc8d) Implémenter la classe Issue.js en suivant le fichier SpecAdd.md | 8,11 | | 0.5 | | TODO |
|Tc9d | Spécifier l'objet User qui permet d'utiliseur le DAO UserDAO.js dans le ficiher SpecApp.md | 3,4,5 | (Tc6d) | 0.5 | | TODO |
|Tc9i | (Design Tc9d) Implémenter la classe User.js en suivant le fichier SpecAdd.md | 3,4,5 | | 0.5 | | TODO |
|Tc10d | Spécifier le fonctionnement du servlet ServletConnectedHome.js, qui est le servlet derrière la page ConnectedHome.html, dans le fichier SpecApp.md. Ce servlet doit permettre de donner un comportement au bouton "Mes Projects" et de redirigé l'utilisateur vers la page "Projects.html" | 3 | | 0.5 | | TODO |
|Tc10i | (Design Tc10d) Implémenter la classe ServletConnectedHome.js en suivant le fichier SpecApp.md | 3 | | 0.5 | | TODO |
|Tc11d | Spécifier le fonctionnement du servlet ServletProjects.js, qui est le servlet derrière la page Projects.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer une liste html contenant les Projects et également de donner un comportemant au bouton "Créer un nouveau Project" en redirigant vers la page "CreerProject.html".  | 3,4 | | 0.5 | | TODO |
|Tc11i | (Design Tc11d) Implémenter la classe ServletProjects.js en suivant le fichier SpecApp.md | 3 | | 0.5 | | TODO |
|Tc12d | Spécifier le fonctionnement du servlet ServletCreateProject.js, qui est le servlet derrière la page CreerProject.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer un formulaire html et de donner un comportement au bouton "Valider et Créer"  | 4 | | 0.5 | | TODO |
|Tc12i | (Design Tc12d) Implémenter la classe ServletCreateProject.js en suivant le fichier SpecApp.md | 4 | | 0.5 | | TODO  |
|Tc13d | Spécifier le fonctionnement du servlet ServletProject.js, qui est le servlet derrière la page Project.html, dans le fichier SpecApp.md, Ce servlet doit permettre de générer une vue du Project en html, de donner un comportement au bouton "Modifier Project" et de redirigé l'utilisateur vers la page "ModifierProject.html"  | 5 | | 0.5 | | TODO |
|Tc13i | (Design Tc13d) Implémenter la classe ServletProject.js en suivant le fichier SpecApp.md | 5, 6 | | 0.5 | | TODO |
|Tc14d | Spécifier le fonctionnement du servlet ServletEditProject.js, qui est le servlet derrière la page EditProject.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer un formulaire pré-rempli en html, de donner un comportement au bouton "Enregistrer les modifications" et de redirigé l'utilisateur vers la page "Project.html"  | 5,6 | | 0.5 | | TODO |
|Tc14i | (Design Tc14d) Implémenter la classe ServletEditProject.js en suivant le fichier SpecApp.md | 5 | | 0.5 | | TODO |
|Tc15d | Spécifier le fonctionnement du servlet ServletBacklog.js, qui est le servlet derrière la page Backlog.html, dans le fichier SpecApp.md. Ce servlet doit permetrre de générer la liste des us en html, de donner un comportement au bouton "Ajouter une issue" et de redirigé l'utilisateur sur la page "AjouterUS.html" | 11 | | 0.5 | | TODO |
|Tc15i | (Design Tc15d) Implémenter la classe ServletBacklog.js en suivant le fichier SpecApp.md | 11 | | 0.5 | | TODO |
|Tc16d | Spécifier le fonctionnement du servlet ServletAddUS.js, qui est le servlet derrière la page AddUS.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer un formulaire en html, de donner un comportement au bouton "Valider" et de redirigé l'utilisateur vers la page "Backlog.html" | 8 | | 0.5 | | TODO |
|Tc16i | (Design Tc16d) Implémenter la classe ServletAddUS.js en suivant le fichier SpecApp.md | 8 | | 0.5 | | TODO |
|Tc17d | Spécifier les méthodes fournies par TabBuilder.js, permettant de construire la barre d'onglet en html, dans le fichier SpecApp.md. Cette classe doit permettre de générer une barre d'onglet en html permettant de redirigé l'utilsateur vers les pages "Project.html", "Backlog.html" | 8, 11 | | 0.5 | | TODO
|Tc17i | Implémenter la classe TabBuilder.js en suivant le fichier SpecApp.md | 8,11 | | 0.5 | | TODO |
|--|-- FRONT --|--|--|--|--|--|
|Tc18d|Spécifier le contenu de la page ConnectedHome.html dans le fichier SpecFront.md, qui correspond à l'affichage de l'accueil d'un utilisateur connecté | 3 || 0.5 | | TODO |
|Tc18i|(Design Tc18d) Implémenter le fichier ConnectedHome.html conformément au fichier SpecFront.md | 3 |Tc18d| 0.5 | | TODO |
|Tc19d|Spécifier le contenu de la page Projects.html dans le fichier SpecFront.md, qui correspond à l'affichage de l'ensemble des Projects d'un utilisateur | 3 || 0.5 | | TODO |
|Tc19i|(Design Tc19d) Implémenter le fichier Projects.html conformément au fichier SpecFront.md | 3 |Tc19d| 0.5 | | TODO |
|Tc20d|Spécifier le contenu de la page CreateProject.html dans le fichier SpecFront.md, qui corrrespond à la page de création d'un nouveau Project | 4 || 0.5 | | TODO |
|Tc20i|(Design Tc20d) Implémenter le fichier CreateProject.html conformément au fichier SpecFront.md | 4 |Tc20d| 0.5 | | TODO |
|Tc21d|Spécifier le contenu de la page Project.html dans le fichier SpecFront.md, qui correspond à l'affichage d'un Project | 5 || 0.5 | | TODO |
|Tc21i|(Design Tc21d) Implémenter le fichier Project.html conformément au fichier SpecFront.md | 5 |Tc21d| 0.5 | | TODO |
|Tc22d | Spécifier le contenu et les actions de la page modifyProject.html permettant de modifier un projet dans le fichier SpecFront.md | 5 | |  0.5  | | TODO |
|Tc22i | (Design Tc22d)  En se basant sur le fichier SpecFront.md : Créer un fichier modifyProject.html qui affichera un formulaire, ce formulaire sera pré-rempli avec les informations inscrites en base correspondant au projet ciblé. Ajouter un nouveau bouton "Enregistrer" qui permet de venir vérifier/valider la saisie de l'utilisateur et ainsi la mise à jour des informations en base de ce projet et renvoi l'utilisateur vers la page Projet.html . Ajouter un nouveau bouton "Annuler" qui permet de revenir sur la page Projet.html .| 5 | Tc22d | 0.5 | | TODO |
|Tc23d | Spécifier le contenu et les actions de la page listBacklog.html permettant d'afficher le contenu du backlog (Issues) du projet dans le fichier SpecFront.md | 8 |  | 0.5 |  | TODO |
|Tc23i | (Design Tc23d :) En se basant sur le fichier SpecFront.md : Créer un fichier listBacklog.html. Ce fichier listera les informations des issues présents en base de donnée lié à ce projet. Ces informations seront affichées dans des rectangles les un en dessous des autres. | 8 | Tc23d  | 0.5 | | TODO |
|Tc24d |Spécifier le contenu et les actions de la page addIssue.html permettant l'ajout d'une nouvelle Issue au backlog du projet dans le fichier SpecFront.md | 11 |  | 0.5 | | TODO |
|Tc24i  | (Design Tc24d :) En se basant sur le fichier SpecFront.md : Créer un fichier addIssue.html. Ajouter un formulaire avec les champs définis dans le fichier SpecFront.md. Ajouter un bouton "Valider & Ajouter" qui permet de vérifier/valider la saisie de l'utilisateur et ainsi d'ajouter l'issue en base de donnée puis renvoie l'utilisateur vers la page listBacklog.html . Ajouter un bouton "Annuler" qui ne prend pas en compte la saisie de l'utilisateur et le renvoie vers la page listBacklog.html de son projet. | 11 | Tc24d | 0.5 | | TODO |
|Tc25d | Spécifier la structure du template tabsBar.html dans le fichier SpecFront.md. Ce template permettra de représenter une barre d'onglet facilitant l'intéraction avec l'application ainsi que sa composation par l'application en fonction de la page actuelle.| All |  | 0.5 | | TODO |
|Tc25i | (Design Tc25d :) En se basant sur le fichier SpecFront.md : Créer un fichier tabsBar.html. Implémenter la structure en fonction de ce qui a été définit dans le fichier SpecFront.md | All | Tc25d  | 0.5 | | TODO |
|--|-- ENVIRONNEMENT --|--|--|--|--|--|
|Te1i| Mettre en place un linter pour contrôler le code HTML et JavaScript | | | 0.5 | Romain Ordonez | TODO |
|Te2i| Mettre en place des tests qui seront lancé automatiquement et qui garde un historique des résultats | | | 0.5 | Romain Ordonez | Doing |
|Te3i| Mettre en place un docker-compose permettant de lancer l'application, en vu de sortir des releases | | | 0.5 | Clément Fontenay | DONE |
|Te4i| Créer une page regroupant les différentes releases | | | 0.5 | Clément Fontenay | TODO |
|Te5i| Mettre en place un outil pour générer la documentation | | | 0.5 | | TODO |
