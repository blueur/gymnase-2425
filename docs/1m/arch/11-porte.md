# Porte logique

:::note[Objectifs]

Qu'est-ce qu'une porte logique ?

:::

<Reaveal name="1m-arch-porte" />

## Porte logique

Aller sur le [simulateur](https://logic.modulo-info.ch/?mode=design&showonly=in,out,and,or,xor,not&data=N4KABGBEBukFxgMwBpxQJYDt5gNrEgAcB7AZx1wCYAOABmTAEYA2WgXQcnQBMdnPoAQwA2OWgF8GBEuQRU6DSpXaceOAOwCRY8RzSQA5oIAuAU1l4CxgJ6FTOSAEEAcgBFInGRQAsiekwBOFQxsOWoGAI4oYgBXYxxGCT0ISFj4uWkyCgBWBUDgrl4ERkZdVBSAd3QAJ3MKXH4waijcTTBIhlxEhhK2NhBxIA).

- Une porte AND est mis en place.
- Changer les valeurs des entrées en cliquant dessus et observer la valeur de la sortie.
- Écrire la table de vérité.

<details>
<summary>Solution</summary>

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | &nbsp; | out |
| :-----------: | :-----------: | :----: | :-: |
|       0       |       0       |        |  0  |
|       0       |       1       |        |  0  |
|       1       |       0       |        |  0  |
|       1       |       1       |        |  1  |

</details>

- Ajouter les portes OR, XOR et NOT puis écrire leur table de vérité.

## Circuit logique

Les portes logiques se combinent pour former des circuits logiques. Comme [ce circuit](https://logic.modulo-info.ch/?mode=tryout&data=N4KABGBEBukFxgMwBpxQPYAcAuBneYwkuAFugO4DyAdgDYCeBA2pAJbWTIYCu2nUAQ2oATfpHQAnMQA9JY6uj4BdAL6oIbDgiZFM6fNsQBWAAxcAjADYTSrm1EIzUagIC2AUwKQAgmOgDaAhM1Qkg9AzAmYycAJmtbKFYHMHM7Fw8vACE-AKCVWzRIAHMBbHcIpjQIImx6TE8ESEoAJTFw5iMYp3MAdhs7dmYYrkQE8V4CABY1KtDa+q9vADkAETb9Dq6uGNMxwe0jLksx9AmEHpmIash5hqglygAVdYrLSdjdga0wAA47U74CAAnJcrjU6ncfKsXswen1tuZ+olvkxERZzCczikYio0AUNADmLoNtofj9Yoi9slzChnG5IQBhSD5dRQcisCTlZhMWIJVEjPmpMDHLg8rhGPk9Lg-PmTCxIphA9GC4YpUZKEAqIA).

- Écrire sa table de vérité

<details>
<summary>Solution</summary>

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | &nbsp; | &nbsp;C&nbsp; |
| :-----------: | :-----------: | :----: | :-----------: |
|       0       |       0       |        |       0       |
|       0       |       1       |        |       1       |
|       1       |       0       |        |       1       |
|       1       |       1       |        |       0       |

</details>

- Est-ce que la table de vérité correspond à une porte logique connue ?
  <details><summary>Solution</summary>Oui, la porte XOR</details>

## Sélecteur de chien

Une famille a décidé d'accueillir un chien à la maison et vous êtes est chargé·e d'aller le récupérer au chenil, mais vous devez trouver le bon chien pour toute la famille. On décide donc de construire un circuit logique qui va permettre de faire le meilleur choix selon les critères déterminés par la famille.

Modifier [ce circuit](https://logic.modulo-info.ch/?mode=design&showonly=and,or,xor,not&data=N4KABGBEBukFxgEwBpxQPYAcAuBneYwkuAFugO4DyAdgDYCeBA2pAIbUAmkyGATt1AAe6fj0jV02SAF0AvqgiQAltWZFM6fAiYBGHQAYeAVn3SxSrgh0AWMdVYBbAKYFIAcSfVsS2gJitfBH15QkgNLTBdAx49U3NLMB0ANjtHFwRIAAUnbykxaACCYLM0SHQAVyltdU1mAGYkwzAADjioCwIdZtTnV0oAaTANct4wAGMncZIlTwBCSFlpEFkgA) pour que la sortie `OK pour ce chien` soit allumée lorsque les deux entrées sont réglées selon les caractéristiques d'un chien qui est à la fois petit et gentil.

<details>
<summary>Solution</summary>

Utiliser une porte AND.

</details>

Modifier [ce circuit](https://logic.modulo-info.ch/?mode=design&showonly=and,or,xor,not&data=N4KABGBEBukFxgMwBpxQJYDt5gNpomEgAcB7AZx1wEYBOABmTAHZ6BdJydAEx2oBZOmAIYBbAKY5IAcXGYALugA2kTtGEqE9AL6oIhEhSp1GYaonacefAKxCxkhJABCw6OLDzSAV3lglHvLiosSUaho4Onr6RGSUCDQMTCYcGLwI1ABs9hJSAAriivKqUOqaYFEEYLFGCSZMAEw2lml8zDmOUAAywgBGAE7C3KT9JTARWtpoHGiQPsUJNfF4-PymWS1c6WYAHB1SAPIA0mBk3v1gAMYelwAW6HIAhJDabCDaQA) pour qu'il remplisse toutes les conditions suivantes :

- Le chien est un chien qui doit être gentil.
- Le chien ne doit pas baver tout le temps.
- Il faut soit que ce soit un petit chien, soit que ce soit un labrador.

Pour vérifier, on peut prendre l'exemple d'un petit berger allemand qui ne bave pas tout le temps :

- Gentil: 1 (le chien est gentil)
- Bave tout le temps: 0 (le chien ne bave pas tout le temps)
- Petit: 1 (le chien est un petit chien)
- Labrador: 0 (le chien n'est pas un labrador)

On s'attend à ce que la sortie `OK pour ce chien` soit allumée (1).

## Opération arithmétique

### Additionneur

Un additionneur est un circuit logique qui permet d'additionner deux nombres binaires.

Un additionneur 1-bit permet d'additionner deux nombres binaires de 1 bit :

- 0 + 0 = 00
- 0 + 1 = 01
- 1 + 0 = 01
- 1 + 1 = 10

On cherche donc à construire un circuit logique qui a la table de vérité suivante :

| &nbsp;A&nbsp; | &nbsp;B&nbsp; | &nbsp; | S1  | S0  |
| :-----------: | :-----------: | :----: | :-: | :-: |
|       0       |       0       |        |  0  |  0  |
|       0       |       1       |        |  0  |  1  |
|       1       |       0       |        |  0  |  1  |
|       1       |       1       |        |  1  |  0  |

Modifier le [circuit suivant](https://logic.modulo-info.ch/?mode=design&showonly=and,or,xor,not&data=N4KABGBEBukFxgMwBpxQPYAcAuBneYwkuAFugO4DyAdgDYCeBA2pAJbWTIYCu2nUAQ2oATfpHQAnMQA9JY6uj4BdAL6oIbDgiZFM6fNsQBWAAxcAjADYTSrm1EIzUagIC2AUwKQAgmOgDaAhM1Qkg9AzAmYycAJmtbKFYHMHM7Fw8vACE-AKCVWzRxXmZdfWYAdhMnKxs7JIJzFGc3TwRIAGVzSBDSiKZK2Pi65PMAFjSWr3aTbqUQFSA) pour qu'il corresponde à la table de vérité ci-dessus.

### Soustracteur

Faire de même pour un soustracteur 1-bit :

- 0 - 0 = 00
- 0 - 1 = 11 (représente -1 en [complément à deux](https://apprendre.modulo-info.ch/rep-info/entiers.html#complement-a-deux))
- 1 - 0 = 01
- 1 - 1 = 00

Écrire la table de vérité et modifier [ce circuit](https://logic.modulo-info.ch/?mode=design&showonly=and,or,xor,not&data=N4KABGBEBukFxgMwBpxQPYAcAuBneYwkuAFugO4DyAdgDYCeBA2pAJbWTIYCu2nUAQ2oATfpHQAnMQA9JY6uj4BdAL6oIbDgiZFM6fNsQBWAAxcAjADYTSrm1EIzUagIC2AUwKQAgmOgDaAhM1Qkg9AzAmYycAJmtbKFYHMHM7Fw8vACE-AKCVWzRxXmZdfWYAdhMnKxs7JIJzFGc3TwRIAGVzSBDSiKZK2Pi65PMAFjSWr3aTbqUQFSA)

### Multiplicateur

Faire de même pour un multiplicateur 1-bit :

- Écrire la table de vérité
- Modifier [ce circuit](https://logic.modulo-info.ch/?mode=design&showonly=and,or,xor,not&data=N4KABGBEBukFxgMwBpxQPYAcAuBneYwkuAFugO4DyAdgDYCeBA2pAJbWTIYCu2nUAQ2oATfpHQAnMQA9JY6uj4BdAL6oIbDgiZFM6fNsQBWAAxcAjADYTSrm1EIzUagIC2AUwKQAgmOgDaAhM1Qkg9AzAmYycAJmtbKFYHMHM7Fw8vACE-AKCVWzRxXmZdfWYAdhMnKxs7JIJzFGc3TwRIAGVzSBDSiKZK2Pi65PMAFjSWr3aTbqUQFSA)

## Boolean Game

[Boolean Game](https://booleangame.com/) est un petit jeu sur la logique booléenne.

## Références

- https://apprendre.modulo-info.ch/archi/sys-log.html
- https://enseigner.modulo-info.ch/archi/activ/selecteur-chien_new.html
- https://fr.wikipedia.org/wiki/Porte_logique
