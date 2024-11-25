# Projet 2

## Organisation

- Créer un dossier `projet` dans votre dossier `1m/informatique` de votre **OneDrive** (déjà existant).
- Mettre les fichiers `prenom-nom-journal.pdf` et `prenom-nom-journal.docx` (créés la dernière fois) dans le dossier `projet`.
- Aller dans le dossier `projet` et créer un fichier `prenom-nom-projet.py` (avec votre prénom et nom en minuscule, sans accent et séparé par des tirets).

## Input

- Ouvrir le fichier `prenom-nom-projet.py` avec **Thonny**.
- Écrire le code suivant :

```python showLineNumbers
print("Vous décidez de faire du rangement dans votre maison. Par où commencer ?")
print("- c : La cave")
print("- g : Le grenier")
choix = input("Choix (c/g): ")
if choix == "c":
    print("Vous descendez à la cave.")
elif choix == "g":
    print("Vous montez au grenier.")
else:
    print("Vous ne savez pas quoi faire.")
```

- Exécuter le code en cliquant sur le bouton <i class="ph ph-play"></i> ou en appuyant sur la touche <kbd>F5</kbd>.
- Tester le code en choisissant `c` ou `g` ou autre chose.
  - Utiliser le clavier pour taper la lettre choisie et appuyer sur la touche <kbd>Entrée</kbd> pour valider.
- Explication du code :
  - `print()` affiche un message à l'écran.
  - `input()` demande à l'utilisateur de taper quelque chose au clavier et retourne ce qui a été tapé.
    - La valeur retournée est stockée dans la variable `choix`.
  - `if` permet de tester une condition.
  - `elif` permet de tester une autre condition si la première n'est pas vraie.
  - `else` permet de donner une alternative si aucune des conditions précédentes n'est vraie.

## Indentation

- Modifier le code pour proposer un deuxième choix lorsque l'utilisateur choisit la cave :

```python showLineNumbers
print("Vous décidez de faire du rangement dans votre maison. Par où commencer ?")
print("- c : La cave")
print("- g : Le grenier")
choix = input("Choix (c/g): ")
if choix == "c":
    # highlight-start
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
    # highlight-end
elif choix == "g":
    print("Vous montez au grenier.")
else:
    print("Vous ne savez pas quoi faire.")
```

- Noter que le code ajouté est indenté (décalé) de 4 espaces par rapport au `if choix == "c":`.
  - Toute instruction indentée après un `if`, `elif` ou `else` est exécutée si la condition est vérifiée.
  - Pour indenter, appuyer sur la touche <kbd>Tab</kbd> ou ajouter les espaces.
  - Pour désindenter, appuyer sur <kbd>Shift</kbd> + <kbd>Tab</kbd> ou enlever les espaces.
  - Les lignes 6 à 15 sont indentées pour être exécutées uniquement si `choix == "c"`.

## Votre histoire

- Adapter le code pour votre histoire.

## Journal de bord

- Compléter le journal de bord de votre projet :
  - Ajouter une section qui concerne ce que vous avez fait aujourd'hui.
  - Indiquer la date.
  - Décrire ce que vous avez fait.
  - Décrire les problèmes rencontrés et les solutions trouvées.
