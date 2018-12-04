Scénarios de tests de validation (E2E) pour l'US #10

Scénario 1 :
  - L'utilisateur se trouve sur la page "Backlog.html", il clique sur le bouton
    "Ajouter une nouvelle US" ce qui le redirige vers la page "/addus" où se trouve
    un formulaire. Il remplit le formulaire de la manière suivante :
      - Titre = TestScénario1
      - Description = DescriptionTest Scénario1
      - Difficulé = 5
      - Priorité = HAUTE
      - Sprint = NOT DEFINED
    Puis clique sur le bouton "Créer l'US", ce qui le renvoie sur la page "Backlog.html" où se trouve l'US qu'il vient de créer.

Scénario 2 :
  - L'utilisateur se trouve sur la page "Backlog.html", il clique sur le bouton
    "Ajouter une nouvelle US" ce qui le redirige vers la page "/addus" où se trouve
    un formulaire. Il remplit le formulaire de la manière suivante :
      - Titre = TestScénario2
      - Difficulé = 5
      - Priorité = HAUTE
      - Sprint = NOT DEFINED
    Puis clique sur le bouton "Créer l'US", ce qui le renvoie sur la page actuelle car le champs "description" est vide.

Scénario 3 :
  - L'utilisateur se trouve sur la page "Backlog.html", il clique sur le bouton
    "Ajouter une nouvelle US" ce qui le redirige vers la page "/addus" où se trouve
    un formulaire. Il remplit le formulaire de la manière suivante :
      - Titre = TestScénario3
      - Difficulé = 5
      - Priorité = HAUTE
      - Sprint = NOT DEFINED
    Puis clique sur le bouton "Annuler", ce qui le renvoie sur la page "Backlog.html" sans l'US qu'il a voulu saisir.
