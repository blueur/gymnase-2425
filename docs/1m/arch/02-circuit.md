# Circuit logique

:::note[Objectifs]

Comment combiner les portes logiques ?

:::

## Cours

<Reaveal name="1m-arch-circuit" />

## Exercices

### Porte logique

Dessiner le symbole et la table de vérité des portes logiques suivantes :

1. AND
2. OR
3. XOR
4. NOT

<details>
<summary>Solution</summary>

| Nom |                                    Symbole                                     |
| :-: | :----------------------------------------------------------------------------: |
| AND | ![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Logic-gate-and-us.svg) |
| OR  |    ![](https://upload.wikimedia.org/wikipedia/commons/4/4c/Or-gate-en.svg)     |
| XOR |    ![](https://upload.wikimedia.org/wikipedia/commons/6/6d/Xor-gate-en.svg)    |
| NOT |    ![](https://upload.wikimedia.org/wikipedia/commons/9/9f/Not-gate-en.svg)    |

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | AND |      OR       | XOR | NOT |
| :-----------: | :-----------: | :-: | :-----------: | :-: | :-: |
|       0       |       0       |  0  | &nbsp;0&nbsp; |  0  |  1  |
|       0       |       1       |  0  |       1       |  1  |  1  |
|       1       |       0       |  0  |       1       |  1  |  0  |
|       1       |       1       |  1  |       1       |  0  |  0  |

</details>

### Circuit logique

Construire la table de vérité des circuits logiques suivants :

![](/1m-arch/circuit-ex-1.svg)

<details>
<summary>Solution</summary>

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | &nbsp;C&nbsp; | &nbsp;X&nbsp; | &nbsp;Y&nbsp; |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
|       0       |       0       |       0       |       0       |       0       |
|       0       |       0       |       1       |       1       |       1       |
|       0       |       1       |       0       |       0       |       0       |
|       0       |       1       |       1       |       1       |       1       |
|       1       |       0       |       0       |       0       |       0       |
|       1       |       0       |       1       |       1       |       1       |
|       1       |       1       |       0       |       1       |       0       |
|       1       |       1       |       1       |       1       |       1       |

[Simulateur](https://logic.modulo-info.ch/?mode=tryout&data=N4NwXAbANAxg9gWwA5wHYFNUBcDOZgCWqADPlgJ5LpgDkRNUKeA2hAKxQAsbAulAQBMwxKKgCGCajQCCNAL79UARjKUp9RnBbsoADl78hS0RKkAheYoBMqqrQ1MwrDkqsHBYKycm0AwpbFUAVJgCjsaQIEGR2YlCBF2PiInAGYuPjgAVywwNgU4ACcQsKlC6K0nK3ioAHZ3VCdoGozssF187OK1WiyscpYUlJE6pKEATm8pAA1LXpVQ7ppe-tShqFd3IxFxHxoATXkFAHcCAvQWZhEUvlj0qGYOCBuvZvvdKDHn9eIeHjkgA)

</details>

![](/1m-arch/circuit-ex-2.svg)

<details>
<summary>Solution</summary>

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | &nbsp;C&nbsp; | &nbsp;X&nbsp; | &nbsp;Y&nbsp; |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
|       0       |       0       |       0       |       1       |       0       |
|       0       |       0       |       1       |       1       |       0       |
|       0       |       1       |       0       |       1       |       0       |
|       0       |       1       |       1       |       1       |       0       |
|       1       |       0       |       0       |       0       |       0       |
|       1       |       0       |       1       |       0       |       1       |
|       1       |       1       |       0       |       0       |       1       |
|       1       |       1       |       1       |       0       |       0       |

[Simulateur](https://logic.modulo-info.ch/?mode=tryout&data=N4NwXAbANAxg9gWwA5wHYFNUBcDOZgCWqADPlgJ5LpgDkRNUKeA2hAKxQAsbAulAQBMwxKKgCGCajQCCNAL79UARjKUp9RnBbsoADl78hS0RKkAheYoBMqqrQ1MwrDkqsHBYKycm0AwpbgAVyxSYAo7GiCsBkdmAGYlDm4+DwBObykADQDglTC1WiiYrScEjlT3IxFxHxoATUtUOBDbKSbozRYrbi53VDAlYyiBqwUADzgAJ1DwqQnJ4pYlHSViPqclOKglTj5hxIUxVAEZgpojgUWnbvL15mXtgHY94IHdOQUAdwJJ9BZmESDPgA7YQYHGTbArw7cEuZ5Qe66bbEcFeVI8HhyIA)

</details>

### Porte logique universelle

- Qu'est-ce qu'une porte logique universelle ?
  <details><summary>Solution</summary>Une porte logique universelle est une porte logique qui peut être utilisée pour reproduire toutes les autres portes logiques.</details>
- Pourquoi préfère-t-on les utiliser ?
  <details><summary>Solution</summary>Elles permettent de fabriquer qu'un seul type de porte pour faire tous les circuits logiques possible.</details>

Vérifier que les circuits logiques suivants sont équivalents à une porte XOR :

![](https://upload.wikimedia.org/wikipedia/commons/f/fa/XOR_from_NAND.svg)

![](https://upload.wikimedia.org/wikipedia/commons/e/e3/XOR_from_NOR.svg)

## Références

- https://apprendre.modulo-info.ch/archi/sys-log.html
- https://apprendre.modulo-info.ch/archi/additionneur.html
