# Encodage

Représentation de l'information

---

## Fichier

- &shy;<!-- .element: class="fragment" --> Un fichier est une suite d'**octets** (8 bits).
- &shy;<!-- .element: class="fragment" --> L'**extension** d'un fichier indique son **format**.
  - &shy;<!-- .element: class="fragment" --> `.txt` : fichier texte
  - &shy;<!-- .element: class="fragment" --> `.jpg` : image
  - &shy;<!-- .element: class="fragment" --> `.mp3` : audio
- &shy;<!-- .element: class="fragment" --> L'extension définie le **logiciel** par défaut pour ouvrir le fichier.
  - &shy;<!-- .element: class="fragment" --> On peut décider d'ouvrir une image avec un éditeur de texte.
    - Clic droit sur le fichier > Ouvrir avec

---

### Fichier texte

- &shy;<!-- .element: class="fragment" --> Un fichier texte est composé d'une suite de **caractères**.
- &shy;<!-- .element: class="fragment" --> Chaque est représenté par un **code** en **octet**.
- &shy;<!-- .element: class="fragment" --> L'**encodage** définit la correspondance entre les caractères et les codes.
  - &shy;<!-- .element: class="fragment" --> La table **ASCII** permet d'associer un code de 8 bits à un caractère.
  - &shy;<!-- .element: class="fragment" --> Représentation en **hexadécimal** : `0x41` (0100 0001) pour le caractère `A`.

---

![](https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:ASCII-Table-wide.svg">ASCII-Table.svg: ZZT32derivative work: Usha</a>, Public domain, via Wikimedia Commons
</p>

- &shy;<!-- .element: class="fragment" --> 0101 0110 0110 0101 0111 0010 0111 0100 = 0x56657274 = <span class="fragment">Vert</span>

---

## ASCII Art

```
  /^ ^\
 / 0 0 \
 V\ Y /V
  / - \
 /    |
V__) ||


 _._     _,-'""`-._
(,-.`._,'(       |\`-/|
    `-.-' \ )-`( , o o)
          `-    \`_`"'-
```

- &shy;<!-- .element: class="fragment" --> L'**ASCII Art** est une technique de dessin avec des caractères.
