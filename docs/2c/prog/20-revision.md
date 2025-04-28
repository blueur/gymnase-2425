# Révision

:::note[Objectifs]

L'évaluation se portera sur les critères suivants :

- Instructions
  - [ ] Afficher du texte dans la console.
  - [ ] Repérer les erreurs de syntaxe.
  - [ ] Corriger les erreurs de syntaxe.
  - [ ] Programmer un robot.
- Boucles for
  - [ ] Utiliser les boucles for.
  - [ ] Maîtriser l'indentation.
  - [ ] Imbriquer les boucles for.
- Variables
  - [ ] Utiliser les variables.
- Fonctions
  - [ ] Utiliser les fonctions.

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

:::

:::tip[Aides]

- Terminer et/ou revoir les exercices sur AlgoPython.
- Tester du code Python en ligne : https://www.algopython.fr/outil/console

:::

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
