# Nom de domaine

:::note[Objectifs]

Pourquoi utilise-t-on les noms de domaine ?

:::

## Cours

<Reaveal name="3cci-webs-domaine" />

## Exercices

### Lookup

Allez sur https://www.nslookup.io/ et cherchez le nom de domaine "google.com"

1.  Quelle est son adresse IPv4 ? Dans quel pays se trouve-t-il ?
2.  Allez dans "Other" ou "Local DNS", puis sélectionnez la Russie, vous effectuez ainsi la requête depuis ce pays. Quelle est l'adresse IPv4 et dans quel pays est-il ?
3.  Qu'observez-vous après avoir comparé vos résultats ? Pourquoi ?
4.  Cherchez le nom de domaine "davidtang.ch", dans quel pays se trouve-t-il ?
5.  Résolvez-le depuis l'Australie, qu'est-ce qui change et pourquoi ?

<details>
<summary>Solution</summary>

1. 142.251.36.14, aux Pays-Bas
2. 216.58.211.238, en Finlande
3. Les adresses IP d'un même nom de domaine peuvent différer selon votre position. Google préfère nous rediriger vers leurs serveurs les plus proche géographiquement pour que les temps de réponse soient plus faible.
4. En Suisse
5. Toujours redirigé vers la Suisse, car il n'y a qu'un seul serveur. Il n'y a pas de serveur plus proche.

</details>

### Nom de domaine

A qui appartiendrait les noms de domaine suivants ?

1. instagram.com
2. instagram.ch
3. instagram-com.io
4. instagram.facebook.ch
5. instagram-facebook.com
6. lnstagram.com

<details>
<summary>Solution</summary>

1. Instagram
2. Instagram, les grandes boîtes achètent le nom de domaine avec plusieurs extensions pour éviter que d'autres personnes ne les achètent et ne les utilisent à mauvais escient.
3. Probablement pas Instagram, sûrement un site de phishing
4. Facebook
5. Probablement pas Facebook ni Instagram, sûrement un site de phishing
6. Probablement pas Instagram, sûrement un site de phishing (`l` à la place de `i`)

</details>

### Phishing

Regardez [cette liste de faux nom de domaine](https://www.phonandroid.com/phishing-centaines-de-faux-noms-de-domaine-fr-deposes.html) et observez comment ils sont construits. Quels sont les indices qui vous permettent de les identifier ?

<details>
<summary>Solution</summary>

Les noms de domaine sont souvent très similaires à ceux des sites originaux, mais avec des fautes d'orthographe ou des caractères spéciaux.

</details>

## Références

- https://apprendre.modulo-info.ch/resx/adressage.html
- https://fr.vikidia.org/wiki/Nom_de_domaine
  - https://fr.wikipedia.org/wiki/Nom_de_domaine
- https://fr.vikidia.org/wiki/Domain_Name_System
  - https://fr.wikipedia.org/wiki/Domain_Name_System
- https://mlhale.github.io/nebraska-gencyber-modules/phishing/url-analysis/
