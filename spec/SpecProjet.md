## Spécifications du projet

#### Gestion de la configuration

Voici l'arborescence du projet :
```
|-spec
|   |-test
|   |   |- //un fichier par US décrivant les scénarios de tests.
|   |   |- ...
|   |-SpecApp.md //Spécification en lien avec la partie back de l'application
|   |-SpecFront.md // Spécification en lien avec la partie front de l'application
|   |-SpecDB.md //Spécification en lien avec la base de donnée
|   |-SpecProjet.md
|-sprint
|   |-Sprint1.md
|   |-... //Chaque fichier.md liste les US embarquées pour ce sprint ainsi que les taches pour les réaliser
|   |-SprintN.md
|-src
|   |-app //Dossier contenant les sources du Back de l'application
|   |-html //Dossier contenant les templates html, le css et le javascript en lien avec le front
|   |-db //Dossier contenant les scripts sql
|   |-test
|       |-unit_tests // Dossier contenant tout les tests unitaires, chaque nom de fichier doit se terminer par .test.js
|       |-e2e //Dossier contenant tout les tests E2E, chaque nom de fichier doit se terminer par .test.js
|-package.json
|-docker-compose.yml
|-README.md // Liste des US
|-INSTALL.md // Documentation d'installation de l'application
|-... // Autres fichiers de configuration en lien avec l'intégration continue.
```

#### Definition of done 

On considère une tâche finie lorsque l'implémentation est terminée et que les tests unitaires sont écrits et qu'ils s'éxecutent bien.