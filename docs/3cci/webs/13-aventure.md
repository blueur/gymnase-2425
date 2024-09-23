# Aventure

:::note[Objectifs]

Création d'un jeu d'aventure en HTML et CSS.

:::

## Mise en place

- Créer un dossier `web-aventure` dans le répertoire `OneDrive/3cci/informatique`.
  ```txt {4}
  OneDrive/
  └── 3cci/
      └── informatique/
          └── web-aventure/
          └── web-css/
          └── web-html/
  ```
- Ouvrir le dossier `web-aventure` dans Visual Studio Code.

## Aventure

Le but est de créer un jeu d'aventure en HTML et CSS : à chaque étape, le joueur doit choisir entre plusieurs options qui le mèneront à une autre étape.

Une histoire peut être résumée par un organigramme tel que :

```mermaid
flowchart TD
  Rangement --> |cave| Cave
  Rangement --> |grenier| Grenier
  Cave --> |dépoussiérer| Passage
  Cave --> |trier| Trésor
  Grenier --> |trier| Trésor
  Grenier --> |cartons| Souvenirs
  Grenier --> |livres| Lecture
```

### HTML

- Créer un fichier `index.html` dans le dossier `web-aventure` :
  ```html title="index.html" showLineNumbers
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Aventure</title>
    </head>
    <body>
      <h1>Rangement</h1>
      <p>
        Vous décidez de faire du rangement dans votre maison. Par où commencer ?
      </p>
      <ul>
        <li>Cave</li>
        <li>Grenier</li>
      </ul>
    </body>
  </html>
  ```
- Créer un fichier `cave.html` dans le dossier `web-aventure` :
  ```html title="cave.html" showLineNumbers
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Aventure</title>
    </head>
    <body>
      <h1>Cave</h1>
      <p>Vous êtes à la cave. Que voulez-vous faire ?</p>
      <ul>
        <li>Dépoussiérer</li>
        <li>Trier les affaires</li>
      </ul>
    </body>
  </html>
  ```
- Lorsqu'on clique sur la cave dans `index.html`, on aimerait être redirigé vers `cave.html` :
  ```html title="index.html"
  <li><a href="cave.html">Cave</a></li>
  ```
- De manière similaire, lorsqu'on choisit de dépoussiérer la cave, on aimerait être redirigé vers `passage.html` dont le contenu est :
  ```html title="passage.html"
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Aventure</title>
    </head>
    <body>
      <h1>Passage</h1>
      <p>
        En dépoussiérant, vous découvrez une petite trappe. En l'ouvrant, vous
        trouvez un passage secret qui vous mènera vers d'autres aventures...
      </p>
    </body>
  </html>
  ```
- Créer les fichiers `tresor.html`, `grenier.html`, `souvenirs.html` et `lecture.html` avec les contenus suivants :
  - `tresor.html` :
    - Vous tombez sur un coffre rempli de pièces d'or. Faites en bon usage !
  - `grenier.html` :
    - Vous êtes dans le grenier. Que voulez-vous faire ?
      - Trier les affaires
      - Trier les cartons
      - Trier les livres
  - `souvenirs.html` :
    - Vous retrouvez plein de souvenirs d'enfance !
  - `lecture.html` :
    - Vous vous plongez dans la lecture d'un vieux livre.

### CSS

- Créer un fichier `styles.css` dans le dossier `web-aventure` :
  ```css title="styles.css"
  body {
    background-color: #fdf6e3;
    color: #657b83;
  }
  p {
    font-size: 20px;
  }
  ```
- Appliquer le style à tous les fichiers HTML en ajoutant la ligne suivante dans le `head` :
  ```html
  <link rel="stylesheet" href="styles.css" />
  ```
- Appliquer les changements suivants dans le style (rechercher avec un moteur de recherche comment faire) :
  - Couleur du titre : #268bd2 (bleu)
  - Couleur des liens : #dc322f (rouge)
  - Taille de police des liens : 18 pixels
  - Couleur des liens au survol : #6c71c4 (violet)
  - Enlever le soulignement des liens
  - Changer le symbole de la liste à puce en carré
  - Changer la police de caractères de toute la page ([indice](https://www.w3schools.com/cssref/css_websafe_fonts.php))

### Votre aventure

- Commencer par dessiner l'organigramme de votre aventure avec environ 7 étapes.
- Créer un dossier `projet-aventure` dans le répertoire `OneDrive/3cci/informatique`.
- Créer les fichiers HTML et CSS nécessaires pour votre aventure.

Projets réalisés dans d'autres classes :

- [Gymnase 2023-2024](https://gymnase-2324.davidtang.ch/2m/programmation/projet-web-rendu)
