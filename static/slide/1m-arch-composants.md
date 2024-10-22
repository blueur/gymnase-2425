# Composants d'un ordinateur

Architecture des ordinateurs

---

Quels sont les composants d'un ordinateur que vous connaissez ?

---

### Vue d'ensemble

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

---

## Carte mère <!-- .element: class="fragment" -->

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/4/40/ASRock_K7VT4A_Pro_Mainboard.jpg)

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:ASRock_K7VT4A_Pro_Mainboard.jpg">Darkone (talk · contribs)</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5">CC BY-SA 2.5</a>, via Wikimedia Commons
</p>

</div>
<div>

- _Rôles_
  - &shy;<!-- .element: class="fragment" --> **Support** pour les **processeur**, **mémoire vive**, &mldr;
  - &shy;<!-- .element: class="fragment" --> **Connecteurs** pour les **disques**, **périphériques**, &mldr;
    - Panneau d'entrées/sorties (USB, HDMI, &mldr;)
  - &shy;<!-- .element: class="fragment" --> Tous les **composants** se connectent à la carte mère
- _Caractéristiques_
  - &shy;<!-- .element: class="fragment" --> **Format**
  - &shy;<!-- .element: class="fragment" --> **Connecteurs** (USB, SATA, &mldr;)
  - &shy;<!-- .element: class="fragment" --> **Compatibilité** avec les autres composants

</div>
</div>

---

### Format de carte mère

|                                              Samsung Galaxy SII                                              |                                         Vaio E series                                          |
| :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
|           ![](https://upload.wikimedia.org/wikipedia/commons/b/bb/Samsung_galaxy_s2_internal2.JPG)           |           ![](https://upload.wikimedia.org/wikipedia/commons/a/a5/EBMotherboard.JPG)           |
| <p class="reference">https://upload.wikimedia.org/wikipedia/commons/b/bb/Samsung_galaxy_s2_internal2.JPG</p> | <p class="reference">https://upload.wikimedia.org/wikipedia/commons/a/a5/EBMotherboard.JPG</p> |

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|                       |Carte mère    |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

</div>

---

## Processeur <!-- .element: class="fragment" -->

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/d/dc/Intel_80486DX2_top.jpg)

https://commons.wikimedia.org/wiki/File:Intel_80486DX2_top.jpg <!-- .element: class="reference" -->

</div>
<div>

- _Acronyme_
  - &shy;<!-- .element: class="fragment" --> **CPU** (Central Processing Unit)
- _Rôles_
  - &shy;<!-- .element: class="fragment" --> **Exécution** des instructions/opérations
- _Caractéristiques_
  - &shy;<!-- .element: class="fragment" --> **Architecture** (x86, ARM, &mldr;)
  - &shy;<!-- .element: class="fragment" --> **Fréquence** d'horloge
  - &shy;<!-- .element: class="fragment" --> Nombre de **coeurs**

</div>

---

### Vitesse d'un processeur

- **Fréquence** d'horloge (en Hz)
  - &shy;<!-- .element: class="fragment" --> 1 Hz = 1 cycle (~ opération) par seconde
  - &shy;<!-- .element: class="fragment" --> 2 GHz = ~ 2 milliard d'opérations par seconde
- Nombre de **coeurs** (**core** en anglais)
  - &shy;<!-- .element: class="fragment" --> Chaque coeur peut exécuter des instructions en **parallèle**
- 1 &times; 2 GHz **&ne;** 2 &times; 1 GHz <!-- .element: class="fragment" -->
  - &shy;<!-- .element: class="fragment" --> Pas toujours **parallélisable** (pas deux fois plus rapide avec un tandem)
  - &shy;<!-- .element: class="fragment" --> Utile pour le **multitâche** (navigateur, musique, office, &mldr;)

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|                       |Carte mère    |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|                       |Carte mère    |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

</div>

---

## Mémoire vive <!-- .element: class="fragment" -->

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/d/db/Swissbit_2GB_PC2-5300U-555.jpg)

<p class="reference">
  https://upload.wikimedia.org/wikipedia/commons/d/db/Swissbit_2GB_PC2-5300U-555.jpg
</p>

</div>
<div>

- _Acronyme_
  - &shy;<!-- .element: class="fragment" --> **Mémoire**
  - &shy;<!-- .element: class="fragment" --> **RAM** (Random Access Memory)
- _Rôles_
  - &shy;<!-- .element: class="fragment" --> **Stockage** temporaire des données et **instructions** en cours d'utilisation par le processeur
- _Caractéristiques_
  - &shy;<!-- .element: class="fragment" --> **Capacité** (en Go)
  - &shy;<!-- .element: class="fragment" --> **Vitesse** de lecture/écriture (en MHz)

</div>

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|                       |Carte mère    |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|                       |Carte mère    |  |
|                       |+------------+|  |
|                       ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

</div>

---

## Mémoire de masse <!-- .element: class="fragment" -->

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/1/1d/Hard_disk_platter_reflection.jpg)

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Hard_disk_platter_reflection.jpg">Dave Indech</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

</div>
<div>

- _Acronyme_
  - &shy;<!-- .element: class="fragment" --> **Stockage**
  - &shy;<!-- .element: class="fragment" --> **Disque dur**
- _Rôles_
  - &shy;<!-- .element: class="fragment" --> **Stockage** permanent des données
- _Caractéristiques_
  - &shy;<!-- .element: class="fragment" --> **Capacité** (en Go, To)
  - &shy;<!-- .element: class="fragment" --> **Vitesse** de lecture/écriture (en Mo/s) ou de rotation (en rpm)

</div>

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|                       |Carte mère    |  |
|                       |+------------+|  |
|                       ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |   |+------------+|  |
|+------------------+   ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

</div>

---

### Types de mémoire de masse

- **Disque dur HDD** (Hard disk drive)
  - &shy;<!-- .element: class="fragment" --> Plusieurs disques **magnétiques** et **mécaniques** en rotation (comme un vinyle)
  - &shy;<!-- .element: class="fragment" --> **Capacité** importante
  - &shy;<!-- .element: class="fragment" --> **Prix** abordable
- **Disque SSD** (Solid-state drive)
  - &shy;<!-- .element: class="fragment" --> Mémoire **flash** (comme une clé USB ou une carte SD)
  - &shy;<!-- .element: class="fragment" --> Beaucoup plus **rapide**
  - &shy;<!-- .element: class="fragment" --> Nombre de cycles d'**écriture limité**
  - &shy;<!-- .element: class="fragment" --> **résistant** aux chocs et aux vibrations (pas de pièces mobiles)
  - &shy;<!-- .element: class="fragment" --> **Léger** et **silencieux**
- &shy;<!-- .element: class="fragment" --> [Vidéo](https://youtu.be/Rm23UmdJ8DQ)

---

### Mémoire vive vs mémoire de masse

---

## Carte graphique <!-- .element: class="fragment" -->

<div class="columns">
<div>

</div>
<div>

</div>

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |   |+------------+|  |
|+------------------+   ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |   |+------------+|  |
|+------------------+   ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|         +---------------+               |
|         |Carte graphique|               |
|         +---------------+               |
+-----------------------------------------+
```

</div>

---

## Bus <!-- .element: class="fragment" -->

<div class="columns">
<div>

</div>
<div>

</div>

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |   |+------------+|  |
|+------------------+   ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                                         |
|                                         |
|                                         |
|         +---------------+               |
|         |Carte graphique|               |
|         +---------------+               |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |<->|+------------+|  |
|+------------------+   ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                        ^                |
|                        |                |
|                        v                |
|         +---------------+               |
|         |Carte graphique|               |
|         +---------------+               |
+-----------------------------------------+
```

</div

---

## Bloc d'alimentation <!-- .element: class="fragment" -->

<div class="columns">
<div>

</div>
<div>

</div>

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |<->|+------------+|  |
|+------------------+   ||Mémoire vive||  |
|                       |+------------+|  |
|                       |              |  |
|                       |+------------+|  |
|                       || Processeur ||  |
|                       |+------------+|  |
|                       +--------------+  |
|                        ^                |
|                        |                |
|                        v                |
|         +---------------+               |
|         |Carte graphique|               |
|         +---------------+               |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |<->|+------------+|  |
|+------------------+   ||Mémoire vive||  |
|          ^            |+------------+|  |
|          |            |              |  |
|+---------+---------+  |+------------+|  |
||Bloc d'alimentation|->|| Processeur ||  |
|+---------+---------+  |+------------+|  |
|          |            +--------------+  |
|          |             ^                |
|          |             |                |
|          v             v                |
|         +---------------+               |
|         |Carte graphique|               |
|         +---------------+               |
+-----------------------------------------+
```

<div>

---

## Périphériques

<div class="columns">
<div>

</div>
<div>

</div>

---

### Organisation des périphériques

```kroki plantuml full
@startwbs
* Périphérique
** Entrée
*** Saisie
**** Clavier
*** Lecture
**** Lecteur de disque optique
*** Pointage
**** Souris
**** Pavé tactile
*** Contrôleur
**** Manette de jeu
** Sortie
*** Affichage
**** Écran
*** Impression
**** Imprimante
*** Son
**** Haut-parleurs
** Entrée/Sortie
*** Stockage
**** Disque dur externe
**** Clé USB
**** Carte mémoire SD
*** Réseau
**** Routeur
*** Interface
**** Écran tactile
**** Casque VR
@endwbs
```

---

### Vue d'ensemble

<div class="r-stack">

```kroki svgbob full
+-----------------------------------------+
|Ordinateur                               |
|                       +--------------+  |
|+------------------+   |Carte mère    |  |
|| Mémoire de masse |<->|+------------+|  |
|+------------------+   ||Mémoire vive||  |
|          ^            |+------------+|  |
|          |            |              |  |
|+---------+---------+  |+------------+|  |                   ,-.
||Bloc d'alimentation|->|| Processeur ||  |                   `-'
|+---------+---------+  |+------------+|  |                   /|\
|          |            +--------------+  |                    |
|          |             ^                |                   / \
|          |             |                |
|          v             v                |
|         +---------------+               |
|         |Carte graphique|               |
|         +---------------+               |
+-----------------------------------------+
```

```kroki svgbob full fragment
+-----------------------------------------+  +~~~~~~~~~~~~~+
|Ordinateur                               |  :Périphériques:
|                       +--------------+  |  :             :
|+------------------+   |Carte mère    |  |  :  +-------+  :
|| Mémoire de masse |<->|+------------+|<-)--:--|Clavier|  :
|+------------------+   ||Mémoire vive||  |  :  +-------+  :
|          ^            |+------------+|  |  :             :
|          |            |              |  |  :             :
|+---------+---------+  |+------------+|  |  :             :  ,-.
||Bloc d'alimentation|->|| Processeur ||  |  :  +--------+ :  `-'
|+---------+---------+  |+------------+|<-)--:->|Clef USB| :  /|\
|          |            +--------------+  |  :  +--------+ :   |
|          |             ^                |  :             :  / \
|          |             |                |  :             :
|          v             v                |  :             :
|         +---------------+               |  :  +-------+  :
|         |Carte graphique|---------------)--:->| Écran |  :
|         +---------------+               |  :  +-------+  :
+-----------------------------------------+  +~~~~~~~~~~~~~+
```

</div>
