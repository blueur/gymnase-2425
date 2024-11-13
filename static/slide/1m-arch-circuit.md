# Circuit logique

Architecture des ordinateurs

---

### Portes logiques

| Nom en français |   Nom en anglais   |                                     Schéma                                     | Symbole (info.) |   Symbole (math.)    |
| :-------------: | :----------------: | :----------------------------------------------------------------------------: | :-------------: | :------------------: |
|       ET        |        AND         | ![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Logic-gate-and-us.svg) |    A **&** B    |    A **&sdot;** B    |
|       OU        |         OR         |    ![](https://upload.wikimedia.org/wikipedia/commons/4/4c/Or-gate-en.svg)     |   A **\|** B    |      A **+** B       |
|   OU exclusif   | XOR (exclusive OR) |    ![](https://upload.wikimedia.org/wikipedia/commons/6/6d/Xor-gate-en.svg)    |    A **^** B    | A **&CirclePlus;** B |
|       NON       |        NOT         |    ![](https://upload.wikimedia.org/wikipedia/commons/9/9f/Not-gate-en.svg)    |     **!** A     |     **&not;** A      |

---

### Circuit logique

<div class="columns">
<div>

Circuit

![](/1m-arch/circuit.svg)

[https://logic.modulo-info.ch/](https://logic.modulo-info.ch/?mode=tryout&data=N4NwXAbANAxg9gWwA5wHYFNUBcDOZgCGqAJgAz5YCeS6YA5EcXVCngNoCMArF1ACxcAulACWqMG1JQOwuAFcsYAEwBfKHABO5YFRr1NzVhKUB2XhFLCxEgMz9ZCsFzVjtu2nTGG47AVCVCosSQUKgECB4AgnQuqBwU1B5eLD4SfhZWwSah4R4AQjGiqEoJep6o3r68AJyBIsEAHDkR9ADChfJYbon6CpW2DeaWQWDVzR4Amh0K8To9dJ39bDaDULWZYBxSYS10AFrTWCVzZYsp7Cu8ARscHOP0ABoxagDuIhro7GxKUDbCbNBhmxsjIoGwmnx-jV-k0tv8frcoKARAQJN8bFchIIVIJsUA)

</div>
<div>

Table de vérité

|  A  |  B  | C <!-- .element: style="border-right:solid" --> |  X  |  Y  |  Z  |
| :-: | :-: | :---------------------------------------------: | :-: | :-: | :-: |
|  0  |  0  | 0 <!-- .element: style="border-right:solid" --> |  0  |  0  |  0  |
|  0  |  0  | 1 <!-- .element: style="border-right:solid" --> |  0  |  1  |  1  |
|  0  |  1  | 0 <!-- .element: style="border-right:solid" --> |  0  |  0  |  0  |
|  0  |  1  | 1 <!-- .element: style="border-right:solid" --> |  0  |  1  |  1  |
|  1  |  0  | 0 <!-- .element: style="border-right:solid" --> |  0  |  0  |  0  |
|  1  |  0  | 1 <!-- .element: style="border-right:solid" --> |  0  |  1  |  1  |
|  1  |  1  | 0 <!-- .element: style="border-right:solid" --> |  1  |  1  |  0  |
|  1  |  1  | 1 <!-- .element: style="border-right:solid" --> |  1  |  1  |  1  |

<!-- .element: class="fragment" -->

</div>
</div>

---

### Table de vérité

Étapes pour construire la table de vérité d'un circuit logique :

- &shy;<!-- .element: class="fragment" --> **Colonne** de la table : énumérer toutes les **entrées** et **sorties** du circuit.
- &shy;<!-- .element: class="fragment" --> **Ligne** de la table :
  - &shy;<!-- .element: class="fragment" --> Lister toutes les **combinaisons** des valeurs des **entrées**.
  - &shy;<!-- .element: class="fragment" --> Pour chaque combinaison, évaluer la **valeur** de chaque **sortie**.
    - Ajouter des colonnes intermédiaires au besoin.

---

## Portes logiques universelles

|                                        NAND (NOT AND)                                         |                                         NOR (NOT OR)                                         |
| :-------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|           ![](https://upload.wikimedia.org/wikipedia/commons/5/58/Nand-gate-en.svg)           |           ![](https://upload.wikimedia.org/wikipedia/commons/9/94/Nor-gate-en.svg)           |
| https://commons.wikimedia.org/wiki/File:Nand-gate-en.svg <!-- .element: class="reference" --> | https://commons.wikimedia.org/wiki/File:Nor-gate-en.svg <!-- .element: class="reference" --> |

- &shy;<!-- .element: class="fragment" --> Peuvent être utilisées pour **reproduire** toutes les autres portes logiques.
  - Circuit **équivalent** à une porte logique.
- &shy;<!-- .element: class="fragment" --> **Avantages** :
  - &shy;<!-- .element: class="fragment" --> Fabrication d'un **seul** type de porte.
  - &shy;<!-- .element: class="fragment" --> **Économie** de composants (moins de composants différents).

---

## Portes logiques universelles

| &nbsp; |                                    NAND                                    |                                    NOR                                    |
| :----: | :------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|  NOT   | ![](https://upload.wikimedia.org/wikipedia/commons/3/3f/NOT_from_NAND.svg) | ![](https://upload.wikimedia.org/wikipedia/commons/b/ba/NOT_from_NOR.svg) |
|  AND   | ![](https://upload.wikimedia.org/wikipedia/commons/1/16/AND_from_NAND.svg) | ![](https://upload.wikimedia.org/wikipedia/commons/f/f4/AND_from_NOR.svg) |
|   OR   | ![](https://upload.wikimedia.org/wikipedia/commons/9/90/OR_from_NAND.svg)  | ![](https://upload.wikimedia.org/wikipedia/commons/4/4b/OR_from_NOR.svg)  |
|  XOR   | ![](https://upload.wikimedia.org/wikipedia/commons/f/fa/XOR_from_NAND.svg) | ![](https://upload.wikimedia.org/wikipedia/commons/e/e3/XOR_from_NOR.svg) |

https://en.wikipedia.org/wiki/Logic_gate#Universal_logic_gates <!-- .element: class="reference" -->

---

### Opérations

- &shy;<!-- .element: class="fragment" --> Circuit logique **&rarr;** Table de vérité.
- &shy;<!-- .element: class="fragment" --> Circuit logique **&larr;** Table de vérité.
  - &shy;<!-- .element: class="fragment" --> Table de Karnaugh (toujours possible).
- &shy;<!-- .element: class="fragment" --> Sorties **prédéfinies** selon les entrées.

---

### Additionneur 2 bits

- &shy;<!-- .element: class="fragment" --> Addition de deux nombres **2 bits**.
  - 00 + 00 = 000 (0 + 0 = 0)
  - 00 + 01 = 001 (0 + 1 = 1)
  - 00 + 10 = 010 (0 + 2 = 2)
  - 00 + 11 = 011 (0 + 3 = 3)
  - 01 + 00 = 001 (1 + 0 = 1)
  - 01 + 01 = 010 (1 + 1 = 2)
  - 01 + 10 = 011 (1 + 2 = 3)
  - 01 + 11 = 100 (1 + 3 = 4)
  - 10 + 00 = 010 (2 + 0 = 2)
  - 10 + 01 = 011 (2 + 1 = 3)
  - 10 + 10 = 100 (2 + 2 = 4)
  - ...

---

### Additionneur 2 bits

![](/1m-arch/adder-2.svg) <!-- .element: class="full" -->

[https://logic.modulo-info.ch/](https://logic.modulo-info.ch/?mode=tryout&data=N4NwXAbANAxg9gWwA5wHYFNUBcDOZgCWqAzPlgJ5LpgDkRNUKeA2gJwAMUALOwLpRwATgUxZaOBgQAmYZgCZOcgIz9UAQwTUaAQQYAjArjByAvlCkEcSdmUpaLVgDZryDJrICs7D1DkL+0rR+ALRyXPqGeMRQ6pq0AMqImjRmRDbAFFS09IxwLMScPPxCItjikjLyrFAFqhpaAEIRRqZQAB5C6ZlaHYJuebJyxD5KRVBEssRKNXLFAK5ixMRmaqhSXXa0q1L9LEM+Ch4BqJNcNUcCC2DEEGa9SrZZNL27g8O+AOwXE8zEHzUADnmi1YKzWDwymxo21e8nexDGPx43BUlzEXFanUeWiEsK47zkAO+J2Y+O4XGBYC4HjBUjk2K2a1hwwOX2Osi40C4H0pXABdyE9MhTxeuXyHgO3nZpOqXkpHiUZgcSAh3VoyucrjFnm8UAgfHGMhoEGIwQgHmaURi9VouiVliQQrVNA1LlhXhGiKNH3YwQ+ckt12tcRoTRMZgA7gRBOgWPJOFN+FUZkmFDUKVBk8Mk0tfLNM8oajzMwVAanpmNfoVUaSDhnSXJyUm+dxiDmuRB29xWDnZQbftVuUmFb42wXOCby3r63Jqj6c5wPipeCYgA)
