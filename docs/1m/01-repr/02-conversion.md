# Conversion

:::note[Objectifs]

Conversion entre différentes bases.

- Écrire un nombre entier en forme canonique décimale
- Convertir de n'importe quelle base en base 10
- Convertir de la base 10 en base 2

:::

## Cours

<Reaveal name="1m-repr-conversion" />

## Exercices

### Forme canonique

Écrire les nombres suivants sous forme canonique décimale :

1. 42₁₀
   <details><summary>Solution</summary>4 × 10¹ + 2 × 10⁰</details>
2. 1100₂
   <details><summary>Solution</summary>1 × 2³ + 1 × 2² + 0 × 2¹ + 0 × 2⁰</details>
3. 123₄
   <details><summary>Solution</summary>1 × 4² + 2 × 4¹ + 3 × 4⁰</details>
4. 1010₈
   <details><summary>Solution</summary>1 × 8³ + 0 × 8² + 1 × 8¹ + 0 × 8⁰</details>
5. 3CD₁₆
   <details><summary>Solution</summary>3 × 16² + 12 × 16¹ + 13 × 16⁰</details>

<details>
<summary>Toutes les solutions</summary>

1. 4 × 10¹ + 2 × 10⁰
2. 1 × 2³ + 1 × 2² + 0 × 2¹ + 0 × 2⁰
3. 1 × 4² + 2 × 4¹ + 3 × 4⁰
4. 1 × 8³ + 0 × 8² + 1 × 8¹ + 0 × 8⁰
5. 3 × 16² + 12 × 16¹ + 13 × 16⁰

</details>

### Conversion de base

Convertir les nombres suivants dans la base demandée :

1. 1100₂ = ?₁₀
   <details><summary>Solution</summary>1 × 2³ + 1 × 2² + 0 × 2¹ + 0 × 2⁰ = 8 + 4 = **12₁₀**</details>
2. 123₄ = ?₁₀
   <details><summary>Solution</summary>1 × 4² + 2 × 4¹ + 3 × 4⁰ = 16 + 8 + 3 = **27₁₀**</details>
3. 1010₈ = ?₁₀
   <details><summary>Solution</summary>1 × 8³ + 0 × 8² + 1 × 8¹ + 0 × 8⁰ = 512 + 8 = **520₁₀**</details>
4. 123₄ = ?₂
   <details><summary>Solution</summary>Passer par la base 10 (cf ex 2) : 123₄ = **27₁₀** = 16 + 8 + 2 + 1 = **11011₂**</details>
5. 1010₈ = ?₂
   <details><summary>Solution</summary>Passer par la base 10 (cf ex 3) : 1010₈ = **520₁₀** = 512 + 8 = **10 0000 1000₂**</details>
6. 42₇ = ?₂
   <details><summary>Solution</summary>Passer par la base 10 :42₇ = 4 × 7¹ + 2 × 7⁰ = **30₁₀** = 16 + 8 + 4 + 2 = **1 1110₂**</details>
7. 1000 0000₂ = ?₁₀
   <details><summary>Solution</summary>1 × 2⁷ = **128₁₀**</details>
8. 0111 1111₂ = ?₁₀
   <details><summary>Solution</summary>C'est nombre juste avant 1000 0000₂ (ex 7) : 0111 1111₂ = 1000 0000₂ - 1 = 128₁₀ - 1 = **127₁₀**</details>
9. 256₈ = ?₂
   <details><summary>Solution</summary>Passer par la base 10 : 256₈ = 2 × 8² + 5 × 8¹ + 6 × 8⁰ = **174₁₀** = 128 + 32 + 8 + 4 + 2 = **1010 1110₂**</details>
10. 1FF₁₆ = ?₂
<details><summary>Solution</summary>Passer par la base 10 : 1FF₁₆ = 1 × 16² + 15 × 16¹ + 15 × 16⁰ = **511₁₀** = 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = **1 1111 1111₂**</details>

<details>
<summary>Toutes les solutions</summary>

1. 1 × 2³ + 1 × 2² + 0 × 2¹ + 0 × 2⁰ = 8 + 4 = **12₁₀**
2. 1 × 4² + 2 × 4¹ + 3 × 4⁰ = 16 + 8 + 3 = **27₁₀**
3. 1 × 8³ + 0 × 8² + 1 × 8¹ + 0 × 8⁰ = 512 + 8 = **520₁₀**
4. Passer par la base 10 (cf ex 2) : 123₄ = **27₁₀** = 16 + 8 + 2 + 1 = **11011₂**
5. Passer par la base 10 (cf ex 3) : 1010₈ = **520₁₀** = 512 + 8 = **10 0000 1000₂**
6. Passer par la base 10 :42₇ = 4 × 7¹ + 2 × 7⁰ = **30₁₀** = 16 + 8 + 4 + 2 = **1 1110₂**
7. 1 × 2⁷ = **128₁₀**
8. C'est nombre juste avant 1000 0000₂ (ex 7) : 0111 1111₂ = 1000 0000₂ - 1 = 128₁₀ - 1 = **127₁₀**
9. Passer par la base 10 : 256₈ = 2 × 8² + 5 × 8¹ + 6 × 8⁰ = **174₁₀** = 128 + 32 + 8 + 4 + 2 = **1010 1110₂**
10. Passer par la base 10 : 1FF₁₆ = 1 × 16² + 15 × 16¹ + 15 × 16⁰ = **511₁₀** = 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = **1 1111 1111₂**

</details>

## Références

- https://apprendre.modulo-info.ch/rep-info/entiers.html
- https://fr.vikidia.org/wiki/Syst%C3%A8me_de_num%C3%A9ration
- https://fr.wikipedia.org/wiki/Base_(arithm%C3%A9tique)

### Outils

- [Convertisseur décimal, hexadécimal, binaire](https://sebastienguillon.com/test/javascript/convertisseur.html)
- [Conversion de base 2 en base 10](https://fr.wikihow.com/convertir-un-nombre-binaire-en-nombre-d%C3%A9cimal)
- [Conversion de base 10 en base 2](https://fr.wikihow.com/convertir-du-d%C3%A9cimal-en-binaire)
