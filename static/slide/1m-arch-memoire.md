# Mémoire

Architecture des ordinateurs

---

## Garder en mémoire

- &shy;<!-- .element: class="fragment" --> **Mémoire** : permet de **stocker** et **récupérer** une information.
- &shy;<!-- .element: class="fragment" --> But : un **circuit** électronique qui se **souvient** qu'on lui a donné une **valeur**.
- &shy;<!-- .element: class="fragment" --> [Simulateur](https://logic.modulo-info.ch/?mode=tryout&data=N4KABGBEBukFxgMwBpxQPYAcAuBneYwkAdgIYC2ApgTJQE53oCuYAygEqTJQDuAlnUqtsATwA21BJABGlAF596XKJkaZSAc1LY+6YgBFKY0iIIAGAL6oIkPsQIBtNBCKZ0+BA4BMADjPcARkQzAF1uWwATc3CyKhpWSmxlGFIxaKg+XAAFJlwACwAhJmxsPQJsOiZKK2dCSDcPMG8-bi8AFlDwviiEAE4YikkodkpcROToVPTbbNzC4tL7BAqqizQwtEhmJM9Xd0cAVjN-MACOsIye05OSQZoARUgLDZstbFHHWqJRTCHIAHlOOEGo5EL0TmdOhklk0AgB2QI+C5bYoEAK9GoQFyQH5-ACCADl9MkQZ4wRDwcj0HRFMQdrxknZHF4Tl4AlTUQgvF5MVjviJfjQCf8ACok-Zk8Gtc5dGFeFAYTlgdprCAvXgCD6eBwQuEXBz9ZWIfXtVpQhzo1rs7jeLyI-WW64hEIgCxAA)

---

## Mémoire vive

<div class="columns">
<div>

```kroki svgbob full
+-------+--------+
|Adresse| Valeur |
+-------+--------+
|  000  |01101000|
|  001  |10100100|
|  010  |11001010|
|  011  |00010101|
|  100  |10101010|
|  101  |01010101|
|  110  |00000000|
|  111  |00000000|
+-------+--------+
```

</div>
<div>

- &shy;<!-- .element: class="fragment" --> Les **valeurs** dans une mémoire vive sont stockées à des **adresses** spécifiques.
- &shy;<!-- .element: class="fragment" --> Dans cet exemple :
  - &shy;<!-- .element: class="fragment" --> Les **adresses** sont encodées sur **3 bits** (2<sup>3</sup> = 8 adresses possibles).
  - &shy;<!-- .element: class="fragment" --> Les **valeurs** sont encodées sur **1 octet** (8 bits).
  - &shy;<!-- .element: class="fragment" --> **Taille** de la mémoire :
    - 8 &times; 1 = **8 octets**.

</div>

---

## Mémoire vive

<div class="columns">
<div>

```kroki svgbob full
+-------+--------+
|Adresse| Valeur |
+-------+--------+
|   0   |  0x68  |
|   1   |  0xA4  |
|   2   |  0xCA  |
|   3   |  0x15  |
|   4   |  0xAA  |
|   5   |  0x55  |
|   6   |  0x00  |
|   7   |  0x00  |
+-------+--------+
```

</div>
<div>

- _Lecture_
  - &shy;<!-- .element: class="fragment" --> Regarder la valeur à l'adresse **3** : **0x15**.
    - &shy;<!-- .element: class="fragment" --> mémoire[3] vaut 0x15
  - &shy;<!-- .element: class="fragment" --> Que vaut mémoire[5] ?
    - &shy;<!-- .element: class="fragment" --> 0x55
- _Écriture_
  - &shy;<!-- .element: class="fragment" --> Modifier la valeur à l'adresse **6** : **0x42**.
    - &shy;<!-- .element: class="fragment" --> mémoire[6] = 0x42
  - &shy;<!-- .element: class="fragment" --> Que vaut mémoire[6] maintenant ?
    - &shy;<!-- .element: class="fragment" --> 0x42

</div>

---

## Mémoire cache

```kroki svgbob full
 Mémoire vive         Mémoire cache
+-------+--------+   +-------+--------+
|Adresse| Valeur |   |Adresse| Valeur |
+-------+--------+   +-------+--------+
|   0   |  0x68  |   |       |        |
|   1   |  0xA4  |   |       |        |
|   2   |  0xCA  |   +-------+--------+
|   3   |  0x15  |
|   4   |  0xAA  |    Instructions {source} :
|   5   |  0x55  |    mémoire[4] <-
|   6   |  0x00  |    mémoire[2]
|   7   |  0x00  |    mémoire[4]
+-------+--------+    mémoire[1]
```

---

## Mémoire cache

```kroki svgbob full
 Mémoire vive         Mémoire cache
+-------+--------+   +-------+--------+
|Adresse| Valeur |   |Adresse| Valeur |
+-------+--------+   +-------+--------+
|   0   |  0x68  |   |   4   |  0xAA  |
|   1   |  0xA4  |   |       |        |
|   2   |  0xCA  |   +-------+--------+
|   3   |  0x15  |
|   4   |  0xAA  |    Instructions {source} :
|   5   |  0x55  |    mémoire[4] {mém. vive}
|   6   |  0x00  |    mémoire[2] <-
|   7   |  0x00  |    mémoire[4]
+-------+--------+    mémoire[1]
```

---

## Mémoire cache

```kroki svgbob full
 Mémoire vive         Mémoire cache
+-------+--------+   +-------+--------+
|Adresse| Valeur |   |Adresse| Valeur |
+-------+--------+   +-------+--------+
|   0   |  0x68  |   |   4   |  0xAA  |
|   1   |  0xA4  |   |   2   |  0xCA  |
|   2   |  0xCA  |   +-------+--------+
|   3   |  0x15  |
|   4   |  0xAA  |    Instructions {source} :
|   5   |  0x55  |    mémoire[4] {mém. vive}
|   6   |  0x00  |    mémoire[2] {mém. vive}
|   7   |  0x00  |    mémoire[4] <-
+-------+--------+    mémoire[1]
```

---

## Mémoire cache

```kroki svgbob full
 Mémoire vive         Mémoire cache
+-------+--------+   +-------+--------+
|Adresse| Valeur |   |Adresse| Valeur |
+-------+--------+   +-------+--------+
|   0   |  0x68  |   |   4   |  0xAA  |
|   1   |  0xA4  |   |   2   |  0xCA  |
|   2   |  0xCA  |   +-------+--------+
|   3   |  0x15  |
|   4   |  0xAA  |    Instructions {source} :
|   5   |  0x55  |    mémoire[4] {mém. vive}
|   6   |  0x00  |    mémoire[2] {mém. vive}
|   7   |  0x00  |    mémoire[4] {mém. cache}
+-------+--------+    mémoire[1] <-
```

---

## Mémoire cache

```kroki svgbob full
 Mémoire vive         Mémoire cache
+-------+--------+   +-------+--------+
|Adresse| Valeur |   |Adresse| Valeur |
+-------+--------+   +-------+--------+
|   0   |  0x68  |   |   4   |  0xAA  |
|   1   |  0xA4  |   |   1   |  0xA4  |
|   2   |  0xCA  |   +-------+--------+
|   3   |  0x15  |
|   4   |  0xAA  |    Instructions {source} :
|   5   |  0x55  |    mémoire[4] {mém. vive}
|   6   |  0x00  |    mémoire[2] {mém. vive}
|   7   |  0x00  |    mémoire[4] {mém. cache}
+-------+--------+    mémoire[1] {mém. vive}
```

---

## Mémoire cache

- &shy;<!-- .element: class="fragment" --> **Mémoire cache** : mémoire plus **rapide** que la mémoire vive mais plus **petite**.
- &shy;<!-- .element: class="fragment" --> Permet d'**accélérer** l'accès aux valeurs **fréquemment** utilisées.
- &shy;<!-- .element: class="fragment" --> On ne garde que les dernières valeurs **consultées** dans la mémoire cache.
- &shy;<!-- .element: class="fragment" --> **Hiérarchie** de mémoire :
  - **Registres** (plus rapide, plus petit)
  - **Mémoire cache**
  - **Mémoire vive**
  - **Mémoire de masse** (plus lent, plus grand)

---

## Mémoire cache

![](/1m-arch/fig9_memoire-cache.png) <!-- .element: class="full" -->

https://interstices.info/memoire-et-unite-centrale-un-couple-dedie-a-lexecution-des-programmes/ <!-- .element: class="reference" -->

---

## Mémoire cache

Dans un microprocesseur, il y a souvent plusieurs niveaux de mémoire cache (L1, L2 et L3).

![](https://open.crea-learning.com/mod_turbolead/upload/crea/trainings/976E7A5C-A263-5ABB-BC4C-14DF2E08A7C4/resources/Lesmicroprocesseurs/memoire-cache2.jpg) <!-- .element: class="full-width" -->

https://open.crea-learning.com/mod_turbolead/mod/crealearning/reader.php?n=Mzc5MSYxMzIwOQ%3D%3D <!-- .element: class="reference" -->
