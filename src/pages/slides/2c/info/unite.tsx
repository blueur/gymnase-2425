import { List, Section, Table, Text } from "@site/src/components/Deck";
import Katex from "@site/src/components/Katex";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Unite(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Unité"
      subTitle={props.chapter ?? "Introduction à l'Informatique"}
    >
      <Section level={2} title="Unité d'information">
        <List
          fragment
          items={[
            {
              item: "Exemple d'information : 021 316 09 60",
              items: [
                "**Encodé** en binaire : 0000 0010 0001 0011 0001 0110 0000 1001 0110 0000",
                "­Longueur : 40 symboles",
                "40 **bits** : **bi**nary digi**t**",
              ],
            },
            "1 **bit** &nbsp;&nbsp;(b) : 0 ou 1",
            "1 **octet** (o) : 8 bits",
            "1 **byte** &nbsp;(B) : 8 bits (en anglais)",
            "8 Go = 8 GB = 64 Gb",
          ]}
        />
      </Section>
      <Section level={2} title="Préfixes décimaux d'unités (SI)">
        <List
          fragment
          items={[
            "**kilo** &nbsp;(k) : 10<sup>3&nbsp;</sup> = 1 000",
            "**méga** &nbsp;(M) : 10<sup>6&nbsp;</sup> = 1 000 000",
            "**giga** &nbsp;(G) : 10<sup>9&nbsp;</sup> = 1 000 000 000",
            "**téra** &nbsp;(T) : 10<sup>12</sup> = 1 000 000 000 000",
            "péta &nbsp;(P) : 10<sup>15</sup> = 1 000 000 000 000 000",
            "exa &nbsp;&nbsp;(E) : 10<sup>18</sup> = 1 000 000 000 000 000 000",
            "zetta (Z) : 10<sup>21</sup> = 1 000 000 000 000 000 000 000",
          ]}
        />
      </Section>
      <Section level={2} title="Préfixes binaires d'unités">
        <Table
          headers={[
            "Préfixe",
            "Symbole",
            "Valeur",
            "Préfixe",
            "Symbole",
            "Valeur",
          ]}
          lines={[
            [
              "**kilo**octet",
              "**k**o",
              "10<sup>3</sup>",
              "**kibi**octet",
              "**Ki**o",
              "2<sup>10</sup>",
            ],
            [
              "**méga**octet",
              "**M**o",
              "10<sup>6</sup>",
              "**mébi**octet",
              "**Mi**o",
              "2<sup>20</sup>",
            ],
            [
              "**giga**octet",
              "**G**o",
              "10<sup>9</sup>",
              "**gibi**octet",
              "**Gi**o",
              "2<sup>30</sup>",
            ],
            [
              "**téra**octet",
              "**T**o",
              "10<sup>12</sup>",
              "**tébi**octet",
              "**Ti**o",
              "2<sup>40</sup>",
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Préfixes binaires d'unités">
        <List
          items={[
            "**kibi** (Ki) : 2<sup>10</sup> = 1 024",
            "**mébi** (Mi) : 2<sup>20</sup> = 1 048 576",
            "**gibi** (Gi) : 2<sup>30</sup> = 1 073 741 824",
            "**tébi** (Ti) : 2<sup>40</sup> = 1 099 511 627 776",
          ]}
        />
      </Section>
      <Section level={2} title="Hexadécimal (base 16)">
        <List
          fragment
          items={[
            "16 symboles (0-9, A-F)",
            "Plus **compact** que le binaire",
            {
              item: "Conversion facilitée avec le **binaire**",
              items: [
                "2<sup>**4**</sup> = 16<sup>**1**</sup>",
                "**4** bits = **1** symbole hexadécimal",
              ],
            },
            {
              item: "10 1010<sub>2</sub> = ?<sub>16</sub>",
              items: [
                <Katex>
                  {
                    "\\underbrace{0010}_{2}\\ \\underbrace{1010}_{A} = 2A_{16} = 2A_{hex}"
                  }
                </Katex>,
              ],
            },
            {
              item: "42<sub>16</sub> = 42<sub>**hex**</sub> = ?<sub>2</sub>",
              items: [
                <Katex>
                  {
                    "\\underbrace{4}_{0100}\\ \\underbrace{2}_{0010} = 0100\\ 0010_{2}"
                  }
                </Katex>,
              ],
            },
            {
              item: "50B<sub>hex</sub> = ?<sub>2</sub>",
              items: [
                <Katex>
                  {
                    "\\underbrace{5}_{0101}\\ \\underbrace{0}_{0000}\\ \\underbrace{B}_{1011} = 0101\\ 0000\\ 1011_{2}"
                  }
                </Katex>,
              ],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Notations">
        <Table
          headers={["", "Base 2", "Base 16"]}
          lines={[
            [
              "Notation suffixée (math)",
              "101010<sub>**2**</sub>",
              "2A<sub>**16**</sub>",
            ],
            [
              "Notation suffixée (info)",
              "101010<sub>**bin**</sub>",
              "2A<sub>**hex**</sub>",
            ],
            ["Notation suffixée (info)", "101010**b**", "2A**h**"],
            ["Notation préfixée (info)", "0**b**101010", "0**x**2A"],
          ]}
        />
      </Section>
      <Section level={2} title="Encodage">
        <Text>Combien de bits as-t-on besoin pour encoder un chiffre ?</Text>
        <List
          fragment
          items={[
            "**10** éléments possibles : 0 à 9",
            "**4** bits suffisent : 2<sup>**4**</sup> = 16",
          ]}
        />
        <Table
          fragment
          headers={["Caractère", "Encodage"]}
          lines={[
            ["0", "0000"],
            ["1", "0001"],
            ["2", "0010"],
            ["&hellip;", "&hellip;"],
            ["9", "1001"],
          ]}
        />
        <List
          fragment
          items={["42 = 0100 0010", "3 bits insuffisants : 2<sup>3</sup> = 8"]}
        />
      </Section>
      <Section level={2} title="Encodage">
        <Text>Combien de bits as-t-on besoin pour encoder une lettre ?</Text>
        <List
          fragment
          items={[
            "26 **éléments** possibles : A à Z",
            "**5** bits suffisent : 2<sup>**5**</sup> = 32",
          ]}
        />
        <Table
          fragment
          headers={["Caractère", "Encodage"]}
          lines={[
            ["A", "00000"],
            ["B", "00001"],
            ["C", "00010"],
            ["&hellip;", "&hellip;"],
            ["Z", "11001"],
          ]}
        />
        <List
          fragment
          items={[
            "BOB = 00001 01110 00001",
            "Minuscules/majuscules, accents, etc. ?",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
