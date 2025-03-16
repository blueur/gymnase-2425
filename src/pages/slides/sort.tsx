import {
  Code,
  Columns,
  List,
  Section,
  Table,
  Text,
} from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Sort(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="sort"
      title="Tri"
      subTitle={props.chapter}
    >
      <Section level={3} title="Tri d'une liste dans l'ordre croissant">
        <Table rows={[["4", "1", "5", "3", "2"]]} />
        <Text fragment>&darr; Algorithme de tri &darr;</Text>
        <Table fragment rows={[["1", "2", "3", "4", "5"]]} />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Text>
          Insérer les éléments un à un dans une liste d'éléments déjà triés
        </Text>
        <Code>
          {`
          FONCTION tri_insertion(liste)
            POUR i de 1 à liste.taille - 1
              x ← T[i]
              j ← i
              TANT QUE j > 0 et liste[j - 1] > x
                T[j] ← T[j - 1]
                j ← j - 1
              FIN TANT QUE
              T[j] ← x
            FIN POUR
          FIN FONCTION
          `}
        </Code>
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            ["4", "1", "5", "3", "2"],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            ["**4**", "1", "5", "3", "2"],
            ["i", "", "", "", ""],
            ["j", "", "", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [<Text color="green">4</Text>, "**1**", "5", "3", "2"],
            ["", "i", "", "", ""],
            ["", "j", "", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            ["**1**", <Text color="green">4</Text>, "5", "3", "2"],
            ["", "i", "", "", ""],
            ["j", "", "", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">4</Text>,
              "**5**",
              "3",
              "2",
            ],
            ["", "", "i", "", ""],
            ["", "", "j", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
              "**3**",
              "2",
            ],
            ["", "", "", "i", ""],
            ["", "", "", "j", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">4</Text>,
              "**3**",
              <Text color="green">5</Text>,
              "2",
            ],
            ["", "", "", "i", ""],
            ["", "", "j", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              "**3**",
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
              "2",
            ],
            ["", "", "", "i", ""],
            ["", "j", "", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
              "**2**",
            ],
            ["", "", "", "", "i"],
            ["", "", "", "", "j"],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "**2**",
              <Text color="green">5</Text>,
            ],
            ["", "", "", "", "i"],
            ["", "", "", "j", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">3</Text>,
              "**2**",
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
            ],
            ["", "", "", "", "i"],
            ["", "", "j", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              "**2**",
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
            ],
            ["", "", "", "", "i"],
            ["", "j", "", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
            ],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriInsertion />
      </Section>
      <Section level={2} title="Tri par insertion">
        <List
          fragment
          items={[
            "Intuitif",
            'Tri "en place" (sans utiliser de mémoire supplémentaire)',
            "Lent : **pire cas** pour une liste inversée",
          ]}
        />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Text>
          Sélectionner le plus petit élément pour le mettre à sa place. Refaire
          pareil avec les éléments restants
        </Text>
        <Code>
          {`
          FONCTION tri_selection(liste)
            n ← liste.taille 
            POUR i de 0 à n - 2
              min ← i
              POUR j de i + 1 à n - 1
                SI liste[j] < liste[min], ALORS min ← j
              FIN POUR
              SI min ≠ i
                échanger liste[i] et liste[min]
              FIN SI
            FIN POUR
          FIN FONCTION
          `}
        </Code>
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            ["4", "1", "5", "3", "2"],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            ["**4**", "1", "5", "3", "2"],
            ["i", "", "", "", ""],
            ["j", "", "", "", ""],
            ["m", "", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            ["_4_", "**1**", "5", "3", "2"],
            ["i", "", "", "", ""],
            ["", "j", "", "", ""],
            ["", "m", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            ["_4_", "**1**", "_5_", "3", "2"],
            ["i", "", "", "", ""],
            ["", "", "j", "", ""],
            ["", "m", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            ["_4_", "**1**", "_5_", "_3_", "2"],
            ["i", "", "", "", ""],
            ["", "", "", "j", ""],
            ["", "m", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            ["_4_", "**1**", "_5_", "_3_", "_2_"],
            ["i", "", "", "", ""],
            ["", "", "", "", "j"],
            ["", "m", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [<Text color="green">1</Text>, "**4**", "5", "3", "2"],
            ["", "i", "", "", ""],
            ["", "j", "", "", ""],
            ["", "m", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [<Text color="green">1</Text>, "**4**", "_5_", "3", "2"],
            ["", "i", "", "", ""],
            ["", "", "j", "", ""],
            ["", "m", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [<Text color="green">1</Text>, "_4_", "_5_", "**3**", "2"],
            ["", "i", "", "", ""],
            ["", "", "", "j", ""],
            ["", "", "", "m", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [<Text color="green">1</Text>, "_4_", "_5_", "_3_", "**2**"],
            ["", "i", "", "", ""],
            ["", "", "", "", "j"],
            ["", "", "", "", "m"],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              "**5**",
              "3",
              "4",
            ],
            ["", "", "i", "", ""],
            ["", "", "j", "", ""],
            ["", "", "m", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              "_5_",
              "**3**",
              "4",
            ],
            ["", "", "i", "", ""],
            ["", "", "", "j", ""],
            ["", "", "", "m", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              "_5_",
              "**3**",
              "_4_",
            ],
            ["", "", "i", "", ""],
            ["", "", "", "", "j"],
            ["", "", "", "m", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              "**5**",
              "4",
            ],
            ["", "", "", "i", ""],
            ["", "", "", "j", ""],
            ["", "", "", "m", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              "_5_",
              "**4**",
            ],
            ["", "", "", "i", ""],
            ["", "", "", "", "j"],
            ["", "", "", "", "m"],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "**5**",
            ],
            ["", "", "", "", "i"],
            ["", "", "", "", "j"],
            ["", "", "", "", "m"],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
            ],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriSelection />
      </Section>
      <Section level={2} title="Tri par sélection">
        <List
          fragment
          items={[
            "Intuitif",
            'Tri "en place"',
            "Très lent : même **pire cas** que le tri par insertion",
          ]}
        />
      </Section>
      <Section level={2} title="Tri fusion">
        <Text>
          Partager la liste en sous-liste d'un élément. Fusionner les
          sous-listes ensemble
        </Text>
        <Code>
          {`
          FONCTION tri_fusion(liste)
            n ← liste.taille
            SI n ≤ 1
              RETOURNER liste
            SINON
              RETOURNER fusion(
                tri_fusion(première moitié de liste), 
                tri_fusion(deuxième moitié de liste)
              )
            FIN SI
          FIN FONCTION
          `}
        </Code>
      </Section>
      <Section level={2} title="Tri fusion">
        <Code>
          {`
          FONCTION fusion(a, b) # deux listes triées
            c = []
            TANT QUE a et b ne sont pas vides
              SI a est vide
                Ajouter b dans c
              SINON SI b est vide
                Ajouter a dans c
              SINON SI a[0] ≤ b[0]
                Ajouter a[0] dans c
                Enlever premier élément de a
              SINON
                Ajouter b[0] dans c
                Enlever premier élément de b
              FIN SI
            FIN TANT QUE
            RETOURNER c
          FIN FONCTION
          `}
        </Code>
      </Section>
      <Section level={3} title="Fusion">
        <Text>Fusion de deux listes triées</Text>
        <Columns>
          <Table rows={[["1", "2", "4", "8"]]} />
          <Table rows={[["3", "4", "6", "7"]]} />
        </Columns>
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table rows={[[]]} />
          <div>
            <Table rows={[["**1**", "2", "4", "8"]]} />
            <br />
            <Table rows={[["**3**", "4", "6", "7"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table
            rows={[["1"].map((item) => <Text color="green">{item}</Text>)]}
          />
          <div>
            <Table rows={[["**2**", "4", "8"]]} />
            <br />
            <Table rows={[["**3**", "4", "6", "7"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table
            rows={[["1", "2"].map((item) => <Text color="green">{item}</Text>)]}
          />
          <div>
            <Table rows={[["**4**", "8"]]} />
            <br />
            <Table rows={[["**3**", "4", "6", "7"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table
            rows={[
              ["1", "2", "3"].map((item) => <Text color="green">{item}</Text>),
            ]}
          />
          <div>
            <Table rows={[["**4**", "8"]]} />
            <br />
            <Table rows={[["**4**", "6", "7"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table
            rows={[
              ["1", "2", "3", "4"].map((item) => (
                <Text color="green">{item}</Text>
              )),
            ]}
          />
          <div>
            <Table rows={[["**8**"]]} />
            <br />
            <Table rows={[["**4**", "6", "7"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table
            rows={[
              ["1", "2", "3", "4", "4"].map((item) => (
                <Text color="green">{item}</Text>
              )),
            ]}
          />
          <div>
            <Table rows={[["**8**"]]} />
            <br />
            <Table rows={[["**6**", "7"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table
            rows={[
              ["1", "2", "3", "4", "4", "6"].map((item) => (
                <Text color="green">{item}</Text>
              )),
            ]}
          />
          <div>
            <Table rows={[["**8**"]]} />
            <br />
            <Table rows={[["**7**"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Columns>
          <Table
            rows={[
              ["1", "2", "3", "4", "4", "6", "7"].map((item) => (
                <Text color="green">{item}</Text>
              )),
            ]}
          />
          <div>
            <Table rows={[["**8**"]]} />
          </div>
        </Columns>
        <Fusion />
      </Section>
      <Section level={3} title="Fusion">
        <Table
          rows={[
            ["1", "2", "3", "4", "4", "6", "7", "8"].map((item) => (
              <Text color="green">{item}</Text>
            )),
          ]}
        />
        <Fusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Table rows={[["4", "1", "5", "3", "2"]]} />
      </Section>
      <Section level={2} title="Tri fusion">
        <Columns>
          <Table rows={[["4", "1", "5"]]} />
          <Table rows={[["3", "2"]]} />
        </Columns>
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Columns>
          <Table rows={[["4", "1"]]} />
          <Table rows={[[<Text color="green">5</Text>]]} />
          <span />
          <Table rows={[["3", "2"]]} />
        </Columns>
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Columns>
          <Table rows={[[<Text color="green">4</Text>]]} />
          <Table rows={[[<Text color="green">1</Text>]]} />
          <span />
          <Table rows={[[<Text color="green">5</Text>]]} />
          <span />
          <span />
          <Table rows={[["3", "2"]]} />
        </Columns>
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Columns>
          <Table
            rows={[
              [<Text color="green">1</Text>, <Text color="green">4</Text>],
            ]}
          />
          <Table rows={[[<Text color="green">5</Text>]]} />
          <span />
          <Table rows={[["3", "2"]]} />
        </Columns>
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Columns>
          <Table
            rows={[
              [
                <Text color="green">1</Text>,
                <Text color="green">4</Text>,
                <Text color="green">5</Text>,
              ],
            ]}
          />
          <Table rows={[["3", "2"]]} />
        </Columns>
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Columns>
          <Table
            rows={[
              [
                <Text color="green">1</Text>,
                <Text color="green">4</Text>,
                <Text color="green">5</Text>,
              ],
            ]}
          />
          <span />
          <Table rows={[[<Text color="green">3</Text>]]} />
          <Table rows={[[<Text color="green">2</Text>]]} />
        </Columns>
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Columns>
          <Table
            rows={[
              [
                <Text color="green">1</Text>,
                <Text color="green">4</Text>,
                <Text color="green">5</Text>,
              ],
            ]}
          />
          <Table
            rows={[
              [<Text color="green">2</Text>, <Text color="green">3</Text>],
            ]}
          />
        </Columns>
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
            ],
          ]}
        />
        <TriFusion />
      </Section>
      <Section level={2} title="Tri fusion">
        <List
          fragment
          items={[
            "Rapide (optimal en moyenne)",
            'Stratégie "Diviser pour régner" (divide and conquer) : parallélisable',
            'Nécessite de la mémoire supplémentaire (pas "en place")',
          ]}
        />
      </Section>
      <Section level={2} title="Tri rapide">
        <Text>
          Définir un élément pivot et séparer tout les éléments plus petit que
          et plus grand que le pivot. Récursivement trier les deux listes à
          gauche et à droite du pivot.
        </Text>
      </Section>
      <Section level={3} title="Partition">
        <Table
          rows={[
            ["4", "7", "1", "6", "5", "8", "2"],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={3} title="Partition">
        <Table
          rows={[
            ["**4**", "7", "1", "6", "5", "8", "2"],
            ["p", "", "", "", "", "", ""],
            ["", "i", "", "", "", "", "j"],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={3} title="Partition">
        <Table
          rows={[
            ["**4**", "_2_", "1", "6", "5", "8", "_7_"],
            ["p", "", "", "", "", "", ""],
            ["", "i", "", "", "", "", "j"],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={3} title="Partition">
        <Table
          rows={[
            ["**4**", "_2_", "_1_", "6", "5", "_8_", "_7_"],
            ["p", "", "", "", "", "", ""],
            ["", "", "i", "", "", "j", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={3} title="Partition">
        <Table
          rows={[
            ["**4**", "_2_", "_1_", "6", "_5_", "_8_", "_7_"],
            ["p", "", "", "", "", "", ""],
            ["", "", "i", "", "j", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={3} title="Partition">
        <Table
          rows={[
            ["**4**", "_2_", "_1_", "_6_", "_5_", "_8_", "_7_"],
            ["p", "", "", "", "", "", ""],
            ["", "", "i", "j", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={3} title="Partition">
        <Table
          rows={[
            ["1", "2", <Text color="green">4</Text>, "6", "5", "8", "7"],
            ["", "", "p", "", "", "", ""],
            ["", "", "", "", "", "", ""],
          ]}
        />
        <br />
        <List
          fragment
          items={[
            "Le pivot est placé à la bonne place.",
            "Trier la liste à sa gauche de la même manière",
            "Trier la liste à sa droite de la même manière",
          ]}
        />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["4", "1", "5", "3", "2"],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["**4**", "_1_", "5", "3", "2"],
            ["p", "", "", "", ""],
            ["", "i", "", "", "j"],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["**4**", "_1_", "5", "3", "2"],
            ["p", "", "", "", ""],
            ["", "", "i", "", "j"],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["**4**", "_1_", "_2_", "3", "_5_"],
            ["p", "", "", "", ""],
            ["", "", "i", "", "j"],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["**4**", "_1_", "_2_", "_3_", "_5_"],
            ["p", "", "", "", ""],
            ["", "", "", "i", "j"],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["**4**", "_1_", "_2_", "_3_", "_5_"],
            ["p", "", "", "", ""],
            ["", "", "", "i", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["3", "1", "2", <Text color="green">4</Text>, "5"],
            ["", "", "", "p", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["**3**", "_1_", "2", <Text color="green">4</Text>, "5"],
            ["p", "", "", "", ""],
            ["", "i", "j", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            ["**3**", "_1_", "_2_", <Text color="green">4</Text>, "5"],
            ["p", "", "", "", ""],
            ["", "", "i", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            [
              "2",
              "1",
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "5",
            ],
            ["", "", "p", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            [
              "**2**",
              "_1_",
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "5",
            ],
            ["p", "", "", "", ""],
            ["", "i", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            [
              "1",
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "5",
            ],
            ["", "p", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            [
              "**1**",
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "5",
            ],
            ["p", "", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "5",
            ],
            ["p", "", "", "", ""],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              "**5**",
            ],
            ["", "", "", "", "p"],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <Table
          rows={[
            [
              <Text color="green">1</Text>,
              <Text color="green">2</Text>,
              <Text color="green">3</Text>,
              <Text color="green">4</Text>,
              <Text color="green">5</Text>,
            ],
            ["", "", "", "", "p"],
            ["", "", "", "", ""],
          ]}
        />
        <TriRapide />
      </Section>
      <Section level={2} title="Tri rapide">
        <List
          fragment
          items={[
            "Le plus rapide dans la plupart des cas",
            "Diviser pour régner",
            'Tri "en place"',
            "Pas optimal si déjà trié",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}

function TriInsertion() {
  return [
    <br />,
    <List
      items={[
        "i : liste triée jusqu'à l'index i",
        "j : index de l'élément à insérer (compare avec j - 1)",
      ]}
    />,
  ];
}

function TriSelection() {
  return [
    <br />,
    <List
      items={[
        "i : liste triée jusqu'à l'index i",
        "j : recherche du minimum dans la liste non triée",
        "m : index du minimum trouvé",
      ]}
    />,
  ];
}

function Fusion() {
  return [
    <br />,
    <List items={["Prendre le plus petit élément des deux listes"]} />,
  ];
}

function TriFusion() {
  return [
    <br />,
    <List
      items={[
        "Diviser la liste jusqu'à obtenir des listes d'un élément.",
        "Puis, fusionner les listes deux à deux en utilisant la fonction fusion.",
      ]}
    />,
  ];
}

function TriRapide() {
  return [
    <br />,
    <List
      items={[
        "p : pivot choisi",
        "i : éléments à gauche du pivot (plus petit)",
        "j : éléments à droite du pivot (plus grand)",
      ]}
    />,
  ];
}
