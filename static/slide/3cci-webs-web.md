# Web

Pages Web statiques

---

## Historique

- &shy;<!-- .element: class="fragment" --> 1969 : ARPANET
  - &shy;<!-- .element: class="fragment" --> Courriel (SMTP)
  - &shy;<!-- .element: class="fragment" --> Transfert de fichiers (FTP)
  - &shy;<!-- .element: class="fragment" --> Messagerie instantanée (IRC)
- &shy;<!-- .element: class="fragment" --> 1989 : Conception (sur papier) du Web
- &shy;<!-- .element: class="fragment" --> 1991 : Première page Web
  - &shy;<!-- .element: class="fragment" --> Par des ingénieurs du CERN
  - &shy;<!-- .element: class="fragment" --> https://info.cern.ch/hypertext/WWW/TheProject.html

---

## WWW

- &shy;<!-- .element: class="fragment" --> **W**orld **W**ide **W**eb
- &shy;<!-- .element: class="fragment" --> **Web** = HTML + HTTP + URL
  - &shy;<!-- .element: class="fragment" --> **HTML** : Langage de **description** de pages (Quoi ?)
  - &shy;<!-- .element: class="fragment" --> **HTTP** : Protocole de **transfert** de pages (Comment ?)
  - &shy;<!-- .element: class="fragment" --> **URL** : **Adresse** unique d'une page (Où ?)

---

### Web 1.0

- &shy;<!-- .element: class="fragment" --> Web 1.0 : **Consultation**
  - &shy;<!-- .element: class="fragment" --> **Lecture** de pages
  - &shy;<!-- .element: class="fragment" --> **Statique** : Pas de mise à jour
  - &shy;<!-- .element: class="fragment" --> **Unidirectionnel** : Pas de réaction
- &shy;<!-- .element: class="fragment" --> Exemples
  - Encyclopédie en ligne
  - Sites d'information
  - Page vitrine

---

### Web 2.0 (depuis ~2004)

- &shy;<!-- .element: class="fragment" --> Web 2.0 : **Interaction**
  - &shy;<!-- .element: class="fragment" --> **Écriture** de pages
  - &shy;<!-- .element: class="fragment" --> **Dynamique** : Mise à jour
  - &shy;<!-- .element: class="fragment" --> **Bidirectionnel** : Réaction possible
  - &shy;<!-- .element: class="fragment" --> **Démocratisation** des contenus
- &shy;<!-- .element: class="fragment" --> Exemples
  - Réseaux sociaux
  - Blogs
  - Wikis
  - Forums

---

### Web 3.0 ?

- &shy;<!-- .element: class="fragment" --> Web 3.0 : en cours
  - &shy;<!-- .element: class="fragment" --> **Sémantique**
    - Données **structurées** pour les machines
  - &shy;<!-- .element: class="fragment" --> **Intelligence** : IA
    - **Personnalisation** des contenus
  - &shy;<!-- .element: class="fragment" --> **Décentralisation** : Blockchain
    - **Répartition** de l'autorité et des données
  - &shy;<!-- .element: class="fragment" --> **Interconnexion** : IoT
    - **Objets** connectés
  - &shy;<!-- .element: class="fragment" --> **Réalité virtuelle**

---

### Évolution du Web

![](https://www.researchgate.net/profile/Robbin-Velde/publication/239854147/figure/fig2/AS:298620889911312@1448208176743/The-evolution-from-Web-10-to-Web-20.png) <!-- .element: class="full" -->

&shy;<!-- .element: class="reference" --> https://www.researchgate.net/figure/The-evolution-from-Web-10-to-Web-20_fig2_239854147

---

## HTTP

- &shy;<!-- .element: class="fragment" --> **H**yper**T**ext **T**ransfer **P**rotocol
- &shy;<!-- .element: class="fragment" --> **Protocole** de communication client-serveur
- &shy;<!-- .element: class="fragment" --> **Méthodes** de **requête** (Client &rarr; Serveur)
  - **GET** : Lecture
  - **POST** : Écriture
  - **DELETE** : Suppression
- &shy;<!-- .element: class="fragment" --> **Statut** de **réponse** (Serveur &rarr; Client)
  - **200** OK
  - **401** Unauthorized
  - **404** Not Found
  - **500** Internal Server Error
  - **503** Service Unavailable
  - ...

---

### HTTPS

- &shy;<!-- .element: class="fragment" --> **H**yper**T**ext **T**ransfer **P**rotocol **S**ecure
- &shy;<!-- .element: class="fragment" --> **Chiffrement** des échanges
  - **Confidentialité** : Contenu secret
  - **Intégrité** : Contenu non modifié
  - **Authentification** : Serveur fiable
- &shy;<!-- .element: class="fragment" --> **Certificat** SSL/TLS
  - Demande auprès d'une **autorité** de certification (CA)
  - **Validation** de l'**identité** du serveur

---

## URL

- &shy;<!-- .element: class="fragment" --> **U**niform **R**esource **L**ocator
  - Aussi appelé "adresse Web"
- &shy;<!-- .element: class="fragment" --> **Adresse** unique d'une ressource sur le Web

![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-all.png) <!-- .element: class="fragment" -->

&shy;<!-- .element: class="reference" --> https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

---

### Schéma (Protocole)

![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-protocol@x2_update.png)

&shy;<!-- .element: class="reference" --> https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

- **Protocole**
  - &shy;<!-- .element: class="fragment" --> Délimité par `://` à la fin
  - &shy;<!-- .element: class="fragment" --> Web : `http://` ou `https://`
  - &shy;<!-- .element: class="fragment" --> FTP : `ftp://`
  - &shy;<!-- .element: class="fragment" --> Mail : `mailto:`
  - &shy;<!-- .element: class="fragment" --> Téléphone : `tel:`

---

### Autorité (Serveur)

![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-authority.png)

&shy;<!-- .element: class="reference" --> https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

- **Nom de domaine**
  - &shy;<!-- .element: class="fragment" --> avec ou sans sous-domaine
- **Port**
  - &shy;<!-- .element: class="fragment" --> Optionnel, par défaut 80 (HTTP) ou 443 (HTTPS)
  - &shy;<!-- .element: class="fragment" --> Délimité par `:`

---

### Chemin (Ressource)

![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-path@x2.png)

&shy;<!-- .element: class="reference" --> https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

- **Chemin** de la ressource
  - &shy;<!-- .element: class="fragment" --> Délimité par `/`
  - &shy;<!-- .element: class="fragment" --> **Dossier** ou **fichier**
  - &shy;<!-- .element: class="fragment" --> **Extension** : `.html`, `.php`, `.jpg`, `.pdf`, ...

---

### Paramètres

![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-parameters@x2.png)

&shy;<!-- .element: class="reference" --> https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

- **Paramètres**
  - &shy;<!-- .element: class="fragment" --> Délimités par `?` et `&`
    - `?` débute la liste, `&` sépare les paramètres
  - &shy;<!-- .element: class="fragment" --> **Clé** et **valeur**
  - &shy;<!-- .element: class="fragment" --> Souvent utilisé pour du **tracking** : `utm_source`, `utm_medium`, `utm_campaign`, ...

---

### Ancre

![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-anchor@x2.png)

&shy;<!-- .element: class="reference" --> https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

- **Ancre**
  - &shy;<!-- .element: class="fragment" --> Délimitée par `#`
  - &shy;<!-- .element: class="fragment" --> **Position** dans la page
  - &shy;<!-- .element: class="fragment" --> **ID** de l'élément ciblé
  - &shy;<!-- .element: class="fragment" --> **Scroll** automatique
  - &shy;<!-- .element: class="fragment" --> Pas envoyé au serveur

---

### Anatomie d'une URL

![](https://d33wubrfki0l68.cloudfront.net/ad2a192a577aba2fbc4ff186ae25743d9c1258cd/49822/assets/images/anatomy-of-url-ad2a192a.png)

&shy;<!-- .element: class="reference" --> https://utmbuilder.net/

---

> Hey, check ce lien : https://www.example.com/?utm_campaign=advert&utm_source=instagram&utm_medium=social

---

### Paramètres UTM

- &shy;<!-- .element: class="fragment" --> **U**rchin **T**racking **M**odule
- &shy;<!-- .element: class="fragment" --> **Tracking** des campagnes marketing
  - **Source** : Réseau social, moteur de recherche, ...
  - **Média** : Social, cpc, email, ...
  - **Campagne** : Nom de la campagne
- &shy;<!-- .element: class="fragment" --> **Analyse** de l'efficacité des campagnes
- &shy;<!-- .element: class="fragment" --> Nettoyage des URLs avant de partager
  - &shy;<!-- .element: class="fragment" --> **Suppression** des paramètres UTM
  - &shy;<!-- .element: class="fragment" --> **Conservation** des paramètres nécessaires
