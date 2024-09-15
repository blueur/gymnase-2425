# Son

Représentation de l'information

---

## Analogique vs Numérique

![](https://cdn.sparkfun.com/assets/4/a/e/6/f/51c9c988ce395fab0e000000.png)

---

## Analogique vs Numérique

- **Analogique**
  - &shy;<!-- .element: class="fragment" --> **Continu** (infinité de valeurs)
  - &shy;<!-- .element: class="fragment" --> Valeurs **réelles**
- **Numérique**
  - &shy;<!-- .element: class="fragment" --> **Discret** (valeurs limitées)
  - &shy;<!-- .element: class="fragment" --> Valeurs **approximatives**
  - &shy;<!-- .element: class="fragment" --> Exemple : 8 bits = 256 valeurs possibles

---

### Disque vinyle

![](https://upload.wikimedia.org/wikipedia/commons/7/77/140405_Wega-Dual-300-01.jpg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:140405_Wega-Dual-300-01.jpg">BlueBreezeWiki</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

---

### Disque vinyle

![](https://passionhifivintage.wordpress.com/wp-content/uploads/2011/08/stylus.jpg) <!-- .element: class="full" -->

&shy;<!-- .element: class="reference" --> https://passionhifivintage.wordpress.com/2013/11/25/principes-et-contraintes-de-la-gravure-stereo-des-disques-vinyles/

---

### CD (Compact Disc)

![](https://upload.wikimedia.org/wikipedia/commons/2/2f/Cd-en-vrac.jpg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Cd-en-vrac.jpg">Nclm at fr.wikipedia</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5">CC BY-SA 2.5</a>, via Wikimedia Commons
</p>

---

### CD (Compact Disc)

![](https://upload.wikimedia.org/wikipedia/commons/3/3f/Cd_MEB.jpg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Cd_MEB.jpg">No machine-readable author provided. Jduno~commonswiki assumed (based on copyright claims).</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

---

## Numérisation

![](https://www.iptis.fr/sites/default/files/inline-images/echant.jpg)

- &shy;<!-- .element: class="fragment" --> Transformer une information **analogique** en information **numérique**
- &shy;<!-- .element: class="fragment" --> 3 étapes :
  - &shy;<!-- .element: class="fragment" --> **Échantillonnage** (sampling) : découpage par **intervalles** de temps
  - &shy;<!-- .element: class="fragment" --> **Quantification** (quantization) : **approximation** des valeurs
  - &shy;<!-- .element: class="fragment" --> **Encodage** (encoding) : conversion des valeurs en **binaire**

&shy;<!-- .element: class="reference" --> https://www.iptis.fr/blog/analogique-vs-numerique-quelles-differences

---

### Échantillonnage (sampling)

![](https://upload.wikimedia.org/wikipedia/commons/c/ca/Analog_signal.png) <!-- .element: class="half" -->
![](https://upload.wikimedia.org/wikipedia/commons/6/6e/Sampled_signal.png) <!-- .element: class="half" -->

- &shy;<!-- .element: class="fragment" --> Choix de la **fréquence** d'échantillonnage
  - &shy;<!-- .element: class="fragment" --> Unité : **Hertz** ([Hz] ou [1/s])
- &shy;<!-- .element: class="fragment" --> Par exemple : 44,1 kHz pour un CD audio
  - &shy;<!-- .element: class="fragment" --> 44 100 échantillons par seconde

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Analog_signal.png">The original uploader was Ivan.Romero at Spanish Wikipedia.</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
  <br />
  <a href="https://commons.wikimedia.org/wiki/File:Sampled_signal.png">Ivan.Romero at Spanish Wikipedia</a>, Public domain, via Wikimedia Commons
</p>

---

### Quantification (quantization) + Encodage (encoding)

![](https://upload.wikimedia.org/wikipedia/commons/7/70/Quantized.signal.svg)

- &shy;<!-- .element: class="fragment" --> Choix des **valeurs** possibles (dont min et max)
  - &shy;<!-- .element: class="fragment" --> Unité : **bits** ([b])
- &shy;<!-- .element: class="fragment" --> Par exemple : 16 bits pour un CD audio
  - &shy;<!-- .element: class="fragment" --> 2<sup>16</sup> = 65 536 valeurs possibles

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Quantized.signal.svg">No machine-readable author provided. Rbj assumed (based on copyright claims).</a>, Public domain, via Wikimedia Commons
</p>

---

### Échantillonnage vs Quantification

![](https://d2jdgazzki9vjm.cloudfront.net/tutorial/dip/images/analog-signals-to-digital-signals2.png) <!-- .element: class="full" -->

&shy;<!-- .element: class="reference" --> https://www.javatpoint.com/difference-between-analog-signals-and-digital-signals

---

## Numérisation

```mermaid
graph TD
  sa([Signal analogique<br /><i class="ph ph-wave-sine"></i>])
  vr([Valeurs échantillonnées<br />3.14, 1.71, 6.32, 1, ...])
  va([Valeurs approximatives<br />3, 2, 3, 1, ...])
  sn([Signal numérique<br />11, 10, 11, 01, ...])
  sa-->|**Échantillonnage**<br />Choix fréquence|vr
  vr-->|**Quantification**<br />Choix valeurs #91;0; 3#93;|va
  va-->|**Encodage**<br />Choix table encodage|sn
```

---

## Numérisation

- &shy;<!-- .element: class="fragment" --> **Avantages** :
  - &shy;<!-- .element: class="fragment" --> **Stockage** standardisé en **binaire**
  - &shy;<!-- .element: class="fragment" --> **Copie** facilitée et sans perte
  - &shy;<!-- .element: class="fragment" --> **Traitement** numérique facilité
- &shy;<!-- .element: class="fragment" --> **Inconvénients** :
  - &shy;<!-- .element: class="fragment" --> Perte de **qualité** (approximation)
  - &shy;<!-- .element: class="fragment" --> **Choix** des paramètres (fréquence, valeurs, etc.)
    - &shy;<!-- .element: class="fragment" --> **Taille** vs **qualité** selon les besoins

---

## Débit binaire + Taille

- &shy;<!-- .element: class="fragment" --> **Débit binaire** (bitrate) : quantité de données par unité de temps
  - &shy;<!-- .element: class="fragment" --> Unité : **bits par seconde** ([bps] ou [b/s])
  - &shy;<!-- .element: class="fragment" --> Par exemple : une chanson de 8 [kHz] sur 16 [b]
    - &shy;<!-- .element: class="fragment" --> 8 [kHz] &times; 16 [bits] = 128 [kb/s]
- &shy;<!-- .element: class="fragment" --> **Taille** d'un fichier audio
  - &shy;<!-- .element: class="fragment" --> Débit binaire &times; durée
  - &shy;<!-- .element: class="fragment" --> Par exemple : une chanson de 3 minutes en 128 kbps
    - &shy;<!-- .element: class="fragment" --> 128 [kb/s] &times; 180 [s] = 23'040 [kb] = 2'880 [ko] = 2.88 [Mo]
