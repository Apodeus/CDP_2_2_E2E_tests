Scénarios de tests de validation (E2E) pour l'issue #3

Scénario 1 :
Depuis la page "Projects.html", l'utilisateur clique sur le bouton "créer un nouveau projet", il arrive alors sur la page "CreateProject.html" où se trouve un formulaire.
il remplit les champs suivants : nom = ProjetTest ; description = Mon projet de test ; date de début = {demain à 10h} ; durée d'un sprint = 2;
puis clique sur le bouton "Valider & Créer" ce qui le renvoie vers la page "Projects.html" où doit apparaitre en plus de ses anciens projets celui qu'il vient de créer.

Scénario 2 :
Depuis la page "Projects.html", l'utilisateur clique sur le bouton "Créer un nouveau projet", il arrive sur la page "CreateProject.html" où se trouve un formulaire,
il remplit les champs suivants : nom = ProjetTest; date de début = {demain à 10h} ; durée d'un sprint = 2;
puis clique sur le bouton "Valider & Créer" ce qui le renvoie vers la page "Projects.html" où doit apparaitre ce nouveau projet sans description dans la liste des projets de l'utilisateur.

Scénario 3 :
Depuis la page "Projects.html", l'utilisateur clique sur le bouton "Créer un nouveau projet", il arrive sur la page "CreateProject.html" où se trouve un formulaire,
il remplit les champs suivants : description = Test avec mauvaise saisie utilisateur ; durée d'un sprint = 3;
puis clique le bouton "Valider & Créer" ce qui le renvoie vers la page "Projects.html" listant les projets de l'utilisateur à part celui qu'il a essayé d'ajouter car des champs recquis n'ont pas été remplis.