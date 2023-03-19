# Choix techniques

Ce fichier est ici pour défendre les choix techniques effectués durant ce projet :

## Stack technique

- NodeJS
- PostgreSQL
- Prisma (ORM)
- Docker

## Pourquoi ?

- NodeJS : Tout d'abord, il était obligatoire pour ce module cependant c'est aussi un langage que je connais bien et que j'aime beaucoup.
- PostgreSQL : J'ai choisi PostgreSQL car c'est un SGBD répandu sur lequel je n'avais jamais encore travaillé et c'était l'occasion pour moi de découvir (bien qu'il soit ressemblant à MySQL).
- Prisma : J'ai choisi Prisma car c'est (selon moi) le meilleur ORM pour NodeJS. Il est très simple d'utilisation et permet de faire des requêtes très rapidement. Il est aussi très bien documenté et bénéficie d'une communauté très active. De plus, il est compatible avec un large panel de SGBD.
- Docker : Il était recommandé pour ce projet, cepndant c'est un outil que j'utilise beaucoup et que je connais suffisamment pour mes développements persos. Il permet de faire tourner l'application dans un environnement isolé et de ne pas avoir à installer les dépendances sur sa machine.

## Architecture

J'ai choisi de bien traiter uniquement les requêtes http via le controller et de faire le plus de logique métier dans les models afin de bien séparer les responsabilités.
Ainsi, le controller ne fait que récupérer les données, les envoyer au model via le service et renvoyer la réponse au client (ou l'erreur).
Un des avantages de ce choix là est que si le SGBD ou l'ORM devait changer, il suffirait de changer le model sans avoir à toucher au controller puisqu'aucune dépendance liée à la base de données n'y est appelé.
