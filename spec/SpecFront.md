- ConnectedHome.html
  - Bouton vide au milieu avec un id=MesProjets et le paramètre onclick=clickButtonMesProjets  (fonction dans le fichier ConnectedHome.js).

- Projects.html
  - Liste les projets en base, pour cela doit avoir une balise div avec l'id=ProjectsList.

- ConnectedHome.js
  - Contient uniquement la fonction clickButtonMesProjets, celle ci a pour but de lancer une requête GET sur avec en paramètre "?MesProjets=" pour ensuite être redirigé.

- CreateProject.html
  - Formulaire de création d'un projet donné par le servlet ServletCreateProject.js contenant un bouton avec l'id=Validate en bas de la balise div du formulaire (id=Formulaire).

- Backlog.html
  - Liste des US en base de donné, le fichier contiendra une balise div avec l'id=IssueList et un bouton au centre avec l'id=AddUs.

- AddUS.html
  - Formulaire de création d'une US donné par le servlet ServletCreateUS.js contenant un bouton avec l'id=falidate en bas de la balise div du formulaire (id=formulaire). Le formulaire contiendra aussi en bas un bouton d'annulation (id=cancel), permttant d'annuler l'action.

- TabsBar.html
  - Barre de navigation composé de boutons défini par les servlets. Contient une balise div d'id=TabBar se situant en haut de la page.
