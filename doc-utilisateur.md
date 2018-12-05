# Documentation utilisateur

## Accès

Pour accéder au site, ouvrir le navigateur et aller sur [localhost:3000](http://localhost:3000).

## Fonctionnalités

- Affichage des projets crées
- Création d'un nouveau projet
- Affichage des US par projet (Backlog)
- Création d'une nouvelle US
- Suppression d'une US

## Routes

#### [localhost:3000/](http://localhost:3000/)
L'utilisateur arrivera directement sur cette page. Elle correspond à la page de l'utilisateur une fois connecté.

Il peut seulement pour l'instant lister les projets de l'utilisateur qui ont été crées précédemment (utilisateur de test), en cliquant sur le boutton "Mes projets" et sera redirigé vers [localhost:3000/projects](http://localhost:3000/projects).

#### [localhost:3000/projects](http://localhost:3000/projects)
L'utilisateur arrivera sur la liste des projets auxquels il participe et ceux qu'il a crée (pour l'utilisateur de test).
Chaque projet possède un bouton "Ouvrir", qui le redirige vers la page [localhost:3000/backlog](http://localhost:3000/backlog)

Il peut cliquer sur le bouton "Créer un nouveau Projet", ce qui le redirige vers la page [localhost:3000/createproject](http://localhost:3000/createproject)


#### [localhost:3000/createproject](http://localhost:3000/createproject)

L'utilisateur doit remplir le formulaire afin de créer un nouveau projet. Certains champs sont obligatoires (cf US 4) ils sont annotés d'une étoile (*).

Une fois le formulaire remplie il peut le soumettre à l'application en cliquant sur le bouton "Créer un projet" ce qui le renvoie vers la page listant
les projets. Si le formulaire n'est pas correctement remplie, l'utilisateur reste sur la page lors du clique sur le bouton "Créer un projet".

#### [localhost:3000/backlog](http://localhost:3000/backlog)
L'utilisateur arrivera sur la liste des User Stories du projet ouvert.
Chaque User Story possède un bouton "Supprimer", permettant de la supprimer

Il peut cliquer sur le bouton "Ajouter une nouvelle US", ce qui le redirigera vers la page [localhost:3000/addus](http://localhost:3000/addus)

#### [localhost:3000/addus](http://localhost:3000/addus)
L'utilisateur doit remplir le formulaire afin de créer une nouvelle User Story. Certains champs sont obligatoires (cf US 8) ils sont annotés d'une étoile (*).

Une fois le formulaire remplie il peut le soumettre à l'application en cliquant sur le bouton "Créer l'US" ce qui le renvoie vers la page listant
les User Stories. Si le formulaire n'est pas correctement remplie, l'utilisateur reste sur la page lors du clique sur le bouton "Créer l'US".
