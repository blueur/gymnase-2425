# Révision

:::note[Objectifs]

L'évaluation se portera sur les critères suivants :

- Logique
  - [ ] Identifier les portes logiques.
  - [ ] Construire la table de vérité d'une porte logique.
  - [ ] Construire la table de vérité d'un circuit logique.
- Composants
  - [ ] Identifier les composants d'un ordinateur selon leurs caractéristiques.
  - [ ] Catégoriser les périphériques d'un ordinateur.
  - [ ] Analyser les causes d'un dysfonctionnement d'un ordinateur.
- Processeur
  - [ ] Identifier si une machine est programmable ou non.
- Mémoire
  - [ ] Différencier les types de mémoires.
  - [ ] Utiliser un cache.

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

:::

:::tip[Aides]

- Revoir les [Kahoot!](https://create.kahoot.it/course/558ce87f-f4a4-45ed-82b6-0a806d871e75)
- Terminer les exercices des semaines précédentes.
- Support de cours complémentaires :
  - [Modulo](https://apprendre.modulo-info.ch/archi/index.html)
    - [Introduction](https://apprendre.modulo-info.ch/archi/intro.html)
    - [Portes logiques](https://apprendre.modulo-info.ch/archi/sys-log.html)
    - [ALU](https://apprendre.modulo-info.ch/archi/alu.html)
    - [Mémoire](https://apprendre.modulo-info.ch/archi/mem.html)
    - [CPU](https://apprendre.modulo-info.ch/archi/micro-pro.html)
    - [Architecture générale](https://apprendre.modulo-info.ch/archi/archi-gen.html)
  - [L'informateur](https://youtube.com/playlist?list=PLOapGKeH_KhHDP6VDU0hEYFqtBLXo_Fsy)
- Pour imprimer : <kbd>Ctrl</kbd> + <kbd>P</kbd> ou <kbd>Cmd</kbd> + <kbd>P</kbd>

:::

## Circuit logique

Construire les tables de vérité des circuits logiques suivants :

![](/1m-arch/circuit-rev-1.svg)

<details>
<summary>Solution</summary>

|  A  |  B  |  C  |  X  |  Y  |
| :-: | :-: | :-: | :-: | :-: |
|  0  |  0  |  0  |  0  |  1  |
|  0  |  0  |  1  |  0  |  0  |
|  0  |  1  |  0  |  0  |  1  |
|  0  |  1  |  1  |  0  |  0  |
|  1  |  0  |  0  |  0  |  1  |
|  1  |  0  |  1  |  0  |  0  |
|  1  |  1  |  0  |  1  |  1  |
|  1  |  1  |  1  |  1  |  1  |

[Simulateur](https://logic.modulo-info.ch/?mode=tryout&data=N4NwXAbANAxg9gWwA5wHYFNUBcDOZgCGqAJgAz5YCeS6YA5EcXVCngNoCMEpUArLwF0oAS1Rg2PDkLgBXLGABMAXyio4WcsCo16arM1biukjoJFiAzFFnyALCrgAnTdtp0nBuOwUB2XlAAOM1FxfwhpOTAfFVEXajdRT3Z+KAtg4jAA1QIENwBBOhjUDgp4+kSWL1D-PyFhDIBObNz6ACFC8wVSnToKwzYUjlM6jI4eVBy3AGEOmziemyTxC1t-XlIRsCHmtwANWbkSrTL3OSW2Ff8gzY4FHfoATUKVAHdhR3R2NjuzNlsocJQNhZDZAppSIFjVJCb5QIYwnxwhQCARKIA)

</details>

![](/1m-arch/circuit-rev-2.svg)

<details>
<summary>Solution</summary>

|  A  |  B  |  C  |  X  |  Y  |  Z  |
| :-: | :-: | :-: | :-: | :-: | :-: |
|  0  |  0  |  0  |  1  |  0  |  0  |
|  0  |  0  |  1  |  1  |  1  |  1  |
|  0  |  1  |  0  |  1  |  1  |  1  |
|  0  |  1  |  1  |  1  |  0  |  0  |
|  1  |  0  |  0  |  0  |  0  |  0  |
|  1  |  0  |  1  |  0  |  0  |  1  |
|  1  |  1  |  0  |  0  |  0  |  1  |
|  1  |  1  |  1  |  0  |  0  |  0  |

[Simulateur](https://logic.modulo-info.ch/?mode=tryout&data=N4NwXAbANAxg9gWwA5wHYFNUBcDOZgCWqADPlgJ5LpgDkRNUKeA2gKytQDMrAulAQBMwADiioAhgmo0AgjQC+-VAEYylafUZwW7KAHZe-IQE4xk6QCEFSgExqqtTUzBsOy5YcFhlxM1NoAwtZwAK5YpMAUDjShWAzOzJx6vtx8Xu5+0gAawWGqkeq0sfHaLkm+BmlCyjaZtACa1qhw4fbSzXFaLB4cqUrenFCx3gAsigAecABOEVHSk1Ml3brGnqguHlDKEHzDynqK4qgCs4U0RwJLLjbCFWsbosrGu2FgNsSKsXYF0cVdZckth4qm9lHUaAAtBSKADuBCm6BYzEenD4zFMwKgzB8Wx2WP2UBsyjRyhGQJJZOUwhJei2zyx7y2Nh4PHkQA)

</details>

## Portes logiques

1. Qu'est-ce que les portes logiques NAND et NOR ont de particulier ?
2. Pourquoi les préfère-t-on par rapport aux autres portes ?
3. Écrire leur table de vérité.

<details>
<summary>Solution</summary>

1. Ce sont des portes logiques universelles et on peut construire n'importe quel circuit logique avec uniquement des portes NAND ou uniquement des portes NOR.
2. Pour la production les portes logiques, il est plus simple de produire un seul type de porte, même si on devra en produire plus.

|  A  |  B  | NAND | NOR |
| :-: | :-: | :--: | :-: |
|  0  |  0  |  1   |  1  |
|  0  |  1  |  1   |  0  |
|  1  |  0  |  1   |  0  |
|  1  |  1  |  0   |  0  |

</details>

## Vrai ou faux

Indiquez si les affirmations suivantes sont vraies ou fausses :

1. L'ALU permet d'effectuer des opérations entre deux nombres.
2. L'ALU ne permet d'effectuer que des additions.
3. L'ALU n'est qu'un simple circuit logique.
4. On ne peut pas stocker de l'information grâce à un circuit logique.

<details>
<summary>Solution</summary>

1. Vrai, l'ALU est l'unité de calcul d'un processeur.
2. Faux, la force d'une ALU est justement de proposer plusieurs opérations possibles.
3. Vrai, l'ALU est un circuit logique.
4. Faux, on a vu qu'un circuit logique peut mémoriser une valeur.

</details>

## Mémoire

| Adresse | Valeur |
| :-----: | :----: |
|    0    |  0x4A  |
|    1    |  0x05  |
|    2    |  0x90  |
|    3    |  0x1F  |

Quel sera l'état de la mémoire après avoir effectué les opérations suivantes ?

1. Mémoire[2] = 0x14
2. Mémoire[1] = 0x37

Convertir la valeur de la case mémoire à l'adresse 3 en nombre décimal.

<details>
<summary>Solution</summary>

| Adresse | Valeur |
| :-----: | :----: |
|    0    |  0x4A  |
|    1    |  0x37  |
|    2    |  0x14  |
|    3    |  0x1F  |

La case mémoire à l'adresse 3 contient un nombre hexadécimal (indiqué par le préfixe 0x) : 1F<sub>16</sub>

0x1F = 1F<sub>16</sub> = 1 \* 16 + 15 = 31<sub>10</sub>

</details>

## Composants

1. Dans quel composant est copié le programme pour qu'il soit exécuté par l'ordinateur ?
2. Quel type de périphérique est le lecteur biométrique (empreinte digitale) ?
3. Que signifie la fréquence d'horloge d'un processeur de 1.6 GHz ?

<details>
<summary>Solution</summary>

1. Dans la mémoire vive
2. Un périphérique d'entrée
3. Le processeur peut effectuer 1,6 milliard d'opérations par seconde

</details>

## Mémoires

Fait-on référence à une mémoire vive ou une mémoire de masse ?

1. Mon téléphone a 256 Go de mémoire.
2. Je ne peux plus prendre de photo car la mémoire est pleine.
3. Mon jeu est super lent, il faudrait que je rajoute de la mémoire.
4. Mon nouvel ordinateur a une mémoire de 16 Go.

<details>
<summary>Solution</summary>

1. Mémoire de masse, car trop grand pour une mémoire vive.
2. Mémoire de masse, car c'est là où on stocke les fichiers (dont les photos).
3. Mémoire vive, ralenti les applications (dont jeux) si elle est pleine.
4. Mémoire vive, car trop peu pour une mémoire de masse.

</details>

## Mémoire de masse

Compléter avec une mémoire de masse HDD ou SSD :

1. Mon disque dur \_\_\_\_ est trop lent, il faudrait que je le change en \_\_\_\_.
2. Le disque dur \_\_\_\_ a un nombre d'écriture limité et donc une durée de vie limitée.
3. Le \_\_\_\_ est composé de disques magnétiques et d'une tête de lecture mécanique.
4. On préfère avoir des \_\_\_\_ dans les ordinateurs portables pour que ce soit moins fragile.
5. Un des premiers iPods avait un \_\_\_\_ pour pouvoir stocker beaucoup de musique à un prix raisonnable.

<details>
<summary>Solution</summary>

1. Mon disque dur **HDD** est trop lent, il faudrait que je le change en **SSD**.
2. Le disque dur **SSD** a un nombre d'écriture limité et donc une durée de vie limitée.
3. Le **HDD** est composé de disques magnétiques et d'une tête de lecture mécanique.
4. On préfère avoir des **SSD** dans les ordinateurs portables pour que ce soit moins fragile.
5. Un des premiers iPods avait un **HDD** pour pouvoir stocker beaucoup de musique à un prix raisonnable.

</details>

## Caractéristiques

Voici les caractéristiques d'ordinateurs trouvées sur un prospectus. Pour chaque ligne, dire à quel(s) composant(s) elle fait référence (si c'est un périphérique, préciser quel type) :

1. Écran tactile IPS Full HD 15,6"
2. Intel Core i5-1235U
3. RAM 16 Go
4. SSD 512 Go
5. Technologie de charge rapide
6. Lecteur d'empreintes digitales
7. 1 prise HDMI 2.1, 1 port USB (type C) 10 Gbit/s, 2 ports USB 5 Gbit/s

<details>
<summary>Solution</summary>

1. Périphérique d'entrée-sortie
2. Processeur
3. Mémoire vive
4. Mémoire de masse
5. Bloc d'alimentation (ou batterie)
6. Périphérique d'entrée
7. Carte mère

</details>

1. Écran liquid Retina IPS 13,6"
2. Puce Apple M2 avec CPU 8 cœurs et GPU 8 cœurs
3. RAM 8 Go
4. SSD 256 Go
5. Clavier rétroéclairé
6. Capteur d'empreinte digitale Touch ID
7. 2 ports Thunderbolt 4 / USB 4 (type C)

<details>
<summary>Solution</summary>

1. Périphérique de sortie
2. Processeur ET processeur graphique (carte graphique)
3. Mémoire vive
4. Mémoire de masse
5. Périphérique d'entrée (éventuellement entrée-sortie pour le rétroéclairage)
6. Périphérique d'entrée
7. Carte mère

</details>

## Cache

1. Quel est le rôle de la mémoire cache ?
2. Que signifie qu'une valeur est en cache ?
3. Que se passe-t-il lorsque la mémoire cache est pleine ?

<details>
<summary>Solution</summary>

1. Stocker temporairement les données les plus récemment utilisées pour les rendre plus rapidement accessibles.
2. La valeur est déjà stockée dans la mémoire cache. Son accès est donc plus rapide.
3. Les données les moins utilisées sont supprimées pour faire de la place pour les nouvelles données.

</details>

Voici l'état de départ de la mémoire :

| Adresse | Valeur |
| :-----: | :----: |
|    0    | 0x3A12 |
|    1    | 0x1E54 |
|    2    | 0xF276 |
|    3    | 0xA2B3 |
|    4    | 0x0043 |
|    5    | 0x00CD |

On a un cache de 3 lignes qui est vide.

Pour chacune de ces lectures, indiquez d'où provient la valeur (mémoire ou cache) :

1. mémoire[2]
2. mémoire[3]
3. mémoire[5]
4. mémoire[0]
5. mémoire[2]
6. mémoire[0]
7. mémoire[5]
8. mémoire[2]
9. mémoire[4]
10. mémoire[4]

<details>
<summary>Solution</summary>

1. mémoire[2] : mémoire (le cache était vide)
2. mémoire[3] : mémoire (le cache contenait la ligne 2)
3. mémoire[5] : mémoire (le cache contenait les lignes 2 et 3)
4. mémoire[0] : mémoire (le cache contenait les lignes 2, 3 et 5)
5. mémoire[2] : mémoire (le cache contenait les lignes 0, 3 et 5)
6. mémoire[0] : cache (le cache contenait les lignes 0, 2 et 5)
7. mémoire[5] : cache (le cache contenait les lignes 0, 2 et 5)
8. mémoire[2] : cache (le cache contenait les lignes 0, 2 et 5)
9. mémoire[4] : mémoire (le cache contenait les lignes 0, 2 et 5)
10. mémoire[4] : cache (le cache contenait les lignes 2, 4 et 5)

</details>
