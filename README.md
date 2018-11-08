[![pipeline status](https://gitlab.com/Apodeus/cdp2_2/badges/master/pipeline.svg)](https://gitlab.com/Apodeus/cdp2_2/commits/master)
[![quality gate](https://sonarcloud.io/api/project_badges/measure?project=cdp%3Acdp&metric=alert_status)](https://sonarcloud.io/dashboard?id=cdp%3Acdp)
[![coverage](https://sonarcloud.io/api/project_badges/measure?project=cdp%3Acdp&metric=coverage)](https://sonarcloud.io/dashboard?id=cdp%3Acdp)

# Conduite de Projet - M2 GL
# Clément Fontenay, Antonin Rebufat, Romain Ordonez

### Légende :
- \* => Champ obligatoire

| Id | Issue | Difficulté | Priorité  | Sprint prévu |
|----|-------|------------|----------|--------|
| 1  | En tant que visiteur, je souhaite pouvoir m'inscrire via un bouton "S'enregistrer", à côté de celui de connexion,  qui me renvoie vers une page avec un formulaire (création de compte à l'aide d'un e-mail*, mot de passe* et pseudo*) avec un bouton "Valider l'enregistrement" permettant la validation de l'enregistrement qui renvoie le visiteur vers la page d'accueil maintenant en tant que développeur; dans l'objectif de pouvoir créer ou rejoindre un projet. | 1 | Moyenne | 2 |
| 2  | En tant que visiteur, je souhaite pouvoir m'authentifier via un bouton "connexion" renvoyant vers une page où se trouve un formulaire à remplir (e-mail* et mot de passe*) puis valider en cliquant sur le bouton "OK", me renvoyant vers la page d'accueil en mode "développeur"; dans l'objectif d'utiliser mon compte                                                                                                                                                   | 1 | Moyenne | 2 |
| 3  | En tant que développeur, je souhaite pouvoir lister tout les projets, auxquels je participe, sur la page des projets accessibles via un bouton "Mes Projets" présent sur la page d'accueil; dans l'objectif de gérer mes projets                                                                                                                                                                                                                                           | 1 | Haute | 1 |
| 4  | En tant que développeur, je souhaite créer un projet en cliquant sur un bouton "créer un nouveau projet", renvoyant vers une page où se trouve un formulaire demandant toutes les informations nécessaires à la création d'un projet :nom*, description, date de début*, durée d'un sprint*; et valider la création du projet en cliquant sur le bouton "Valider & Créer"; dans l'objectif de le gérer                                                     | 2 | Haute | 1 |
| 5  | En tant que développeur, je souhaite modifier un projet via la page du projet en cliquant sur le bouton "modifier projet", en remplissant un formulaire pré-rempli avec les informations de création (celui de l'issue 4) et valider les modifications en cliquant sur le bouton "Enregistrer les modifications"; dans l'objectif de corriger/réviser une/des information(s) du projet                                                                                     | 2 | Haute | 1 |
| 6  | En tant que développeur, je souhaite supprimer un projet via la page du projet en cliquant sur le  bouton "supprimer projet" et être renvoyer sur la page listant mes projets; dans l'objectif de retirer un projet fini ou abandonné                                                                                                                                                                                                                                      | 1 | Haute | 2 |
| 7  | En tant que développeur, je souhaite ajouter un développeur au projet via l'onglet Equipe de la page du projet, en  cliquant sur le bouton "Ajouter membre" qui me renvoie vers une page ou l'on peut saisir les identifiants (e-mails)* du/des développeurs, la validation par clic sur le bouton "ajouter" entraînera l'ajout automatique des développeurs voulu ; dans l'objectif de permettre aux développeurs de travailler dessus    | 5 | Moyenne | 2 |
| 8  | En tant que développeur, je souhaite ajouter une Issue (id*, titre*, description(user story)* , difficulté*, priorité*, planification (appartenance au Sprint)) au backlog via l'onglet "Backlog" du projet en cliquant sur le bouton "Ajouter Issue" qui me renvoie sur une page contenant un formulaire avec les informations décrites plus haut; dans l'objectif d'ajouter une nouvelle US au projet                                                                    | 3 | Haute | 1 |
| 9  | En tant que développeur, je souhaite modifier une Issue via l'onglet "Backlog" du projet, en cliquant sur le bouton "modifier" à côté de l'issue (qui me renvoie vers une page avec un formulaire pré-rempli (formulaire de l'issue 8)), et valider mes modifications en cliquant sur le bouton "Enregistrer les modifications" qui me renvoie sur la page listant les Issues; dans l'objectif de réviser le contenu de l'issue.                                           | 3 | Haute | 2 |
| 10 | En tant que développeur, je souhaite supprimer une Issue en cliquant sur le bouton "supprimer" à côté de l'issue dans l'onglet "Backlog" ( raffraichissant la page afin d'afficher le nouveau backlog); dans l'objectif de retirer une Issue non pertinente                                                                                                                                                                                                                | 2 | Haute | 2 |
| 11 | En tant que développeur, je souhaite lister les Issues via l'onglet "Backlog" du projet, ce qui me renvoie vers une page avec la liste des Issues me permettant de voir les informations relatives aux Issues dans l'objectif de planifier le projet                                                                                                                                                                                                                       | 1 | Haute | 1 |
| 12 | En tant que développeur, je souhaite ajouter une tâche à un sprint ayant comme champs : id*, description*, statut*, dépendances, Issue(s)* liée(s), estimation en jours-Homme*, développeur assigné. Via l'onglet "Sprints" du projet et en cliquant sur le bouton "ajouter tâche" à côté du sprint voulu , dans l'objectif de spécifier une partie du travail à faire dans un sprint.                                                             | 3 | Basse | 2 |
| 13 | En tant que développeur, je souhaite modifier une tâche d'un sprint en cliquant sur le bouton "Modifier" à côté de la tâche dans la liste des tâches du sprint voulu, ce qui me renvoie vers une page où se trouve un formulaire pré-rempli avec les informations actuelles de la tâche, et valider les modifications en cliquant sur le bouton "Enregistrer" qui me renvoie vers l'onglet "Sprints"; dans l'objectif de réviser son contenu                               | 3 | Basse | 3 |
| 14 | En tant que développeur, je souhaite supprimer une tâche d'un sprint via l'onglet "Sprints" du projet en cliquant sur le bouton "supprimer" à côté de la tâche, raffraichissant la page afin d'afficher la nouvelle liste des tâches des sprints; dans l'objectif de retirer une tâche non pertinente                                                                                                                                                                      | 2 | Basse | 3 |
| 15 | En tant que développeur, je souhaite changer le statut d'une tâche d'un sprint en cliquant sur le bouton "Changer statut" qui permet de sélectionner 3 Valeurs :{ TODO, DOING, DONE} et valider mon choix en cliquant sur le bouton "OK" ; dans l'objectif de montrer l'avancement des tâches du Sprint.                                                                                                                                                                   | 3 | Basse | 3 |
| 16 | En tant que développeur, je souhaite créer un sprint (id*) via l'onglet "Sprints" en cliquant sur le bouton "Créer Sprint"; dans l'objectif de planifier un sprint.                                                                                                                                                                                                                                              | 2 | Basse | 2 |
| 17 | En tant que développeur, je souhaite ajouter une release à un sprint (lien) via l'onglet "Sprints", en cliquant sur le bouton "Ajouter Release" à côté du sprint souhaité ce qui nous renvoie vers un formulaire permettant de saisir un lien vers la release; dans l'objectif d'avoir un accès à la release du sprint                                                                                                                                                     | 2 | Basse | 3 |
| 18 | En tant que développeur, je souhaite lister les sprints triés par ID et leur contenu (tâches, release (si existante), somme des difficultés de ses tâches) via l'onglet "Sprints"; dans l'objectif de visualiser la repartition du travail.                                                                                                                                       | 2 | Basse | 3 |
| 19 | En tant que développeur, je souhaite générer et afficher un Burn Down Chart, dans une nouvelle page, en cliquant sur le bouton "Burn Down Chart" à coté du sprint voulu; dans l'objectif d'avoir un aperçu de la consommation des Jours/Homme du sprint.                                                                                                                                                                                                                                                        | 8 | Basse | 3 |
