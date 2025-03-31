import {
  Columns,
  Image,
  List,
  Section,
  Table,
  Text,
} from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function ArtificialIntelligence(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="artificial-intelligence"
      title="Intelligence artificielle"
      subTitle={props.chapter}
    >
      <Section level={2} title="Intelligence artificielle">
        <List
          fragment={[true, true]}
          items={[
            "**Simulation**/**imitation** de l'intelligence humaine par une machine",
            [
              "Qu'est-ce que l'**intelligence** ?",
              [
                "Capacité à **apprendre** et **raisonner**",
                "Test de **Turing** (1950) : capacité à **converser** avec un humain sans être **reconnu** comme une machine",
              ],
            ],
            [
              "Apprentissage automatique (**machine learning**)",
              [
                "Un **programme** qui apprend par lui-même à partir de **données**",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Apprentissage automatique">
        <Text>Est-ce que le nombre est **paire** ?</Text>
        <Columns vertical="start">
          <List
            fragment={[true, true]}
            items={[
              [
                "**Sans** apprentissage automatique",
                [
                  "**Prédéfinir** une _règle_",
                  "return n % 2 == 0",
                  "_Résultat_ **toujours** correct",
                ],
              ],
            ]}
          />
          <List
            fragment={[true, true]}
            items={[
              [
                "**Avec** apprentissage automatique",
                [
                  [
                    "Donner beaucoup exemples d'entrées et de sorties",
                    [
                      "2 est pair",
                      "5 est impair",
                      "1291 est impair",
                      "42 est pair",
                      "&hellip;",
                    ],
                  ],
                  "**Inférer** la _règle_ à partir des exemples (données)",
                  [
                    "_Résultat_ **statistiquement** correct",
                    ["Par exemple : 99,9%"],
                  ],
                ],
              ],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Apprentissage supervisé">
        <List
          fragment
          items={[
            [
              "Données d'**entraînement** : exemples d'entrées et de sorties **étiquetées**",
              [
                <Table
                  rows={[
                    [
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Beagle_portrait_Camry.jpg"
                        url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Beagle_portrait_Camry.jpg/320px-Beagle_portrait_Camry.jpg"
                        height="100px"
                      />,
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cat_playing_with_a_lizard.jpg/320px-Cat_playing_with_a_lizard.jpg"
                        url="https://commons.wikimedia.org/wiki/File:Cat_playing_with_a_lizard.jpg"
                        height="100px"
                      />,
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Chat_mi-long.jpg"
                        url="https://commons.wikimedia.org/wiki/File:Chat_mi-long.jpg"
                        height="100px"
                      />,
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Deutscher_Sch%C3%A4ferhund-_portrait.JPG/192px-Deutscher_Sch%C3%A4ferhund-_portrait.JPG"
                        url="https://commons.wikimedia.org/wiki/File:Deutscher_Sch%C3%A4ferhund-_portrait.JPG"
                        height="100px"
                      />,
                    ],
                    ["Chien", "Chat", "Chat", "Chien"],
                  ]}
                />,
              ],
            ],
            "Algorithme **apprend** à partir des données",
            [
              "Données de **test** : prédictions des sorties par l'algorithme",
              [
                <Table
                  rows={[
                    [
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Siberian-husky-1291343_1920.jpg/305px-Siberian-husky-1291343_1920.jpg"
                        url="https://commons.wikimedia.org/wiki/File:Siberian-husky-1291343_1920.jpg"
                        height="100px"
                      />,
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Deux_chats_domestiques.jpg/181px-Deux_chats_domestiques.jpg"
                        url="https://commons.wikimedia.org/wiki/File:Deux_chats_domestiques.jpg"
                        height="100px"
                      />,
                    ],
                    ["?", "?"],
                  ]}
                />,
              ],
            ],
            [
              "Évaluer la **qualité** des prédictions",
              [
                "Données suffisamment _représentatives_ ? (**diversité**)",
                "Données trop _représentatives_ ? (**biais**)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Apprentissage non supervisé">
        <List
          fragment
          items={[
            "Sans étiquetage des données",
            [
              "_Apprentissage_/_Entraînement_",
              [
                "**Regrouper** les données **similaires** (clustering)",
                "Étiqueter les groupes découverts",
              ],
            ],
            ["_Test_", ["Évaluer les groupes avec des nouvelles données"]],
          ]}
        />
      </Section>
      <Section level={2} title="Apprentissage non supervisé">
        <Image
          src="https://dashee87.github.io/images/kmeans.gif"
          url="https://dashee87.github.io/data%20science/general/Clustering-with-Scikit-with-GIFs/"
        />
      </Section>
      <Section level={2} title="Apprentissage par renforcement">
        <List
          fragment
          items={[
            "Apprendre par **essais** et **erreurs**",
            [
              "Exemple : AlphaGo (2010) qui a battu le champion du monde de Go en 2016",
              [
                "Entrées : règles du jeu de Go",
                "Joue contre lui-même 4.9 millions de parties",
                "**Apprend** à optimiser ses chances de gagner",
              ],
            ],
            "Pas de données d'entraînement (par exemple d'autres parties de Go)",
            "Phase d'apprentissage : jouer contre lui-même",
            "[Algorithme génétique](https://youtu.be/YRjq02WT_oI)",
          ]}
        />
      </Section>
      <Section level={2} title="Phases">
        <Table
          headers={["", "Phase d'apprentissage", "Phase de test"]}
          rows={[
            [
              "Apprentissage supervisé",
              "Trouver une règle à partir des données étiquetées",
              "Prédire la sortie",
            ],
            [
              "Apprentissage non supervisé",
              "Regrouper les données similaires",
              "Prédire le groupe",
            ],
            [
              "Apprentissage par renforcement",
              "Essais et erreurs",
              "Utiliser les connaissances acquises",
            ],
          ]}
        />
        <List
          fragment
          items={[
            "La phase d'apprentissage demande beaucoup de **ressources**",
            "[Base de données MNIST](https://fr.wikipedia.org/wiki/Base_de_donn%C3%A9es_MNIST) (70 000 images de chiffres manuscrits)",
            "[Nous avons un supercalculateur massif chez Nvidia, équipé de milliers de nos GPU les plus récents, qui fonctionne 24 heures sur 24, 365 jours par an, dans le seul but d'améliorer le DLSS](https://www.frandroid.com/marques/nvidia/2474226_nvidia-devoile-le-superordinateur-qui-permet-dameliorer-le-rendu-de-vos-jeux-video-avec-le-dlss)",
          ]}
        />
      </Section>
      <Section level={3} title="Validation croisée">
        <List
          fragment={[true, true]}
          items={[
            [
              "Comment **simuler** le **futur** (la phase de test) ?",
              [
                "**Diviser** les données",
                "Utiliser une **partie** pour l'apprentissage et l'autre pour le test",
              ],
            ],
          ]}
        />
        <Image
          fragment
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/LOOCV.gif"
          url="https://commons.wikimedia.org/wiki/File:LOOCV.gif"
          height="500px"
        />
      </Section>
      <Section level={2} title="Limitations">
        <List
          fragment={[true, true, true]}
          items={[
            [
              "Limitation de la _programmation_ (sans IA)",
              [
                "Trop de **règles** à **définir** (complexe)",
                "Par exemple : prédire tous les coups possibles aux échecs",
              ],
            ],
            [
              "Limitation de l'_apprentissage automatique_ (avec IA)",
              [
                "Réponses **statistiquement** correctes à vérifier",
                [
                  "**Qualité** des données d'entraînement",
                  [
                    "**Représentativité** (choix humain des données)",
                    "**Quantité** (vente de données pour l'entraînement)",
                    "**Exactitude** (erreurs dans les données d'entraînement)",
                  ],
                ],
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="L'erreur est humaine ?">
        <Image
          src="https://www.researchgate.net/profile/Krishna-Kandarpa-2/publication/332452649/figure/fig1/AS:770098897887234@1560617293964/Error-rates-on-the-ImageNet-Large-Scale-Visual-Recognition-Challenge-Accuracy.ppm"
          url="https://www.researchgate.net/figure/Error-rates-on-the-ImageNet-Large-Scale-Visual-Recognition-Challenge-Accuracy_fig1_332452649"
        />
      </Section>
    </RevealDeck>
  );
}
