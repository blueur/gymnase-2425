import { List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Type(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Type"
      subTitle={props.chapter ?? "Introduction à l'algorithmique"}
    >
      <Section level={2} title="Variable">
        <List
          fragment
          items={[
            "Pour contenir une **valeur**",
            "Chaque variable a un **type**",
            {
              item: "Déclarée avec un **nom**",
              fragment: true,
              items: [
                "Le nom peut contenir des lettres, des chiffres et des _",
                "Le nom doit commencer par une lettre",
                "Le nom ne peut pas être un mot réservé (if, else, for, ...)",
              ],
            },
          ]}
        />
      </Section>
      <Section level={2} title="Types de base">
        <List
          items={[
            {
              item: "42",
              fragment: true,
              items: ["Nombre entier : Integer (**int**)"],
            },
            {
              item: "3.14",
              fragment: true,
              items: ["Nombre décimal (virgule flottante) : Float (**float**)"],
            },
            {
              item: "false / true",
              fragment: true,
              items: ["Booléen (vrai ou faux) : Boolean (**bool**)"],
            },
            {
              item: '"Hello"',
              fragment: true,
              items: [
                "Chaîne de caractères / texte : String (**str**)",
                "Délimitée par des guillemets",
              ],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Quiz : quel type ?">
        <List
          items={[
            {
              item: "16",
              fragment: true,
              items: ["int"],
            },
            {
              item: '"Bleu"',
              fragment: true,
              items: ["str"],
            },
            {
              item: '"7"',
              fragment: true,
              items: ["str"],
            },
            {
              item: "6.626",
              fragment: true,
              items: ["float"],
            },
            {
              item: "true",
              fragment: true,
              items: ["bool"],
            },
            {
              item: "3,14",
              fragment: true,
              items: ["erreur (virgule au lieu du point)"],
            },
          ]}
        />
      </Section>
      <Section level={2} title="Opérateurs">
        <List
          items={[
            {
              item: "16 + 5.2",
              fragment: true,
              items: ["**Addition** entre deux nombres (int ou float)"],
            },
            {
              item: "31 - 0",
              fragment: true,
              items: ["**Soustraction** entre deux nombres"],
            },
            {
              item: "8 * 1291",
              fragment: true,
              items: ["**Multiplication** entre deux nombres"],
            },
            {
              item: "42 / 5",
              fragment: true,
              items: ["**Division** entre deux nombres"],
            },
            {
              item: "5 % 2",
              fragment: true,
              items: ["**Modulo** : reste de la division entière"],
            },
            {
              item: '"Abra" + "cadabra"',
              fragment: true,
              items: ["**Concaténation** entre deux chaînes de caractères"],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Type des opérations">
        <List
          items={[
            {
              item: "int + int",
              fragment: true,
              items: ["int"],
            },
            {
              item: "int - float",
              fragment: true,
              items: ["float"],
            },
            {
              item: "float * float",
              fragment: true,
              items: ["float"],
            },
            {
              item: "int / int",
              fragment: true,
              items: ["float"],
            },
            {
              item: "str + str",
              fragment: true,
              items: ["str"],
            },
            {
              item: "str + int",
              fragment: true,
              items: ["erreur (types différents)"],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Quiz : quel type ?">
        <List
          fragment
          items={[
            {
              item: "5 + 3",
              fragment: true,
              items: ["int"],
            },
            {
              item: "5 + 3.2",
              fragment: true,
              items: ["float"],
            },
            {
              item: '"5" + "3"',
              fragment: true,
              items: ["str"],
            },
            {
              item: '"5" + 3',
              fragment: true,
              items: ["erreur (str + int)"],
            },
          ]}
        />
      </Section>
      <Section level={2} title="Liste">
        <List
          fragment
          items={[
            'liste = [42, 3.14, "Hello"]',
            "Liste : ensemble ordonné d'éléments",
            "Délimité par des **crochets**",
            "Chaque élément est séparé par une **virgule**",
            {
              item: "Chaque élément a un **index** (position dans la liste) qui débute à 0",
              fragment: true,
              items: [
                "liste[0] : premier élément, liste[1] : deuxième élément, &hellip;",
                "liste[-1] : dernier élément, liste[-2] : avant-dernier &hellip;",
                "liste[1] : 3.14",
                "liste[3] : erreur (index hors de la liste)",
              ],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Quiz : évaluer l'expression">
        <List
          fragment
          items={[
            "a = [54, 12, 29, 34, 87]",
            'b = ["rouge", "vert", "bleu"]',
            {
              item: "a[2]",
              fragment: true,
              items: ["29"],
            },
            {
              item: "b[1]",
              fragment: true,
              items: ['"vert"'],
            },
            {
              item: "a[1] + a[3]",
              fragment: true,
              items: ["46"],
            },
            {
              item: "a[1] + b[0]",
              fragment: true,
              items: ["erreur (types différents)"],
            },
            {
              item: "b[0] + b[0]",
              fragment: true,
              items: ['"rougerouge"'],
            },
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
