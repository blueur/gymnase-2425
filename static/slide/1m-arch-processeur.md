# Processeur

Architecture des ordinateurs

---

## Unité arithmétique et logique (ALU)

<div class="columns">
<div>

- Arithmetic logic unit (ALU)
- &shy;<!-- .element: class="fragment" --> Opérations à choix entre deux entrées (n-bits). Exemple :
  - &shy;<!-- .element: class="fragment" --> F = 00 : R = A + B (addition)
  - &shy;<!-- .element: class="fragment" --> F = 01 : R = A & B (ET logique bit à bit)
  - &shy;<!-- .element: class="fragment" --> F = 10 : R = A < B (comparaison)
  - &shy;<!-- .element: class="fragment" --> F = 11 : R = A - B (soustraction)
- &shy;<!-- .element: class="fragment" --> D : drapeau (dépassement, zéro, &hellip;)
- &shy;<!-- .element: class="fragment" --> [Simulation](https://logic.modulo-info.ch/?mode=tryout&data=N4NwXAbANAxg9gWwA5wHYFNUBcDOZgCWqADPlgJ5LpgDkRNUKeA2gKytQCMATMQLpQCAE1qcAHAFpunBqgCGCajQCCDAEYFcYACwBfKEII4kpYBSq1DxgDZzyDJmGadiHHv0Eia3blNY19Ik4ySiV6RjgWdigfD2FabggpAE5ZBSUAIXVNPD0DIyRgs1DLAtt7CJYXDliBeJoAZmIJBoaA-ONuEIsaKyRyh0inBu43AHY4rwbtFrG0xVoAJXaiLuKe8MdnZI5WDzgAJwJMLFocBnjmbW4obQaBeQWaADFsrW59OABXLFNzJW+WEGLG4DQ4TVYdRE2m0UEeSgAIgBLpByHA4dCKbDtOTWL5-Eo0XFfYFOcTjOKoUTSCScBoyKCA0QjWkNMTtQFFf60QGk5igmoTKFgOnJOHpWgALSRBzgAX0AHcCAd0CxnGIYtwBNsYvcoPziDFtNrpDFIfrxFxpNrOGKeFr9bwrXr+ZwrcbHdAeOb+WMrRATRqeGMTXbuGITdAmia-fTA1ARqGEy66TdpjbWgmfXTYQ0AxawQmQ-q7lxoyWbjxkhmNTCM37RXw+LogA)

</div>
<div>

![](https://upload.wikimedia.org/wikipedia/commons/8/82/ALU_symbol.svg) <!-- .element class="half" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:ALU_symbol.svg">en:User:Cburnett</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

</div>
</div>

---

### ALU 4-bits

![](https://upload.wikimedia.org/wikipedia/commons/c/c0/74181aluschematic.png)

https://commons.wikimedia.org/wiki/File:74181aluschematic.png <!-- .element: class="reference" -->

---

## Programmable

- Comment ajouter une **nouvelle** opération à l'ALU ?
  - &shy;<!-- .element: class="fragment" --> **Construire** une nouvelle ALU
- &shy;<!-- .element: class="fragment" --> Rendre une machine **programmable** ?
  - &shy;<!-- .element: class="fragment" --> Changer le **comportement** sans changer le **matériel**

---

### Orgue de Barbarie

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/f/f5/Orgue_de_Barbarie_1843.jpg) <!-- .element class="full" -->

https://commons.wikimedia.org/wiki/File:Orgue_de_Barbarie_1843.jpg <!-- .element: class="reference" -->

</div>
<div>

- &shy;<!-- .element: class="fragment" --> Boîte à musique **programmable**
- &shy;<!-- .element: class="fragment" --> **Papier perforé** pour la mélodie
  - Programme

</div>

---

### Ruban perforé

- **Papier perforé** pour programmer les premiers **ordinateurs**
  - (~ 1920-1940)

![](https://upload.wikimedia.org/wikipedia/commons/8/86/Papertape.jpg) <!-- .element class="half" -->

https://commons.wikimedia.org/wiki/File:Papertape.jpg <!-- .element: class="reference" -->

---

### Game & Watch

![](https://upload.wikimedia.org/wikipedia/commons/1/13/Game-and-watch-ball.jpg) <!-- .element class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Game-and-watch-ball.jpg">masatsu</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>, via Wikimedia Commons
</p>

---

### Game Boy

![](https://upload.wikimedia.org/wikipedia/commons/f/f4/Game-Boy-FL.jpg) <!-- .element class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Game-Boy-FL.jpg">Evan-Amos</a>, Public domain, via Wikimedia Commons
</p>

---

#### Cartouche

<div class="columns">
<div>

![](https://upload.wikimedia.org/wikipedia/commons/d/db/Nintendo-Game-Boy-Cartridge.jpg) <!-- .element class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Nintendo-Game-Boy-Cartridge.jpg">Evan-Amos</a>, Public domain, via Wikimedia Commons
</p>

</div>
<div>

- &shy;<!-- .element: class="fragment" --> **Programme** stocké sur la cartouche
  - **Matériel** fixe (console)
  - Comportement **programmable** (jeu)

</div>
</div>

---

## Simulateur

- https://www.peterhigginson.co.uk/AQA/
  - **Assembly Language** : le programme qui sera exécuté
  - **Main Memory** : là où le programme est stocké
  - **Registers** : la mémoire interne du processeur
    - **PC** : Program Counter (indique la ligne exécutée)
    - **R0, R1, &hellip;** : stockent les valeurs intermédiaires
  - **ALU** : Arithmetic Logic Unit (effectue les calculs)
  - **Control Unit** : lit l'instruction et l'exécute
- Mise en place
  - `SELECT` : choisir un programme (p. ex. `ADD`)
  - `OPTIONS` : modifier l'affichage (p. ex. `HEX`)
  - `STEP` : exécuter une instruction
    - `RUN` : exécuter toutes les instructions

---

## Cycle d'instruction du processeur

1. &shy;<!-- .element: class="fragment" --> **Fetch** : chercher l'instruction dans la mémoire
2. &shy;<!-- .element: class="fragment" --> **Decode** : interpréter l'instruction
3. &shy;<!-- .element: class="fragment" --> **Execute** : exécuter l'instruction
4. &shy;<!-- .element: class="fragment" --> **Repeat** : répéter pour l'instruction suivante
