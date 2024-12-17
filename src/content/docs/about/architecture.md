---
title: Architecture du système Echo
description: Une exploration détaillée de l'architecture frontale et dorsale du système Echo.
---

## Front-end
Le front-end de Echo est élaboré selon une approche moderne et modulaire, intégrant rigoureusement les principes du Component-Driven Development et du Software Craftsmanship. Les technologies clés sont :

- **Vue 3** : Un framework réactif qui optimise l'expérience utilisateur grâce à sa performance et sa facilité de réactivité.
- **Nuxt 3** : Une surcouche de Vue 3 qui améliore le rendu côté serveur (SSR) et enrichit l'expérience de développement avec des outils avancés.
- **Nuxt UI** : Bibliothèque de composants uniformes et optimisés pour accélérer le développement tout en maintenant une cohérence visuelle.
- **Tailwind CSS** : Un framework CSS qui favorise un design rapide et adaptable, facilitant la maintenance et la personnalisation à grande échelle.
- **Google Authorization** : Implémentation de l'authentification via OAuth 2.0, assurant une sécurité renforcée pour l'accès aux fonctionnalités.

Cette architecture modulaire assure une maintenance simplifiée et une adaptabilité accrue, alignée avec les principes de clean architecture et de clean code.

---

## Back-end
Le back-end de Echo utilise **NestJS**, un framework Node.js conçu pour supporter des architectures robustes et évolutives.

- **Sécurité** : Protection renforcée par un token Bearer Google, authentifié directement via l’API Google pour un accès sécurisé.
- **Architecture hexagonale** : Séparation claire et structurée des préoccupations, augmentant la flexibilité et la testabilité. Cette architecture favorise une indépendance entre les interfaces utilisateurs, les cas d'utilisation et les implémentations techniques.
- **Connexion avec Boondmanager** : Intégration poussée avec l’API de Boondmanager pour une synchronisation efficace et une exploitation optimale des données.
- **Principes du Software Craftsmanship** : Développement axé sur la qualité, la maintenabilité et la simplicité, avec une attention particulière à la lisibilité et la fiabilité du code grâce à l'application des principes SOLID.

---

## Principes fondamentaux

1. **Component-Driven Development** : Promouvoir un développement modulaire par la décomposition de l'interface utilisateur en composants distincts et réutilisables.
2. **Software Craftsmanship** : Priorité donnée à la qualité du code, avec une emphase sur les tests automatisés et une documentation exhaustive pour garantir la fiabilité et la pérennité du produit.
3. **Sécurité et scalabilité** : Conception robuste grâce à des mécanismes d'authentification avancés et une architecture qui soutient l'évolutivité, répondant ainsi aux exigences des entreprises modernes.

Echo combine ces technologies et méthodologies pour offrir une solution performante, durable et centrée sur l'utilisateur, tout en adhérant aux normes les plus strictes de sécurité et de qualité.