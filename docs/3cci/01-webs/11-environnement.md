# Environnement

:::note[Objectifs]

Mise en place d'un environnement de développement pour la création de pages Web.

:::

## Navigateur Web

- Changer le navigateur par défaut en **Firefox** ou **Chrome**
  - Pomme (en haut à gauche) > Préférences Système > Général > Navigateur par défaut
- Ne pas utiliser Safari

## OneDrive

- Se connecter sur l'application **OneDrive** avec son compte Eduvaud
  - Ouvrir l'application **OneDrive**
  - Se connecter avec son compte Eduvaud (px00xxx@eduvaud.ch)
- Vérifier que les fichiers sont synchronisés
  - Ouvrir le dossier `OneDrive` dans le Finder
- Créer l'arborescence `3cci/informatique/web-html` dans
  - Créer un dossier `3cci` dans le dossier `OneDrive`
  - Créer un dossier `informatique` dans le dossier `3cci`
  - Créer un dossier `web-html` dans le dossier `informatique`
    ```
    OneDrive/
    └── 3cci/
        └── informatique/
            └── web-html/
    ```

## Présentation

- Créer un nouveau document Word dans le dossier `informatique` intitulé **`presentation-prenom-nom.docx`** (avec son prénom et nom en minuscule, sans accent et séparé par des tirets)
- Dans le fichier Word, écrire une brève présentation de soi avec ses centres d'intérêts (loisirs, passions), pourquoi avoir choisi le gymnase, etc.
- Enregistrer le document Word
- Exporter le document Word en PDF
- Vérifier que le document Word et le document PDF sont synchronisés dans OneDrive

```
OneDrive/
└── 3cci/
    └── informatique/
        └── presentation-prenom-nom.docx
        └── presentation-prenom-nom.pdf
        └── web-html/

```

- Sur l'application desktop Teams, dans le **devoir** `Présentation`, rendre le fichier PDF de présentation
  - Cliquer sur **`Joindre`** > `OneDrive` > sélectionner le fichier PDF > `Joindre`
  - Cliquer sur **`Remettre`** pour rendre le travail

## Raccourcis clavier

Les raccourcis clavier sont des combinaisons de touches qui permettent d'effectuer des actions bien plus rapidement. Voici quelques raccourcis clavier utiles :

- `Cmd + C` : Copier
- `Cmd + V` : Coller
- `Cmd + X` : Couper
- `Cmd + Z` : Annuler
- `Cmd + S` : Enregistrer
- `Cmd + A` : Tout sélectionner
- `Cmd + F` : Rechercher

## Visual Studio Code

- Ouvrir l'application **Visual Studio Code**
- Ouvrir le dossier `web-html` dans Visual Studio Code
  - `Fichier` > `Ouvrir dossier...` > `OneDrive - Eduvaud` > `3c` > `informatique` > `web-html`
- Installer l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) dans Visual Studio Code
  - `Extensions` > Rechercher `Live Server` > `Installer`

## HTML

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
- Ajouter une image à la page Web
  - Créer un dossier `images` dans le dossier `web-html`
  - Télécharger sur Internet une image dans le dossier `images`
  - Afficher l'image dans la page Web avec la balise [`<img>`](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics#images)
- [Baliser du texte](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics#baliser_du_texte)
  - Ajouter deux niveaux de titres
  - Ajouter des paragraphes
  - Créer une liste ordonnée ou non ordonnée
- [Ajouter des liens](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics#liens)
