---
title: Structure
sidebar:
  label: "Structure des projets"
  order: 3
---

La structure du projet **Echo** est divisée en deux parties principales : **Echo Front** (frontend) et **Echo Back** (backend). Voici une vue d’ensemble de leur organisation respective avec des détails issus des arborescences fournies.

---

### **1. Echo Front (Frontend)**

Arborescence :

```
/echo-front
├── app.vue               # Point d'entrée principal de l'application
├── assets                # Fichiers statiques comme CSS et images
│   └── base.css          # Styles globaux
├── components            # Composants Vue.js organisés en atoms et molecules
│   ├── atoms             # Composants simples (ex : boutons, icônes)
│   └── molecules         # Composants complexes (ex : panels, datatables)
├── composables           # Fonctions réutilisables (ex : hooks Vue)
│   └── useCompanyConfig.ts
├── layouts               # Gabarits de pages (ex : default, login)
├── middleware            # Gestion des mécanismes globaux (ex : auth)
│   └── auth.global.ts
├── pages                 # Pages principales de l'application
│   ├── company           # Pages liées à l'entreprise (ex : grilles salariales)
│   ├── simulators        # Simulateurs (ex : coûts, augmentations)
│   ├── tools             # Outils divers (ex : avatars, signatures)
│   └── index.vue         # Page d'accueil
├── public                # Assets publics accessibles directement (favicon, icônes)
├── store                 # Gestion de l'état global (Pinia)
│   ├── auth.store.ts     # Authentification
│   ├── company           # État relatif à l'entreprise (ex : revenus)
│   └── tools             # Outils divers (ex : avatars, conferences)
├── types                 # Définitions TypeScript
│   ├── absence.d.ts      # Types pour les absences
│   ├── event.d.ts        # Types pour les événements
├── vitest.config.ts      # Configuration des tests unitaires
├── nuxt.config.ts        # Configuration Nuxt.js
└── tsconfig.json         # Configuration TypeScript
```

#### **Points clés**
- **Framework** : Construit avec Nuxt 3 (Vue 3).
- **Organisation** : Structure modulaire basée sur des principes de component-driven development.
- **Tests** : Utilisation de Vitest pour les tests unitaires.

---

### **2. Echo Back (Backend)**

Arborescence :

```
/echo-back
├── src                  # Code source principal
│   ├── absences         # Module de gestion des absences
│   │   ├── application  # Services et logique métier
│   │   ├── domain       # Entités et interfaces de domaine
│   │   └── infrastructure # Contrôleurs, DTO, mappers et repositories
│   ├── celebrations     # Gestion des célébrations (anniversaires, arrivées, anciennetés)
│   │   ├── application  # Services et logique métier
│   │   ├── domain       # Entités et interfaces de domaine
│   │   └── infrastructure # Contrôleurs, DTO, mappers et repositories
│   ├── common           # Utilitaires et configurations globales
│   │   ├── domains      # Entités globales
│   │   └── filters      # Gestion des exceptions
│   ├── conference       # Module pour les conférences
│   │   ├── application  # Services et logique métier
│   │   ├── domain       # Entités et interfaces de domaine
│   │   └── infrastructure # Contrôleurs, DTO, mappers et repositories
│   ├── notes            # Module pour les notes personnelles
│   │   ├── application  # Services et logique métier
│   │   ├── domain       # Entités et interfaces de domaine
│   │   └── infrastructure # Contrôleurs, DTO, mappers et repositories
│   ├── recruitment      # Gestion des recrutements
│   │   ├── application  # Services et logique métier
│   │   ├── domain       # Entités et interfaces de domaine
│   │   └── infrastructure # Contrôleurs, DTO, mappers et repositories
│   └── resources        # Gestion des ressources de l'entreprise
│       ├── application  # Services et logique métier
│       ├── domain       # Entités et interfaces de domaine
│       └── infrastructure # Contrôleurs, DTO, mappers et repositories
├── test                 # Tests end-to-end
│   └── jest-e2e.json    # Configuration des tests E2E avec Jest
├── tsconfig.build.json  # Configuration TypeScript pour le build
├── nest-cli.json        # Configuration CLI NestJS
├── ormconfig.json       # Configuration TypeORM
├── main.ts              # Point d’entrée de l’application
└── package.json         # Gestion des dépendances
```

#### **Points clés**
- **Framework** : Construit avec NestJS, un framework modulaire pour Node.js.
- **Architecture** : Basée sur des principes DDD (Domain-Driven Design).
- **Gestion des données** : TypeORM pour les interactions avec la base de données.
- **Tests** : Jest pour les tests unitaires et end-to-end.

---

### **3. Communication entre les deux parties**

- **Frontend → Backend** :
  - Les requêtes HTTP gèrent les interactions via des endpoints REST.
  - Les URLs sont configurées dans les fichiers `.env` respectifs.

- **Documentation API** :
  - Accessible via Swagger au backend : `http://localhost:3001/api`.

---

## **Conclusion**
La structure du projet **Echo** reflète une séparation claire entre frontend et backend, tout en favorisant une collaboration efficace et une maintenance simplifiée. Chaque partie est optimisée pour des objectifs spécifiques, alignée avec les meilleures pratiques modernes.

