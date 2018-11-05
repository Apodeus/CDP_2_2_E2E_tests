| id | description | Issue affiliée | Dépendances | Chiffrage en J/H | Statut
|-|-|-|-|-|-|
Tt1d | Spécifier le(s) scénario(s) de test de l'issue 3 dans le fichier Test1Issue3.md concernant le listage des projets | 3 |  | 0.5 | TODO  |
Tt2d | Spécifier le(s) scénario(s) de test de l'issue 4 dans le fichier Test2Issue4.md concernant la création de projet| 4 |  | 0.5 | TODO  | 
Tt3d | Spécifier le(s) scénario(s) de test de l'issue 5 dans le fichier Test3Issue5.md concernant la modification d'un projet| 5 |  | 0.5 | TODO |
Tt4d | Spécifier le(s) scénario(s) de test de l'issue 8 dans le fichier Test4Issue8.md concernant la création d'issue | 8 |  | 0.5 | TODO  |  
Tt5d | Spécifier le(s) scénario(s) de test de l'issue 11 dans le fichier Test5Issue11.md concernant le listage des issues d'un projet | 11 |  | 0.5 | TODO  | 
Tt1i | Créer le(s) test(s) du fichier Test1Issue3.md concernant le listage des projets | 3 | Tt1d | 0.5 | TODO  |
Tt2i | Créer le(s) test(s) du fichier Test2Issue4.md concernant l'ajout de projets | 4 | Tt2d | 0.5 | TODO  | 
Tt3i | Créer le(s) test(s) du fichier Test3Issue5.md concernant la modification d'un projet| 5 | Tt3d | 0.5 | TODO |
Tt4i | Créer le(s) test(s) du fichier Test4Issue8.md concernant la création d'issue | 8 | Tt4d | 0.5 | TODO  |  
Tt5i | Créer le(s) test(s) du fichier Test5Issue11.md concernant le listage des issues d'un projet | 11 | Tt5d | 0.5 | TODO  | 
-- | -- BDD --
Tc1d | Spécifier les champs de la table Projet en base de donnée dans le fichier SpecBDD.md | 3, 4, 5 |  | 0.5 | TODO
Tc1i | Créer un fichier table_projet.sql, créant une nouvelle table Projet à la base de donnée CP. | 3, 4, 5 | Tc1d | 0.5 | TODO 
Tc2d | Spécifier les champs de la table Issue en base de donnée dans le fichier SpecBDD.md | 8,11 |  | 0.5 | TODO 
Tc2i | Créer un fichier table_issue.sql créant une nouvelle table Issue à la base de donnée CP.  | 8,11 | Tc2d | 0.5 | TODO 
Tc3d | Spécifier les champs de la table Utilisateur en base de donnée dans le fichier SpecBDD.md | 3, 4 |  | 0.5 | TODO 
Tc3i | Créer un fichier table_utilisateur.sql créant une nouvelle table Utilisateur à la base de donnée CP.  | 8,11 | Tc3d | 0.5 | TODO 
-- | -- Application (Middle) --
Tc4d | Spécifier les méthodes fournies par le DAO ProjetDAO.js dans le fichier SpecApp.md | 3, 4, 5 | | 0.5 | TODO
Tc4i | Implémenter la classe ProjetDAO.js en suivant le fichier SpecApp.md | 8, 11 | Tc4d | 0.5 | TODO
Tc5d | Spécifier les méthodes fournies par le DAO IssueDAO.js dans le fichier SpecApp.md | 3, 4, 5 | | 0.5 | TODO
Tc5i | (Design Tc5d) Implémenter la classe IssueDAO.js en suivant le fichier SpecApp.md | 3, 4, 5 | Tc5d | 0.5 | TODO
Tc5d | Spécifier les méthodes fournies par le DAO UtilisateurDAO.js dans le fichier SpecApp.md | 3, 4, 5 | | 0.5 | TODO
Tc5i | (Design Tc5d) Implémenter la classe UtilisateurDAO.js en suivant le fichier SpecApp.md | 3, 4, 5 | Tc5d | 0.5 | TODO