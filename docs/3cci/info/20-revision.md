---
description: ""
---

# Révision

:::note[Objectifs]

L'évaluation se portera sur les critères suivants :

- Base
  - [ ] Compter en n'importe quelle base.
  - [ ] Convertir entre la base binaire et décimale.
  - [ ] Convertir entre la base binaire et hexadécimale.
- Unité
  - [ ] Comparer et convertir entre les unités.
  - [ ] Calculer la taille d'une information.
- Codage
  - [ ] Utiliser le codage des couleurs.
  - [ ] Calculer les tailles binaires (images, texte).
- Ordinateur
  - [ ] Reconnaître les caractéristiques d'un composant.
  - [ ] Catégoriser les périphériques d'un ordinateur.
  - [ ] Différencier les types de mémoires.

|            Note            | &nbsp;1&nbsp; | 1.5 | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |  1  |       2       |  3  |       4       |  5  |       6       |  7  |       8       |  9  |      10       |

:::

:::tip[Aides]

- Revoir les [Kahoot!](https://create.kahoot.it/course/2a792691-9223-4572-81c9-dae31cbb6c1f)
- Terminer les exercices des semaines précédentes.
- Support de cours complémentaires :
  - [Modulo](https://apprendre.modulo-info.ch/index.html)
    - [Représentation de l’information](https://apprendre.modulo-info.ch/rep-info/index.html)
      - [Introduction](https://apprendre.modulo-info.ch/rep-info/intro.html)
      - [Les caractères](https://apprendre.modulo-info.ch/rep-info/caracteres.html)
      - [Les images](https://apprendre.modulo-info.ch/rep-info/images.html)
      - [Conclusion](https://apprendre.modulo-info.ch/rep-info/conclusion.html)
    - [Architecture des ordinateurs](https://apprendre.modulo-info.ch/archi/index.html)
      - [Introduction](https://apprendre.modulo-info.ch/archi/intro.html)
      - [Architecture générale](https://apprendre.modulo-info.ch/archi/archi-gen.html)
  - L'informateur
    - [Encodage de l'information](https://youtube.com/playlist?list=PLOapGKeH_KhGI1CsCvu_nK9otou8_KsCZ)
    - [Hardware](https://youtube.com/playlist?list=PLOapGKeH_KhHDP6VDU0hEYFqtBLXo_Fsy)
- Pour imprimer : <kbd>Ctrl</kbd> + <kbd>P</kbd> ou <kbd>Cmd</kbd> + <kbd>P</kbd>

:::

## Bases

Compléter le tableau suivant avec les 25 premiers nombres de chaque base.

| Décimal  | Binaire  |  Octal   | Hexadécimal |
| :------: | :------: | :------: | :---------: |
| &hellip; | &hellip; | &hellip; |  &hellip;   |

<details>
  <summary>Solution</summary>

| Décimal | Binaire | Octal | Hexadécimal |
| :-----: | :-----: | :---: | :---------: |
|    0    |    0    |   0   |      0      |
|    1    |    1    |   1   |      1      |
|    2    |   10    |   2   |      2      |
|    3    |   11    |   3   |      3      |
|    4    |   100   |   4   |      4      |
|    5    |   101   |   5   |      5      |
|    6    |   110   |   6   |      6      |
|    7    |   111   |   7   |      7      |
|    8    |  1 000  |  10   |      8      |
|    9    |  1 001  |  11   |      9      |
|   10    |  1 010  |  12   |      A      |
|   11    |  1 011  |  13   |      B      |
|   12    |  1 100  |  14   |      C      |
|   13    |  1 101  |  15   |      D      |
|   14    |  1 110  |  16   |      E      |
|   15    |  1 111  |  17   |      F      |
|   16    | 10 000  |  20   |     10      |
|   17    | 10 001  |  21   |     11      |
|   18    | 10 010  |  22   |     12      |
|   19    | 10 011  |  23   |     13      |
|   20    | 10 100  |  24   |     14      |
|   21    | 10 101  |  25   |     15      |
|   22    | 10 110  |  26   |     16      |
|   23    | 10 111  |  27   |     17      |
|   24    | 11 000  |  30   |     18      |

</details>

## Conversion de base

Convertir les nombres suivants vers les bases demandées.

1. 13<sub>10</sub> = ?<sub>2</sub> = ?<sub>16</sub>
   <Check>13<sub>10</sub> = 1101<sub>2</sub> = D<sub>16</sub></Check>
2. 11 0011<sub>2</sub> = ?<sub>16</sub> = ?<sub>10</sub>
   <Check>11 0011<sub>2</sub> = 33<sub>16</sub> = 51<sub>10</sub></Check>
3. B1C<sub>16</sub> = ?<sub>2</sub> = ?<sub>10</sub>
   <Check>B1C<sub>16</sub> = 1011 0001 1100<sub>2</sub> = 2'844<sub>10</sub></Check>
4. 42<sub>5</sub> = ?<sub>10</sub> = ?<sub>16</sub> = ?<sub>2</sub>
   <Check>42<sub>5</sub> = 22<sub>10</sub> = 16<sub>16</sub> = 1 0110<sub>2</sub></Check>

<details>
  <summary>Solutions détaillées</summary>

1. - Décimal &rarr; Binaire : 13<sub>10</sub> = 8 + 4 + 1 = 1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 1101<sub>2</sub>
   - Binaire &rarr; Hexadécimal : 1101<sub>2</sub> = D<sub>16</sub>
2. - Binaire &rarr; Hexadécimal : 11 0011<sub>2</sub> = 33<sub>16</sub>
   - Hexadécimal &rarr; Décimal : 33<sub>16</sub> = 3 &times; 16<sup>1</sup> + 3 &times; 16<sup>0</sup> = 51<sub>10</sub>
3. - Hexadécimal &rarr; Binaire : B1C<sub>16</sub> = 1011 0001 1100<sub>2</sub>
   - Hexadécimal &rarr; Décimal : B1C<sub>16</sub> = 11 &times; 16<sup>2</sup> + 1 &times; 16<sup>1</sup> + 12 &times; 16<sup>0</sup> = 2'844<sub>10</sub>
4. - Base 5 &rarr; Décimal : 42<sub>5</sub> = 4 &times; 5<sup>1</sup> + 2 &times; 5<sup>0</sup> = 22<sub>10</sub>
   - Décimal &rarr; Binaire : 22<sub>10</sub> = 16 + 4 + 2 = 1 &times; 2<sup>4</sup> + 1 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> = 1 0110<sub>2</sub>
   - Binaire &rarr; Hexadécimal : 1 0110<sub>2</sub> = 16<sub>16</sub>

</details>

## Conversion d'unités

Convertir vers les unités demandées.

1. 1 [To] = ? [Go] = ? [Mo] = ? [Ko] = ? [o] = ? [b]
   <Check>1 [To] = 1'000 [Go] = 1'000'000 [Mo] = 1'000'000'000 [Ko] = 1'000'000'000'000 [o] = 8'000'000'000'000 [b]</Check>
2. 1 [Tio] = ? [Gio] = ? [Mio] = ? [Kio] = ? [o] = ? [b]
   <Check>1 [Tio] = 1'024 [Gio] = 1'048'576 [Mio] = 1'073'741'824 [Kio] = 1'099'511'627'776 [o] = 8'796'093'022'208 [b]</Check>
3. 4 [Go] = ? [Ko]
   <Check>4 [Go] = 4'000'000 [Ko]</Check>
4. 2'000 [Mo] = ? [Go] = ? [Gb]
   <Check>2'000 [Mo] = 2 [Go] = 16 [Gb]</Check>
5. 2'097'152 [o] = ? [Kio] = ? [Mio] = ?[Mib]
   <Check>2'097'152 [o] = 2'048 [Kio] = 2 [Mio] = 16 [Mib]</Check>

<details>
  <summary>Solutions</summary>

1. 1 [To] = 1'000 [Go] = 1'000'000 [Mo] = 1'000'000'000 [Ko] = 1'000'000'000'000 [o] = 8'000'000'000'000 [b]
2. 1 [Tio] = 1'024 [Gio] = 1'048'576 [Mio] = 1'073'741'824 [Kio] = 1'099'511'627'776 [o] = 8'796'093'022'208 [b]
3. 4 [Go] = 4'000'000 [Ko]
4. 2'000 [Mo] = 2 [Go] = 16 [Gb]
5. 2'097'152 [o] = 2'048 [Kio] = 2 [Mio] = 16 [Mib]

</details>

## Comparaison d'unités

Comparer les valeurs suivantes avec \<, > ou =.

|             |                          |             |
| :---------: | :----------------------: | :---------: |
|   4 [Gio]   | &nbsp;&nbsp;&nbsp;&nbsp; |  512 [Mio]  |
| 1'024 [Kio] |                          |   1 [Mio]   |
| 2'048 [Tio] |                          |   4 [Mio]   |
|  128 [Kio]  |                          |  128 [Mio]  |
|   2 [Gio]   |                          | 2'048 [MiB] |
|  256 [Gio]  |                          | 0.25 [Tio]  |

<details>
  <summary>Solution</summary>

|             |     |             |
| :---------: | :-: | :---------: |
|   4 [Gio]   |  >  |  512 [Mio]  |
| 1'024 [Kio] |  =  |   1 [Mio]   |
| 2'048 [Tio] |  >  |   4 [Mio]   |
|  128 [Kio]  | \<  |  128 [Mio]  |
|   2 [Gio]   |  =  | 2'048 [MiB] |
|  256 [Gio]  |  =  | 0.25 [Tio]  |

</details>

## Taille binaire

Calculer la taille binaire des éléments suivants dans les unités demandées (arrondir à deux décimales).

1. Une image 2-bit de 32 x 32 pixels en [b] et [o]
   <Check>2'048 [b] = 256 [o]</Check>
2. Une image 8-bit de 64 x 128 pixels en [o] et [Kio]
   <Check>8'192 [o] = 8 [Kio]</Check>
3. Une image 24-bit de 360 x 640 pixels en [o] et [Kio]
   <Check>691'200 [o] = 675 [Kio]</Check>
4. Le texte suivant `Vous ne passerez pas !` en [b] et [o]
   <Check>176 [b] = 22 [o]</Check>

<details>
  <summary>Solutions détaillées</summary>

1. 32 x 32 x 2 = 2'048 [b] = 256 [o]
2. 64 x 128 x 8 = 65'536 [b] = 8'192 [o] = 8 [Kio]
3. 360 x 640 x 24 = 5'529'600 [b] = 691'200 [o] = 675 [Kio]
4. 22 x 8 = 176 [b] = 22 [o]

</details>

## Couleur

Associer les codes hexadécimaux aux couleurs correspondantes.

|  Code   | &nbsp;&nbsp;&nbsp;&nbsp; | Couleur |
| :-----: | :----------------------: | :-----: |
| #BDBDBD |                          |  Noir   |
| #FF0000 |                          |  Rouge  |
| #00E676 |                          |  Bleu   |
| #2962FF |                          |  Vert   |
| #000000 |                          |  Gris   |
| #FFFFFF |                          |  Blanc  |

<details>
  <summary>Solution</summary>

- #BDBDBD : Gris
- #FF0000 : Rouge
- #00E676 : Vert
- #2962FF : Bleu
- #000000 : Noir
- #FFFFFF : Blanc

</details>

## Comparaison d'éléments

Comparer la taille binaire des éléments suivants avec \<, > ou =.

|                                     |                          |                                     |
| :---------------------------------: | :----------------------: | :---------------------------------: |
|     Un texte de 1000 caractères     | &nbsp;&nbsp;&nbsp;&nbsp; | Une image 8-bit de 128 x 128 pixels |
|     Un texte de 2000 caractères     |                          |     Un texte de 2048 caractères     |
| Une image 8-bit de 100 x 320 pixels |                          |    Un texte de 30'000 caractères    |
|  Une image 4-bit de 64 x 64 pixels  |                          |    Une image 1-bit de 128 x 128     |

<details>
  <summary>Solution</summary>

|                                     |            |     |            |                                     |
| :---------------------------------: | :--------: | :-: | :--------: | :---------------------------------: |
|     Un texte de 1000 caractères     | 1'000 [o]  | \<  | 16'384 [o] | Une image 8-bit de 128 x 128 pixels |
|     Un texte de 2000 caractères     | 2'000 [o]  | \<  | 2'048 [o]  |     Un texte de 2048 caractères     |
| Une image 8-bit de 100 x 320 pixels | 32'000 [o] |  >  | 30'000 [o] |    Un texte de 30'000 caractères    |
|  Une image 4-bit de 64 x 64 pixels  | 16'384 [b] |  =  | 16'384 [b] |    Une image 1-bit de 128 x 128     |

</details>

## Caractères

![](https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg)

1. Décoder les octets suivants en hexadécimal qui représentent du texte : 49 74 27 73 20 61 20 54 72 61 70 21
   <Check>It's a Trap!</Check>
   - Quelle est sa taille ?
     <Check>12 [o]</Check>
2. On dit qu'une image vaut mille mots. Combien de mots vaut une image de 12 MP (mégapixel) en 24 bits sachant qu’un mot a une longueur moyenne de 5 lettres ?
   <Check>7'200'000 [mots]</Check>

<details>
  <summary>Solutions détaillées</summary>

1. - It's a Trap! (12 [o])
   - 12 [o], car 12 caractères
2. - 12 MP = 12'000'000 pixels
   - 12'000'000 [px] x 24 [b] = 36'000'000 [o] (288'000'000 [b])
   - 36'000'000 [o] = 36'000'000 [caractères]
   - 36'000'000 [caractères] / 5 [caractères/mot] = 7'200'000 [mots]

</details>

## Information

Combien de bits faut-il au minimum pour représenter les éléments suivants ?

1. Un nombre entre 0 et 255
   <Check>8 [b]</Check>
2. Une lettre de l'alphabet (minuscule et majuscule)
   <Check>6 [b]</Check>
3. Un jour de l'année
   <Check>9 [b]</Check>

<details>
  <summary>Solutions détaillées</summary>

1. 256 valeurs possibles = 2<sup>8</sup> = 256, donc 8 [b]
2. 26 lettres minuscules + 26 lettres majuscules = 52 caractères possibles. 2<sup>6</sup> = 64 > 52, donc 6 [b]
3. 365 jours = 2<sup>9</sup> = 512 > 365, donc 9 [b]

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

1. Ma mémoire de masse \_\_\_\_ est trop lent, il faudrait que je le change en \_\_\_\_.
2. La mémoire de masse \_\_\_\_ a un nombre d'écriture limité et donc une durée de vie limitée.
3. Le \_\_\_\_ est composé de disques magnétiques et d'une tête de lecture mécanique.
4. On préfère avoir des \_\_\_\_ dans les ordinateurs portables pour que ce soit moins fragile.
5. Un des premiers iPods avait un \_\_\_\_ pour pouvoir stocker beaucoup de musique à un prix raisonnable.

<details>
<summary>Solution</summary>

1. Ma mémoire de masse **HDD** est trop lent, il faudrait que je le change en **SSD**.
2. La mémoire de masse **SSD** a un nombre d'écriture limité et donc une durée de vie limitée.
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
2. Puce Apple M2 avec CPU 8 coeurs et GPU 8 coeurs
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
