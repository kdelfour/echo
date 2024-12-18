---
title: "Installation du projet"
sidebar:
  label: "Installation"
  order: 2
---
## 2.2 Installation du projet

Pour installer et configurer **Echo** sur votre environnement local, vous devrez installer et exécuter les deux parties du projet : **Echo Front** et **Echo Back**. Suivez les étapes ci-dessous pour chaque dépôt.

---

### **1. Installation du frontend**

#### **Cloner le dépôt**
Récupérez le code source du frontend en clonant le dépôt GitHub suivant :

```bash
git clone https://github.com/maxds-lyon/echo-front.git
cd echo-front
```

#### **Installer les dépendances**

```bash
npm install
```

#### **Configurer les variables d’environnement**
Créez un fichier `.env` à partir de l'exemple fourni :

```bash
cp .env.example .env
```

Ensuite, configurez les valeurs appropriées, par exemple :

```env
# Company informations
COMPANY_NAME = COMPANY_NAME
COMPANY_LOGO = 'https://placehold.co/128x128'

# Google account
GOOGLE_CLIENT_ID=your_google_client_id

# Echo backend
ECHO_BACKEND_URL=http://localhost:3001
```

#### **Démarrer le frontend en mode développement**

```bash
npm run dev
```

L'interface utilisateur sera accessible à l'adresse suivante :

```plaintext
http://localhost:3000
```

---

### **2. Installation du backend**

#### **Cloner le dépôt**
Récupérez le code source du backend en clonant le dépôt GitHub suivant :

```bash
git clone https://github.com/maxds-lyon/echo-back.git
cd echo-back
```

#### **Installer les dépendances**

```bash
npm install
```

#### **Configurer les variables d’environnement**
Créez un fichier `.env` à partir de l'exemple fourni :

```bash
cp .env.example .env
```

Configurez les valeurs nécessaires pour le backend, par exemple :

```env
# Boondmanager
BOONDMANAGER_APP_KEY=your_app_key
BOONDMANAGER_CLIENT_TOKEN=your_client_token
BOONDMANAGER_USER_TOKEN=your_user_token
BOONDMANAGER_BASE_URL=your_base_url

# Google
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_URL_PUBLIC_CERTS=your_public_certs_url
GOOGLE_URL_ISSUER=your_issuer_url

# Events
EVENTS_SOURCE_URL='https://developers.events/all-events.json'
```

#### **Démarrer le backend en mode développement**

```bash
npm run start:dev
```

L'API sera accessible à l'adresse suivante :

```plaintext
http://localhost:3001
```

Vous pourrez accéder à la documentation Swagger via :

```plaintext
http://localhost:3001/api
```

---

### **3. Build pour la production**

#### **Frontend**
Pour générer un build optimisé pour la production, exécutez dans le répertoire `echo-front` :

```bash
npm run build
```

Les fichiers de production seront placés dans le dossier `dist`.

#### **Backend**
Dans le répertoire `echo-back`, exécutez :

```bash
npm run build
```

Cette commande prépare le backend pour être déployé.

---

### **4. Démarrer en mode production**

#### **Frontend**
Pour démarrer le frontend en mode production :

```bash
npm run preview
```

#### **Backend**
Pour démarrer le backend en mode production :

```bash
npm run start
```

---

## **Conclusion**
Vous avez maintenant configuré et installé les deux parties de **Echo**. Le frontend est accessible sur le port configuré (par défaut `3000`) et le backend sur `3001`. Vous êtes prêt à utiliser ou développer la plateforme.

