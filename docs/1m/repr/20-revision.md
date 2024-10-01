# Révision

:::note[Objectifs]

Comment représenter l'information ?

:::

- Revoir les [Kahoot!](https://create.kahoot.it/course/31335d87-0967-4506-ab05-032241714e52)
- Terminer les exercices des semaines précédentes.
- Support de cours complémentaires :
  - [Introduction](https://apprendre.modulo-info.ch/rep-info/intro.html)
  - [Les entiers](https://apprendre.modulo-info.ch/rep-info/entiers.html)
  - [Les caractères](https://apprendre.modulo-info.ch/rep-info/caracteres.html)
  - [Les images](https://apprendre.modulo-info.ch/rep-info/images.html)
  - [Le son](https://apprendre.modulo-info.ch/rep-info/son.html)
  - [Conclusion](https://apprendre.modulo-info.ch/rep-info/conclusion.html)

## Critères

L'évaluation se portera sur les critères suivants :

- Binaire
  - [ ] Compter en n'importe quelle base
- Conversion
  - [ ] Convertir entre la base binaire et décimale
  - [ ] Convertir entre la base binaire et hexadécimale
- Unité
  - [ ] Comparer et convertir entre les unités
  - [ ] Calculer la taille d'une information
- Encodage, Image, Son
  - [ ] Expliquer la numérisation (image, texte, son)
  - [ ] Estimer le résultat d'un fichier NetPBM
  - [ ] Appliquer le codage des couleurs
  - [ ] Calculer les tailles binaires (images, texte, son)

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

## Bases

Compléter le tableau suivant avec les 25 premiers nombres de chaque base.

| Décimal | Binaire | Octal | Hexadécimal |
| :-----: | :-----: | :---: | :---------: |
|   ...   |   ...   |  ...  |     ...     |

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
   <details><summary>Solution</summary>13<sub>10</sub> = 1101<sub>2</sub> = D<sub>16</sub></details>
2. 11 0011<sub>2</sub> = ?<sub>16</sub> = ?<sub>10</sub>
   <details><summary>Solution</summary>11 0011<sub>2</sub> = 33<sub>16</sub> = 51<sub>10</sub></details>
3. B1C<sub>16</sub> = ?<sub>2</sub> = ?<sub>10</sub>
   <details><summary>Solution</summary>B1C<sub>16</sub> = 1011 0001 1100<sub>2</sub> = 2'844<sub>10</sub></details>
4. 42<sub>5</sub> = ?<sub>10</sub> = ?<sub>16</sub> = ?<sub>2</sub>
   <details><summary>Solution</summary>42<sub>5</sub> = 22<sub>10</sub> = 16<sub>16</sub> = 1 0110<sub>2</sub></details>

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
   <details><summary>Solution</summary>1 [To] = 1'000 [Go] = 1'000'000 [Mo] = 1'000'000'000 [Ko] = 1'000'000'000'000 [o] = 8'000'000'000'000 [b]</details>
2. 1 [Tio] = ? [Gio] = ? [Mio] = ? [Kio] = ? [o] = ? [b]
   <details><summary>Solution</summary>1 [Tio] = 1'024 [Gio] = 1'048'576 [Mio] = 1'073'741'824 [Kio] = 1'099'511'627'776 [o] = 8'796'093'022'208 [b]</details>
3. 4 [Go] = ? [Ko]
   <details><summary>Solution</summary>4 [Go] = 4'000'000 [Ko]</details>
4. 2'000 [Mo] = ? [Go] = ? [Gb]
   <details><summary>Solution</summary>2'000 [Mo] = 2 [Go] = 16 [Gb]</details>
5. 2'097'152 [o] = ? [Kio] = ? [Mio] = ?[Mib]
   <details><summary>Solution</summary>2'097'152 [o] = 2'048 [Kio] = 2 [Mio] = 16 [Mib]</details>

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
    |  128 [Kio]  |  \<  |  128 [Mio]  |
    |   2 [Gio]   |  =  | 2'048 [MiB] |
    |  256 [Gio]  |  =  | 0.25 [Tio]  |
</details>

## Taille binaire

Calculer la taille binaire des éléments suivants dans les unités demandées (arrondir à deux décimales).

1. Une image 2-bit de 32 x 32 pixels en [b] et [o]
   <details><summary>Solution</summary>2'048 [b] = 256 [o]</details>
2. Une image 8-bit de 64 x 128 pixels en [o] et [Kio]
   <details><summary>Solution</summary>8'192 [o] = 8 [Kio]</details>
3. Une image 24-bit de 360 x 640 pixels en [o] et [Kio]
   <details><summary>Solution</summary>691'200 [o] = 675 [Kio]</details>
4. Le texte suivant `Vous ne passerez pas !` en [b] et [o]
   <details><summary>Solution</summary>176 [b] = 22 [o]</details>
5. Un son 4-bit échantillonné à 8 kHz d’une minute en [b], [o] et [Kio]
   <details><summary>Solution</summary>1'920'000 [b] = 240'000 [o] = 234,38 [Kio]</details>
6. Un son 16-bit à 8 kHz de 10 secondes en [b], [o] et [Kio]
   <details><summary>Solution</summary>1'280'000 [b] = 160'000 [o] = 156,25 [Kio]</details>

<details>
  <summary>Solutions détaillées</summary>
    1. 32 x 32 x 2 = 2'048 [b] = 256 [o]
    2. 64 x 128 x 8 = 65'536 [b] = 8'192 [o] = 8 [Kio]
    3. 360 x 640 x 24 = 5'529'600 [b] = 691'200 [o] = 675 [Kio]
    4. 22 x 8 = 176 [b] = 22 [o]
    5. 4 x 8'000 x 60 = 1'920'000 [b] = 240'000 [o] = 234,38 [Kio]
    6. 16 x 8'000 x 10 = 1'280'000 [b] = 160'000 [o] = 156,25 [Kio]
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

|                                     |                          |                                                |
| :---------------------------------: | :----------------------: | :--------------------------------------------: |
|     Un texte de 1000 caractères     | &nbsp;&nbsp;&nbsp;&nbsp; |      Une image 8-bit de 128 x 128 pixels       |
|     Un texte de 2000 caractères     |                          | Un son avec un débit de 32 kb/s de 30 secondes |
| Un son 4-bit à 8 kHz de 15 secondes |                          |      Un son 4-bit à 8 kHz de 15 secondes       |
| Un son 4-bit à 8 kHz de 15 secondes |                          |         Un texte de 60 000 caractères          |
|  Une image 3-bit de 64 x 64 pixels  |                          |           Une image 1-bit de 64 x 64           |

<details>
  <summary>Solution</summary>
    |                                     |     |                                                |
    | :---------------------------------: | :-: | :--------------------------------------------: |
    |     Un texte de 1000 caractères     | \<  |      Une image 8-bit de 128 x 128 pixels       |
    |     Un texte de 2000 caractères     | \<  | Un son avec un débit de 32 kb/s de 30 secondes |
    | Un son 8-bit à 8 kHz de 15 secondes |  >  |      Un son 4-bit à 8 kHz de 15 secondes       |
    | Un son 4-bit à 8 kHz de 15 secondes |  =  |         Un texte de 60 000 caractères          |
    |  Une image 3-bit de 64 x 64 pixels  |  =  |           Une image 1-bit de 64 x 64           |
</details>

## Caractères

![](https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg)

1. Décoder les octets suivants en hexadécimal qui représentent du texte : 49 74 27 73 20 61 20 54 72 61 70 21
   <details><summary>Solution</summary>It's a Trap!</details>
   - Quelle est sa taille ?
     <details><summary>Solution</summary>12 [o]</details>
2. On dit qu'une image vaut mille mots. Combien de mots vaut une image de 12 MP (mégapixel) en 24 bits sachant qu’un mot a une longueur moyenne de 5 lettres ?
   <details><summary>Solution</summary>7'200'000 [mots]</details>
3. Combien de mots pourrait-on envoyer à la place d’un message audio de 8 secondes avec un débit de 256 kb/s ?
   <details><summary>Solution</summary>51'200 [mots]</details>

<details>
  <summary>Solutions détaillées</summary>
    1. It's a Trap! (12 [o])
      - 12 [o], car 12 caractères
    2. - 12 MP = 12'000'000 pixels
      - 12'000'000 [px] x 24 [b] = 36'000'000 [o] (288'000'000 [b])
      - 36'000'000 [o] = 36'000'000 [caractères]
      - 36'000'000 [caractères] / 5 [caractères/mot] = 7'200'000 [mots]
    3. - 8 [s] x 256'000 [b/s] = 2'048'000 [b] = 256'000 [o]
      - 256'000 [o] = 256'000 [caractères]
      - 256'000 [caractères] / 5 [caractères/mot] = 51'200 [mots]
</details>

## NetPBM

Que verrait-on si on ouvre ce fichier avec un lecteur d'image ?

```txt title="image.ppm"
P3
3 2
255
255   0   0   0 255   0   0   0 255
255 255   0 255 255 255   0   0   0
```

<details>
  <summary>Solution</summary>
    ![](https://upload.wikimedia.org/wikipedia/commons/5/57/Tiny6pixel.png)
</details>

## Information

Combien de bits faut-il au minimum pour représenter les éléments suivants ?

1. Un nombre entre 0 et 255
   <details><summary>Solution</summary>8 [b]</details>
2. Une lettre de l'alphabet (minuscule et majuscule)
   <details><summary>Solution</summary>6 [b]</details>
3. Un jour de l'année
   <details><summary>Solution</summary>9 [b]</details>

<details>
  <summary>Solutions détaillées</summary>
    1. 256 valeurs possibles = 2<sup>8</sup> = 256, donc 8 [b]
    2. 26 lettres minuscules + 26 lettres majuscules = 52 caractères possibles. 2<sup>6</sup> = 64 > 52, donc 6 [b]
    3. 365 jours = 2<sup>9</sup> = 512 > 365, donc 9 [b]
</details>
