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

- _Rôle(s)_
  - &shy;<!-- .element: class="fragment" --> **Support** pour les **processeur**, **mémoire vive**, &hellip;
  - &shy;<!-- .element: class="fragment" --> **Connecteurs** pour les **disques**, **périphériques**, &hellip;
    - Panneau d'entrées/sorties (USB, HDMI, &hellip;)
  - &shy;<!-- .element: class="fragment" --> Tous les **composants** se connectent à la carte mère
- _Caractéristique(s)_
  - &shy;<!-- .element: class="fragment" --> **Format**
  - &shy;<!-- .element: class="fragment" --> **Connecteurs** (USB, SATA, &hellip;)
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

- _Nom(s)_
  - &shy;<!-- .element: class="fragment" --> **CPU** (Central Processing Unit)
- _Rôle(s)_
  - &shy;<!-- .element: class="fragment" --> **Exécution** des instructions/opérations
- _Caractéristique(s)_
  - &shy;<!-- .element: class="fragment" --> **Architecture** (x86, ARM, &hellip;)
  - &shy;<!-- .element: class="fragment" --> **Fréquence** d'horloge
  - &shy;<!-- .element: class="fragment" --> Nombre de **coeurs**

</div>

---

### Vitesse d'un processeur

- **Fréquence** d'horloge (en Hz)
  - &shy;<!-- .element: class="fragment" --> 1 Hz = 1 cycle (~ opération) par seconde
  - &shy;<!-- .element: class="fragment" --> 2 GHz = ~ 2 milliard d'opérations par seconde
- &shy;<!-- .element: class="fragment" --> Nombre de **coeurs** (**core** en anglais)
  - &shy;<!-- .element: class="fragment" --> Chaque coeur peut exécuter des instructions en **parallèle**
- &shy;<!-- .element: class="fragment" --> 1 &times; 2 GHz **&ne;** 2 &times; 1 GHz
  - &shy;<!-- .element: class="fragment" --> Pas toujours **parallélisable** (pas deux fois plus rapide avec un tandem)
  - &shy;<!-- .element: class="fragment" --> Utile pour le **multitâche** (navigateur, musique, office, &hellip;)

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

- _Nom(s)_
  - &shy;<!-- .element: class="fragment" --> **Mémoire**
  - &shy;<!-- .element: class="fragment" --> **RAM** (Random Access Memory)
- _Rôle(s)_
  - &shy;<!-- .element: class="fragment" --> **Stockage** temporaire des données et **instructions** en cours d'utilisation par le processeur
- _Caractéristique(s)_
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

- _Nom(s)_
  - &shy;<!-- .element: class="fragment" --> **Stockage**
  - &shy;<!-- .element: class="fragment" --> **Disque dur**
- _Rôle(s)_
  - &shy;<!-- .element: class="fragment" --> **Stockage** permanent des données
- _Caractéristique(s)_
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

- _Disque dur HDD_ (Hard disk drive)
  - &shy;<!-- .element: class="fragment" --> Plusieurs disques **magnétiques** et **mécaniques** en rotation (comme un vinyle)
  - &shy;<!-- .element: class="fragment" --> **Capacité** importante
  - &shy;<!-- .element: class="fragment" --> **Prix** abordable
- _Disque SSD_ (Solid-state drive)
  - &shy;<!-- .element: class="fragment" --> Mémoire **flash** (comme une clé USB ou une carte SD)
  - &shy;<!-- .element: class="fragment" --> Beaucoup plus **rapide**
  - &shy;<!-- .element: class="fragment" --> Nombre de cycles d'**écriture limité**
  - &shy;<!-- .element: class="fragment" --> **Résistant** aux chocs et aux vibrations (pas de pièces mobiles)
  - &shy;<!-- .element: class="fragment" --> **Léger** et **silencieux**
- &shy;<!-- .element: class="fragment" --> [Vidéo](https://youtu.be/Rm23UmdJ8DQ)

---

### Mémoire vive vs mémoire de masse

- _Mémoire vive_
  - &shy;<!-- .element: class="fragment" --> **Volatile**
    - Perte des données à l'extinction
  - &shy;<!-- .element: class="fragment" --> **Rapide**, mais **coûteux**
  - &shy;<!-- .element: class="fragment" --> Utilisée par le **processeur**
    - Ralentissement de l'ordinateur si mémoire insuffisante
  - &shy;<!-- .element: class="fragment" --> Comme notre mémoire à court terme
- _Mémoire de masse_
  - &shy;<!-- .element: class="fragment" --> **Permanente**
    - Conservation des données même sans alimentation
  - &shy;<!-- .element: class="fragment" --> Plus grande **capacité**
  - &shy;<!-- .element: class="fragment" --> **Copie** les données vers la mémoire vive pour les utiliser
  - &shy;<!-- .element: class="fragment" --> Comme notre mémoire à long terme

---

### Organisation des mémoires

```kroki plantuml full
@startwbs
* Mémoire
** Volatile
*** RAM (Mémoire vive)
** Permanente
*** HDD (Disque dur)
*** SSD (Disque SSD)
@endwbs
```

---

## Carte graphique <!-- .element: class="fragment" -->

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/4/4a/ATI_Radeon_HD_5970_Graphics_Card-oblique_view.jpg)

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:ATI_Radeon_HD_5970_Graphics_Card-oblique_view.jpg">Advanced Micro Devices, Inc. (AMD)</a>, Attribution, via Wikimedia Commons
</p>

</div>
<div>

- _Nom(s)_
  - &shy;<!-- .element: class="fragment" --> **GPU** (Graphics Processing Unit)
- _Rôle(s)_
  - &shy;<!-- .element: class="fragment" --> **Calculs** graphiques (jeux, modélisation 3D, &hellip;)
- _Caractéristique(s)_
  - &shy;<!-- .element: class="fragment" --> **Mémoire** dédiée
  - &shy;<!-- .element: class="fragment" --> **Fréquence** d'horloge
  - &shy;<!-- .element: class="fragment" --> **Nombre de coeurs** (comme un processeur)
  - &shy;<!-- .element: class="fragment" --> Comme un **processeur** et une **mémoire vive** dédiée pour les **graphismes**

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

### CPU vs GPU

- _CPU_
  - &shy;<!-- .element: class="fragment" --> Calculs **séquentiel** (généralistes)
  - &shy;<!-- .element: class="fragment" --> **Peu** de **coeurs** avec une **fréquence** d'horloge **élevée**
  - &shy;<!-- .element: class="fragment" --> Exécute une **série** d'instructions les unes après les autres
    - Lecture, interprétation, **exécution**, lecture, interprétation, **exécution**, lecture, &hellip;
- _GPU_
  - &shy;<!-- .element: class="fragment" --> Calculs en **parallèle** (graphiques, minage, IA, &hellip;)
  - &shy;<!-- .element: class="fragment" --> **Beaucoup** de **coeurs** avec une **fréquence** d'horloge **faible**
  - &shy;<!-- .element: class="fragment" --> Exécute la **même** instruction sur plusieurs données en même temps
    - Lecture, interprétation, **exécution**, **exécution**, &hellip;
- &shy;<!-- .element: class="fragment" --> [Vidéo](https://youtu.be/-P28LKWTzrI)

---

## Bus <!-- .element: class="fragment" -->

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/3/3e/PCI-E_%26_PCI_slots_on_DFI_LanParty_nF4_SLI-DR_20050531.jpg)

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:PCI-E_%26_PCI_slots_on_DFI_LanParty_nF4_SLI-DR_20050531.jpg">w:user:snickerdo</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

</div>
<div>

- _Nom(s)_
  - &shy;<!-- .element: class="fragment" --> **Bus** (Bridge Unit System)
- _Rôle(s)_
  - &shy;<!-- .element: class="fragment" --> **Communication** entre les composants
- _Caractéristique(s)_
  - &shy;<!-- .element: class="fragment" --> **Connecteurs** avec les autres composants
  - &shy;<!-- .element: class="fragment" --> **Vitesse** de transfert (en Go/s)

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

![](https://upload.wikimedia.org/wikipedia/commons/6/62/PSU-Open1.jpg)

https://commons.wikimedia.org/wiki/File:PSU-Open1.jpg <!-- .element: class="reference" -->

</div>
<div>

- _Nom(s)_
  - &shy;<!-- .element: class="fragment" --> **Alimentation**
- _Rôle(s)_
  - &shy;<!-- .element: class="fragment" --> **Fournir** l'électricité aux composants
- _Caractéristique(s)_
  - &shy;<!-- .element: class="fragment" --> **Puissance** (en W)
  - &shy;<!-- .element: class="fragment" --> **Connecteurs** pour les composants
  - &shy;<!-- .element: class="fragment" --> **Ventilateur** pour le refroidissement

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

- &shy;<!-- .element: class="fragment" --> Un composant **externe** connecté à l'ordinateur
- &shy;<!-- .element: class="fragment" --> **Types** de périphérique
  - Entrée
  - Sortie
  - Entrée/Sortie

---

### Organisation des périphériques

```kroki plantuml full
@startwbs
* Périphérique
** Entrée
*** Saisie
**** Clavier
*** Lecture
**** Lecteur de disque optique (CD, DVD, Blu-ray)
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
