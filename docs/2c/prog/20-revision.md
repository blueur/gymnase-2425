# Révision

:::note[Objectifs]

L'évaluation se portera sur les critères suivants :

- Instructions
  - [ ] Afficher du texte dans la console.
  - [ ] Corriger les erreurs de syntaxe.
  - [ ] Exécuter un programme.
  - [ ] Programmer un dessin.
- Boucles for
  - [ ] Utiliser les boucles for.
  - [ ] Maîtriser l'indentation.
- Variables
  - [ ] Définir des variables.
  - [ ] Utiliser les variables.
  - [ ] Effectuer des opérations avec les variables.

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

:::

:::tip[Aides]

- Terminer et/ou refaire les exercices sur AlgoPython (séries A-B-C).
- Tester du code Python en ligne : https://www.algopython.fr/outil/console
- Outils de dessin en ligne : https://www.algopython.fr/outil/canvas

:::

### Instructions

```
print("Bonjour')
print(Je suis un robot !)
4 = bleu
print(52.5)
print(24,75
rouge = 42
print(rouge + 4)
```

Corriger les erreurs de syntaxe dans le code ci-dessus.

<details>
<summary>Solution</summary>

```python showLineNumbers
print("Bonjour")
print("Je suis un robot !")
bleu = 4
print(52.5)
print(24, 75)
rouge = 42
print(rouge + 4)
```

</details>

Que va-t-il afficher après la correction ?

<details>
<summary>Solution</summary>

```
Bonjour
Je suis un robot !
52.5
24 75
46
```

</details>

### Dessin

![](/algopython/canva.png)

Que va dessiner le programme suivant ?

```python showLineNumbers
tourner(-90)
avancer(2)
tourner(120)
avancer(1)
tourner(120)
avancer(1)
```

<details>
<summary>Solution</summary>

![](/algopython/canva-flag.png)

</details>

Écrire le code pour dessiner le cube suivant :

![](/algopython/canva-cube.png)

<details>
<summary>Solution</summary>

```python showLineNumbers
avancer(2)
tourner(90)
avancer(2)
tourner(90)
avancer(2)
tourner(90)
avancer(2)
tourner(45)
avancer(1)
tourner(45)
avancer(2)
tourner(135)
avancer(1)
tourner(180)
avancer(1)
tourner(135)
avancer(2)
tourner(45)
avancer(1)
```

ou encore mieux avec une boucle :

```python showLineNumbers
for i in range(4):
    avancer(2)
    tourner(90)
tourner(-45)
avancer(1)
tourner(45)
avancer(2)
tourner(135)
avancer(1)
tourner(180)
avancer(1)
tourner(135)
avancer(2)
tourner(45)
avancer(1)
```

</details>

### Code

Remettre les lignes du code dans le bon ordre pour dessiner un carré (en bas à droite du point de départ).

```python
    tourner(90)
for i in range(4):
    avancer(largeur)
largeur = 2
```

<details>
<summary>Solution</summary>

```python showLineNumbers
largeur = 2
for i in range(4):
    avancer(largeur)
    tourner(90)
```

</details>

### Variable

Que vont imprimer les programmes suivants ?

```python
a = 5
b = 3
print(b)
print(a)
print(a + b)
```

<details>
<summary>Solution</summary>

```
3
5
8
```

</details>

```python
a = 2
print(a)
a = a + 3
print(a)
b = a * 2
print(b)
a = 4
print(a, b)
```

<details>
<summary>Solution</summary>

```
2
5
10
4 10
```

</details>

### Boucle

Que vont imprimer les programmes suivants ?

```python
for i in range(4):
    print("Bonjour")
```

<details>
<summary>Solution</summary>

```
Bonjour
Bonjour
Bonjour
```

</details>

```python
for i in range(3):
    print(i)
```

<details>
<summary>Solution</summary>

```
0
1
2
```

</details>

```python
for i in range(6):
    a = i * 2
    print(a, i)
```

<details>
<summary>Solution</summary>

```
0 0
2 1
4 2
6 3
8 4
10 5
```

</details>

```python
for i in range(10):
    print("4 x", i, "=", 4 * i)
```

<details>
<summary>Solution</summary>

```
4 x 0 = 0
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
```

</details>
