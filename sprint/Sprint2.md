# Liste des US

| Id | User-Story | Difficulté | Priorité  | Sprint prévu |
|----|------------|------------|-----------|--------------|
| 4  | En tant que développeur, je souhaite créer un projet en cliquant sur un bouton "créer un nouveau projet", renvoyant vers une page où se trouve un formulaire demandant toutes les informations nécessaires à la création d'un projet :nom*, description, date de début*, durée d'un sprint*; et valider la création du projet en cliquant sur le bouton "Valider & Créer"; dans l'objectif de le gérer  | 2 | Haute | 1 |
| 5  | En tant que développeur, je souhaite modifier un projet via la page du projet en cliquant sur le bouton "modifier projet", en remplissant un formulaire pré-rempli avec les informations de création (celui de l'US 4) et valider les modifications en cliquant sur le bouton "Enregistrer les modifications"; dans l'objectif de corriger/réviser une/des information(s) du projet|2|Haute| 1 |
| 8  | En tant que développeur, je souhaite ajouter une US (id*, titre*, description(user story)* , difficulté*, priorité*, planification (appartenance au Sprint)) au backlog via l'onglet "Backlog" du projet en cliquant sur le bouton "Ajouter User-Story" qui me renvoie sur une page contenant un formulaire avec les informations décrites plus haut; dans l'objectif d'ajouter une nouvelle US au projet | 3 | Haute | 1 |
| 11 | En tant que développeur, je souhaite lister les US via l'onglet "Backlog" du projet, ce qui me renvoie vers une page avec la liste des US me permettant de voir les informations relatives aux US dans l'objectif de planifier le projet | 1 | Haute | 1 |
| 7  | En tant que développeur, je souhaite ajouter un développeur au projet via l'onglet Equipe de la page du projet, en  cliquant sur le bouton "Ajouter membre" qui me renvoie vers une page ou l'on peut saisir les identifiants (e-mails)* du/des développeurs, la validation par clic sur le bouton "ajouter" entraînera l'ajout automatique des développeurs voulu ; dans l'objectif de permettre aux développeurs de travailler dessus    | 5 | Moyenne | 2 |
| 9  | En tant que développeur, je souhaite modifier une US via l'onglet "Backlog" du projet, en cliquant sur le bouton "modifier" à côté de l'US (qui me renvoie vers une page avec un formulaire pré-rempli (formulaire de l'US 8)), et valider mes modifications en cliquant sur le bouton "Enregistrer les modifications" qui me renvoie sur la page listant les US; dans l'objectif de réviser le contenu de l'US.                                           | 3 | Haute | 2 |
| 10 | En tant que développeur, je souhaite supprimer une US en cliquant sur le bouton "supprimer" à côté de l'US dans l'onglet "Backlog" ( raffraichissant la page afin d'afficher le nouveau backlog); dans l'objectif de retirer une US non pertinente                                                                                                                                                                                                                | 2 | Haute | 2 |

# Liste des tâches

| id | description | US affiliée | Dépendances | Chiffrage en J/H | Affectation | Statut |
|----|-------------|-------------|-------------|------------------|-------------|--------|
|Tt2d | Spécifier le(s) scénario(s) de test de l'US 4 dans le fichier Test2US4.md concernant la création de projet| 4 |  | 0.5 | Romain Ordonez | DOING  |
|Tt3d | Spécifier le(s) scénario(s) de test de l'US 5 dans le fichier Test3US5.md concernant la modification d'un projet| 5 |  |  0.5 | | TODO |
|Tt4d | Spécifier le(s) scénario(s) de test de l'US 8 dans le fichier Test4US8.md concernant la création d'US | 8 |  | 0.5 | Antonin Rebufat | DOING  |  
|Tt5d | Spécifier le(s) scénario(s) de test de l'US 11 dans le fichier Test5US11.md concernant le listage des US d'un projet | 11 |  | 0.5 | Clément Fontenay | DOING |
|Tt6d | Spécifier le(s) scénario(s) de test de l'US 7 dans le fichier Test6US7.md | 7 | | 0.5 | | TODO |
|Tt7d | Spécifier le(s) scénario(s) de test de l'US 9 dans le fichier Test7US9.md concernant la modification d'une US | 9 |  | 0.5 | | TODO  |
|Tt8d | Spécifier le(s) scénario(s) de test de l'US 10 dans le fichier Test8US10.md concernant la suppression d'une US | 10 |  | 0.5 | | TODO  |
|Tt2i | Créer le(s) test(s) du fichier Test2US4.md concernant l'ajout de projets | 4 | Tt2d, Tc11d, Tc12d, Tc25d | 0.5 | | TODO  |
|Tt3i | Créer le(s) test(s) du fichier Test3US5.md concernant la modification d'un projet| 5 | Tt3d, Tc11d, Tc25d, Tc14d | 0.5 | |  TODO |
|Tt4i | Créer le(s) test(s) du fichier Test4US8.md concernant la création d'US | 8 | Tt4d, Tc16d, Tc24d, Tc25d | 0.5 | | TODO  |  
|Tt5i | Créer le(s) test(s) du fichier Test5US11.md concernant le listage des US d'un projet | 11 | Tt5d, Tc23d ,Tc25d | 0.5 | | TODO  |
|Tt6i | (Design Tt6d) Créer le(s) test(s) du fichier Test6US7.md concernant l'ajout de membre dans un projet. | 7 | | 0.5 | | TODO |
|Tt7i | (Design Tt7d) Créer le(s) test(s) du fichier Test7US9.md concernant la modification d'une US | 9 | | 0.5 | | TODO |
|Tt8i | (Design Tt8d) Créer le(s) test(s) du fichier Test8US10.md concernant la suppression d'une US | 10 | | 0.5 | | TODO |
|-- | -- BDD --|--|--|--|--|--|
|Tc2d | Spécifier les champs de la table US en base de donnée dans le fichier SpecDB.md | 8,11 |  | 0.5 | | TODO
|Tc2i | Créer un fichier table_US.sql créant une nouvelle table US à la base de donnée CP.  | 8,11 | Tc2d | 0.5 | | TODO |
|-- | -- Application (Middle) -- |--|--|--|--|--|
|Tc5d | Spécifier les méthodes fournies par le DAO USDAO.js dans le fichier SpecApp.md | 8, 11 | | 0.5 | Clément Fontenay | DONE |
|Tc5i | (Design Tc5d) Implémenter la classe USDAO.js et les méthodes spécifier dans le fichier SpecApp.md. | 8, 11 | Tc5d, Tc2d | 0.5 | | TODO |
|Tc8d | Spécifier l'objet US qui permet d'utiliser le DAO USDAO.js dans le fichier SpecApp.md  | 8,11 |  | 0.5 | Clément Fontenay | DONE |
|Tc8i | (Design Tc8d) Implémenter la classe (POJO) US.js en suivant le fichier SpecAdd.md | 8,11 | Tc8d, Tc2d | 0.5 | | TODO |
|Tc11d | Spécifier le fonctionnement du servlet ServletProjects.js, qui est le servlet derrière la page Projects.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer une liste html contenant les Projects et également de donner un comportemant au bouton "Créer un nouveau Project" en redirigant vers la page "CreateProject.html".  | 3,4 | | 0.5 | Clément Fontenay | DONE |
|Tc11i | (Design Tc11d) Implémenter la classe ServletProjects.js en suivant le fichier SpecApp.md.| 3,4 | Tc11d | 0.5 | | TODO |
|Tc12d | Spécifier le fonctionnement du servlet ServletCreateProject.js, qui est le servlet derrière la page CreateProject.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer un formulaire html et de donner un comportement au bouton "Valider et Créer"  | 4 | | 0.5 | Antonin Rebufat |  DONE |
|Tc12i | (Design Tc12d) Implémenter la classe ServletCreateProject.js en suivant le fichier SpecApp.md | 4 | Tc12d | 0.5 | | TODO  |
|Tc13d | Spécifier le fonctionnement du servlet ServletProject.js, qui est le servlet derrière la page Project.html, dans le fichier SpecApp.md, Ce servlet doit permettre de générer une vue du Project en html, de donner un comportement au bouton "Modifier Project" et de rediriger l'utilisateur vers la page "ModifierProject.html" | 5 | | 0.5 | | TODO |
|Tc13i | (Design Tc13d) Implémenter la classe ServletProject.js en suivant le fichier SpecApp.md | 5, 6 | Tc13d | 0.5 | | TODO |
|Tc14d | Spécifier le fonctionnement du servlet ServletEditProject.js, qui est le servlet derrière la page EditProject.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer un formulaire pré-rempli en html, de donner un comportement au bouton "Enregistrer les modifications" et de rediriger l'utilisateur vers la page "Project.html"  | 5,6 | | 0.5 | | TODO |
|Tc14i | (Design Tc14d) Implémenter la classe ServletEditProject.js en suivant le fichier SpecApp.md | 5 | Tc14d | 0.5 | | TODO |
|Tc15d | Spécifier le fonctionnement du servlet ServletBacklog.js, qui est le servlet derrière la page Backlog.html, dans le fichier SpecApp.md. Ce servlet doit permetrre de générer la liste des us en html, de donner un comportement au bouton "Ajouter une US" et de rediriger l'utilisateur sur la page "AddUS.html". Il doit permettre également de donner un comportement aux boutons "modifier" et "supprimer" à côté des US et de rediriger l'utilisateur vers la page "EditUS.html" | 9,10,11 | | 0.5 | | TODO |
|Tc15i | (Design Tc15d) Implémenter la classe ServletBacklog.js en suivant le fichier SpecApp.md | 11 | Tc15d | 0.5 | | TODO |
|Tc16d | Spécifier le fonctionnement du servlet ServletAddUS.js, qui est le servlet derrière la page AddUS.html, dans le fichier SpecApp.md. Ce servlet doit permettre de générer un formulaire en html, de donner un comportement au bouton "Valider" et de rediriger l'utilisateur vers la page "Backlog.html" | 8 | | 0.5 | Antonin Rebufat | DOING |
|Tc16i | (Design Tc16d) Implémenter la classe ServletAddUS.js en suivant le fichier SpecApp.md | 8 | Tc16d | 0.5 | | TODO |
|Tc17d | Spécifier les méthodes fournies par TabBuilder.js, permettant de construire la barre d'onglet en html, dans le fichier SpecApp.md. Cette classe doit permettre de générer une barre d'onglet en html permettant de rediriger l'utilsateur vers les pages "Project.html", "Backlog.html" | 8, 11 | | 0.5 | Romain Ordonez | DOING |
|Tc17i | Implémenter la classe TabBuilder.js en suivant le fichier SpecApp.md | 8,11 | Tc17d | 0.5 | | TODO |
|Tc26i | Ajouter l'onglet "Equip" dans la barre d'onglet, qui permet de rediriger vers ServletEquip.js | 7 | Tc17i | 0.5 | | TODO |
|Tc27d | Spécifier le fonctionnement du servlet ServletEquip.js, qui est le servlet derrière la page Equip.html, dans le SpecApp.md. Ce servlet doit permettre de donner un comportement au bouton "Ajouter membre" et de rediriger l'utilisateur vers ServletAddEquipMember.js (le formulaire pour ajouter un utilisateur au projet). | 7 | | 0.5 | | TODO |
|Tc27i | (Design Tc27d) Implémenter le servlet ServletEquip.js en suivant le fichier SpecApp.md. | 7 | Tc27d | 0.5 | | TODO |
|Tc28d | Spécifier le fonctionement du servlet ServletAddEquipMember.js, qui renvoie le formulaire AddEquipMember.html pour ajouter un membre sur le projet ouvert, dans SpecApp.md. Ce servlet doit être capable de donner un comportement au bouton "ajouter" de la page html, il doit donc ajouter à l'aide de ProjectDAO.js un membre au projet ouvert. | 7 | | 0.5 | | TODO |
|Tc28i | Implémenter le servlet Servlet ServletAddEquipMember.js en suivant le fichier SpecApp.md | 7 | | 0.5 | |TODO |
|Tc31i | Implémenter les boutons "modifier" qui permettent de modifier les US dans ServletBacklog.js en suivant SpecApp.md | 9 | Tc15d | 0.5 | |TODO|
|Tc32d | Spécifier le fonctionnement du servlet ServletEditUS.js, qui est le servlet derrière la page EditUS.html, dans SpecApp.md. Ce servlet doit permettre de pré-remplir le formulaire présent sur EditUS.html, de donner un comportement au bouton "Enregistrer les modifications" pour sauvegarder les modifications sur l'US à l'aide de USDAO.js et renvoyer l'utilisateur sur la page du Backlog | 9 | Tc24d | 0.5 |  | TODO|
|Tc32i| (Design Tc32d) Implémenter le servlet ServletEditUs.js en suivant SpecApp.md | 9 | Tc32d | 0.5 | | TODO |
|Tc33i | Ajouter l'onglet "Backlog" dans la barre d'onglet, qui permet de rediriger vers ServletBacklog.js et donc Backlog.html | 8,9,10,11 | Tc17i | 0.5 | | TODO |
|--|-- FRONT --|--|--|--|--|--|
|Tc20d|Spécifier le contenu de la page CreateProject.html dans le fichier SpecFront.md, qui correspond à la page de création d'un nouveau Project | 4 || 0.5 | Romain Ordonez | DONE |
|Tc20i|(Design Tc20d) Implémenter le fichier CreateProject.html conformément au fichier SpecFront.md. Cette page devra contenir un formulaire respectant le fichier de spécification, ainsi qu'un bouton en bas de page permettant de traiter la saisie de l'utilisateur afin de le sauvegarder en BDD. | 4 |Tc20d| 0.5 | | TODO |
|Tc21d|Spécifier le contenu de la page Project.html dans le fichier SpecFront.md, qui correspond à l'affichage d'un Project | 5 || 0.5 | | TODO |
|Tc21i|(Design Tc21d) Implémenter le fichier Project.html conformément au fichier SpecFront.md | 5 |Tc21d| 0.5 | | TODO |
|Tc22d | Spécifier le contenu et les actions de la page EditProject.html permettant de modifier un projet dans le fichier SpecFront.md | 5 | |  0.5  | | TODO |
|Tc22i | (Design Tc22d)  En se basant sur le fichier SpecFront.md : Créer un fichier EditProject.html qui affichera un formulaire, ce formulaire sera pré-rempli avec les informations inscrites en base correspondant au projet ciblé. Ajouter un nouveau bouton "Enregistrer" qui permet de venir vérifier/valider la saisie de l'utilisateur et ainsi la mise à jour des informations en base de ce projet et renvoi l'utilisateur vers la page Project.html . Ajouter un nouveau bouton "Annuler" qui permet de revenir sur la page Project.html .| 5 | Tc22d | 0.5 | | TODO |
|Tc23d | Spécifier le contenu et les actions de la page Backlog.html permettant d'afficher le contenu du backlog (US) et le bouton pour ajouter une US du projet dans le fichier SpecFront.md | 11 |  | 0.5 | Antonin Rebufat | DONE |
|Tc23i | (Design Tc23d :) En se basant sur le fichier SpecFront.md : Créer un fichier Backlog.html. Ce fichier listera les informations des US présentes en base de donnée liées à ce projet. Ces informations seront affichées dans des rectangles les un en dessous des autres. | 11 | Tc23d  | 0.5 | | TODO |
|Tc24d |Spécifier le contenu de la page AddUS.html qui doit être un formulaire permettant l'ajout d'une nouvelle US au backlog du projet dans le fichier SpecFront.md | 8 | Tc23d  | 0.5 | Romain Ordonez | DONE |
|Tc24i  | (Design Tc24d :) En se basant sur le fichier SpecFront.md : Créer un fichier AddUS.html. Ajouter un formulaire avec les champs définis dans le fichier SpecFront.md. Ajouter un bouton "Valider & Ajouter" qui permet de vérifier/valider la saisie de l'utilisateur et ainsi d'ajouter l'US en base de donnée puis renvoie l'utilisateur vers la page Backlog.html . Ajouter un bouton "Annuler" qui ne prend pas en compte la saisie de l'utilisateur et le renvoie vers la page Backlog.html de son projet. | 8 | Tc24d | 0.5 | | TODO |
|Tc25d | Spécifier la structure du template TabsBar.html dans le fichier SpecFront.md. Ce template permettra de représenter une barre d'onglet facilitant l'intéraction avec l'application ainsi que sa composation par l'application en fonction de la page actuelle.| All |  | 0.5 | Romain Ordonez | DONE |
|Tc25i | (Design Tc25d :) En se basant sur le fichier SpecFront.md : Créer un fichier TabsBar.html. Implémenter la structure en fonction de ce qui a été définit dans le fichier SpecFront.md | All | Tc25d  | 0.5 | | TODO |
|Tc29d | Spécifier le contenu de la page Equip.html, qui est la page qui permet d'être redirigé vers l'ajout de membre au projet ouvert, dans SpecFront.md. | 7 |  | 0.5 | | TODO |
|Tc29i | (Design Tc29d) Implémenter Equip.html en suivant le fichier SpecFront.md. | 7 | Tc29d | 0.5 | | TODO |
|Tc30d | Spécifier le contenu de la page AddEquipMember.html, qui est un formulaire permettant d'ajouter un membre à l'équipe de projet, dans le SpecFront.md. | 7 | | 0.5 | | TODO |
|Tc30i | Implémenter AddEquipMember.html en suivant le SpecFront.md | 7 | Tc30d | 0.5 | | TODO|
|Tc34i | Implémenter EditUS.html en suivant la spécification du formulaire AddUS.html dans SpecFront.md | 9 | Tc24d | 0.5 | | TODO |
|Tc35d | Spécifier le comportement et l'apparence du bouton "Supprimer" , permettant la suppression de l'US en lien avec ce celui-ci, dans le fichier SpecApp.md | 10 |  | 0.5 | | TODO |
|Tc35i | (Design Tc31d) En se basant sur le fichier SpecApp.md, implémenter le bouton "Supprimer" se trouvant sur la page listUS.html. Chaque US aura son bouton aligné avec sa description sur la partie droite de la page. Ce bouton permet la suppression de l'US en BDD et rafraichit la page afin d'avoir la nouvelle liste des US. | 10 | Tc35d | 0.5 | | TODO |
|--|-- ENVIRONNEMENT --|--|--|--|--|--|
|Te2i| Mettre en place des tests qui seront lancé automatiquement et qui garde un historique des résultats | All | | 0.5 | Romain Ordonez | TODO |
|Te5i| Mettre en place un outil pour générer la documentation | | | 0.5 | | TODO |
