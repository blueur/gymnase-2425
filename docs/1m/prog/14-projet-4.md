# Projet 4

:::note[Objectifs]

Améliorer le jeu.

:::

:::warning[Prérequis]

Votre jeu doit entièrement jouable (pas forcément en fonction).

Si ce n'est pas le cas, terminer le [Projet 2](./projet-2) et/ou [Projet 3](./projet-3) avant de continuer.

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

## Espaces

La fonction [`strip()`](https://www.w3schools.com/python/ref_string_strip.asp) fonctionne de manière similaire à `.lower()` mais permet de supprimer les espaces en début et en fin de chaîne de caractères.

```python showLineNumbers
print("Vous êtes à la cave. Que voulez-vous faire ?")
print("- d : Dépoussiérer")
print("- t : Trier les affaires")
# highlight-next-line
choix = input("Choix (d/t): ").strip().lower()
if choix == "d":
    print("Vous dépoussiérez la cave.")
elif choix == "t":
    print("Vous triez les objets de la cave.")
else:
    print("Vous ne savez pas quoi faire.")
```

Combinez `.strip()` et `.lower()` pour que le joueur puisse saisir une action en majuscules ou en minuscules avec ou sans espaces.

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

Vous pouvez utiliser des variables pour stocker des états du jeu.

Par exemple, demander le nom du joueur en début de partie et l'afficher par la suite :

```python showLineNumbers
nom = input("Quel est votre nom ? ")
print("Vous êtes à la cave, " + nom + ". Que voulez-vous faire ?")
print("- d : Dépoussiérer")
print("- t : Trier les affaires")
choix = input("Choix (d/t): ")
...
```

Vous pouvez aussi avoir un système de points de vie, de points d'énergie, d'inventaire, &hellip;

## Journal de bord

- Compléter le journal de bord de votre projet :
  - Ajouter une section qui concerne ce que vous avez fait aujourd'hui.
  - Indiquer la date.
  - Décrire ce que vous avez fait.
  - Décrire les problèmes rencontrés et les solutions trouvées.

## Références

- https://courspython.com/boucles.html#boucle-while
