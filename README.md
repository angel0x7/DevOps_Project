# DevOps_Project


Ce projet implémente un service web affichant un CV avec une base de données Redis, utilisation de l'automatisation CI/CD et infrastructure as a code (IaC).

###  Technologies Clés

| Domaine | Technologies Utilisées |
| :--- | :--- |
| **Application** | Node.js, Express.js, Redis (pour le compteur de vues) |
| **CI/CD** | GitHub Actions / GitLab CI (À spécifier) |
| **IaC** | Vagrant, Ansible |


##  1. Démarrage Local de l'Application

Ces instructions vous permettent de lancer l'application sur votre machine hôte pour le développement.

### Prérequis

* Node.js (version 18+)
* npm
* Redis (exécuté localement via Docker ou installé nativement)
* 
### Prérequis

* Node.js (version 18+)
* npm
* Redis (exécuté localement via Docker ou installé nativement)

### Étapes

1.  **Clonage du dépôt :**
    ```bash
    git clone [https://github.com/angel0x7/DevOps_Project.git](https://github.com/angel0x7/DevOps_Project.git)
    cd DevOps_Project
    ```

2.  **Installation des dépendances :**
    ```bash
    npm install
    ```

3.  **Configuration de l'environnement :**
    Créez un fichier `.env` à la racine du projet et ajoutez la variable de connexion Redis (si elle est utilisée) :

    ```ini
  
    PORT=3000
    REDIS_URL=redis://localhost:6379
    ```

4.  **Lancement de l'application :**
    ```bash
    npm run dev 
    ```
    L'application devrait être accessible à `http://localhost:3000/`.


##  2. Tests et Qualité

La suite de tests est essentielle pour l'Intégration Continue (CI).

### Exécution

Pour lancer l'ensemble des tests unitaires, de configuration et d'API :

```bash
npm run test

```
## 3.Configuration d'un environnement virtuel 

Télégargement de la box , créer la VM 
``` bash
 vagrant up
 ```
 Connexion ssh
 ``` bash
 vagrant ssh
 ```

 ``` bash
 vagrant provision
 ```