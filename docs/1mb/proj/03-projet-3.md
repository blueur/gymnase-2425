# Projet 3

:::note[Objectifs]

Structurer un code en fonctions.

:::

:::warning[Prérequis]

Les deux premiers niveaux de votre jeu doit être jouable.

Si ce n'est pas le cas, terminer le [Projet 2](./projet-2) avant de continuer.

:::

## Fonction

- Créer un nouveau fichier `exemple.py` dans `/1m/informatique/projet` de votre OneDrive.
  - Ouvrir l'application **Thonny**
  - Cliquer sur <i class="ph ph-floppy-disk"></i> pour enregistrer le fichier.
    - Nommer le fichier `exemple.py`.
    - Enregistrer le fichier dans le dossier `/1m/informatique/projet` de votre OneDrive (déjà existant).
- Copier le code suivant dans le fichier `exemple.py` :
  ```python showLineNumbers
  print("Vous décidez de faire du rangement dans votre maison. Par où commencer ?")
  print("- c : La cave")
  print("- g : Le grenier")
  choix = input("Choix (c/g): ")
  if choix == "c":
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
  elif choix == "g":
      print("Vous montez au grenier.")
  else:
      print("Vous ne savez pas quoi faire.")
  ```
- Dessiner l'organigramme de l'histoire de l'exemple.
  <details>
  <summary>Solution</summary>
  ```mermaid
  graph TD
    commencer(Par où commencer ?) --> |c| cave[Cave]
    commencer --> |g| grenier[Grenier]
    cave --> |d| dépoussiérer[Dépoussiérer la cave]
    cave --> |t| trier[Trier les affaires]
  ```
  </details>
- Mettre tout notre code dans une fonction `rangement()` (ne pas oublier d'indenter le code avec <kbd>TAB</kbd>) et appeler la fonction `rangement` tout à la fin du fichier :

```python showLineNumbers
# highlight-next-line
def rangement():
    print("Vous décidez de faire du rangement dans votre maison. Par où commencer ?")
    print("- c : La cave")
    print("- g : Le grenier")
    choix = input("Choix (c/g): ")
    if choix == "c":
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
    elif choix == "g":
        print("Vous montez au grenier.")
    else:
        print("Vous ne savez pas quoi faire.")

# highlight-next-line
rangement()
```

- Exécuter le code en cliquant sur le bouton <i class="ph ph-play"></i> ou en appuyant sur la touche <kbd>F5</kbd>.
- Est-ce que l'appel à la fonction `rangement()` est-il nécessaire ? Essayer de l'enlever et de relancer le programme pour voir ce qui se passe (le remettre après).
- Mettre la partie concernant le grenier dans une fonction.
  - Créer une fonction `grenier()` juste avant l'appel de la fonction `rangement()` (à la ligne 21).
    ```python
    # highlight-next-line
    def grenier():
    ```
  - Copier le code du grenier (ligne 18) dans la fonction.
    ```python
    def grenier():
        # highlight-next-line
        print("Vous montez au grenier.")
    ```
  - Remplacer le code du grenier copié précédemment (ligne 18) par l'appel de la fonction.
    ```python
        ...
    elif choix == "g":
        # highlight-next-line
        grenier()
    else:
        ...
    ```
  - Exécuter le code pour vérifier que tout fonctionne correctement.
- Mettre la partie concernant la cave dans une fonction.
  - Commencer par créer une fonction `cave()` juste avant l'appel de la fonction `rangement()` (tout à la fin).
    ```python
    # highlight-next-line
    def cave():
    ```
  - Copier le code de la cave (lignes 7-16) dans la fonction.
    ```python
    def cave():
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
    ```
  - Remplacer le code copié (lignes 7-16) par l'appel à la fonction `cave()`.
    ```python
        ...
    if choix == "c":
        # highlight-next-line
        cave()
    elif choix == "g":
        grenier()
    else:
        ...
    ```
- Mettre la partie `print("Vous ne savez pas quoi faire.")` dans une fonction `inconnu`.
  - Créer une fonction `inconnu` à la suite de la fonction `cave`.
  - Copier le code pour l'inconnu dans la fonction.
  - Remplacer le code copié par l'appel à la fonction `inconnu`.

<details>
<summary>Résultat final</summary>

```python
def rangement():
    print("Vous décidez de faire du rangement dans votre maison. Par où commencer ?")
    print("- c : La cave")
    print("- g : Le grenier")
    choix = input("Choix (c/g): ")
    if choix == "c":
        cave()
    elif choix == "g":
        grenier()
    else:
        inconnu()

def cave():
    print("Vous êtes à la cave. Que voulez-vous faire ?")
    print("- d : Dépoussiérer")
    print("- t : Trier les affaires")
    choix = input("Choix (d/t): ")
    if choix == "d":
        print("Vous dépoussiérez la cave.")
    elif choix == "t":
        print("Vous triez les objets de la cave.")
    else:
        inconnu()

def grenier():
    print("Vous montez au grenier.")

def inconnu():
    print("Vous ne savez pas quoi faire.")

rangement()
```

</details>

### Votre jeu

- Structurer votre jeu en fonctions de la même manière que l'exemple.
  - Faire une copie de votre fichier `prenom-nom-projet.py` avant de commencer.

## Journal de bord

- Compléter le journal de bord de votre projet :
  - Ajouter une section qui concerne ce que vous avez fait aujourd'hui.
  - Indiquer la date.
  - Décrire ce que vous avez fait.
  - Décrire les problèmes rencontrés et les solutions trouvées.

## Références

- https://courspython.com/fonctions.html
