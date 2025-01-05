# Responsive Web Design

:::note[Objectifs]

Comment adapter un site Web selon la taille de l'écran ?

:::

## Cours

<Reveal name="3cci-webd-responsive" />

## Exercices

### Grille Bootstrap

- Faire les exercices 1 à 4 sur [Grille Bootstrap](https://smnarnold.com/exercices/bootstrap/grille-bootstrap).
  - [CodePen](https://codepen.io/smnarnold/pen/bGBpYmE?editors=1000) est un IDE en ligne pour écrire du code HTML, CSS et JavaScript.
  - Modifier uniquement la partie HTML.
  - Redimensionner la fenêtre du navigateur pour voir les changements.
  - Utiliser la [documentation de Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/) pour vous aider.

#### Étapes 1-4

<details>
<summary>Indice 1</summary>

Tout mettre dans un `container`.

<details>
<summary>Indice 1.1</summary>

Utiliser des `row` et des `col`.

<details>
<summary>Solution 1</summary>

```html
<div class="container">
  <div class="row">
    <div class="col">
      <div class="block red"></div>
    </div>
    <div class="col">
      <div class="block blue"></div>
    </div>
    <div class="col">
      <div class="block green"></div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="block yellow"></div>
    </div>
    <div class="col">
      <div class="block purple"></div>
    </div>
    <div class="col">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>
</details>
</details>

<details>
<summary>Indice 2</summary>

Utiliser les classes `col-xl-*` et `col-*` (`*` étant un nombre).

<details>
<summary>Indice 2.1</summary>

Utiliser qu'une seule `row`.

<details>
<summary>Indice 2.2</summary>

Les breakpoints s'appliquent à partir (plus grand) de la largeur spécifiée.

<details>
<summary>Solution 2</summary>

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="block red"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="block blue"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="block green"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="block yellow"></div>
    </div>
    <div class="col-12 col-xl-6">
      <div class="block purple"></div>
    </div>
    <div class="col-12 col-xl-6">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>
</details>
</details>
</details>

<details>
<summary>Indice 3</summary>

Commencer par les plus petits écrans.

<details>
<summary>Solution 3</summary>

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-xl-2">
      <div class="block red"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="block blue"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="block green"></div>
    </div>
    <div class="col-12 col-xl-2">
      <div class="block yellow"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="block purple"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>
</details>

<details>
<summary>Solution 4</summary>

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="block red"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="block blue"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="block green"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="block yellow"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-3">
      <div class="block purple"></div>
    </div>
    <div class="col-12 col-xl-9">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>

#### Papier 1-4

Refaire les exercices 1 à 4, mais sur papier. Voici le code de départ :

```html
<div class="rouge"></div>
<div class="bleu"></div>
<div class="vert"></div>
<div class="jaune"></div>
<div class="violet"></div>
<div class="turquoise"></div>
```

<details>
<summary>Solution 1</summary>

```html
<div class="container">
  <div class="row">
    <div class="col">
      <div class="rouge"></div>
    </div>
    <div class="col">
      <div class="bleu"></div>
    </div>
    <div class="col">
      <div class="vert"></div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="jaune"></div>
    </div>
    <div class="col">
      <div class="violet"></div>
    </div>
    <div class="col">
      <div class="turquoise"></div>
    </div>
  </div>
</div>
```

</details>

<details>
<summary>Solution 2</summary>

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="rouge"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="bleu"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="vert"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="jaune"></div>
    </div>
    <div class="col-12 col-xl-6">
      <div class="violet"></div>
    </div>
    <div class="col-12 col-xl-6">
      <div class="turquoise"></div>
    </div>
  </div>
</div>
```

</details>

<details>
<summary>Solution 3</summary>

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-xl-2">
      <div class="rouge"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="bleu"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="vert"></div>
    </div>
    <div class="col-12 col-xl-2">
      <div class="jaune"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="violet"></div>
    </div>
    <div class="col-6 col-xl-2">
      <div class="turquoise"></div>
    </div>
  </div>
</div>
```

</details>

<details>
<summary>Solution 4</summary>

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="rouge"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="bleu"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="vert"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="jaune"></div>
    </div>
    <div class="col-12 col-md-6 col-xl-3">
      <div class="violet"></div>
    </div>
    <div class="col-12 col-xl-9">
      <div class="turquoise"></div>
    </div>
  </div>
</div>
```

</details>

#### Étapes 5-7

Faire les étapes 5 à 7 sur [Grille Bootstrap](https://smnarnold.com/exercices/bootstrap/grille-bootstrap) en utilisant [Horizontal alignment](https://getbootstrap.com/docs/5.3/layout/columns/#horizontal-alignment)

<details>
<summary>Solution 5</summary>

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="block red"></div>
    </div>
    <div class="col-12 col-md-6">
      <div class="block blue"></div>
    </div>
    <div class="col-12 col-xl-8">
      <div class="block green"></div>
    </div>
    <div class="col-12 col-md-6">
      <div class="block yellow"></div>
    </div>
    <div class="col-6 col-md-6">
      <div class="block purple"></div>
    </div>
    <div class="col-6 col-md-12 col-xl-8">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>

<details>
<summary>Solution 6</summary>

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-xl-4">
      <div class="block red"></div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <div class="block blue"></div>
    </div>
    <div class="col-12 col-md-4">
      <div class="block green"></div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-xl-4">
      <div class="block yellow"></div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-md-4">
      <div class="block purple"></div>
    </div>
    <div class="col-12 col-md-8">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>

<details>
<summary>Solution 7</summary>

```html
<div class="container">
  <div class="row justify-content-end">
    <div class="col-12 col-xl-6">
      <div class="block red"></div>
    </div>
  </div>
  <div class="row justify-content-start">
    <div class="col-12 col-xl-6">
      <div class="block blue"></div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-xl-6">
      <div class="block green"></div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-md-4 col-xl-3">
      <div class="block yellow"></div>
    </div>
    <div class="col-12 col-md-4 col-xl-3">
      <div class="block purple"></div>
    </div>
    <div class="col-12 col-md-4 col-xl-3">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>

### Jeux

- [Flexbox Froggy](https://flexboxfroggy.com/#fr)
- [Grid Garden](https://cssgridgarden.com/#fr)

## Références

- https://www.w3schools.com/css/css_rwd_intro.asp
- https://web.dev/articles/responsive-web-design-basics?hl=fr
- https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design
