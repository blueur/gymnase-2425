import { List, Section, Table, Text } from "@site/src/components/Deck";
import Katex from "@site/src/components/Katex";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Conversion(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="conversion"
      title="Conversion"
      subTitle={props.chapter}
    >
      <Section level={2} title="Équivalence des bases">
        <Table
          headers={[
            "Base 10",
            "Base 2",
            "Base 3",
            "Base 4",
            "Base 8",
            "Base 16",
          ]}
          rows={[
            ["0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1"],
            ["2", "10", "2", "2", "2", "2"],
            ["3", "11", "10", "3", "3", "3"],
            ["4", "100", "11", "10", "4", "4"],
            ["5", "101", "12", "11", "5", "5"],
            ["6", "110", "20", "12", "6", "6"],
            ["7", "111", "21", "13", "7", "7"],
            ["8", "1000", "22", "20", "10", "8"],
            ["9", "1001", "100", "21", "11", "9"],
            ["10", "1010", "101", "22", "12", "A"],
          ]}
        />
        <Katex fragment>
          {"6_{10} = 110_{2} = 20_{3} = 12_{4} = 6_{8} = 6_{16}"}
        </Katex>
      </Section>
      <Section level={2} title="Équivalence des bases">
        <List
          fragment={[true, true]}
          items={[
            <Katex>
              {"6_{10} = 110_{2} = 20_{3} = 12_{4} = 6_{8} = 6_{16}"}
            </Katex>,
            [
              <Katex>{"6_{10} = 110_{2}"}</Katex>,
              ["**6** en _base 10_ est **équivalent** à **110** en _base 2_"],
            ],
            <Katex>{"{10\\ 1010}_{2} = ?_{10}"}</Katex>,
            <Katex>{"{101\\ 0000\\ 1011}_{2} = ?_{10}"}</Katex>,
          ]}
        />
      </Section>
      <Section level={2} title="Forme canonique décimale">
        <List
          fragment={[true, true]}
          items={[
            "Forme permettant de **représenter** n'importe quel **nombre** entier positif de manière **unique**",
            ["1291", ["Les **1** n'ont pas la même **valeur**"]],
            "1291 = **1**000 + **2**00 + **9**0 + **1**",
            "1291 = **1** &times; 1000 + **2** &times; 100 + **9** &times; 10 + **1** &times; 1",
            "1291 = **1** &times; 10<sup>3</sup> + **2** &times; 10<sup>2</sup> + **9** &times; 10<sup>1</sup> + **1** &times; 10<sup>0</sup>",
            [
              "1291<sub>_10_</sub> = **1** &times; _10_<sup>3</sup> + **2** &times; _10_<sup>2</sup> + **9** &times; _10_<sup>1</sup> + **1** &times; _10_<sup>0</sup>",
              ["Forme canonique"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Forme canonique décimale">
        <List
          fragment={[true, true]}
          items={[
            [
              "102<sub>_4_</sub>",
              [
                "= **1** &times; _4_<sup>2</sup> + **0** &times; _4_<sup>1</sup> + **2** &times; _4_<sup>0</sup>",
                "= 18<sub>_10_</sub>",
              ],
            ],
            [
              "1010<sub>_2_</sub>",
              [
                "= **1** &times; _2_<sup>3</sup> + **0** &times; _2_<sup>2</sup> + **1** &times; _2_<sup>1</sup> + **0** &times; _2_<sup>0</sup>",
                "= 10<sub>_10_</sub>",
              ],
            ],
          ]}
        />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases ? &rarr; 10 avec un tableau"
      >
        <Text>{"1023<sub>4</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "2", "3"]}
          rows={[
            ["", "", "", ""],
            ["", "", "", ""],
          ]}
        />
        <List items={["Mettre les chiffres dans un **tableau**"]} />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases ? &rarr; 10 avec un tableau"
      >
        <Text>{"1023<sub>4</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "2", "3"]}
          rows={[
            [
              "4<sup>3</sup>",
              "4<sup>2</sup>",
              "4<sup>1</sup>",
              "4<sup>0</sup>",
            ],
            ["", "", "", ""],
          ]}
        />
        <List
          items={[
            "Écrire les **puissances** de la **base** en partant de la **droite** (puissance 0)",
          ]}
        />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases ? &rarr; 10 avec un tableau"
      >
        <Text>{"1023<sub>4</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "2", "3"]}
          rows={[
            ["64", "16", "4", "1"],
            ["", "", "", ""],
          ]}
        />
        <List
          items={[
            "Écrire les **puissances** de la **base** en partant de la **droite** (puissance 0)",
          ]}
        />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases ? &rarr; 10 avec un tableau"
      >
        <Text>{"1023<sub>4</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "2", "3"]}
          rows={[
            ["64", "16", "4", "1"],
            ["1 &times; 64", "0 &times; 16", "2 &times; 4", "3 &times; 1"],
          ]}
        />
        <List items={["Calculer les **produits** par colonne"]} />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases ? &rarr; 10 avec un tableau"
      >
        <Text>{"1023<sub>4</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "2", "3"]}
          rows={[
            ["64", "16", "4", "1"],
            ["64", "0", "8", "3"],
          ]}
        />
        <List items={["Calculer les **produits** par colonne"]} />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases ? &rarr; 10 avec un tableau"
      >
        <Text>{"1023<sub>4</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "2", "3"]}
          rows={[
            ["64", "16", "4", "1"],
            ["64", "0", "8", "3"],
          ]}
        />
        <List
          fragment
          items={[
            "Faire la **somme** des résultats",
            "64 + 0 + 8 + 3 = 75",
            "1023<sub>4</sub> = 75<sub>10</sub>",
          ]}
        />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases 2 &rarr; 10 avec un tableau"
      >
        <Text>{"10 1010<sub>2</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "1", "0", "1", "0"]}
          rows={[
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
          ]}
        />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases 2 &rarr; 10 avec un tableau"
      >
        <Text>{"10 1010<sub>2</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "1", "0", "1", "0"]}
          rows={[
            ["32", "16", "8", "4", "2", "1"],
            ["", "", "", "", "", ""],
          ]}
        />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases 2 &rarr; 10 avec un tableau"
      >
        <Text>{"10 1010<sub>2</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "1", "0", "1", "0"]}
          rows={[
            ["32", "16", "8", "4", "2", "1"],
            ["32", "0", "8", "0", "2", "0"],
          ]}
        />
      </Section>
      <Section
        level={2}
        title="Conversion entre bases 2 &rarr; 10 avec un tableau"
      >
        <Text>{"10 1010<sub>2</sub> = ?<sub>10</sub>"}</Text>
        <Table
          headers={["1", "0", "1", "0", "1", "0"]}
          rows={[
            ["32", "16", "8", "4", "2", "1"],
            ["32", "0", "8", "0", "2", "0"],
          ]}
        />
        <List
          fragment
          items={["32 + 8 + 2 = 42", "10 1010<sub>2</sub> = 42<sub>10</sub>"]}
        />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <List
          fragment
          items={[
            "Lister (depuis la **droite**) les **puissances** de 2 plus **petites** que le nombre",
          ]}
        />
        <Table
          fragment
          headers={[
            "~1024~",
            "512",
            "256",
            "128",
            "64",
            "32",
            "16",
            "8",
            "4",
            "2",
            "1",
          ]}
          rows={[]}
        />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <List
          items={[
            "Enlever la **plus grande** puissance de 2 possible jusqu'à obtenir **0**",
          ]}
        />
        <Table
          headers={["512", "256", "128", "64", "32", "16", "8", "4", "2", "1"]}
          rows={[["", "", "", "", "", "", "", "", "", ""]]}
        />
        <List items={["", "", "", "", ""]} />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <List
          items={[
            "Enlever la **plus grande** puissance de 2 possible jusqu'à obtenir **0**",
          ]}
        />
        <Table
          headers={["512", "256", "128", "64", "32", "16", "8", "4", "2", "1"]}
          rows={[["**1**", "", "", "", "", "", "", "", "", ""]]}
        />
        <List items={["666 - **512** = 154", "", "", "", ""]} />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <List
          items={[
            "Enlever la **plus grande** puissance de 2 possible jusqu'à obtenir **0**",
          ]}
        />
        <Table
          headers={["512", "256", "128", "64", "32", "16", "8", "4", "2", "1"]}
          rows={[["**1**", "0", "**1**", "", "", "", "", "", "", ""]]}
        />
        <List
          items={["666 - **512** = 154", "154 - **128** = 26", "", "", ""]}
        />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <List
          items={[
            "Enlever la **plus grande** puissance de 2 possible jusqu'à obtenir **0**",
          ]}
        />
        <Table
          headers={["512", "256", "128", "64", "32", "16", "8", "4", "2", "1"]}
          rows={[["**1**", "0", "**1**", "0", "0", "**1**", "", "", "", ""]]}
        />
        <List
          items={[
            "666 - **512** = 154",
            "154 - **128** = 26",
            "26 - **16** = 10",
            "",
            "",
          ]}
        />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <List
          items={[
            "Enlever la **plus grande** puissance de 2 possible jusqu'à obtenir **0**",
          ]}
        />
        <Table
          headers={["512", "256", "128", "64", "32", "16", "8", "4", "2", "1"]}
          rows={[
            ["**1**", "0", "**1**", "0", "0", "**1**", "**1**", "", "", ""],
          ]}
        />
        <List
          items={[
            "666 - **512** = 154",
            "154 - **128** = 26",
            "26 - **16** = 10",
            "10 - **8** = 2",
            "",
          ]}
        />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <List
          items={[
            "Enlever la **plus grande** puissance de 2 possible jusqu'à obtenir **0**",
          ]}
        />
        <Table
          headers={["512", "256", "128", "64", "32", "16", "8", "4", "2", "1"]}
          rows={[
            [
              "**1**",
              "0",
              "**1**",
              "0",
              "0",
              "**1**",
              "**1**",
              "0",
              "**1**",
              "0",
            ],
          ]}
        />
        <List
          items={[
            "666 - **512** = 154",
            "154 - **128** = 26",
            "26 - **16** = 10",
            "10 - **8** = 2",
            "2 - **2** = 0",
          ]}
        />
      </Section>
      <Section level={2} title="Conversion entre bases 10 &rarr; 2">
        <Text>{"666<sub>10</sub> = ?<sub>2</sub>"}</Text>
        <Text>{"666<sub>10</sub> = 10 1001 1010<sub>2</sub>"}</Text>
        <Table
          headers={["512", "256", "128", "64", "32", "16", "8", "4", "2", "1"]}
          rows={[
            [
              "**1**",
              "0",
              "**1**",
              "0",
              "0",
              "**1**",
              "**1**",
              "0",
              "**1**",
              "0",
            ],
          ]}
        />
        <List
          items={[
            "666 - **512** = 154",
            "154 - **128** = 26",
            "26 - **16** = 10",
            "10 - **8** = 2",
            "2 - **2** = 0",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
