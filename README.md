# Doodle Front, Hélène Heinlé et Emile Georget, M1 MIAGE, groupe 1B


## Contexte
L'objectif de ce projet était de créer une apllication permettant de réaliser des sondages afin d'organiser des réunions entre plusieurs participants. Ce fonctionnement est inspiré de la plateforme existante "Doodle".
Cette partie front-end correspond à l'IHM de l'application. ([back end](https://github.com/Equilat/testjpa))

## Composants 
Notre interface est composée de plusieurs composants.

La façon d'y accéder est décrite dans le fichier [app-routing.module.ts](https://github.com/Equilat/DoodleFront/blob/master/src/app/app-routing.module.ts). On voit les urls permettant de voir les composants.

Les composants que nous avons créés doivent communiquer entre entre eux pour se passer des informations.
Pour faire cela, nous avons créé un service https://github.com/Equilat/DoodleFront/blob/master/src/app/share.service.ts. Il contient un attribut Observable. Les deux composants qui communiquent, suivent sont état en "s'inscrivant" à cet attribut. Ainsi, quand le premier composant change la donnée à transmettre, le second obtient cette nouvelle donnée.

## Liaison avec l'API 
Afin de créer, afficher, modifier et supprimer les données de la base de données, le front end communique avec l'API REST décrite dans le [back end](https://github.com/Equilat/testjpa). 

Ainsi, selon les actions de l'utilisateur, le front end va construire des requêtes HTTP ciblant les URLs décrites dans l'API REST. Ces requêtes sont envoyées depuis le service [doodle-api.service.ts](https://github.com/Equilat/DoodleFront/blob/master/src/app/doodle-api.service.ts).

## Point d'avancement
Par manque de temps, nous n'avons pas pu finir la partie front du projet. La partie back reste testable avec des outils comme [Postman](https://www.postman.com/).



Ce projet a été généré avec [Angular CLI] (https://github.com/angular/angular-cli) version 8.3.23.

## Serveur de développement

Exécutez `ng serve` pour un serveur de développement. Accédez à `http: // localhost: 4200 /`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

## Génération de code

Exécutez `ng generate composant nom-composant` pour générer un nouveau composant. Vous pouvez également utiliser `ng generate directive | pipe | service | class | guard | interface | enum | module`.

## Build

Exécutez `ng build` pour construire le projet. Les artefacts de construction seront stockés dans le répertoire `dist /`. Utilisez l'indicateur `--prod` pour une version de production.

## Exécution de tests unitaires

Exécutez `ng test` pour exécuter les tests unitaires via [Karma] (https://karma-runner.github.io).

## Exécution de tests de bout en bout

Exécutez `ng e2e` pour exécuter les tests de bout en bout via [Protractor] (http://www.protractortest.org/).

## Aide supplémentaire

Pour obtenir plus d'aide sur l'Angular CLI, utilisez `ng help` ou allez consulter [Angular CLI README] (https://github.com/angular/angular-cli/blob/master/README.md).
