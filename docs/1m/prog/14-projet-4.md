# Projet 4

:::note[Objectifs]

Améliorer la jouabilité du jeu.

:::

:::warning[Prérequis]

Votre code doit être structuré en fonctions et le jeu entièrement jouable.

Si ce n'est pas le cas, terminer le [Projet 3](./projet-3) avant de continuer.

:::

## Boucle

Actuellement, le code suivant permet au joueur de sélectionner une action et s'il saisit une action incorrecte, le jeu affiche "Vous ne savez pas quoi faire." (avec le `else`).

```python
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

```python
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

## Votre jeu

- Adapter votre code pour que le jeu ne se termine pas après une action incorrecte.
- Proposer au joueur de recommencer le jeu après avoir terminé une partie.

## Journal de bord

- Compléter le journal de bord de votre projet :
  - Ajouter une section qui concerne ce que vous avez fait aujourd'hui.
  - Indiquer la date.
  - Décrire ce que vous avez fait.
  - Décrire les problèmes rencontrés et les solutions trouvées.

## Références

- https://courspython.com/boucles.html#boucle-while
