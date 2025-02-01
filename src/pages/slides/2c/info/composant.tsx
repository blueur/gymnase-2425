import {
  Columns,
  Image,
  List,
  ListItem,
  Section,
  Table,
  Text,
} from "@site/src/components/Deck";
import Kroki from "@site/src/components/Kroki";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Composant(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Composants d'un ordinateur"
      subTitle={props.chapter ?? "Introduction à l'Informatique"}
    >
      <Section level={2} title="Composants d'un ordinateur">
        <Text>
          Quels sont les composants d'un ordinateur que vous connaissez ?
        </Text>
      </Section>
      <Section level={3} title="Vue d'ensemble">
        {overviewSchemas[0]}
      </Section>
      <ComponentSection
        title="Carte mère"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/40/ASRock_K7VT4A_Pro_Mainboard.jpg"
        imageUrl="https://commons.wikimedia.org/wiki/File:ASRock_K7VT4A_Pro_Mainboard.jpg"
        roles={[
          "**Support** pour les **processeur**, **mémoire vive**, &hellip;",
          [
            "**Connecteurs** pour les **disques**, **périphériques**, &hellip;",
            ["Panneau d'entrées/sorties (USB, HDMI, &hellip;)"],
          ],
          "Tous les **composants** se connectent à la carte mère",
        ]}
        characteristics={[
          "**Format**",
          "**Connecteurs** (USB, SATA, &hellip;)",
          "**Compatibilité** avec les autres composants",
        ]}
      />
      <Section level={3} title="Format de carte mère">
        <Table
          headers={["Samsung Galaxy SII", "Vaio E series"]}
          lines={[
            [
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Samsung_galaxy_s2_internal2.JPG"
                url="https://commons.wikimedia.org/wiki/File:Samsung_galaxy_s2_internal2.JPG"
                height="512px"
              />,
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/EBMotherboard.JPG"
                url="https://commons.wikimedia.org/wiki/File:EBMotherboard.JPG"
                height="512px"
              />,
            ],
          ]}
        />
      </Section>
      <OverviewSection index={0} />
      <ComponentSection
        title="Processeur"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/d/dc/Intel_80486DX2_top.jpg"
        imageUrl="https://commons.wikimedia.org/wiki/File:Intel_80486DX2_top.jpg"
        names={["**CPU** (Central Processing Unit)"]}
        roles={["**Exécution** des instructions/opérations"]}
        characteristics={[
          "**Architecture** (x86, ARM, &hellip;)",
          "**Fréquence** d'horloge",
          "Nombre de **coeurs**",
        ]}
      />
      <Section level={3} title="Vitesse d'un processeur">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Fréquence** d'horloge (en Hz)",
              [
                "1 Hz = 1 cycle (~ opération) par seconde",
                "2 GHz = ~ 2 milliard d'opérations par seconde",
              ],
            ],
            [
              "Nombre de **coeurs** (**core** en anglais)",
              ["Chaque coeur peut exécuter des instructions en **parallèle**"],
            ],
            [
              "1 &times; 2 GHz **&ne;** 2 &times; 1 GHz",
              [
                "Pas toujours **parallélisable** (pas deux fois plus rapide avec un tandem)",
                "Utile pour le **multitâche** (navigateur, musique, office, &hellip;)",
              ],
            ],
          ]}
        />
      </Section>
      <OverviewSection index={1} />
      <ComponentSection
        title="Mémoire vive"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/d/db/Swissbit_2GB_PC2-5300U-555.jpg"
        imageUrl="https://commons.wikimedia.org/wiki/File:Swissbit_2GB_PC2-5300U-555.jpg"
        names={["**Mémoire**", "**RAM** (Random Access Memory)"]}
        roles={[
          "**Stockage** temporaire des données et **instructions** en cours d'utilisation par le processeur",
        ]}
        characteristics={[
          "**Capacité** (en Go)",
          "**Vitesse** de lecture/écriture (en MHz)",
        ]}
      />
      <OverviewSection index={2} />
      <ComponentSection
        title="Mémoire de masse"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1d/Hard_disk_platter_reflection.jpg"
        imageUrl="https://commons.wikimedia.org/wiki/File:Hard_disk_platter_reflection.jpg"
        names={["**Stockage**", "**Disque dur**"]}
        roles={["**Stockage** permanent des données"]}
        characteristics={[
          "**Capacité** (en Go, To)",
          "**Vitesse** de lecture/écriture (en Mo/s) ou de rotation (en rpm)",
        ]}
      />
      <OverviewSection index={3} />
      <Section level={3} title="Types de mémoire de masse">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Disque dur HDD_ (Hard disk drive)",
              [
                "Plusieurs disques **magnétiques** et **mécaniques** en rotation (comme un vinyle)",
                "**Capacité** importante",
                "**Prix** abordable",
              ],
            ],
            [
              "_Disque SSD_ (Solid-state drive)",
              [
                "Mémoire **flash** (comme une clé USB ou une carte SD)",
                "Beaucoup plus **rapide**",
                "Nombre de cycles d'**écriture limité**",
                "**Résistant** aux chocs et aux vibrations (pas de pièces mobiles)",
                "**Léger** et **silencieux**",
              ],
            ],
            "[Vidéo](https://youtu.be/Rm23UmdJ8DQ)",
          ]}
        />
      </Section>
      <Section level={3} title="Mémoire vive vs mémoire de masse">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Mémoire vive_",
              [
                ["**Volatile**", ["Perte des données à l'extinction"]],
                "**Rapide**, mais **coûteux**",
                [
                  "Utilisée par le **processeur**",
                  ["Ralentissement de l'ordinateur si mémoire insuffisante"],
                ],
                "Comme notre mémoire à court terme",
              ],
            ],
            [
              "_Mémoire de masse_",
              [
                [
                  "**Permanente**",
                  ["Conservation des données même sans alimentation"],
                ],
                "Plus grande **capacité**",
                "**Copie** les données vers la mémoire vive pour les utiliser",
                "Comme notre mémoire à long terme",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Organisation des mémoires">
        <Kroki type="plantuml">
          {`
          @startwbs
          * Mémoire
          ** Volatile
          *** RAM (Mémoire vive)
          ** Permanente
          *** HDD (Disque dur)
          *** SSD (Disque SSD)
          @endwbs
          `}
        </Kroki>
      </Section>
      <ComponentSection
        title="Carte graphique"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/4a/ATI_Radeon_HD_5970_Graphics_Card-oblique_view.jpg"
        imageUrl="https://commons.wikimedia.org/wiki/File:ATI_Radeon_HD_5970_Graphics_Card-oblique_view.jpg"
        names={["**GPU** (Graphics Processing Unit)"]}
        roles={["**Calculs** graphiques (jeux, modélisation 3D, &hellip;)"]}
        characteristics={[
          "**Mémoire** dédiée",
          "**Fréquence** d'horloge",
          "**Nombre de coeurs** (comme un processeur)",
          "Comme un **processeur** et une **mémoire vive** dédiée pour les **graphismes**",
        ]}
      />
      <OverviewSection index={4} />
      <Section level={3} title="CPU vs GPU">
        <List
          fragment={[false, true]}
          items={[
            [
              "_CPU_",
              [
                "Calculs **séquentiel** (généralistes)",
                "**Peu** de **coeurs** avec une **fréquence** d'horloge **élevée**",
                [
                  "Exécute une **série** d'instructions les unes après les autres",
                  [
                    "Lecture, interprétation, **exécution**, lecture, interprétation, **exécution**, lecture, &hellip;",
                  ],
                ],
              ],
            ],
            [
              "_GPU_",
              [
                "Calculs en **parallèle** (graphiques, minage, IA, &hellip;)",
                "**Beaucoup** de **coeurs** avec une **fréquence** d'horloge **faible**",
                [
                  "Exécute la **même** instruction sur plusieurs données en même temps",
                  [
                    "Lecture, interprétation, **exécution**, **exécution**, &hellip;",
                  ],
                ],
              ],
            ],
            "[Vidéo](https://youtu.be/-P28LKWTzrI)",
          ]}
        />
      </Section>
      <ComponentSection
        title="Bus"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/3e/PCI-E_%26_PCI_slots_on_DFI_LanParty_nF4_SLI-DR_20050531.jpg"
        imageUrl="https://commons.wikimedia.org/wiki/File:PCI-E_%26_PCI_slots_on_DFI_LanParty_nF4_SLI-DR_20050531.jpg"
        names={["**Bus** (Bridge Unit System)"]}
        roles={["**Communication** entre les composants"]}
        characteristics={[
          "**Connecteurs** avec les autres composants",
          "**Vitesse** de transfert (en Go/s)",
        ]}
      />
      <OverviewSection index={5} />
      <ComponentSection
        title="Bloc d'alimentation"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/62/PSU-Open1.jpg"
        imageUrl="https://commons.wikimedia.org/wiki/File:PSU-Open1.jpg"
        names={["**Alimentation**"]}
        roles={["**Fournir** l'électricité aux composants"]}
        characteristics={[
          " **Puissance** (en W)",
          "**Connecteurs** pour les composants",
          "**Ventilateur** pour le refroidissement",
        ]}
      />
      <OverviewSection index={6} />
      <Section level={2} title="Périphériques">
        <List
          fragment
          items={[
            "Un composant **externe** connecté à l'ordinateur",
            [
              "**Types** de périphérique",
              ["Entrée", "Sortie", "Entrée/Sortie"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Organisation des périphériques">
        <Kroki type="plantuml">
          {`
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
          `}
        </Kroki>
      </Section>
      <OverviewSection index={8} />
    </RevealDeck>
  );
}

function ComponentSection(props: {
  title: string;
  imageSrc: string;
  imageUrl: string;
  names?: ListItem[];
  roles: ListItem[];
  characteristics: ListItem[];
}) {
  return (
    <Section level={2} title={props.title} fragment>
      <Columns>
        <Image src={props.imageSrc} url={props.imageUrl} />
        <List
          fragment={[false, true]}
          items={[
            ...(props.names ? [["_Nom(s)_", props.names]] : []),
            ["_Rôle(s)_", props.roles],
            ["_Caractéristique(s)_", props.characteristics],
          ]}
        />
      </Columns>
    </Section>
  );
}

function OverviewSection(props: { index: number }) {
  return (
    <Section level={3} title="Vue d'ensemble">
      <div className="r-stack">
        {overviewSchemas[props.index]}
        {overviewFragmentedSchemas[props.index + 1]}
      </div>
    </Section>
  );
}

const overviewContents = [
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
  +-----------------------------------------+
  |Ordinateur                               |
  |                       +--------------+  |
  |+------------------+   |Carte mère    |  |
  || Mémoire de masse |<->|+------------+|  |
  |+------------------+   ||Mémoire vive||  |
  |          ^            |+------------+|  |
  |          |            |              |  |
  |+---------+---------+  |+------------+|  |                   ,-.
  ||Bloc d'alimentation|->|| Processeur ||  |                   \`-'
  |+---------+---------+  |+------------+|  |                   /|\\
  |          |            +--------------+  |                    |
  |          |             ^                |                   / \\
  |          |             |                |
  |          v             v                |
  |         +---------------+               |
  |         |Carte graphique|               |
  |         +---------------+               |
  +-----------------------------------------+
  `,
  `
  +-----------------------------------------+  +~~~~~~~~~~~~~+
  |Ordinateur                               |  :Périphériques:
  |                       +--------------+  |  :             :
  |+------------------+   |Carte mère    |  |  :  +-------+  :
  || Mémoire de masse |<->|+------------+|<-)--:--|Clavier|  :
  |+------------------+   ||Mémoire vive||  |  :  +-------+  :
  |          ^            |+------------+|  |  :             :
  |          |            |              |  |  :             :
  |+---------+---------+  |+------------+|  |  :             :  ,-.
  ||Bloc d'alimentation|->|| Processeur ||  |  :  +--------+ :  \`-'
  |+---------+---------+  |+------------+|<-)--:->|Clef USB| :  /|\\
  |          |            +--------------+  |  :  +--------+ :   |
  |          |             ^                |  :             :  / \\
  |          |             |                |  :             :
  |          v             v                |  :             :
  |         +---------------+               |  :  +-------+  :
  |         |Carte graphique|---------------)--:->| Écran |  :
  |         +---------------+               |  :  +-------+  :
  +-----------------------------------------+  +~~~~~~~~~~~~~+
  `,
];
const overviewSchemas = overviewContents.map((overview) => {
  return (
    <Kroki type="svgbob" key={overview}>
      {overview}
    </Kroki>
  );
});
const overviewFragmentedSchemas = overviewContents.map((overview) => {
  return (
    <Kroki type="svgbob" key={overview} fragment>
      {overview}
    </Kroki>
  );
});
