# HTML

:::note[Objectifs]

Mise en place d'un environnement de développement pour la création de pages Web.

:::

## Cours

<Reaveal name="3cci-webs-html" />

## Exercices

### Navigateur Web

- Changer le navigateur par défaut en **Firefox** ou **Chrome**
  - Pomme (en haut à gauche) > Préférences Système > Général > Navigateur par défaut

### OneDrive

- Se connecter sur l'application **OneDrive** avec son compte Eduvaud
  - Ouvrir l'application **OneDrive** (dans le dossier Applications ou avec la loupe)
  - Se connecter avec son compte Eduvaud (px00xxx@eduvaud.ch)
- Vérifier que les fichiers sont synchronisés
  - Ouvrir le dossier `OneDrive - Eduvaud` dans le Finder
  - Vérifier que les fichiers sont synchronisés (icône verte)
- Créer l'arborescence `3c/informatique/web-html` dans
  - Créer un dossier `3c` dans le dossier `OneDrive - Eduvaud`
  - Créer un dossier `informatique` dans le dossier `3c`
  - Créer un dossier `web-html` dans le dossier `informatique`
    ```
    OneDrive - Eduvaud/
    └── 3c/
        └── informatique/
            └── web-html/
    ```

### Raccourcis clavier

Les raccourcis clavier sont des combinaisons de touches qui permettent d'effectuer des actions bien plus rapidement. Voici quelques raccourcis clavier utiles :

- `Cmd + C` : Copier
- `Cmd + V` : Coller
- `Cmd + X` : Couper
- `Cmd + Z` : Annuler
- `Cmd + S` : Enregistrer
- `Cmd + A` : Tout sélectionner
- `Cmd + F` : Rechercher

### Visual Studio Code

- Ouvrir l'application **Visual Studio Code**
- Ouvrir le dossier `web-html` dans Visual Studio Code
  - `Fichier` > `Ouvrir dossier...` > `OneDrive - Eduvaud` > `3c` > `informatique` > `web-html`
- Installer l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) dans Visual Studio Code
  - `Extensions` > Rechercher `Live Server` > `Installer`

### HTML

- Depuis Visual Studio Code, créer un fichier `index.html` dans le dossier `web-html`
  - `Fichier` > `Nouveau fichier` > `index.html`
    ```
    web-html/
    └── index.html
    ```
- Copier le code HTML suivant dans le fichier `index.html` :
  ```html
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Page Web</title>
    </head>
    <body>
      <h1>Titre de la page</h1>
      <p>Contenu de la page</p>
    </body>
  </html>
  ```
- Ouvrir le fichier `index.html` avec **Live Server**
  - Clic droit sur le fichier `index.html` > `Ouvrir avec Live Server`
  - Ou cliquer sur le bouton `Go Live` en bas à droite de Visual Studio Code
- Modifier la page Web et observer les changements
  - Modifier le titre de l'onglet (`title`)
  - Modifier le titre de la page (`h1`)
  - Modifier le contenu de la page (`p`)

## Références

- https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web
- https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3/8061261-creez-votre-premiere-page-web-en-html
