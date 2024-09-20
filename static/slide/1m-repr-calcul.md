# Calcul

Représentation de l'information

---

## Son

- Quelle est la taille en [Mo] d'un fichier audio de 2 minutes en 48 kHz sur 24 bits ?
  - &shy;<!-- .element: class="fragment" --> Objectif : Taille binaire <span class="fragment">([b], [o], [ko], [Kio], [Mo], ...)</span>
  - &shy;<!-- .element: class="fragment" --> Temps : <span class="fragment">**2**</span> [minutes]
  - &shy;<!-- .element: class="fragment" --> Fréquence : <span class="fragment">**48'000**</span> [Hz]
  - &shy;<!-- .element: class="fragment" --> Taille d'un échantillon : <span class="fragment">**24**</span> [b]
  - &shy;<!-- .element: class="fragment" --> Débit binaire : <span class="fragment">[b]&times;[Hz] = [b]/[s] =</span> [b/s]
    - &shy;<!-- .element: class="fragment" --> 24 [b] &times; 48'000 [Hz] = 1'152'000 [b/s] <span class="fragment">= 1'152 [kb/s]</span>
  - &shy;<!-- .element: class="fragment" --> Taille binaire : <span class="fragment">[b/s]&times;[s] = [b]</span>
    - &shy;<!-- .element: class="fragment" --> 1'152'000 [b/s] &times; 120 [s] = 138'240'000 [b] <span class="fragment">= 138'240 [**k**b]</span> <span class="fragment">= 138,24 [**M**b]</span> <span class="fragment">= 17,28 [M**o**]</span>
    - &shy;<!-- .element: class="fragment" --> 1'152 [kb/s] &times; 120 [s] = 138'240 [kb]
  - &shy;<!-- .element: class="fragment" --> 120 [**s**] &times; 48 [**kHz**] &times; 24 [**b**] = 138'240 <span class="fragment">[**kb**]</span>
    - &shy;<!-- .element: class="fragment" --> [s] &times; [kHz] &times; [b] <span class="fragment">= [s] &times; [k/s] &times; [b]</span> <span class="fragment">= [kb]</span>

---

## Image

- Quelle est la taille en [Mio] d'une image de 1280 x 720 pixels en 24 bits ?
  - &shy;<!-- .element: class="fragment" --> Objectif : Taille binaire
  - &shy;<!-- .element: class="fragment" --> Nombre de pixels : <span class="fragment">**1280** &times; **720** = **921'600**</span> [px]
  - &shy;<!-- .element: class="fragment" --> Taille d'un pixel : <span class="fragment">**24**</span> [b/px]
  - &shy;<!-- .element: class="fragment" --> Taille binaire : <span class="fragment">[px]&times;[b/px] =</span> [b]
    - &shy;<!-- .element: class="fragment" --> 921'600 [px] &times; 24 [b/px] = 22'118'400 [b] <span class="fragment">= 21'600 [**Ki**b]</span> <span class="fragment">= 21,09 [**Mi**b]</span> <span class="fragment">= 2,64 [Mi**o**]</span>

---

## Conversion de base

- &shy;<!-- .element: class="fragment" --> **binaire &rarr; décimal**
  - &shy;<!-- .element: class="fragment" --> 1010<sub>2</sub> = ?<sub>10</sub>
  - &shy;<!-- .element: class="fragment" --> | 1 | 0 | 1 | 0 |
  - &shy;<!-- .element: class="fragment" --> | 8 | 4 | 2 | 1 |
  - &shy;<!-- .element: class="fragment" --> &nbsp;&nbsp;8 + 0 + 2 + 0 = 10
- &shy;<!-- .element: class="fragment" --> **hexadécimal &rarr; décimal**
  - &shy;<!-- .element: class="fragment" --> 2A<sub>16</sub> = ?<sub>10</sub>
  - &shy;<!-- .element: class="fragment" --> | &nbsp;2 | 10 |
  - &shy;<!-- .element: class="fragment" --> | 16 | &nbsp;1 |
  - &shy;<!-- .element: class="fragment" --> &nbsp;&nbsp;32 + 10 = 42

---

## Conversion de base

- &shy;<!-- .element: class="fragment" --> **décimal &rarr; binaire**
  - &shy;<!-- .element: class="fragment" --> 41<sub>10</sub> = ?<sub>2</sub>
  - &shy;<!-- .element: class="fragment" --> 41 = 32 + 8 + 1
  - &shy;<!-- .element: class="fragment" --> | 32 | 16 | &nbsp;8 | &nbsp;4 | &nbsp;2 | &nbsp;1 |
  - &shy;<!-- .element: class="fragment" --> | &nbsp;1 | &nbsp;0 | &nbsp;1 | &nbsp;0 | &nbsp;0 | &nbsp;1 | = 10 1001<sub>2</sub>
- &shy;<!-- .element: class="fragment" --> **hexadécimal &rarr; binaire**
  - &shy;<!-- .element: class="fragment" --> 2A<sub>16</sub> = ?<sub>2</sub>
  - &shy;<!-- .element: class="fragment" --> 2 = 0010, A = 1010
  - &shy;<!-- .element: class="fragment" --> 0010 1010<sub>2</sub>
- &shy;<!-- .element: class="fragment" --> **binaire &rarr; hexadécimal**
  - &shy;<!-- .element: class="fragment" --> 1010 1101 = ?<sub>16</sub>
  - &shy;<!-- .element: class="fragment" --> 1010 = A, 1101 = D
  - &shy;<!-- .element: class="fragment" --> AD<sub>16</sub>
