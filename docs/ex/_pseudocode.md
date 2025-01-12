## Exercices

### Somme

```txt
FONCTION somme(x)
    c <- 0
    POUR i DE 1 À x
        c <- c + i
    FIN POUR
    RETOURNER c
FIN FONCTION
```

Quel est le rôle de cette fonction (essayer de tester l'instance `x = 3`) ?

<details>
<summary>Solution</summary>

La fonction `somme` calcule la somme des entiers de 1 à `x`. Pour `x = 3`, la somme est `1 + 2 + 3 = 6`.

Commencer par regarder quelle variable est retournée par la fonction. Ensuite, regarder comment évolue cette variable dans la boucle `POUR` (cumul des valeurs de `i`).

</details>

### Comparaison

```txt
FONCTION comparer(x, y)
    SI x > y ALORS
        RETOURNER x
    SINON
        RETOURNER y
    FIN SI
FIN FONCTION
```

Dessiner son organigramme.

## Références

- https://fr.wikipedia.org/wiki/Pseudo-code
- https://info.blaisepascal.fr/pseudo-code/
