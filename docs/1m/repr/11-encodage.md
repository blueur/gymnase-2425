# Encodage

:::note[Objectifs]

Qu'est-ce qu'un fichier ?

- Lire une table ASCII
- Modifier un fichier texte au format hexadécimal
- Calculer la taille d'un fichier texte
- Créer des fichiers PBM, PGM et PPM
- Modifier un fichier BMP

:::

<Reaveal name="1m-repr-encodage" />

## Représentation des caractères

![](https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg)

- Combien de caractères sont représentés dans la table ASCII ?
  <details><summary>Solution</summary>128 (de 0 à 127)</details>
- Sur combien de bits est codé un caractère ASCII ?
  <details><summary>Solution</summary>7 bits car 2<sup>7</sup> = 128</details>
- Comme on préfère travailler avec des octets (8 bits), on a arrondi à 8 bits.
  - Combien d'octets sont nécessaires pour stocker la phrase `Salut, ca va ?` ?
    <details><summary>Solution</summary>14 octets car 14 caractères</details>
- Ouvrir OneDrive et créer un dossier sous `OneDrive/1m/informatique/` nommé `encodage`.
  ```txt {4}
  OneDrive/
  └── 1m/
      └── informatique/
          └── encodage/
  ```
- Télécharger le fichier [hello.txt](pathname:///tp/encodage/hello.txt) et le déposer dans le dossier `encodage`.
  - Clic droit sur le lien ci-dessus et choisir `Enregistrer sous...` en le nommant `hello.txt` et en sélectionnant le dossier `encodage`.
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

## Représentation des images

### Portable bitmap

Le format PBM (portable bitmap) permet de représenter des images en noir et blanc.

- Ouvrir **TextEdit**.
- Sauvegarder le fichier [lettre-e.pbm](pathname:///tp/encodage/lettre-e.pbm) dans le dossier `encodage`. Il a le contenu suivant :
  ```txt title="lettre-e.pbm"
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
- Ouvrir le fichier avec **Aperçu** pour voir l'image.
- Ouvrir le fichier avec **TextEdit** pour voir le contenu.
  - Clic droit sur le fichier > Ouvrir avec > Autre... > TextEdit
- Créer le fichier `lettre-f.pbm` qui représente la lettre `F` en noir et blanc.
  - Dupliquer le fichier `lettre-e.pbm` et le renommer `lettre-f.pbm`.
  - Modifier le fichier avec **TextEdit** pour obtenir la lettre `F`.
  - <kbd>Cmd</kbd> + <kbd>S</kbd> pour sauvegarder les modifications.
  - Le résultat final devrait ressembler à :  
    ![](/tp/encodage/lettre-f.png)

### Portable graymap

Le format PGM (portable graymap) permet de représenter des images en niveaux de gris.

- Sauvegarder le fichier [gyp.pgm](pathname:///tp/encodage/gyp.pgm) dans le dossier `encodage`. Il a le contenu suivant :
  ```txt title="gyp.pgm"
  P2
  14 5
  3
  0 1 1 1 0 2 0 0 2 0 3 3 3 3
  1 0 0 0 0 2 0 0 2 0 3 0 0 3
  1 0 1 1 0 0 2 2 2 0 3 3 3 0
  1 0 0 1 0 0 0 0 2 0 3 0 0 0
  0 1 1 0 0 0 2 2 0 0 3 0 0 0
  ```
  - `P2` indique le format de l'image (niveaux de gris)
  - `14 5` indique la largeur (14 px) et la hauteur (5 px) de l'image
  - `3` indique la valeur maximale des niveaux de gris
  - Les pixels sont représentés par des valeurs entre `0` (noir) et la valeur maximale `3` (blanc)
- Ouvrir le fichier avec **TextEdit** pour voir le contenu.
- Créer le fichier `gris.pgm` qui écrit `GRIS` en niveaux de gris.
  - Ne pas oublier de mettre à jour la largeur et la hauteur de l'image.
  - Ne pas oublier de mettre à jour le nombre de niveaux de gris.
  - Le résultat final devrait ressembler à :  
    ![](/tp/encodage/gris.png)

### Portable pixmap

Le format PPM (portable pixmap) permet de représenter des images en couleurs.

- Sauvegarder le fichier [couleur.ppm](pathname:///tp/encodage/couleur.ppm) dans le dossier `encodage`. Il a le contenu suivant :
  ```txt title="couleur.ppm"
  P3
  6 4
  255
  255 0 0 0 255 0 0 0 255 128 128 128 255 255 255 0 0 0
  255 0 0 0 255 0 0 0 255 128 128 128 255 255 255 0 0 0
  255 0 0 0 255 0 0 0 255 128 128 128 255 255 255 0 0 0
  255 0 0 0 255 0 0 0 255 128 128 128 255 255 255 0 0 0
  ```
  - `P3` indique le format de l'image (couleurs)
  - `6 4` indique la largeur (4 px) et la hauteur (6 px) de l'image
  - `255` indique la valeur maximale des couleurs (0 à 255)
  - Les pixels sont représentés par des valeurs RGB (rouge, vert, bleu) entre `0 0 0` (noir) et `255 255 255` (blanc)
  - Le premier pixel est représenté par le triplet `255 0 0` (rouge)
- Ouvrir le fichier avec **TextEdit** pour voir le contenu.
- Créer un nouveau fichier `suisse.ppm` qui représente un drapeau suisse.
  - Commencer par créer un carré rouge de 5x5 pixels.
  - Le résultat final devrait ressembler à :  
    ![](/tp/encodage/suisse.png)
- Créer d'autres drapeaux : français, italien, allemand, autrichien, belge, etc.
  - Pour obtenir les valeurs RGB d'une couleur, chercher `color picker` sur [Google](https://google.ch/).
  - Il est aussi possible d'obtenir la couleur exacte d'une image avec [imagecolorpicker.com](https://imagecolorpicker.com/)
- Choisir une image parmi les suivantes et la reproduire en PPM :

![](/tp/encodage/mario.png) ![](/tp/encodage/link.png) ![](/tp/encodage/kirby.png) ![](/tp/encodage/peach.png) ![](/tp/encodage/pikachu.png) ![](/tp/encodage/pacman.png)

### Bitmap

Le format BMP (bitmap) est un des formats d'image les plus anciens (et les plus simples).

- Télécharger le fichier [square4.bmp](/tp/encodage/square4.bmp) et le déposer dans le dossier `encodage`.
- Ouvrir le fichier `square4.bmp` avec **Aperçu** pour vérifier que c'est bien un carré blanc de 4x4 pixels.
- Ouvrir le fichier `square4.bmp` sur [HexEd.it](https://hexed.it/) pour observer la structure du fichier :
  - L'en-tête du fichier prend les 0x36 premiers octets, ne pas les modifier !
  - Les valeurs RGB des pixels commencent à l'adresse 0x36.
    - Composées uniquement de `0xFF` (blanc) car le carré est blanc.
    - Il y a 48 octets pour 4x4 pixels (3 octets par pixel).
    - Les trois premiers octets correspondent au pixel en bas à gauche de l'image.
    - Les triplets RGB sont dans l'ordre BGR (bleu, vert, rouge) : `00 00 FF` représente le rouge et `FF 00 00` le bleu
- Modifier les valeurs RGB des pixels pour obtenir une des images suivantes :
  - https://www.figma.com/file/fF2pNMNEkUbVkaCvrYn4ph

## Références

- https://enseigner.modulo-info.ch/rep-info/activ/numerisation_images_var.html
- https://fr.vikidia.org/wiki/Code_ASCII
  - https://fr.vikidia.org/wiki/Codage_des_caract%C3%A8res
  - https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange
- https://fr.wikipedia.org/wiki/Art_ASCII
- https://fr.wikipedia.org/wiki/Portable_pixmap
- https://fr.wikipedia.org/wiki/Windows_bitmap
- https://kylepaulsen.com/stuff/NetpbmViewer/
- https://www.gentlegeek.net/2010/11/personnages-de-jeux-video-en-4x4-pixels/
