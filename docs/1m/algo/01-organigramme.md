# Organigramme

## Objectifs

- Définir un algorithme et un organigramme
- Exécuter l'instance d'un algorithme sous forme d'organigramme

## Cours

import Organigramme from '@site/src/pages/slides/1m/algo/organigramme'

<Organigramme embedded />

## Exercices

### Exécution d'un organigramme

#### Exercice 1

```kroki type=plantuml
:Entrées : a, b;
if (a > b ?) then (vrai)
  :Retourner b;
  kill
else (faux)
  :Retourner a;
  kill
endif
```

Exécuter les instances suivantes de l'algorithme ci-dessus et donner le résultat :

1. a = 5, b = 3
2. a = 2, b = 4

<details>
<summary>Solution</summary>

1. Résultat = 3
2. Résultat = 2

</details>

Que fait cet algorithme ? Vous pouvez le tester avec d'autres valeurs.

<details>
<summary>Solution</summary>

Il retourne le plus petit des deux nombres `a` et `b` en entrée

</details>

#### Exercice 2

```kroki type=plantuml
:Entrée : n;
:résultat ← 1
i ← 1;
while (i ≤ n ?) is (vrai)
  :résultat ← résultat * i
  i ← i + 1;
endwhile (faux)
:Retourner résultat;
kill​
```

Exécuter les instances suivantes de l'algorithme ci-dessus et donner le résultat :

1. n = 1
2. n = 3

<details>
<summary>Solution</summary>

1. Résultat = 1
2. Résultat = 6

</details>

Que fait cet algorithme ? Vous pouvez le tester avec d'autres valeurs.

<details>
<summary>Solution</summary>

Il retourne le produit des entiers de 1 à `n`

</details>

#### Exercice 3

```kroki type=plantuml
:Entrées : a, b;
while (a > b ?) is (vrai)
  :a ← a - b;
endwhile (faux)
if (a = b ?) then (vrai)
  :Retourner Vrai;
  kill
else (faux)
  :Retourner Faux;
  kill
```

Exécuter les instances suivantes de l'algorithme ci-dessus et donner le résultat :

1. a = 2, b = 5
2. a = 9, b = 3
3. a = 5, b = 2

<details>
<summary>Solution</summary>

1. Résultat = Faux
2. Résultat = Vrai
3. Résultat = Faux

</details>

Que fait cet algorithme ? Vous pouvez le tester avec d'autres valeurs.

<details>
<summary>Solution</summary>

Indique si `a` est divisible par `b`

</details>

#### Exercice 4

```kroki type=plantuml
:Entrées : a, b;
while (a ≠ b ?) is (vrai)
  if (a > b ?) then (vrai)
    :a ← a - b;
  else (faux)
    :b ← b - a;
  endif
endwhile (faux)
:Retourner a;
kill
```

Exécuter les instances suivantes de l'algorithme ci-dessus et donner le résultat :

1. a = 9, b = 12
2. a = 12, b = 9
3. a = 14, b = 4

<details>
<summary>Solution</summary>

1. Résultat = 3
2. Résultat = 3
3. Résultat = 2

</details>

Que fait cet algorithme ? Vous pouvez le tester avec d'autres valeurs.

<details>
<summary>Solution</summary>

L'algorithme d'Euclide donne le plus grand diviseur commun entre deux nombres : https://fr.wikipedia.org/wiki/Algorithme_d'Euclide#Explications_g%C3%A9om%C3%A9triques

</details>

## Références

- https://apprendre.modulo-info.ch/algo1/algorithmes.html
