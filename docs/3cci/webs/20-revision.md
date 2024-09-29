# Révision

:::note[Objectifs]

Comment créer un site web statique ?

:::

- Revoir les [Kahoot!](https://create.kahoot.it/course/a4d8083e-9fe7-403e-aefa-8ed11af05c45)
- Support de cours complémentaires :
  - [Commencer avec le HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
  - [Fondamentaux du texte HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
  - [Création d'hyperliens](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
  - [Les images en HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - [Sélecteurs CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Selectors)
  - [Réseaux](https://apprendre.modulo-info.ch/resx/index.html)

## URL

Lister et nommer les différentes parties de l'URL suivante :

https://fr.wikipedia.org/wiki/Gymnase_(Suisse)#Bibliographie

<details>
<summary>Solution</summary>

- Protocole : `https`
- Nom de domaine : `fr.wikipedia.org`
  - Domaine de troisième niveau (sous-domaine) : `fr`
  - Domaine de deuxième niveau (domaine) : `wikipedia`
  - Domaine de premier niveau (extension) : `org`
- Chemin : `/wiki/Gymnase_(Suisse)`
- Fragment : `#Bibliographie`

</details>

- Quelle partie doit-on regarder pour savoir à qui appartient le site web ?
- À qui et pourquoi ?
- Comment changer la langue du site en modifiant l'URL ?

<details>
<summary>Solution</summary>

- Domaine : `fr.wikipedia.org`
- Wikipedia loue le nom de domaine `wikipedia.org` et l'a configuré pour que `fr.wikipedia.org` pointe vers ses serveurs.
- En changeant `fr` par `en` dans le domaine : `en.wikipedia.org`

</details>

Lister et nommer les différentes parties de l'URL suivante :

https://www.instagram.com/p/CxfyzDJt0A8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==

<details>
<summary>Solution</summary>

- Protocole : `https`
- Nom de domaine : `www.instagram.com`
  - Domaine de troisième niveau (sous-domaine) : `www`
  - Domaine de deuxième niveau (domaine) : `instagram`
  - Domaine de premier niveau (extension) : `com`
- Paramètres : `?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`
  - 2 paramètres :
    - `utm_source=ig_web_copy_link`
    - `igshid=MzRlODBiNWFlZA==`

</details>

Pourrait-on nettoyer le lien des traqueurs ? Si oui, comment ?

<details>
<summary>Solution</summary>

Les deux paramètres sont des traqueurs. On peut les supprimer pour nettoyer le lien : https://www.instagram.com/p/CxfyzDJt0A8/

- `utm_source` indique la source de la visite (paramètre UTM). Ici, c'est un lien copié depuis la version web d'Instagram.
- `igshid` est probablement un acronyme pour "Instagram Share ID". C'est un identifiant unique pour chaque visiteur. Il permet de suivre les visites d'un même utilisateur.

</details>

## Nom de domaine

Quel est le rôle du DNS lorsqu'on tape une URL dans la barre d'adresse du navigateur ?

<details>
<summary>Solution</summary>

Le DNS (Domain Name System) est un service qui permet de traduire un nom de domaine en adresse IP.
Lorsqu'on tape une URL dans la barre d'adresse du navigateur, le navigateur envoie une requête DNS pour obtenir l'adresse IP du serveur qui héberge le site web.
Puis, il envoie une requête HTTP à cette adresse IP pour récupérer le contenu du site.

</details>

À quoi sert un nom de domaine ?

<details>
<summary>Solution</summary>

Un nom de domaine permet d'associer un nom facilement mémorisable à une adresse IP.
Cela permet de simplifier l'accès aux sites web pour les utilisateurs.
Par exemple, il est plus facile de se souvenir de `google.com` que de `216.58.209.46`.

</details>

## HTML + CSS

Nous avons un dossier contenant un fichier HTML et un fichier CSS :

```txt
site/
├── index.html
└── style.css
```

```txt title="index.html"
<!doctype html>
<html>
  <head>
    <title>Mon premier site web</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Titre principal
    <p>Ceci est un paragraphe.<p>
    <a href="Un lien">https://www.eduvaud.ch/</a>
    <img src="image.jpg" alt="Une image" />
</html>
```

```txt title="style.css"
body
  background-color: white;
  color: red;
}

h1 {
  font-size: 24p
  color: blue

p {
  font-size=16px;
  color: green;
}
```

Corriger les erreurs dans le code HTML.

<details>
<summary>Solution</summary>

```html title="index.html"
<!doctype html>
<html>
  <head>
    <title>Mon premier site web</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Titre principal</h1>
    <p>Ceci est un paragraphe.</p>
    <img src="image.jpg" alt="Une image" />
  </body>
</html>
```

- La balise `<h1>` n'est pas fermée.
- La balise fermante `</p>` est manquante.
- Le texte du lien doit être entre les balises `<a>` et `</a>`.
- L'attribut `href` du lien doit contenir une URL valide.
- La balise `<body>` n'est pas fermée.

</details>

Corriger les erreurs dans le code CSS.

<details>
<summary>Solution</summary>

```css
body {
  background-color: white;
  color: black;
}

h1 {
  font-size: 24px;
  color: blue;
}

p {
  font-size: 16px;
  color: green;
}
```

- Les accolades `{}` doivent être utilisées pour délimiter les règles CSS.
- Les propriétés CSS doivent être séparées par des `;`.
- Les valeurs des propriétés CSS doivent être séparées par des `:`.
- Les unités de mesure doivent être écrites correctement (`px`).

</details>

Malgré les corrections, le code CSS ne s'applique pas à la page HTML. Pourquoi ?

<details>
<summary>Solution</summary>

Le lien vers le fichier CSS est incorrect dans le fichier HTML.

```html title="index.html"
<link rel="stylesheet" href="styles.css" />
```

Le nom du fichier CSS est `style.css`, pas `styles.css`.

- Soit renommer le fichier CSS en `styles.css`.
- Soit corriger le nom du fichier dans le lien.

</details>
