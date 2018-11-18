Scénarios de tests de validation (E2E) pour l'issue #8

Snénario 1 : Depuis la page Backlog.html, l'utilisateur clique sur le bouton "Ajouter User-Story" le renvoyant vers la page AddUS.html où se trouve un formulaire.
Il remplit le formulaire avec les informations suivantes : id=23 ; titre= usTest ; description= description de test ; priorité = 5 ; planification =;
Puis l'utilisateur clique le bouton "Valider" ce qui le renvoie vers la page Backlog.html où il doit pouvoir voir l'US qu'il vient d'ajouter ainsi que les précédentes.

Scénario 2 : Depuis la page Backlog.html, l'utilisateur clique sur le bouton "Ajouter User-Story" le renvoyant vers la page AddUS.html où se trouve un formulaire.
L'utilisateur ne remplit rien et clique sur "Valider" ce qui le renvoie sur la page Backlog.html qui a le même état qu'avant.

Scénario 3 : Depuis la page Backlog.html, l'utilisateur clique sur le bouton "Ajouter User-Story" le renvoyant vers la page AddUS.html où se trouve un formulaire.
L'utilisateur le remplit mal en oubliant un champ obligatoire : id=23 ; titre= usTest ; description= ; priorité = 5; planification = 1;
Puis il clique sur le bouton "Valider" ce qui le renvoie vers la page Backlog.html qui a le même état qu'avant.
