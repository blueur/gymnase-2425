# Encodage

:::note[Objectifs]

L'encodage d'un fichier.

- Lire une table ASCII
- Modifier un fichier texte au format hexadécimal

:::

<Reaveal name="1m-repr-encodage" />

## Représentation des caractères

- Ouvrir OneDrive et créer un dossier sous `OneDrive/1m/informatique/` nommé `encodage`.
  ```
  OneDrive/
  └── 1m/
      └── informatique/
          └── encodage/
  ```
- Télécharger le fichier [hello.txt](/tp/hello.txt) et le déposer dans le dossier `encodage`.
  - Clic droit sur le lien ci-dessus et choisir `Enregistrer le lien sous...` en le renommant `hello.txt` et sélectionnant le dossier `encodage`.
- Quelle est la taille du fichier `hello.txt` et le comparer avec son contenu ?
  - Clic droit sur le fichier > Obtenir des informations.
  <details><summary>Solution</summary>11 [o] car il y a 11 caractères</details>
- Ouvrir le fichier sur [HexEd.it](https://hexed.it/) qui est un éditeur hexadécimal en ligne.
  - L'écran est divisé en deux parties : l'éditeur hexadécimal à gauche et la représentation textuelle à droite.
  - Observer que le premier octet `0x48` correspond au caractère `H` en ASCII.
- Modifier les octets dans la partie de gauche pour écrire `Hi World!` et sauvegarder le fichier.
- Ouvrir le fichier modifié sur l'ordinateur pour vérifier son contenu.
- Quelle est la taille du fichier modifié ? Pourquoi ?
  <details><summary>Solution</summary>9 [o] car il y a 9 caractères</details>

![](https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg)

## Représentation des images

### portable bitmap

Le format PBM (Portable bitmap) permet de représenter des images en noir et blanc.

- Créer un fichier `lettre-e.pbm` dans le dossier `encodage` avec le contenu suivant :
  ```
  P1
  4 5
  1 1 1 1
  1 0 0 0
  1 1 1 0
  1 0 0 0
  1 1 1 1
  ```
  - `P1` indique le format de l'image (noir et blanc)
  - `4 5` indique la largeur (4 px) et la hauteur (5 px) de l'image
  - Les pixels sont représentés par des `1` (noir) et des `0` (blanc)
- Créer un nouveau fichier `lettre-f.pbm` qui représente la lettre `F` en noir et blanc.

## Références

- https://enseigner.modulo-info.ch/rep-info/activ/numerisation_images_var.html
- https://fr.wikipedia.org/wiki/Art_ASCII
- https://fr.wikipedia.org/wiki/Portable_pixmap
