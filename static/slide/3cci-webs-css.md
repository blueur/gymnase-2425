# CSS

Pages Web statiques

---

## CSS

- &shy;<!-- .element: class="fragment" --> **C**ascading **S**tyle **S**heets
- &shy;<!-- .element: class="fragment" --> **Mise en forme** de la page
- &shy;<!-- .element: class="fragment" --> Fichier `.css`

```css []
p {
  color: red;
}

h1 {
  font-size: 24px;
}
```

<!-- .element: class="fragment" -->

---

## Règle CSS

![](https://web.dev/static/learn/css/selectors/image/an-image-a-css-rule-the-ced38545b4bec.svg?hl=fr)

https://web.dev/learn/css/selectors?hl=fr <!-- .element: class="reference" -->

- &shy;<!-- .element: class="fragment" --> Un fichier `.css` peut contenir plusieurs **règles**
  - &shy;<!-- .element: class="fragment" --> Un **sélecteur** : **où** appliquer la règle
  - &shy;<!-- .element: class="fragment" --> Un bloc de **déclarations** délimité par `{}` : **quoi** appliquer
    - &shy;<!-- .element: class="fragment" --> **Propriété** : **quoi** changer
    - &shy;<!-- .element: class="fragment" --> **Valeur** : **comment** changer

---

## Application

- Trois manières d'appliquer du CSS
  - &shy;<!-- .element: class="fragment" --> **Inline** : attribut `style`
  - &shy;<!-- .element: class="fragment" --> **Interne** : balise `<style>`
  - &shy;<!-- .element: class="fragment" --> **Externe** : fichier `.css`
- &shy;<!-- .element: class="fragment" --> **Priorité** : Inline > Interne > Externe
- &shy;<!-- .element: class="fragment" --> **Cascade** : règles plus spécifiques > règles plus générales
- &shy;<!-- .element: class="fragment" --> **Héritage** : les enfants héritent des propriétés des parents

---

### Inline

```html [5]
<!doctype html>
<html>
  <head></head>
  <body>
    <p style="color: red;">Texte rouge</p>
  </body>
</html>
```

- &shy;<!-- .element: class="fragment" --> Application **ponctuelle** pour un **élément**
- &shy;<!-- .element: class="fragment" --> Difficile à **maintenir** et à **réutiliser** → **déconseillé**

---

### Interne

```html [4-8]
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Texte rouge</p>
  </body>
</html>
```

- &shy;<!-- .element: class="fragment" --> Application **ponctuelle** pour une **page**
- &shy;<!-- .element: class="fragment" --> **Mélangé** avec le contenu → **déconseillé**

---

### Externe

```html [4]
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p>Texte rouge</p>
  </body>
</html>
```

- &shy;<!-- .element: class="fragment" --> Application **globale** pour un **site**
- &shy;<!-- .element: class="fragment" --> **Séparé** du contenu et **réutilisable** → **recommandé**

---

## Chargement par le navigateur

![](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)

https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/How_CSS_works <!-- .element: class="reference" -->
