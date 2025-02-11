# Projet 4

:::note[Objectifs]

Améliorer le jeu.

:::

:::warning[Prérequis]

Votre code doit être structuré en fonctions et le jeu entièrement jouable.

Si ce n'est pas le cas, terminer le [Projet 3](./projet-3) avant de continuer.

:::

## Majuscules

Actuellement, le joueur doit saisir une action en minuscules (`d` ou `t`) pour qu'elle soit acceptée.

```python showLineNumbers
print("Vous êtes à la cave. Que voulez-vous faire ?")
print("- d : Dépoussiérer")
print("- t : Trier les affaires")
choix = input("Choix (d/t): ")
if choix == "d":
    print("Vous dépoussiérez la cave.")
elif choix == "t":
    print("Vous triez les objets de la cave.")
else:
    print("Vous ne savez pas quoi faire.")
```

La fonction [`lower()`](https://www.w3schools.com/python/ref_string_lower.asp) permet de convertir une chaîne de caractères en minuscules.
Ce qui permet au joueur de saisir une action en majuscules ou en minuscules.

```python showLineNumbers
print("Vous êtes à la cave. Que voulez-vous faire ?")
print("- d : Dépoussiérer")
print("- t : Trier les affaires")
# highlight-next-line
choix = input("Choix (d/t): ").lower()
if choix == "d":
    print("Vous dépoussiérez la cave.")
elif choix == "t":
    print("Vous triez les objets de la cave.")
else:
    print("Vous ne savez pas quoi faire.")
```

- Adapter votre jeu pour que le joueur puisse saisir une action en majuscules ou en minuscules.

## Boucle

Actuellement, le code suivant permet au joueur de sélectionner une action et s'il saisit une action incorrecte, le jeu affiche "Vous ne savez pas quoi faire." (avec le `else`).

```python showLineNumbers
print("Vous êtes à la cave. Que voulez-vous faire ?")
print("- d : Dépoussiérer")
print("- t : Trier les affaires")
choix = input("Choix (d/t): ")
if choix == "d":
    print("Vous dépoussiérez la cave.")
elif choix == "t":
    print("Vous triez les objets de la cave.")
else:
    print("Vous ne savez pas quoi faire.")
```

Le but est de redemander à l'utilisateur de saisir une action tant qu'il ne saisit pas une action valide.
Pour cela, nous allons utiliser une boucle `while` qui permet de répéter la question tant que le joueur ne saisit pas une action valide :

```python showLineNumbers
print("Vous êtes à la cave. Que voulez-vous faire ?")
print("- d : Dépoussiérer")
print("- t : Trier les affaires")
choix = input("Choix (d/t): ")
while choix != "d" and choix != "t":
    choix = input("Choix invalide, veuillez saisir d ou t: ")
if choix == "d":
    print("Vous dépoussiérez la cave.")
elif choix == "t":
    print("Vous triez les objets de la cave.")
```

- Adapter votre code pour que le jeu ne se termine pas après une action incorrecte.
- Proposer au joueur de recommencer le jeu après avoir terminé une partie.

## Variables

Vous pouvez utiliser des variables pour stocker des états du jeu. Par exemple :

- `cave_visitee` pour savoir si la cave a été visitée.
- `lampe` pour savoir si le joueur a pris une lampe.
- `cle` pour savoir si le joueur a pris une clé.

```python showLineNumbers
cave_visitee = False
lampe = False
cle = True
vie = 3
```

Ce qui permet de débloquer des actions selon les actions précédentes :

```python showLineNumbers
print("Vous êtes à la cave. Que voulez-vous faire ?")
print("- d : Dépoussiérer")
print("- t : Trier les affaires")
if cle:
    print("- a : Ouvrir l'armoire avec la clé")
    choix = input("Choix (d/t/a): ")
else:
    choix = input("Choix (d/t): ")
if choix == "d":
    print("Vous dépoussiérez la cave.")
elif choix == "t":
    print("Vous triez les objets de la cave.")
elif choix == "a":
    print("Vous ouvrez l'armoire avec la clé.")
    cle = False
```

## Journal de bord

- Compléter le journal de bord de votre projet :
  - Ajouter une section qui concerne ce que vous avez fait aujourd'hui.
  - Indiquer la date.
  - Décrire ce que vous avez fait.
  - Décrire les problèmes rencontrés et les solutions trouvées.

## Références

- https://courspython.com/boucles.html#boucle-while
