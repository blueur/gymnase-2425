# Son

:::note[Objectifs]

Comment représenter le son ?

- Différencier l'analogique du numérique
- Connaître les étapes de la numérisation du son
- Comprendre les notions de fréquence d'échantillonnage et de quantification
- Calculer la taille d'un fichier audio

:::

## Cours

<Reveal name="1m-repr-son" />

## Exercices

### Son

1. Quelle est la taille en [Mo] d'un fichier audio de 3 minutes avec une fréquence d'échantillonnage de 44,1 kHz et une quantification de 16 bits ?
   <details><summary>Solution</summary>15,88 [Mo]</details>
2. Quelle est la taille en [Mo] d'un fichier audio de 5 minutes en 48 kHz sur 24 bits ?
   <details><summary>Solution</summary>43,2 [Mo]</details>
3. Quel est le débit binaire en [kb/s] d'un appel téléphonique en 8'000 Hz sur 8 bits ?
   <details><summary>Solution</summary>64 [kb/s]</details>
4. Combien de minutes de musique de 44,1 kHz sur 32 bits peut-on stocker sur un CD de 700 Mo ?
   <details><summary>Solution</summary>66,14 minutes</details>
5. Combien de minutes de musique de 44,1 kHz sur 32 bits peut-on stocker sur un CD de 700 Mio ?
   <details><summary>Solution</summary>69,35 minutes</details>

<details>
<summary>Solution avec détails</summary>

1. - 3 minutes = 180 secondes
   - 44,1 [kHz] &times; 16 [b] = 705,6 [kb/s]
   - 705,6 [kb/s] &times; 180 [s] = 127'008 [kb]
   - 127'008 [kb] / 8 = 15'876 [ko]
   - 15'876 [ko] / 1'000 = 15,88 [Mo]
2. - 5 minutes = 300 secondes
   - 48 [kHz] &times; 24 [b] = 1'152 [kb/s]
   - 1'152 [kb/s] &times; 300 [s] = 345'600 [kb]
   - 345'600 [kb] / 8 = 43'200 [ko]
   - 43'200 [ko] / 1'000 = 43,2 [Mo]
3. - 8'000 [Hz] &times; 8 [b] = 64'000 [b/s]
   - 64'000 [b/s] / 1'000 = 64 [kb/s]
4. - Débit binaire de la musique :
     - 44,1 [kHz] &times; 32 [b] = 1'411,2 [kb/s]
     - 1'411,2 [kb/s] / 8 = 176,4 [ko/s]
   - Espace de stockage en [ko] :
     - 700 [Mo] &times; 1'000 = 700'000 [ko]
   - Diviser l'espace de stockage par le débit binaire :
     - 700'000 [ko] / 176,4 [ko/s] = 3'968,25 [s]
   - Convertir les secondes en minutes :
     - 3'968,25 [s] / 60 = 66,14 minutes
5. - Débit binaire de la musique (en [o/s] cette fois) :
     - 44,1 [kHz] &times; 32 [b] = 1'411,2 [kb/s]
     - 1'411,2 [kb/s] / 8 = 176,4 [ko/s]
     - 176,4 [ko/s] &times; 1'000 = 176'400 [o/s]
   - Espace de stockage en [o] :
     - 700 [Mio] &times; 1'024 &times; 1'024 = 734'003'200 [o]
   - Diviser l'espace de stockage par le débit binaire :
     - 734'003'200 [o] / 176'400 [o/s] = 4'161,02 [s]
   - Convertir les secondes en minutes :
     - 4'161,02 [s] / 60 = 69,35 minutes

</details>

## Références

- https://apprendre.modulo-info.ch/rep-info/son.html
- https://fr.vikidia.org/wiki/Disque_vinyle
  - https://fr.wikipedia.org/wiki/Disque_microsillon
- https://fr.vikidia.org/wiki/Disque_compact
  - https://fr.wikipedia.org/wiki/Disque_compact
- https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27%C3%A9chantillonnage
- https://fr.wikipedia.org/wiki/D%C3%A9bit_binaire
