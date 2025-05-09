import { Columns, List, Section, Table, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Radix(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="radix"
      title="Base"
      subTitle={props.chapter}
    >
      <Section level={2} title="Symboles">
        <List
          fragment={[true, true]}
          items={[
            "Utilisés pour **représenter** des **valeurs**",
            "Nombres : **10** symboles (0-9)",
            "Français : **26** symboles (a-z)",
            [
              "Ordinateur : **2** symboles (0, 1)",
              ["Courant / pas de courant", "1 / 0", "**Binaire**"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Compter en base 10">
        <Table
          rows={[
            ["0"],
            ["1"],
            ["2"],
            ["3"],
            ["4"],
            ["5"],
            ["6"],
            ["7"],
            ["8"],
            ["9"],
          ]}
        />
      </Section>
      <Section level={2} title="Compter en base 10">
        <Table
          rows={[
            ["00"],
            ["01"],
            ["02"],
            ["03"],
            ["04"],
            ["05"],
            ["06"],
            ["07"],
            ["08"],
            ["09"],
          ]}
        />
      </Section>
      <Section level={2} title="Compter en base 10">
        <Table
          rows={[
            ["00", "10"],
            ["01", "11"],
            ["02", "12"],
            ["03", "13"],
            ["04", "14"],
            ["05", "15"],
            ["06", "16"],
            ["07", "17"],
            ["08", "18"],
            ["09", "19"],
          ]}
        />
      </Section>
      <Section level={2} title="Compter en base 10">
        <Table
          rows={[
            ["00", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
            ["01", "11", "21", "31", "41", "51", "61", "71", "81", "91"],
            ["02", "12", "22", "32", "42", "52", "62", "72", "82", "92"],
            ["03", "13", "23", "33", "43", "53", "63", "73", "83", "93"],
            ["04", "14", "24", "34", "44", "54", "64", "74", "84", "94"],
            ["05", "15", "25", "35", "45", "55", "65", "75", "85", "95"],
            ["06", "16", "26", "36", "46", "56", "66", "76", "86", "96"],
            ["07", "17", "27", "37", "47", "57", "67", "77", "87", "97"],
            ["08", "18", "28", "38", "48", "58", "68", "78", "88", "98"],
            ["09", "19", "29", "39", "49", "59", "69", "79", "89", "99"],
          ]}
        />
      </Section>
      <Section level={2} title="Compter en base 3">
        <Table rows={[["0"], ["1"], ["2"]]} />
      </Section>
      <Section level={2} title="Compter en base 3">
        <Table
          rows={[
            ["0", "10"],
            ["1", "11"],
            ["2", "12"],
          ]}
        />
      </Section>
      <Section level={2} title="Compter en base 3">
        <Table
          rows={[
            ["0", "10", "20"],
            ["1", "11", "21"],
            ["2", "12", "22"],
          ]}
        />
      </Section>
      <Section level={2} title="Compter en base 3">
        <Columns>
          <List items={["0", "1", "2", "10", "11", "12", "20", "21", "22"]} />
          <List
            fragment
            items={[
              "100",
              "101",
              "102",
              "110",
              "111",
              "112",
              "120",
              "121",
              "122",
              "200",
              "&hellip;",
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Les bases">
        <List
          fragment
          items={[
            "Base 10 : **décimale**",
            "Base 2 : **binaire**",
            "Base 3 : **ternaire**",
            "Base 16 : **hexadécimale**",
          ]}
        />
      </Section>
      <Section level={2} title="Exercice">
        <Text>Lister ensemble les premiers nombres en binaire (base 2).</Text>
      </Section>
      <Section level={2} title="Équivalence entre les bases">
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
            ["11", "1011", "102", "23", "13", "B"],
            ["12", "1100", "110", "30", "14", "C"],
          ]}
        />
      </Section>
      <Section level={3} title="">
        <Text>
          There are 10 types of people in this world, those who understand
          binary and those who don't.
        </Text>
      </Section>
    </RevealDeck>
  );
}
