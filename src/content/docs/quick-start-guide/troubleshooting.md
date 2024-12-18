---
title: "Résolution des problèmes"
sidebar:
  label: "Résolution des problèmes"
  order: 4
---

Cette section propose des solutions aux problèmes couramment rencontrés lors de l'installation ou de l'exécution de **Echo Front** et **Echo Back**.

---

### **1. Problèmes liés à l'installation des dépendances**

#### **Problème** : Erreur lors de l'exécution de `npm install`.
- **Message d’erreur** :
  - `EACCES`, `EPERM`, ou `Cannot find module`.

- **Solutions** :
  - Assurez-vous que votre version de **Node.js** est compatible avec le projet (voir fichier `package.json`).
  - Supprimez les fichiers `node_modules` et `package-lock.json`, puis réinstallez :
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```
  - Si l’erreur persiste, essayez d'utiliser Yarn comme alternative :
    ```bash
    yarn install
    ```

---

### **2. Problèmes de port occupé**

#### **Problème** :
- Erreur `EADDRINUSE` (Port déjà utilisé).

- **Solutions** :
  - Identifiez le processus qui utilise le port :
    - Sous Linux/macOS :
      ```bash
      lsof -i :3000
      kill -9 <PID>
      ```
    - Sous Windows :
      ```bash
      netstat -ano | findstr :3000
      taskkill /PID <PID> /F
      ```
  - Changez le port dans le fichier `.env` correspondant :
    ```plaintext
    PORT=4000
    ```
  - Redémarrez le serveur avec la nouvelle configuration.

---

### **3. Problèmes de compilation du frontend**

#### **Problème** :
- Erreur `SyntaxError` ou `Module not found`.

- **Solutions** :
  - Vérifiez que toutes les importations sont correctes et sensibles à la casse :
    ```javascript
    import MyComponent from './components/MyComponent.vue';
    ```
  - Supprimez le cache de compilation :
    ```bash
    npm run dev -- --force
    ```
  - Assurez-vous que tous les fichiers requis sont présents dans les dossiers appropriés.

---

### **4. Problèmes d'API dans le backend**

#### **Problème** : L’API retourne une erreur 404 ou 500.

- **Solutions** :
  - Assurez-vous que le backend est bien démarré :
    ```bash
    npm run start:dev
    ```
  - Contrôlez que l'URL de l'API est correcte dans le fichier `.env` du frontend :
    ```plaintext
    VITE_API_URL=http://localhost:3001
    ```
  - Vérifiez les logs du backend pour identifier les erreurs :
    ```bash
    tail -f logs/backend.log
    ```

---

### **5. Problèmes de gestion des tests**

#### **Problème** : Les tests unitaires ou end-to-end échouent.

- **Solutions pour le frontend** :
  - Exécutez les tests avec Vitest et corrigez les erreurs signalées :
    ```bash
    npm run test
    ```

- **Solutions pour le backend** :
  - Utilisez Jest pour relancer les tests :
    ```bash
    npm run test
    ```
  - Assurez-vous que les mocks ou les données de test sont configurés correctement.

---

### **6. Autres problèmes courants**

#### **Le serveur ne se recharge pas automatiquement**
- **Solution** : Vérifiez que le mode watch est activé :
  ```bash
  npm run start:dev
  ```

#### **Erreur de formatage du code**
- **Solution** :
  - Utilisez les commandes suivantes pour corriger les erreurs ESLint ou Prettier :
    ```bash
    npm run lint
    npm run format
    ```

#### **Dépendances manquantes après un pull**
- **Solution** : Réinstallez les dépendances :
  ```bash
  npm install
  ```