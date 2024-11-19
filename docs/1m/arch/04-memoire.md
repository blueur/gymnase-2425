# Mémoire

:::note[Objectifs]

Comment stocker des données ?

:::

## Cours

<Reaveal name="1m-arch-memoire" />

## Exercices

### Accès mémoire

Voici l'état de départ de la mémoire :

| Adresse | Valeur |
| :-----: | :----: |
|    0    |  0x73  |
|    1    |  0x42  |
|    2    |  0xBE  |
|    3    |  0xF3  |

Sur combien de bits sont codées les adresses ?

<details>
<summary>Solution</summary>

2<sup>2</sup> = 4 adresses, donc 2 bits.

</details>

Sur combien de bits sont codées les valeurs ?

<details>
<summary>Solution</summary>

0x73 = 0111 0011<sub>2</sub>, donc 8 bits.

</details>

Que vaut mémoire[2] ?

<details>
<summary>Solution</summary>

mémoire[2] = 0xBE

</details>

Que vaudra la mémoire après les instructions suivantes ?

```
mémoire[0] = 0x42
mémoire[1] = 0x06
```

<details>
<summary>Solution</summary>

| Adresse | Valeur |
| :-----: | :----: |
|    0    |  0x42  |
|    1    |  0x06  |
|    2    |  0xBE  |
|    3    |  0xF3  |

</details>

### Cache

Voici l'état de départ de la mémoire :

| Adresse | Valeur |
| :-----: | :----: |
|    0    |  0x1A  |
|    1    |  0x0E  |
|    2    |  0x32  |
|    3    |  0xB2  |

On a un cache de 2 lignes qui est vide.

Pour chacune de ces lectures, indiquez d'où provient la valeur :

1. mémoire[0]
2. mémoire[3]
3. mémoire[0]
4. mémoire[3]
5. mémoire[2]
6. mémoire[0]
7. mémoire[1]

<details>
<summary>Solution</summary>

1. mémoire[0] : mémoire
2. mémoire[3] : mémoire
3. mémoire[0] : cache
4. mémoire[3] : cache
5. mémoire[2] : mémoire
6. mémoire[0] : mémoire (le cache contient les deux dernières valeurs lues, donc 2 et 3)
7. mémoire[0] : cache

</details>

## Références

- https://apprendre.modulo-info.ch/archi/mem.html
- https://fr.wikipedia.org/wiki/Hi%C3%A9rarchie_de_m%C3%A9moire
- https://fr.wikipedia.org/wiki/M%C3%A9moire_cache
- https://interstices.info/memoire-et-unite-centrale-un-couple-dedie-a-lexecution-des-programmes/
