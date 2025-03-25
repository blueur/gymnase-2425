# Image

:::note[Objectifs]

Comment représenter une image ?

- Expliquer le principe d'une image matricielle.
- Définir la notion de profondeur de couleur.
- Décrire le principe du code couleur hexadécimal.
- Calculer la taille d'une image.

:::

## Cours

<Reveal name="1m-repr-image" />

## Exercices

### Taille d'une image

Calculer la taille des images suivantes dans les unités demandées :

1. Une image de 800 pixels de largeur et 600 pixels de hauteur en noir et blanc (1-bit) en bits [b], en octets [o] et en kilooctets [ko].
   <details><summary>Solution</summary>480'000 [b] = 60'000 [o] = 60 [ko]</details>
2. Une image de 800 pixels de largeur et 600 pixels de hauteur en couleurs 24-bit en [b], en [o], en [ko] et en [Mo].
   <details><summary>Solution</summary>11'520'000 [b] = 1'440'000 [o] = 1'440 [ko] = 1,44 [Mo]</details>
3. Une image full HD (1920 x 1080 px) en couleurs 24-bit en [b], en [o], en [Kio] et en [Mio].
   <details><summary>Solution</summary>49 766 400 [b] = 6'220'800 [o] = 6'075 [Kio] = 5,93 [Mio]</details>
4. Une image 4K (3840 x 2160 px) en noir et blanc en [b], en [o], en [Kio] et en [Mio].
   <details><summary>Solution</summary>8'294'400 [b] = 1'036'800 [o] = 1'012,5 [Kio] = 0,99 [Mio]</details>

<details>
<summary>Solutions avec détails</summary>

1. - 800 &times; 600 &times; 1 = 480'000 [b]
   - 480'000 [b] / 8 = 60'000 [o]
   - 60'000 [o] / 1'000 = 60 [ko]
2. - 800 &times; 600 &times; 24 = 11'520'000 [b]
   - 11'520'000 [b] / 8 = 1'440'000 [o]
   - 1'440'000 [o] / 1'000 = 1'440 [ko]
   - 1'440 [ko] / 1'000 = 1,44 [Mo]
3. - 1920 &times; 1080 &times; 24 = 49 766 400 [b]
   - 49 766 400 [b] / 8 = 6'220'800 [o]
   - 6'220'800 [o] / 1'024 = 6'075 [Kio]
   - 6'075 [Kio] / 1'024 = 5,93 [Mio]
4. - 3840 &times; 2160 &times; 1 = 8'294'400 [b]
   - 8'294'400 [b] / 8 = 1'036'800 [o]
   - 1'036'800 [o] / 1'024 = 1'012,5 [Kio]
   - 1'012,5 [Kio] / 1'024 = 0,99 [Mio]

</details>

### Espace de stockage

Dans un espace de stockage de 128 [Gio], combien des éléments suivants peut-on stocker ?

1. Image de 12 Mio
   <details><summary>Solution</summary>10'922 images</details>
2. Vidéo de 10 Gio
   <details><summary>Solution</summary>12 vidéos</details>
3. Image de 1 Mio
   <details><summary>Solution</summary>131'072 images</details>
4. Image 24-bit de 4032 x 3024 pixels (12 MP)
   <details><summary>Solution</summary>3'757 images</details>

<details>
<summary>Solutions avec détails</summary>

1. - Convertir dans la même unité : 128 [Gio] &times; 1'024 = 131'072 [Mio]
   - 131'072 [Mio] / 12 [Mio] = 10'922 images
2. - 128 [Gio] / 10 [Gio] = 12 vidéos
3. - 128 [Gio] &times; 1'024 = 131'072 [Mio]
   - 131'072 [Mio] / 1 [Mio] = 131'072 images
4. - Chaque image fait 4032 &times; 3024 &times; 24 = 292'626'432 [b]
   - Convertir dans la même unité (images) :
     - 292'626'432 [b] / 8 = 36'578'304 [o]
     - 36'578'304 [o] / 1'024 = 35'721 [Kio]
     - 35'721 [Kio] / 1'024 = 34,88 [Mio]
   - Convertir dans la même unité (espace de stockage) :
     - 128 [Gio] &times; 1'024 = 131'072 [Mio]
   - 131'072 [Mio] / 34,88 [Mio] = 3'757 images

</details>

### Couleurs

Associer les couleurs suivantes à leur code hexadécimal :

<table>
  <tr>
    <th>Couleur</th>
    <th>Code hexadécimal</th>
  </tr>
  <tr>
    <td style={{"background-color":"#0091EA"}}>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td style={{"background-color":"#FFFF00"}}>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td style={{"background-color":"#424242"}}>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td style={{"background-color":"#F5F5F5"}}>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td style={{"background-color":"#D50000"}}>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td style={{"background-color":"#00C853"}}>&nbsp;</td>
    <td></td>
  </tr>
</table>

- #D50000
- #0091EA
- #00C853
- #424242
- #F5F5F5
- #FFFF00

<details>
<summary>Solutions</summary>

<table>
  <tr>
    <th>Couleur</th>
    <th>Code hexadécimal</th>
  </tr>
  <tr>
    <td style={{"background-color":"#0091EA"}}>&nbsp;</td>
    <td>#0091EA</td>
  </tr>
  <tr>
    <td style={{"background-color":"#FFFF00"}}>&nbsp;</td>
    <td>#FFFF00</td>
  </tr>
  <tr>
    <td style={{"background-color":"#424242"}}>&nbsp;</td>
    <td>#424242</td>
  </tr>
  <tr>
    <td style={{"background-color":"#F5F5F5"}}>&nbsp;</td>
    <td>#F5F5F5</td>
  </tr>
  <tr>
    <td style={{"background-color":"#D50000"}}>&nbsp;</td>
    <td>#D50000</td>
  </tr>
  <tr>
    <td style={{"background-color":"#00C853"}}>&nbsp;</td>
    <td>#00C853</td>
  </tr>
</table>

Commencer par mettre de côté les nuances de gris qui ont trois valeurs répétées (#424242 et #F5F5F5). Plus la valeur est élevée, plus la couleur est claire.

Ensuite, regarder s'il y a une couleur RGB dominante : #D50000 est un rouge, #00C853 est un vert et #0091EA est un bleu

Finalement, #FFFF00 est la combinaison de rouge et de vert, qui est jaune.

</details>

## Références

- https://apprendre.modulo-info.ch/rep-info/images.html
- https://fr.wikipedia.org/wiki/Profondeur_de_couleur
- https://fr.wikipedia.org/wiki/Rouge-vert-bleu
- https://htmlcolorcodes.com/fr/
- https://fr.vikidia.org/wiki/Codage_de_l%27information
