# Unité

:::note[Objectifs]

Qu'est-ce que l'information ?

- Lister et convertir les unités d'information (b, o, B).
- Lister et convertir les préfixes décimaux d'unités (k, M, G, T).
- Lister et convertir les préfixes binaires d'unités (Ki, Mi, Gi, Ti).
- Convertir de l'hexadécimal en binaire et vice-versa.
- Lire différentes notations de l'hexadécimal et du binaire.
- Calculer la taille d'encodage d'une information.

:::

## Cours

<Reaveal name="1m-repr-unite" />

## Exercices

### Conversion

Remplir le tableau suivant en convertissant les nombres dans les bases indiquées :

| Décimal | Binaire | Hexadécimal |
| :-----: | :-----: | :---------: |
|   74    |         |             |
|         | 101110  |             |
|         |         |     A4      |

<details>
<summary>Solutions</summary>

| Décimal |  Binaire   | Hexadécimal |
| :-----: | :--------: | :---------: |
| **74**  |  1001010   |     4A      |
|   46    | **101110** |     2E      |
|   164   |  10100100  |   **A4**    |

</details>

### Préfixes d'unités

Convertir les valeurs suivantes dans l'unité indiquée :

1. 16 [b] = ? [o] = ? [B]
   <details><summary>Solution</summary>16 [b] = 2 [o] = 2 [B]</details>
2. 1'024 [o] = ? [b] = ? [B]
   <details><summary>Solution</summary>1'024 [o] = 8'192 [b] = 1'024 [B]</details>
3. 1'000 [o] = ? [ko] = ? [kb]
   <details><summary>Solution</summary>1'000 [o] = 1 [ko] = 8 [kb]</details>
4. 1'024 [o] = ? [Kio] = ? [ko]
   <details><summary>Solution</summary>1'024 [o] = 1 [Kio] = 1.024 [ko]</details>
5. 1'000 [Gb] = ? [Tb] = ? [Mb] = ? [b]
   <details><summary>Solution</summary>1'000 [Gb] = 1 [Tb] = 1'000 [Mb] = 1'000'000'000 [b]</details>

<details>
<summary>Toutes les solutions</summary>

1. 16 [b] = 2 [o] = 2 [B]
2. 1'024 [o] = 8'192 [b] = 1'024 [B]
3. 1'000 [o] = 1 [ko] = 8 [kb]
4. 1'024 [o] = 1 [Kio] = 1.024 [ko]
5. 1'000 [Gb] = 1 [Tb] = 1'000'000 [Mb] = 1'000'000'000 [b]

</details>

### Encodage

Combien de bits sont nécessaires pour encoder les informations suivantes ?

1. Un chiffre décimal (0 à 9)
   <details><summary>Solution</summary>10 éléments : 2<sup>4</sup> = 16, donc **4 bits**</details>
2. Un caractère alphanumérique (A-Z, a-z, 0-9)
   <details><summary>Solution</summary>62 éléments : 2<sup>6</sup> = 64, donc **6 bits**</details>
3. Un résultat de lancer de dé (1 à 6)
   <details><summary>Solution</summary>6 éléments : 2<sup>3</sup> = 8, donc **3 bits**</details>
4. Un résultat de lancer de pièce (pile ou face)
   <details><summary>Solution</summary>2 éléments : 2<sup>1</sup> = 2, donc **1 bit**</details>
5. Un mois de l'année
   <details><summary>Solution</summary>12 éléments : 2<sup>4</sup> = 16, donc **4 bits**</details>
6. Un jour de la semaine (lundi à dimanche)
   <details><summary>Solution</summary>7 éléments : 2<sup>3</sup> = 8, donc **3 bits**</details>

<details>
<summary>Toutes les solutions</summary>

1. 10 éléments : 2<sup>4</sup> = 16, donc **4 bits**
2. 62 éléments : 2<sup>6</sup> = 64, donc **6 bits**
3. 6 éléments : 2<sup>3</sup> = 8, donc **3 bits**
4. 2 éléments : 2<sup>1</sup> = 2, donc **1 bit**
5. 12 éléments : 2<sup>4</sup> = 16, donc **4 bits**
6. 7 éléments : 2<sup>3</sup> = 8, donc **3 bits**

</details>

## Références

- https://fr.vikidia.org/wiki/Bit
- https://fr.vikidia.org/wiki/Octet
  - https://fr.wikipedia.org/wiki/Octet
- https://fr.vikidia.org/wiki/Syst%C3%A8me_hexad%C3%A9cimal
  - https://fr.wikipedia.org/wiki/Syst%C3%A8me_hexad%C3%A9cimal

### Outils

- [Convertisseur décimal, hexadécimal, binaire](https://sebastienguillon.com/test/javascript/convertisseur.html)
- [Conversion de base 2 en base 16](https://fr.wikihow.com/convertir-du-binaire-en-hexad%C3%A9cimal)
