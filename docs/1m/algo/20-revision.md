---
description: ""
---

# Révision

:::note[Objectifs]

L'évaluation se portera sur les critères suivants :

- Algorithme
  - [ ] Reconnaître un algorithme.
  - [ ] Exécuter un pseudo-code.
  - [ ] Exécuter un organigramme.
  - [ ] Déduire ce qu'un algorithme fait.
  - [ ] Comparer grâce à la complexité.
- Type
  - [ ] Déterminer le type d'une expression.
  - [ ] Manipuler les listes.
- Tri
  - [ ] Trier une liste en appliquant un algorithme de tri.
  - [ ] Expliquer un algorithme de tri.

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

:::

:::tip[Aides]

- Revoir les [Kahoot!](https://create.kahoot.it/course/4cc8fe0e-c47d-4f5b-af09-5bda39fbe64a)
- Terminer les exercices des semaines précédentes.
- Support de cours complémentaires :
  - [Modulo](https://apprendre.modulo-info.ch/algo1/intro.html)
    - [Introduction](https://apprendre.modulo-info.ch/algo1/intro.html)
    - [Les algorithmes](https://apprendre.modulo-info.ch/algo1/algorithmes.html)
    - [Trie, cherche et trouve](https://apprendre.modulo-info.ch/algo1/tri.html)
    - [Des algorithmes aux programmes](https://apprendre.modulo-info.ch/algo1/algo-progs.html)
    - [Conclusion](https://apprendre.modulo-info.ch/algo1/conclusion.html)

:::

## Organigramme

```kroki type=plantuml
:Entrée : liste;
:i ← 0;
while (i < liste.taille ?) is (vrai)
  :liste[i] ← liste[i] * 2;
  :i ← i + 1;
endwhile (faux)
:Retourner liste;
kill
```

1. Quels sont les résultats des instances suivantes ?
   1. liste = [9, 3]
   2. liste = []
   3. liste = [2, 14, 5]
2. Que fait l'algorithme ?
3. Écrire son pseudocode.
4. Quelle est sa complexité en temps au pire cas ?

<details>
<summary>Solution</summary>

1. Les résultats des instances sont :
   1. liste = [18, 6]
   2. liste = []
   3. liste = [4, 28, 10]
2. L'algorithme double chaque élément de la liste.
3. Pseudo-code :
   ```plaintext
   FONCTION double(liste)
     i ← 0
     TANT QUE i < liste.taille
       liste[i] ← liste[i] * 2
       i ← i + 1
     FIN TANT QUE
     RETOURNER liste
   FIN FONCTION
   ```
4. La complexité en temps au pire cas est de O(n), car l'algorithme parcourt tous les éléments de la liste avec une boucle `TANT QUE`.

</details>

## Pseudo-code

```
FONCTION mystère(liste)
  max ← liste[0]
  i ← 1
  TANT QUE i < liste.taille
    SI max < liste[i]
      max ← liste[i]
    FIN SI
    i ← i + 1
  FIN TANT QUE
  RETOURNER max
FIN FONCTION
```

1. Que retourne l'instance mystère([7]) ?
2. Que retourne l'instance mystère([6, 3, 14]) ?
3. Que retourne l'instance mystère([15, 3, 3, 7]) ?
4. Que fait l'algorithme mystère ?
5. Dessiner l'organigramme de l'algorithme mystère.
6. Quelle est sa complexité en temps au pire cas ?
7. Modifier l'algorithme pour qu'il retourne le plus petit nombre de la liste en entrée.

<details>
<summary>Solution</summary>

1. 7
2. 14
3. 15
4. L'algorithme mystère retourne le plus grand nombre de la liste en entrée.
5. Organigramme :

```kroki type=plantuml
:Entrée : liste;
:max ← liste[0]\ni ← 1;
while (i < liste.taille ?) is (vrai)
  if (max < liste[i] ?) then (vrai)
    :max ← liste[i];
  endif
  :i ← i + 1;
endwhile (faux)
:Retourner max;
kill
```

6. La complexité en temps au pire cas est de O(n), car l'algorithme parcourt tous les éléments de la liste avec une boucle `TANT QUE`.
7. Pseudo-code :

```plaintext
FONCTION mystère(liste)
  min ← liste[0]
  i ← 1
  TANT QUE i < liste.taille
    SI min > liste[i]
      min ← liste[i]
    FIN SI
    i ← i + 1
  FIN TANT QUE
  RETOURNER min
FIN FONCTION
```

</details>

## Tri

|               |               |               |               |               |               |               |               |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| &nbsp;5&nbsp; | &nbsp;1&nbsp; | &nbsp;4&nbsp; | &nbsp;3&nbsp; | &nbsp;2&nbsp; | &nbsp;0&nbsp; | &nbsp;9&nbsp; | &nbsp;7&nbsp; |

Trier la liste de nombre dans l'ordre croissante en utilisant l'algorithme de tri indiqué :

1. Tri par insertion
2. Tri par sélection
3. Tri fusion
4. Tri rapide en choisissant le pivot comme étant le premier élément de la liste.

## Algorithme

Lesquels des éléments suivants sont des algorithmes ?

1. Une recette de cuisine
2. Le tissage
3. Le tricot
4. La résolution d'un Rubik's Cube
5. Le diagnostic infirmier (d'une maladie)
6. Les instructions pour assembler un meuble
7. La tactique dans un sport (football, hockey, etc.)

<details>
<summary>Solution</summary>

Ce sont tous des algorithmes, car ils décrivent une suite d'étapes à suivre pour atteindre un objectif : https://fr.wikipedia.org/wiki/Algorithme#Algorithmes_dans_la_vie_quotidienne

</details>

## Type
