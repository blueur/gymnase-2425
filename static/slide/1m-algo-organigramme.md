# Organigramme

Introduction à l'algorithmique

---

## Algorithme

&shy;<!-- .element: class="fragment" --> Un algorithme est une suite **finie** et **non ambiguë** d'opérations ou d'**instructions** permettant de résoudre un **problème** ou d'obtenir un **résultat**.

- &shy;<!-- .element: class="fragment" --> Résoudre un problème
  - &shy;<!-- .element: class="fragment" --> Entrée(s)
  - &shy;<!-- .element: class="fragment" --> Sortie(s)
- &shy;<!-- .element: class="fragment" --> Algorithmique
  - &shy;<!-- .element: class="fragment" --> Domaine d'étude des algorithmes

---

### Comment faire une omelette ?

- Entrée(s)
  - &shy;<!-- .element: class="fragment" --> Œufs
- Sortie(s)
  - &shy;<!-- .element: class="fragment" --> Omelette

```mermaid fragment
flowchart LR
  input([Œufs]):::blank --> Algorithme:::black
  Algorithme --> output([Omelette]):::blank
  classDef blank fill:none,stroke:none
  classDef black fill:black,stroke:black,color:white
```

---

#### Algorithme d'une omelette

1. &shy;<!-- .element: class="fragment" --> Casser les oeufs dans un bol
2. &shy;<!-- .element: class="fragment" --> Battre les oeufs jusqu'à obtenir un mélange homogène
3. &shy;<!-- .element: class="fragment" --> Verser le mélange dans une poêle chaude
4. &shy;<!-- .element: class="fragment" --> Chauffer jusqu'à ce que l'omelette soit cuite
5. &shy;<!-- .element: class="fragment" --> Servir l'omelette dans une assiette

&nbsp;

&shy;<!-- .element: class="fragment" --> **Plusieurs** algorithmes possibles pour résoudre un **même** problème

---

### Organigramme

&shy;<!-- .element: class="fragment" --> Un organigramme est une **représentation graphique** d'un algorithme.

---

### Organigramme d'une omelette

```mermaid full
stateDiagram-v2
  state "Casser les oeufs dans un bol" as casser
  state "Battre les oeufs jusqu'à obtenir un mélange homogène" as battre
  state "Verser le mélange dans une poêle chaude" as verser
  state "Chauffer jusqu'à ce que l'omelette soit cuite" as chauffer
  state "Servir l'omelette dans une assiette" as servir
  [*] --> casser
  casser --> battre
  battre --> verser
  verser --> chauffer
  chauffer --> servir
  servir --> [*]
```

---

### Organigramme d'une omelette avec des conditions

```mermaid full
stateDiagram-v2
  state "Casser les oeufs dans un bol" as casser
  state "Battre les oeufs" as battre
  state si_homogene <<choice>>
  state "Verser le mélange dans une poêle chaude" as verser
  state "Chauffer la poêle" as chauffer
  state si_cuit <<choice>>
  state "Servir l'omelette dans une assiette" as servir

  [*] --> casser
  casser --> battre
  battre --> si_homogene
  si_homogene --> verser: Si mélange homogène
  si_homogene --> battre: Si mélange hétérogène
  verser --> chauffer
  chauffer --> si_cuit
  si_cuit --> servir: Si omelette cuite
  si_cuit --> chauffer: Si omelette pas cuite
  servir --> [*]
```

---

#### Algorithmes CORFA

![](/1m-algo/asur-corfa-10.jpg) <!-- .element: class="full" -->

https://es-asur.ch/corfa <!-- .element: class="reference" -->

---

### Exécution d'un algorithme

- &shy;<!-- .element: class="fragment" --> **Instance** : exécution d'un algorithme pour des entrées données

---

#### Max(a, b) <!-- .element: class="fragment" data-fragment-index="5" -->

```kroki plantuml half
:Entrées : a, b;
if (a < b ?) then (vrai)
  :Retourner b;
  kill
else (faux)
  :Retourner a;
  kill
endif
```

- &shy;<!-- .element: class="fragment" data-fragment-index="1" --> Instance : a = 5, b = 3 ? <span class="fragment" data-fragment-index="2">Résultat : 5</span>
- &shy;<!-- .element: class="fragment" data-fragment-index="3" --> Instance : a = 2, b = 4 ? <span class="fragment" data-fragment-index="4">Résultat : 4</span>

---

#### Somme(n) <!-- .element: class="fragment" data-fragment-index="5" -->

<div class="columns">
<div>

```kroki plantuml full
:Entrée : n;
:résultat ← 0
i ← 1;
while (i ≤ n ?) is (vrai)
  :résultat ← résultat + i
  i ← i + 1;
endwhile (faux)
:Retourner résultat;
kill​
```

</div>
<div>

- &shy;<!-- .element: class="fragment" data-fragment-index="1" --> Instance : n = 0 ? <span class="fragment" data-fragment-index="2">Résultat : 0</span>
- &shy;<!-- .element: class="fragment" data-fragment-index="3" --> Instance : n = 2 ? <span class="fragment" data-fragment-index="4">Résultat : 3</span>

</div>
</div>
