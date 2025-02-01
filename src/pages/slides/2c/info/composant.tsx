import {
  Columns,
  Image,
  List,
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
        <Kroki type="svgbob">
          {`
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
          `}
        </Kroki>
      </Section>
      <Section level={2} title="Carte mère" fragment>
        <Columns>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/ASRock_K7VT4A_Pro_Mainboard.jpg"
            url="https://commons.wikimedia.org/wiki/File:ASRock_K7VT4A_Pro_Mainboard.jpg"
          />
          <List
            fragment={[false, true]}
            items={[
              [
                "_Rôle(s)_",
                [
                  "**Support** pour les **processeur**, **mémoire vive**, &hellip;",
                  [
                    "**Connecteurs** pour les **disques**, **périphériques**, &hellip;",
                    ["Panneau d'entrées/sorties (USB, HDMI, &hellip;)"],
                  ],
                  "Tous les **composants** se connectent à la carte mère",
                ],
              ],
              [
                "_Caractéristique(s)_",
                [
                  "**Format**",
                  "**Connecteurs** (USB, SATA, &hellip;)",
                  "**Compatibilité** avec les autres composants",
                ],
              ],
            ]}
          />
        </Columns>
      </Section>
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
      <Section level={3} title="Vue d'ensemble">
        <div class="r-stack">
          <Kroki type="svgbob">
            {`
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
            `}
          </Kroki>
          <Kroki type="svgbob" fragment>
            {`
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
            `}
          </Kroki>
        </div>
      </Section>
    </RevealDeck>
  );
}
