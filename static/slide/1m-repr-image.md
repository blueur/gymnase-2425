# Image

Représentation de l'information

---

## Image matricielle

![](https://desktop.arcgis.com/fr/arcmap/latest/manage-data/geodatabases/GUID-CC2D28F9-B2CF-47AF-80BE-3CA13E04E596-web.gif) <!-- .element: class="full" -->

&shy;<!-- .element: class="reference" --> https://desktop.arcgis.com/fr/arcmap/latest/manage-data/geodatabases/raster-basics.htm

---

### Image en noir et blanc

|                                                          |                                                   |                                                   |                                                   |                                                   |                                                   |                                                   |
| :------------------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: |
| &nbsp; <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> |
| &nbsp; <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> |
| &nbsp; <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> |
| &nbsp; <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> |
| &nbsp; <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> |
| &nbsp; <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> |

<!-- .element: style="width:450px" -->

&shy;<!-- .element: class="fragment" data-fragment-index="1" --> Table d'encodage :

| Couleur | Valeur |
| :-----: | :----: |
|  Noir   |   0    |
|  Blanc  |   1    |

<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Image en noir et blanc

|     |     |     |     |     |     |     |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  |  0  |  0  |  1  |  0  |  0  |  1  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  1  |  0  |  0  |  0  |  0  |  0  |  1  |
|  1  |  1  |  0  |  0  |  0  |  1  |  1  |
|  1  |  1  |  1  |  0  |  1  |  1  |  1  |

<!-- .element: style="width:450px" -->

Table d'encodage :

| Couleur | Valeur |
| :-----: | :----: |
|  Noir   |   0    |
|  Blanc  |   1    |

---

### Taille de l'image

- **Largeur**: 7 pixels
- **Hauteur**: 6 pixels
- &shy;<!-- .element: class="fragment" --> Total: 7 &times; 6 = 42 **pixels**
- &shy;<!-- .element: class="fragment" --> 1 bit par pixel : 42 &times; 1 = 42 **bits**

---

### Image en couleur

|     |     |     |     |     |     |     |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 11  | 00  | 00  | 11  | 00  | 00  | 11  |
| 00  | 10  | 01  | 00  | 00  | 00  | 00  |
| 00  | 01  | 00  | 00  | 00  | 01  | 00  |
| 11  | 00  | 00  | 00  | 01  | 00  | 11  |
| 11  | 11  | 00  | 00  | 00  | 11  | 11  |
| 11  | 11  | 11  | 00  | 11  | 11  | 11  |

<!-- .element: style="width:450px" -->

&shy;<!-- .element: class="fragment" data-fragment-index="1" --> Table d'encodage :

|  Couleur   | Valeur |
| :--------: | :----: |
|    Noir    |   00   |
|    Gris    |   01   |
| Gris clair |   10   |
|   Blanc    |   11   |

<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Image en couleur

|                                                          |                                                       |                                                   |                                                   |                                                   |                                                   |                                                   |
| :------------------------------------------------------: | :---------------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: |
| &nbsp; <!-- .element: style="background-color:white" --> |   <!-- .element: style="background-color:black" -->   | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> |
| &nbsp; <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:lightgrey" --> | <!-- .element: style="background-color:grey" -->  | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> |
| &nbsp; <!-- .element: style="background-color:black" --> |   <!-- .element: style="background-color:grey" -->    | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:grey" -->  | <!-- .element: style="background-color:black" --> |
| &nbsp; <!-- .element: style="background-color:white" --> |   <!-- .element: style="background-color:black" -->   | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:grey" -->  | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> |
| &nbsp; <!-- .element: style="background-color:white" --> |   <!-- .element: style="background-color:white" -->   | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> |
| &nbsp; <!-- .element: style="background-color:white" --> |   <!-- .element: style="background-color:white" -->   | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:white" --> |

<!-- .element: style="width:450px" -->

Table d'encodage :

|  Couleur   | Valeur |
| :--------: | :----: |
|    Noir    |   00   |
|    Gris    |   01   |
| Gris clair |   10   |
|   Blanc    |   11   |

---

### Image en couleur

|                                                          |                                                   |                                                   |                                                   |                                                   |                                                   |                                                   |
| :------------------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: |
| &nbsp; <!-- .element: style="background-color:black" --> |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:black" --> |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:black" --> |
|  &nbsp; <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:white" --> | <!-- .element: style="background-color:pink" -->  |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  |
|  &nbsp; <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:pink" -->  |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:pink" -->  |  <!-- .element: style="background-color:red" -->  |
| &nbsp; <!-- .element: style="background-color:black" --> |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:pink" -->  |  <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:black" --> |
| &nbsp; <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  |  <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> |
| &nbsp; <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> |  <!-- .element: style="background-color:red" -->  | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> | <!-- .element: style="background-color:black" --> |

<!-- .element: style="width:450px" -->

Table d'encodage :

| Couleur | Valeur |
| :-----: | :----: |
|  Rouge  |   00   |
|  Rose   |   01   |
|  Blanc  |   10   |
|  Noir   |   11   |

---

### Taille de l'image

- **Largeur**: 7 pixels
- **Hauteur**: 6 pixels
- Total: 7 &times; 6 = 42 **pixels**
- &shy;<!-- .element: class="fragment" --> 2 bit par pixel : 42 &times; 2 = 84 **bits**

---

### Profondeur de couleur

|                               1-bit                                |                               2-bit                                |                               4-bit                                |                               8-bit                                |                               24-bit                                |
| :----------------------------------------------------------------: | :----------------------------------------------------------------: | :----------------------------------------------------------------: | :----------------------------------------------------------------: | :-----------------------------------------------------------------: |
| ![](https://upload.wikimedia.org/wikipedia/commons/5/57/1_bit.png) | ![](https://upload.wikimedia.org/wikipedia/commons/5/56/2_bit.png) | ![](https://upload.wikimedia.org/wikipedia/commons/0/0d/4_bit.png) | ![](https://upload.wikimedia.org/wikipedia/commons/f/ff/8_bit.png) | ![](https://upload.wikimedia.org/wikipedia/commons/9/9f/24_bit.png) |
|                     2<sup>1</sup> = 2 couleurs                     |                     2<sup>2</sup> = 4 couleurs                     |                    2<sup>4</sup> = 16 couleurs                     |                    2<sup>8</sup> = 256 couleurs                    |                2<sup>24</sup> = 16'777'216 couleurs                 |
|                              4 [Kio]                               |                              6 [Kio]                               |                              13 [Kio]                              |                              37 [Kio]                              |                              98 [Kio]                               |

&nbsp;

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:1_bit.png">Thegreenj</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
  </br>
  <a href="https://commons.wikimedia.org/wiki/File:2_bit.png">8_bit.png: JorgePeixotoderivative work: User:JeffyP</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5">CC BY-SA 2.5</a>, via Wikimedia Commons
  </br>
  <a href="https://commons.wikimedia.org/wiki/File:4_bit.png">Thegreenj</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
  </br>
  <a href="https://commons.wikimedia.org/wiki/File:8_bit.png">Thegreenj</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
  </br>
  <a href="https://commons.wikimedia.org/wiki/File:24_bit.png">Thegreenj</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

---

## Code couleur RGB

- &shy;<!-- .element: class="fragment" --> **Rouge** (Red)
- &shy;<!-- .element: class="fragment" --> **Vert** (Green)
- &shy;<!-- .element: class="fragment" --> **Bleu** (Blue)
- &shy;<!-- .element: class="fragment" --> Valeur entre **0** (aucune couleur) et **255** (couleur maximale)

![](https://upload.wikimedia.org/wikipedia/commons/0/05/AdditiveColorMixing.svg) <!-- .element: class="fragment" height="500px" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:AdditiveColorMixing.svg">Quark67(Modified color by Monami)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

---

## Code couleur RGB

- &shy;<!-- .element: class="fragment" --> R = 255, G = &nbsp;&nbsp;0, B = &nbsp;&nbsp;0
  - &shy;<!-- .element: class="fragment" style="background-color:#FF0000" --> Rouge
- &shy;<!-- .element: class="fragment" --> R = &nbsp;&nbsp;0, G = 255, B = &nbsp;&nbsp;0
  - &shy;<!-- .element: class="fragment" style="background-color:#00FF00" --> Vert
- &shy;<!-- .element: class="fragment" --> R = &nbsp;&nbsp;0, G = &nbsp;&nbsp;0, B = 255
  - &shy;<!-- .element: class="fragment" style="background-color:#0000FF" --> Bleu
- &shy;<!-- .element: class="fragment" --> R = 255, G = 255, B = &nbsp;&nbsp;0
  - &shy;<!-- .element: class="fragment" style="background-color:#FFFF00" --> Jaune
- &shy;<!-- .element: class="fragment" --> R = 255, G = 255, B = 255
  - &shy;<!-- .element: class="fragment" style="background-color:#FFFFFF" --> Blanc
- &shy;<!-- .element: class="fragment" --> R = 100, G = 100, B = 100
  - &shy;<!-- .element: class="fragment" style="background-color:#646464" --> Gris
- &shy;<!-- .element: class="fragment" --> R = &nbsp;&nbsp;0, G = &nbsp;&nbsp;0, B = &nbsp;&nbsp;0
  - &shy;<!-- .element: class="fragment" style="background-color:#000000" --> Noir

---

## Code couleur hexadécimal

- &shy;<!-- .element: class="fragment" --> Encodage en **hexadécimal** (00 à FF)
  - &shy;<!-- .element: class="fragment" --> #<span style="color:red">FF</span><span style="color:green">FF</span><span style="color:blue">FF</span>
  - &shy;<!-- .element: class="fragment" --> 24 bits : 8 bits par couleur
- &shy;<!-- .element: class="fragment" --> #000000
  - &shy;<!-- .element: class="fragment" style="background-color:#000000" --> Noir
- &shy;<!-- .element: class="fragment" --> #FF0000
  - &shy;<!-- .element: class="fragment" style="background-color:#FF0000" --> Rouge
- &shy;<!-- .element: class="fragment" --> #646464
  - &shy;<!-- .element: class="fragment" style="background-color:#646464" --> Gris
- &shy;<!-- .element: class="fragment" --> #08BD04
  - &shy;<!-- .element: class="fragment" style="background-color:#08BD04" --> Vert
- &shy;<!-- .element: class="fragment" --> #0064BE
  - &shy;<!-- .element: class="fragment" style="background-color:#0064BE" --> Bleu
