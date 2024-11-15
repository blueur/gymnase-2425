# Responsive Web Design

Pages Web dynamiques

---

## Contenant et contenu

![](https://upload.wikimedia.org/wikipedia/commons/0/09/Content-is-like-water.svg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Content-is-like-water.svg">Stéphanie Walter</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

---

## Responsive web design (RWD)

- Apparu dans les années 2000
  - &shy;<!-- .element: class="fragment" --> **Adaptation** aux **écrans** (smartphones)
  - &shy;<!-- .element: class="fragment" --> 2010 : définition de **Responsive Web Design** par [Ethan Marcotte](https://alistapart.com/article/responsive-web-design/)
- &shy;<!-- .element: class="fragment" --> Objectif : meilleure expérience utilisateur (user expérience **UX**)
  - **Lisibilité** et **navigation** améliorées
- &shy;<!-- .element: class="fragment" --> Trois composantes :
  - **Media queries**
  - **Grille fluide**
  - **Images flexibles**

---

### Media queries

![](https://public-images.interaction-design.org/literature/articles/materials/flTR2AEh0Xm8QMKevDdSR4x08XS9oDCs2FrMxpjj.jpg) <!-- .element: class="full" -->

https://www.interaction-design.org/literature/article/responsive-design-let-the-device-do-the-work <!-- .element: class="reference" -->

---

### Media queries

- Règles CSS selon la **largeur** de l'écran
- [Démonstration](https://codepen.io/blueur/pen/XWvGOQN?editors=0100)

```css
body {
  background-color: red;
}
@media (max-width: 1023px) {
  body {
    background-color: green;
  }
}
@media (max-width: 767px) {
  body {
    background-color: blue;
  }
}
```

---

### Grille fluide

![](https://public-images.interaction-design.org/literature/articles/materials/G3zDpec3Jd2BDmdKi0yafOC5R9BWxWMsLbvK3ayu.jpg) <!-- .element: class="full" -->

https://www.interaction-design.org/literature/article/responsive-design-let-the-device-do-the-work <!-- .element: class="reference" -->

---

### Images flexibles

- **Images flexibles** : s'adaptent à la taille de l'écran
- Taille de l'image : `width: 100%; height: auto;`

![](https://public-images.interaction-design.org/literature/articles/materials/iY3RkNGTG0oFEyKGmhFQgQ1x1jmgPz4bKXzis6Rf.gif) <!-- .element: class="full-width" -->

https://www.interaction-design.org/literature/article/responsive-design-let-the-device-do-the-work <!-- .element: class="reference" -->

---

### Viewport

- **Viewport** : fenêtre visible de la page web
- `<meta name="viewport" content="width=device-width, initial-scale=1" />`

&nbsp;

|                                                                         Sans le viewport                                                                          |                                                                        Avec le viewport                                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![](https://www.w3schools.com/css/img_viewport1.png)<!-- .element: style="border-style: solid;" -->](https://www.w3schools.com/html/example_withoutviewport.htm) | [![](https://www.w3schools.com/css/img_viewport2.png)<!-- .element: style="border-style: solid;" -->](https://www.w3schools.com/html/example_withviewport.htm) |

<!-- .element: class="fragment" -->

https://www.w3schools.com/html/html_responsive.asp <!-- .element: class="reference" -->

---

## Modèle de boîte

![](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/boxes.png) <!-- .element: class="full" -->

https://www.theodinproject.com/lessons/foundations-the-box-model <!-- .element: class="reference" -->

---

## Modèle de boîte

![](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png) <!-- .element: class="full" -->

https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/The_box_model <!-- .element: class="reference" -->

---

## Système de grille

![](https://upload.wikimedia.org/wikipedia/commons/3/33/Grid1aib.svg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Grid1aib.svg">GearedBull</a>, Public domain, via Wikimedia Commons
</p>

---

## Système de grille

![](https://upload.wikimedia.org/wikipedia/commons/8/85/Grid2aib.svg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Grid2aib.svg">GearedBull</a>, Public domain, via Wikimedia Commons
</p>

---

## Système de grille

![](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids/11-grid-inspector-12col-layout.png)

https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids <!-- .element: class="reference" -->

- &shy;<!-- .element: class="fragment" --> Placer les éléments dans une grille de **12 colonnes**

---

## Système de grille

![](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids/11-responsive-areas.png)

https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids <!-- .element: class="reference" -->

- &shy;<!-- .element: class="fragment" --> **Adaptation** des éléments selon la **largeur** de l'écran
  - &shy;<!-- .element: class="fragment" --> Main article area :
    - **12** colonnes sur petit écran
    - **8** colonnes sur moyen et grand écrans
- &shy;<!-- .element: class="fragment" --> Les éléments passent à la **ligne** suivante **automatiquement**

---

## Système de grille

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1627409507896/dOhJg5KKw.gif) <!-- .element: class="full" -->

https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe <!-- .element: class="reference" -->

---

## Bootstrap

- [Bootstrap](https://getbootstrap.com/) : framework **CSS** rendu open source par Twitter en 2011
  - &shy;<!-- .element: class="fragment" --> Ensemble de **styles** CSS **réutilisables**
  - &shy;<!-- .element: class="fragment" --> **Grille** de 12 colonnes
- &shy;<!-- .element: class="fragment" --> [Démonstration](https://codepen.io/blueur/pen/bGXZPZe?editors=1000)
  - ```html
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6">.col-12 .col-sm-6</div>
        <div class="col-12 col-sm-6">.col-12 .col-sm-6</div>
      </div>
      <div class="row">
        <div class="col-6 col-lg-3">.col-6 .col-lg-3</div>
        <div class="col-6 col-lg-3">.col-6 .col-lg-3</div>
      </div>
    </div>
    ```
