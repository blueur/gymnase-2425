# Porte logique

Architecture des ordinateurs

---

## Jeu de rôle

Exécution d'un programme.

---

### Rôles

- &shy;<!-- .element: class="fragment" --> 1 **programmeur·euse**
  - **Dicter** les instructions du programme.
- &shy;<!-- .element: class="fragment" --> 1 **processeur**
  - **Exécuter** les instructions du programme.
- &shy;<!-- .element: class="fragment" --> 1 **utilisateur·rice**
  - **Choisir** les valeurs au programme.
- &shy;<!-- .element: class="fragment" --> 11 **cases mémoire**
  - **Stocker** les valeurs (prendre de quoi écrire).

---

### Programme

- &shy;<!-- .element: class="fragment" --> Demander un nombre entre 1 et 99 à l'utilisateur·rice et le mettre à l'adresse mémoire 1​
- &shy;<!-- .element: class="fragment" --> Demander un autre nombre entre 1 et 99 à l'utilisateur·rice et le mettre à l'adresse mémoire 2​
- &shy;<!-- .element: class="fragment" --> Lire l'adresse mémoire 1 et mettre le chiffre des dizaines à l'adresse mémoire 3​
- &shy;<!-- .element: class="fragment" --> Lire l'adresse mémoire 1 et mettre le chiffre des unités à l'adresse mémoire 4​
- &shy;<!-- .element: class="fragment" --> Lire l'adresse mémoire 2 et mettre le chiffre des dizaines à l'adresse mémoire 5​
- &shy;<!-- .element: class="fragment" --> Lire l'adresse mémoire 2 et mettre le chiffre des unités à l'adresse mémoire 6​
- &shy;<!-- .element: class="fragment" --> Multiplier les chiffres des adresses mémoire 3 et 5 et mettre le résultat à l'adresse mémoire 7​

---

### Programme

- &shy;<!-- .element: class="fragment" --> Ajouter deux zéros au nombre de l'adresse mémoire 7​
- &shy;<!-- .element: class="fragment" --> Multiplier les chiffres des adresses mémoire 3 et 6 et mettre le résultat à l'adresse mémoire 8​
- &shy;<!-- .element: class="fragment" --> Ajouter un zéro au nombre de l'adresse mémoire 8​
- &shy;<!-- .element: class="fragment" --> Multiplier les chiffres des adresses mémoire 4 et 5 et mettre le résultat à l'adresse mémoire 9​
- &shy;<!-- .element: class="fragment" --> Ajouter un zéro au nombre de l'adresse mémoire 9​
- &shy;<!-- .element: class="fragment" --> Multiplier les chiffres des adresses mémoire 4 et 6 et mettre le résultat à l'adresse mémoire 10​
- &shy;<!-- .element: class="fragment" --> Faire la somme des nombres aux adresses mémoire 7, 8, 9, et 10 et mettre le résultat à l'adresse mémoire 11​
- &shy;<!-- .element: class="fragment" --> Imprimer à l'écran le contenu de l'adresse mémoire 11

---

### Résultat

- Que fait ce programme ?
  - &shy;<!-- .element: class="fragment" --> Une multiplication entre deux nombres à deux chiffres.
- Comment l'a-t-il fait ?
  - &shy;<!-- .element: class="fragment" --> En décomposant en étapes plus simples.
- Quel est le rôle de chaque personne ?
  - &shy;<!-- .element: class="fragment" --> Programmeur·euse ?
  - &shy;<!-- .element: class="fragment" --> Processeur ?
  - &shy;<!-- .element: class="fragment" --> Utilisateur·rice ?
  - &shy;<!-- .element: class="fragment" --> Cases mémoire ?

---

## Entrées et sorties

- Input / Output (I/O)

![](https://kroki.io/svgbob/svg/eNpTUIABbV0E0OaCiera1SggQI2uHZdrXknR4ZWpxSCugnN-bkF-cWJeiQJIWXB-UUlmajEezQrYrQMAWhMcAQ==) <!-- .element: class="half" -->

<!--
          +-----------+
        ->|           |->
Entrées   | Composant |   Sorties
        ->|           |->
          +-----------+
-->

---

## Entrées et sorties

![](https://kroki.io/svgbob/svg/eNpTUIABbV0koM0FE9a1q1FAAjW6dlyueSVFh1emFoO4Cv5FKZl5iSWppUUKIIXB-UUlmanF-LQr4LASAOalHQQ=) <!-- .element: class="half" -->

<!--
          +------------+
        ->|            |->
Entrées   | Ordinateur |   Sorties
        ->|            |->
          +------------+
-->

- **Entrées**
  - &shy;<!-- .element: class="fragment" --> clavier, souris, webcam, microphone, etc.
- **Sorties** : **écran**, **imprimante**, **moteurs**, **réseaux**
  - &shy;<!-- .element: class="fragment" --> écran, haut-parleurs, etc.

---

### Électronique

|                                            Circuit imprimé                                            |                                                                                                            Portes logiques dans un circuit intégré                                                                                                             |
| :---------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![](https://upload.wikimedia.org/wikipedia/commons/a/a4/SEG_DVD_430_-_Printed_circuit_board-4276.jpg) |                                                                     ![](https://upload.wikimedia.org/wikipedia/commons/c/c6/TexasInstruments_7400_chip%2C_view_and_element_placement.jpg)                                                                      |
|                             <p class="reference">© Raimond Spekking</p>                              | <p class="reference"><a href="https://commons.wikimedia.org/wiki/File:TexasInstruments_7400_chip,_view_and_element_placement.jpg">Audrius Meskauskas</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons</p> |

---

### Table de vérité

![](https://kroki.io/svgbob/svg/eNpTUFBQ0NZFBdpcjgq6djUKqKCGC0wqBOQXlaQq5OSnZxaWpirU6Nop5JeWcDnh1IFhOgAykhcf) <!-- .element: class="half" -->

<!--
    +---------------+
A ->|               |
    | Porte logique |-> out
B ->|               |
    +---------------+
-->

- &shy;<!-- .element: class="fragment" --> Entrées et sorties en binaire (0 ou 1)

| &nbsp;A&nbsp; | &nbsp;B&nbsp; |  out  |
| :-----------: | :-----------: | :---: |
|       0       |       0       | **?** |
|       0       |       1       | **?** |
|       1       |       0       | **?** |
|       1       |       1       | **?** |

<!-- .element: class="fragment" -->

---

### ET (AND)

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | out |
| :-----------: | :-----------: | :-: |
|       0       |       0       |  0  |
|       0       |       1       |  0  |
|       1       |       0       |  0  |
|       1       |       1       |  1  |

![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Logic-gate-and-us.svg) <!-- .element: class="half" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Logic-gate-and-us.svg">No machine-readable author provided. Mikm assumed (based on copyright claims).</a>, Public domain, via Wikimedia Commons
</p>

---

### OU (OR)

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | out |
| :-----------: | :-----------: | :-: |
|       0       |       0       |  0  |
|       0       |       1       |  1  |
|       1       |       0       |  1  |
|       1       |       1       |  1  |

![](https://upload.wikimedia.org/wikipedia/commons/4/4c/Or-gate-en.svg) <!-- .element: class="half" -->

https://commons.wikimedia.org/wiki/File:Or-gate-en.svg <!-- .element: class="reference" -->

---

### OU exclusif (XOR)

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | out |
| :-----------: | :-----------: | :-: |
|       0       |       0       |  0  |
|       0       |       1       |  1  |
|       1       |       0       |  1  |
|       1       |       1       |  0  |

![](https://upload.wikimedia.org/wikipedia/commons/6/6d/Xor-gate-en.svg) <!-- .element: class="half" -->

https://commons.wikimedia.org/wiki/File:Xor-gate-en.svg <!-- .element: class="reference" -->

---

### NON (NOT)

| &nbsp;A&nbsp; | out |
| :-----------: | :-: |
|       0       |  1  |
|       1       |  0  |

![](https://upload.wikimedia.org/wikipedia/commons/9/9f/Not-gate-en.svg) <!-- .element: class="half" -->

https://commons.wikimedia.org/wiki/File:Not-gate-en.svg <!-- .element: class="reference" -->

---

### Quiz

![](https://upload.wikimedia.org/wikipedia/commons/4/4c/Or-gate-en.svg) <!-- .element: class="fragment" -->

![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Logic-gate-and-us.svg) <!-- .element: class="fragment" -->

![](https://upload.wikimedia.org/wikipedia/commons/9/9f/Not-gate-en.svg) <!-- .element: class="fragment" -->

![](https://upload.wikimedia.org/wikipedia/commons/6/6d/Xor-gate-en.svg) <!-- .element: class="fragment" -->

---

### Récapitulatif

| Nom en français |   Nom en anglais   |                                     Schéma                                     | Symbole (info.) |   Symbole (math.)    |
| :-------------: | :----------------: | :----------------------------------------------------------------------------: | :-------------: | :------------------: |
|       ET        |        AND         | ![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Logic-gate-and-us.svg) |    A **&** B    |    A **&sdot;** B    |
|       OU        |         OR         |    ![](https://upload.wikimedia.org/wikipedia/commons/4/4c/Or-gate-en.svg)     |   A **\|** B    |      A **+** B       |
|   OU exclusif   | XOR (exclusive OR) |    ![](https://upload.wikimedia.org/wikipedia/commons/6/6d/Xor-gate-en.svg)    |    A **^** B    | A **&CirclePlus;** B |
|       NON       |        NOT         |    ![](https://upload.wikimedia.org/wikipedia/commons/9/9f/Not-gate-en.svg)    |     **!** A     |     **&not;** A      |
