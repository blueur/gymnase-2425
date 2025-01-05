# Conversion

:::note[Objectifs]

Comment convertir les nombres entre différentes bases ?

- Écrire un nombre entier en forme canonique décimale
- Convertir de n'importe quelle base en base 10
- Convertir de la base 10 en base 2

:::

## Cours

<Reveal name="1m-repr-conversion" />

## Exercices

### Forme canonique

Écrire les nombres suivants sous forme canonique décimale :

1. 42<sub>10</sub>
   <details><summary>Solution</summary>4 &times; 10<sup>1</sup> + 2 &times; 10<sup>0</sup></details>
2. 1100<sub>2</sub>
   <details><summary>Solution</summary>1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup></details>
3. 123<sub>4</sub>
   <details><summary>Solution</summary>1 &times; 4<sup>2</sup> + 2 &times; 4<sup>1</sup> + 3 &times; 4<sup>0</sup></details>
4. 1010<sub>8</sub>
   <details><summary>Solution</summary>1 &times; 8<sup>3</sup> + 0 &times; 8<sup>2</sup> + 1 &times; 8<sup>1</sup> + 0 &times; 8<sup>0</sup></details>
5. 3CD<sub>16</sub>
   <details><summary>Solution</summary>3 &times; 16<sup>2</sup> + 12 &times; 16<sup>1</sup> + 13 &times; 16<sup>0</sup></details>

<details>
<summary>Toutes les solutions</summary>

1. 4 &times; 10<sup>1</sup> + 2 &times; 10<sup>0</sup>
2. 1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup>
3. 1 &times; 4<sup>2</sup> + 2 &times; 4<sup>1</sup> + 3 &times; 4<sup>0</sup>
4. 1 &times; 8<sup>3</sup> + 0 &times; 8<sup>2</sup> + 1 &times; 8<sup>1</sup> + 0 &times; 8<sup>0</sup>
5. 3 &times; 16<sup>2</sup> + 12 &times; 16<sup>1</sup> + 13 &times; 16<sup>0</sup>

</details>

### Conversion de base

Convertir les nombres suivants dans la base demandée :

1. 1100<sub>2</sub> = ?<sub>10</sub>
   <details><summary>Solution</summary>1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup> = 8 + 4 = **12<sub>10</sub>**</details>
2. 123<sub>4</sub> = ?<sub>10</sub>
   <details><summary>Solution</summary>1 &times; 4<sup>2</sup> + 2 &times; 4<sup>1</sup> + 3 &times; 4<sup>0</sup> = 16 + 8 + 3 = **27<sub>10</sub>**</details>
3. 1010<sub>8</sub> = ?<sub>10</sub>
   <details><summary>Solution</summary>1 &times; 8<sup>3</sup> + 0 &times; 8<sup>2</sup> + 1 &times; 8<sup>1</sup> + 0 &times; 8<sup>0</sup> = 512 + 8 = **520<sub>10</sub>**</details>
4. 123<sub>4</sub> = ?<sub>2</sub>
   <details><summary>Solution</summary>Passer par la base 10 (cf ex 2) : 123<sub>4</sub> = **27<sub>10</sub>** = 16 + 8 + 2 + 1 = **11011<sub>2</sub>**</details>
5. 1010<sub>8</sub> = ?<sub>2</sub>
   <details><summary>Solution</summary>Passer par la base 10 (cf ex 3) : 1010<sub>8</sub> = **520<sub>10</sub>** = 512 + 8 = **10 0000 1000<sub>2</sub>**</details>
6. 42<sub>7</sub> = ?<sub>2</sub>
   <details><summary>Solution</summary>Passer par la base 10 :42<sub>7</sub> = 4 &times; 7<sup>1</sup> + 2 &times; 7<sup>0</sup> = **30<sub>10</sub>** = 16 + 8 + 4 + 2 = **1 1110<sub>2</sub>**</details>
7. 1000 0000<sub>2</sub> = ?<sub>10</sub>
   <details><summary>Solution</summary>1 &times; 2<sup>7</sup> = **128<sub>10</sub>**</details>
8. 0111 1111<sub>2</sub> = ?<sub>10</sub>
   <details><summary>Solution</summary>C'est nombre juste avant 1000 0000<sub>2</sub> (ex 7) : 0111 1111<sub>2</sub> = 1000 0000<sub>2</sub> - 1 = 128<sub>10</sub> - 1 = **127<sub>10</sub>**</details>
9. 256<sub>8</sub> = ?<sub>2</sub>
   <details><summary>Solution</summary>Passer par la base 10 : 256<sub>8</sub> = 2 &times; 8<sup>2</sup> + 5 &times; 8<sup>1</sup> + 6 &times; 8<sup>0</sup> = **174<sub>10</sub>** = 128 + 32 + 8 + 4 + 2 = **1010 1110<sub>2</sub>**</details>
10. 1FF<sub>16</sub> = ?<sub>2</sub>
<details><summary>Solution</summary>Passer par la base 10 : 1FF<sub>16</sub> = 1 &times; 16<sup>2</sup> + 15 &times; 16<sup>1</sup> + 15 &times; 16<sup>0</sup> = **511<sub>10</sub>** = 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = **1 1111 1111<sub>2</sub>**</details>

<details>
<summary>Toutes les solutions</summary>

1. 1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup> = 8 + 4 = **12<sub>10</sub>**
2. 1 &times; 4<sup>2</sup> + 2 &times; 4<sup>1</sup> + 3 &times; 4<sup>0</sup> = 16 + 8 + 3 = **27<sub>10</sub>**
3. 1 &times; 8<sup>3</sup> + 0 &times; 8<sup>2</sup> + 1 &times; 8<sup>1</sup> + 0 &times; 8<sup>0</sup> = 512 + 8 = **520<sub>10</sub>**
4. Passer par la base 10 (cf ex 2) : 123<sub>4</sub> = **27<sub>10</sub>** = 16 + 8 + 2 + 1 = **11011<sub>2</sub>**
5. Passer par la base 10 (cf ex 3) : 1010<sub>8</sub> = **520<sub>10</sub>** = 512 + 8 = **10 0000 1000<sub>2</sub>**
6. Passer par la base 10 :42<sub>7</sub> = 4 &times; 7<sup>1</sup> + 2 &times; 7<sup>0</sup> = **30<sub>10</sub>** = 16 + 8 + 4 + 2 = **1 1110<sub>2</sub>**
7. 1 &times; 2<sup>7</sup> = **128<sub>10</sub>**
8. C'est nombre juste avant 1000 0000<sub>2</sub> (ex 7) : 0111 1111<sub>2</sub> = 1000 0000<sub>2</sub> - 1 = 128<sub>10</sub> - 1 = **127<sub>10</sub>**
9. Passer par la base 10 : 256<sub>8</sub> = 2 &times; 8<sup>2</sup> + 5 &times; 8<sup>1</sup> + 6 &times; 8<sup>0</sup> = **174<sub>10</sub>** = 128 + 32 + 8 + 4 + 2 = **1010 1110<sub>2</sub>**
10. Passer par la base 10 : 1FF<sub>16</sub> = 1 &times; 16<sup>2</sup> + 15 &times; 16<sup>1</sup> + 15 &times; 16<sup>0</sup> = **511<sub>10</sub>** = 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = **1 1111 1111<sub>2</sub>**

</details>

## Références

- https://apprendre.modulo-info.ch/rep-info/entiers.html
- https://fr.vikidia.org/wiki/Syst%C3%A8me_de_num%C3%A9ration
- https://fr.wikipedia.org/wiki/Base_(arithm%C3%A9tique)

### Outils

- [Convertisseur décimal, hexadécimal, binaire](https://sebastienguillon.com/test/javascript/convertisseur.html)
- [Conversion de base 2 en base 10](https://fr.wikihow.com/convertir-un-nombre-binaire-en-nombre-d%C3%A9cimal)
- [Conversion de base 10 en base 2](https://fr.wikihow.com/convertir-du-d%C3%A9cimal-en-binaire)
