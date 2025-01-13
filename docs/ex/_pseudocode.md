## Exercices

### Comparaison

Que fait la fonction suivante ?

```txt showLineNumbers
FONCTION comparer(x, y)
    SI x > y ALORS
        RETOURNER x
    SINON
        RETOURNER y
    FIN SI
FIN FONCTION
```

<details>
<summary>Solution</summary>

La fonction `comparer` retourne le plus grand des deux nombres `x` et `y`.

</details>

Dessiner son organigramme.

<details>
<summary>Solution</summary>

```kroki type=plantuml
:Entrée : x, y;
if (x > y ?) then (vrai)
    :Retourner x;
    kill
else (faux)
    :Retourner y;
    kill
endif
```

</details>

Que se passe-t-il si on modifie la comparaison en `SI x < y ALORS` ?

<details>
<summary>Solution</summary>

La fonction retournera le plus petit des deux nombres `x` et `y`.

</details>

### Somme

```txt showLineNumbers
FONCTION somme(x)
    c <- 0
    POUR i DE 1 À x FAIRE
        c <- c + (i*i)
    FIN POUR
    RETOURNER c
FIN FONCTION
```

Quel est le rôle de cette fonction (essayer de tester l'instance `x = 3`) ?

<details>
<summary>Solution</summary>

La fonction `somme` calcule la somme des carrés de 1 à `x`. Pour `x = 3`, la somme est `1 + (2*2) + (3*3) = 1 + 4 + 9 = 14`.

Commencer par regarder quelle variable est retournée par la fonction. Ensuite, regarder comment évolue cette variable dans la boucle `POUR` (cumul des valeurs de `i`).

</details>

Est-ce que l'algorithme ci-dessous fait la même chose ?

```txt showLineNumbers
FONCTION somme(x)
    c <- 0
    i <- 1
    TANT QUE i <= x FAIRE
        c <- c + (i*i)
        i <- i + 1
    FIN TANT QUE
    RETOURNER c
FIN FONCTION
```

<details>
<summary>Solution</summary>

Oui, les deux algorithmes font la même chose. La seule différence est la syntaxe des boucles.

</details>

Dessiner son organigramme.

<details>
<summary>Solution</summary>

```kroki type=plantuml
:Entrée : x;
: c ← 0;
: i ← 1;
while (i ≤ x) is (vrai)
    : c ← c + (i*i);
    : i ← i + 1;
endwhile (faux)
:Retourner c;
kill​
```

</details>

Que se passe-t-il si on modifie la condition de la boucle en `TANT QUE i < x FAIRE` ?

<details>
<summary>Solution</summary>

La fonction retournera la somme des carrés de `1` à `x - 1`. Par exemple, pour `x = 3`, la somme sera `1 + 4 = 5` car la boucle s'arrête à `i = 2` et fera une itération de moins.

</details>

## Références

- https://fr.wikipedia.org/wiki/Pseudo-code
- https://info.blaisepascal.fr/pseudo-code/
- https://apprendre.modulo-info.ch/algo1/algorithmes.html
