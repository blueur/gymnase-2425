# Hébergement

:::note[Objectifs]

Comment partager un site Web ?

:::

## Cours

<Reveal name="3cci-webs-hebergement" />

## Exercices

### Héberger votre propre site web

#### Héberger sur le port 80

- Ouvrir le **Terminal** sur le dossier `web-aventure`.
  - Avec le **Finder**, naviguer jusqu'à votre dossier `web-aventure` où devrait se trouver votre site `index.html`
  - Clic-droit sur le dossier et sélectionner `Nouveau terminal au dossier`.
- Lancer le serveur web avec la commande `python3 -m http.server 80` dans le terminal :
  - Copier la commande sur le terminal
  - Appuyer sur <kbd>Enter</kbd>
- Ouvrir le navigateur web et aller sur http://localhost
  - Tester aussi les adresses http://127.0.0.1 et http://localhost:80
    - Pourquoi ces adresses donnent-elles le même résultat ?

#### Héberger sur un autre port

- Arrêter le serveur web avec la combinaison de touches <kbd>Ctrl</kbd> + <kbd>C</kbd> dans le terminal.
- Relancer le serveur web sur le port 8080 avec la commande `python3 -m http.server 8080` dans le terminal.
  - Est-ce que http://localhost et http://127.0.0.1 fonctionnent toujours ?
- Sur votre navigateur web, aller à l'adresse http://localhost:8080
  - Tester aussi http://127.0.0.1:8080
- Choisir un port entre 1024 et 65535 et lancer le serveur web sur ce port avec la commande `python3 -m http.server <port>` dans le terminal, par exemple `python3 -m http.server 1291`
- Indiquer le numéro de port choisi sur la feuille Excel partagée sur Teams `hebergement.xlsx`.

### Connaître son adresse IP

- Pour l'adresse IP publique :
  - Aller sur https://www.whatismyip.com/
- Pour l'adresse IP privée :
  - Aller dans le menu Pomme > Préférences Système > Réseau.
- Noter les deux adresses IP sur la feuille Excel partagée sur Teams `hebergement.xlsx`.
- Comparer les deux adresses IP, sont-elles différentes ? Pourquoi ?
  - Comparer vos adresses IP avec celles de vos camarades de classe.
- Essayer d'accéder à votre site web en utilisant votre adresse IP publique et privée. Par exemple `http://10.0.0.0:1291`.

### Tester la connexion entre deux ordinateurs

- Sur le navigateur web, accéder à l'adresse IP privée avec le bon port d'un·e de vos camarades de classe.
  - Est-ce que vous pouvez accéder à son site web ?
- Est-ce que cela fonctionne avec l'adresse IP publique ?

### Utiliser le DNS du Gymnase

- Sur chaque ordinateur, il y a une étiquette avec un nom. Par exemple `gych-a202-00`. Aussi possible de taper `hostname` dans le terminal.
  - On peut utiliser ce nom de domaine (local) pour accéder à l'ordinateur depuis un autre ordinateur à la place de l'adresse IP.
  - Noter le nom de votre ordinateur sur la feuille Excel partagée sur Teams `hebergement.xlsx`.
- Sur votre navigateur web, accéder à la page web d'un·e de vos camarades de classe en utilisant le nom de son ordinateur. Par exemple `http://gych-a202-00:1291`.

### Réponses HTTP

Lorsque vous accédez à un site web, votre navigateur envoie une requête HTTP au serveur web. Le serveur web répond avec une réponse HTTP qui contient un code de statut et un contenu. Par exemple :

- 200 : OK
- 301 : Moved Permanently
- 404 : Not Found
- 500 : Internal Server Error

https://httpstatus.io/ permet de visualiser les codes de statut HTTP d'un site web. Essayer avec les sites web suivants :

- https://www.google.com/
- http://www.google.com/
- https://gymnase.davidtang.ch/3cci/
- https://gymnase.davidtang.ch/3cci1/

Voici une liste amusante de tous les codes de statut HTTP sur https://http.cat/. Jeter un oeil au 418.

## Références

- https://fr.wikipedia.org/wiki/Port_(logiciel)
- https://gymnase-2324.davidtang.ch/2m/reseaux/tp-reseaux
