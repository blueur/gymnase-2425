# Responsive Web Design

:::note[Objectifs]

Comment adapter un site Web selon la taille de l'écran ?

:::

## Cours

<Reaveal name="3cci-webd-responsive" />

## Exercices

### Grille Bootstrap

- Faire les exercices sur [Grille Bootstrap](https://smnarnold.com/exercices/bootstrap/grille-bootstrap).
  - [CodePen](https://codepen.io/) est un IDE en ligne pour écrire du code HTML, CSS et JavaScript.
  - Modifier uniquement la partie HTML.
  - Redimensionner la fenêtre du navigateur pour voir les changements.
  - Utiliser la [documentation de Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/) pour vous aider.

#### Étape 1

<details>
<summary>Indice 1</summary>

Tout mettre dans un `container`.

<details>
<summary>Indice 2</summary>

Utiliser des `row` et des `col`.

<details>
<summary>Solution</summary>

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

#### Étape 2

<details>
<summary>Indice 1</summary>

Utiliser les classes `col-xl-*` et `col-*` (`*` étant un nombre).

<details>
<summary>Indice 2</summary>

Utiliser qu'une seule `row`.

<details>
<summary>Indice 3</summary>

Les breakpoints s'appliquent à partir (plus grand) de la largeur spécifiée.

<details>
<summary>Solution</summary>

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

#### Étape 5

Utiliser [Horizontal alignment](https://getbootstrap.com/docs/5.3/layout/columns/#horizontal-alignment)

### Jeux

- [Flexbox Froggy](https://flexboxfroggy.com/#fr)
- [Grid Garden](https://cssgridgarden.com/#fr)

## Références

- https://www.w3schools.com/css/css_rwd_intro.asp
- https://web.dev/articles/responsive-web-design-basics?hl=fr
- https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design
