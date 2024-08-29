# Conversion

Représentation de l'information

---

> There are 10 types of people in this world, those who understand binary and those who don't.

---

## Équivalence des bases

| Base 10 | Base 2 | Base 3 | Base 4 | Base 8 | Base 16 |
| :-----: | :----: | :----: | :----: | :----: | :-----: |
|    0    |   0    |   0    |   0    |   0    |    0    |
|    1    |   1    |   1    |   1    |   1    |    1    |
|    2    |   10   |   2    |   2    |   2    |    2    |
|    3    |   11   |   10   |   3    |   3    |    3    |
|    4    |  100   |   11   |   10   |   4    |    4    |
|    5    |  101   |   12   |   11   |   5    |    5    |
|    6    |  110   |   20   |   12   |   6    |    6    |
|    7    |  111   |   21   |   13   |   7    |    7    |
|    8    |  1000  |   22   |   20   |   10   |    8    |

```katex fragment
8_{10} = 1000_2 = 22_4 = 10_8 = 8_{16}
```

---

## Équivalence des bases

- ```katex
  8_{10} = 1000_{2} = 22_{4} = 10_{8} = 8_{16}
  ```
- &shy;<!-- .element: class="fragment" -->
  ```katex
  8_{10} = 1000_{2}
  ```
  - **8** en _base 10_ est **équivalent** à **1000** en _base 2_
- &shy;<!-- .element: class="fragment" -->
  ```katex
  {10\ 1010}_{2} = ?_{10}
  ```
- &shy;<!-- .element: class="fragment" -->
  ```katex
  {101\ 0000\ 1011}_{2} = ?_{10}
  ```

---

## Forme canonique décimale

- Forme permettant de **représenter** n'importe quel **nombre** entier positif de manière **unique**
- &shy;<!-- .element: class="fragment" --> 1291
  - &shy;<!-- .element: class="fragment" --> Les **1** n'ont pas la même **valeur**
- &shy;<!-- .element: class="fragment" --> 1291 = **1**000 + **2**00 + **9**0 + **1**
- &shy;<!-- .element: class="fragment" --> 1291 = **1** × 1000 + **2** × 100 + **9** × 10 + **1** × 1
- &shy;<!-- .element: class="fragment" --> 1291 = **1** × 10<sup>3</sup> + **2** × 10<sup>2</sup> + **9** × 10<sup>1</sup> + **1** × 10<sup>0</sup>
- &shy;<!-- .element: class="fragment" --> 1291<sub>_10_</sub> = **1** × _10_<sup>3</sup> + **2** × _10_<sup>2</sup> + **9** × _10_<sup>1</sup> + **1** × _10_<sup>0</sup>
  - Forme canonique
- &shy;<!-- .element: class="fragment" --> 102<sub>_4_</sub> =<span class="fragment"> **1** × _4_<sup>2</sup> + **0** × _4_<sup>1</sup> + **2** × _4_<sup>0</sup></span><span class="fragment"> = 18<sub>_10_</sub></span>
- &shy;<!-- .element: class="fragment" --> 1010<sub>_2_</sub> =<span class="fragment"> **1** × _2_<sup>3</sup> + **0** × _2_<sup>2</sup> + **1** × _2_<sup>1</sup> + **0** × _2_<sup>0</sup></span><span class="fragment"> = 10<sub>_10_</sub></span>

---

## Conversion avec un tableau (? &rarr; 10)

1023<sub>4</sub> = ?<sub>10</sub>

|   1    |  0  |  2  |  3  |
| :----: | :-: | :-: | :-: |
| &nbsp; |     |     |     |
| &nbsp; |     |     |     |

<!-- .element: class="fragment" data-fragment-index="1" -->

&shy;<!-- .element: class="fragment" data-fragment-index="1" --> Mettre les chiffres dans un **tableau**

---

## Conversion avec un tableau (? &rarr; 10)

1023<sub>4</sub> = ?<sub>10</sub>

|       1       |       0       |       2       |       3       |
| :-----------: | :-----------: | :-----------: | :-----------: |
| 4<sup>3</sup> | 4<sup>2</sup> | 4<sup>1</sup> | 4<sup>0</sup> |
|    &nbsp;     |               |               |               |

Écrire les **puissances** de la **base** en partant de la **droite** (puissance 0)

---

## Conversion avec un tableau (? &rarr; 10)

1023<sub>4</sub> = ?<sub>10</sub>

|   1    |  0  |  2  |  3  |
| :----: | :-: | :-: | :-: |
|   64   | 16  |  4  |  1  |
| &nbsp; |     |     |     |

Écrire les **puissances** de la **base** en partant de la **droite** (puissance 0)

---

## Conversion avec un tableau (? &rarr; 10)

1023<sub>4</sub> = ?<sub>10</sub>

|   1    |   0    |   2   |   3   |
| :----: | :----: | :---: | :---: |
|   64   |   16   |   4   |   1   |
| 1 × 64 | 0 × 16 | 2 × 4 | 3 × 1 |

Calculer les **produits** par colonne

---

## Conversion avec un tableau (? &rarr; 10)

1023<sub>4</sub> = ?<sub>10</sub>

|  1  |  0  |  2  |  3  |
| :-: | :-: | :-: | :-: |
| 64  | 16  |  4  |  1  |
| 64  |  0  |  8  |  3  |

Calculer les **produits** par colonne

&shy;<!-- .element: class="fragment" --> Faire la **somme** des résultats : <span class="fragment">64 + 0 + 8 + 3 = 75</span>

&shy;<!-- .element: class="fragment" --> 1023<sub>4</sub> = 75<sub>10</sub>

---

## Conversion avec un tableau (2 &rarr; 10)

10 1010<sub>2</sub> = ?<sub>10</sub>

|   1    |  0  |  1  |  0  |  1  |  0  |
| :----: | :-: | :-: | :-: | :-: | :-: |
| &nbsp; |     |     |     |     |     |
| &nbsp; |     |     |     |     |     |

<!-- .element: class="fragment" -->

---

## Conversion avec un tableau (2 &rarr; 10)

10 1010<sub>2</sub> = ?<sub>10</sub>

|   1    |  0  |  1  |  0  |  1  |  0  |
| :----: | :-: | :-: | :-: | :-: | :-: |
|   32   | 16  |  8  |  4  |  2  |  1  |
| &nbsp; |     |     |     |     |     |

---

## Conversion avec un tableau (2 &rarr; 10)

10 1010<sub>2</sub> = ?<sub>10</sub>

|  1  |  0  |  1  |  0  |  1  |  0  |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 32  | 16  |  8  |  4  |  2  |  1  |
| 32  |  0  |  8  |  0  |  2  |  0  |

&shy;<!-- .element: class="fragment" --> 32 + 8 + 2 = 42

&shy;<!-- .element: class="fragment" --> 10 1010<sub>2</sub> = 42<sub>10</sub>

---

## Conversion en binaire (10 &rarr; 2)

666<sub>10</sub> = ?<sub>2</sub>

| ~~1024~~ | 512 | 256 | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
| :------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  &nbsp;  |     |     |     |     |     |     |     |     |     |     |

<!-- .element: class="fragment" data-fragment-index="1" -->

&shy;<!-- .element: class="fragment" data-fragment-index="1" --> Lister les **puissances** de 2 plus **petites** que le nombre à convertir (depuis la **droite**)

---

## Conversion en binaire (10 &rarr; 2)

666<sub>10</sub> = ?<sub>2</sub>

|                             512                             |                           256                           |                             128                             |                           64                            |                           32                            |                             16                              |                              8                              |                            4                            |                              2                              |                            1                            |
| :---------------------------------------------------------: | :-----------------------------------------------------: | :---------------------------------------------------------: | :-----------------------------------------------------: | :-----------------------------------------------------: | :---------------------------------------------------------: | :---------------------------------------------------------: | :-----------------------------------------------------: | :---------------------------------------------------------: | :-----------------------------------------------------: |
| <span class="fragment" data-fragment-index="0">**1**</span> | <span class="fragment" data-fragment-index="1">0</span> | <span class="fragment" data-fragment-index="1">**1**</span> | <span class="fragment" data-fragment-index="2">0</span> | <span class="fragment" data-fragment-index="2">0</span> | <span class="fragment" data-fragment-index="2">**1**</span> | <span class="fragment" data-fragment-index="3">**1**</span> | <span class="fragment" data-fragment-index="4">0</span> | <span class="fragment" data-fragment-index="4">**1**</span> | <span class="fragment" data-fragment-index="4">0</span> |

- &shy;<!-- .element: class="fragment" data-fragment-index="0" --> 666 - **512** = 154
- &shy;<!-- .element: class="fragment" data-fragment-index="1" --> 154 - **128** = 26
- &shy;<!-- .element: class="fragment" data-fragment-index="2" --> 26 - **16** = 10
- &shy;<!-- .element: class="fragment" data-fragment-index="3" --> 10 - **8** = 2
- &shy;<!-- .element: class="fragment" data-fragment-index="4" --> 2 - **2** = 0

&shy;<!-- .element: class="fragment" data-fragment-index="5" --> 666<sub>10</sub> = 10 1001 1010<sub>2</sub>

Enlever la **plus grande** puissance de 2 possible jusqu'à obtenir **0**
