# Image

Représentation de l'information

---

## Image matricielle

![](https://desktop.arcgis.com/fr/arcmap/latest/manage-data/geodatabases/GUID-CC2D28F9-B2CF-47AF-80BE-3CA13E04E596-web.gif) <!-- .element: class="full" -->

&shy;<!-- .element: class="reference" --> https://desktop.arcgis.com/fr/arcmap/latest/manage-data/geodatabases/raster-basics.htm

---

### Image en noir et blanc

```katex
\begin{bmatrix}
\ & \ & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \ & \ \\
\ & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \ \\
\blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare \\
\blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare & \blacksquare \\
\ & \ & \ & \ & \blacksquare & \ & \ & \ \\
\ & \ & \ & \ & \blacksquare & \ & \ & \ \\
\ & \ & \blacksquare & \ & \blacksquare & \ & \ & \ \\
\ & \ & \ & \blacksquare & \ & \ & \ & \ \\
\end{bmatrix}
```

&nbsp;

| Couleur | Valeur |
| :-----: | :----: |
|  Blanc  |   0    |
|  Noir   |   1    |

<!-- .element: class="fragment" -->

---

### Image en noir et blanc

```katex
\begin{bmatrix}
1 & 1 & 0 & 0 & 0 & 0 & 1 & 1 \\
1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
1 & 1 & 1 & 1 & 0 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 0 & 1 & 1 & 1 \\
1 & 1 & 0 & 1 & 0 & 1 & 1 & 1 \\
1 & 1 & 1 & 0 & 1 & 1 & 1 & 1 \\
\end{bmatrix}
```

&nbsp;

| Couleur | Valeur |
| :-----: | :----: |
|  Blanc  |   0    |
|  Noir   |   1    |

---

### Taille de l'image

- Largeur: 8 pixels
- Hauteur: 8 pixels
- &shy;<!-- .element: class="fragment" --> Total: 8 &times; 8 = 64 pixels
- &shy;<!-- .element: class="fragment" --> 1 bit par pixel : 64 &times; 1 = 64 bits
- &shy;<!-- .element: class="fragment" --> 1 octet = 8 bits : 64 / 8 = 8 octets
