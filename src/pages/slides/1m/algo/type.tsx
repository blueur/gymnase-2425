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
              text: "Déclarée avec un **nom**",
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
              text: "42",
              fragment: true,
              items: ["Nombre entier : Integer (**int**)"],
            },
            {
              text: "3.14",
              fragment: true,
              items: ["Nombre décimal (virgule flottante) : Float (**float**)"],
            },
            {
              text: "false / true",
              fragment: true,
              items: ["Booléen (vrai ou faux) : Boolean (**bool**)"],
            },
            {
              text: '"Hello"',
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
              text: "16",
              fragment: true,
              items: ["int"],
            },
            {
              text: '"Bleu"',
              fragment: true,
              items: ["str"],
            },
            {
              text: '"7"',
              fragment: true,
              items: ["str"],
            },
            {
              text: "6.626",
              fragment: true,
              items: ["float"],
            },
            {
              text: "true",
              fragment: true,
              items: ["bool"],
            },
            {
              text: "3,14",
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
              text: "16 + 5.2",
              fragment: true,
              items: ["**Addition** entre deux nombres (int ou float)"],
            },
            {
              text: "31 - 0",
              fragment: true,
              items: ["**Soustraction** entre deux nombres"],
            },
            {
              text: "8 * 1291",
              fragment: true,
              items: ["**Multiplication** entre deux nombres"],
            },
            {
              text: "42 / 5",
              fragment: true,
              items: ["**Division** entre deux nombres"],
            },
            {
              text: "5 % 2",
              fragment: true,
              items: ["**Modulo** : reste de la division entière"],
            },
            {
              text: '"Abra" + "cadabra"',
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
              text: "int + int",
              fragment: true,
              items: ["int"],
            },
            {
              text: "int - float",
              fragment: true,
              items: ["float"],
            },
            {
              text: "float * float",
              fragment: true,
              items: ["float"],
            },
            {
              text: "int / int",
              fragment: true,
              items: ["float"],
            },
            {
              text: "str + str",
              fragment: true,
              items: ["str"],
            },
            {
              text: "str + int",
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
              text: "5 + 3",
              fragment: true,
              items: ["int"],
            },
            {
              text: "5 + 3.2",
              fragment: true,
              items: ["float"],
            },
            {
              text: '"5" + "3"',
              fragment: true,
              items: ["str"],
            },
            {
              text: '"5" + 3',
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
              text: "Chaque élément a un **index** (position dans la liste) qui débute à 0",
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
              text: "a[2]",
              fragment: true,
              items: ["29"],
            },
            {
              text: "b[1]",
              fragment: true,
              items: ['"vert"'],
            },
            {
              text: "a[1] + a[3]",
              fragment: true,
              items: ["46"],
            },
            {
              text: "a[1] + b[0]",
              fragment: true,
              items: ["erreur (types différents)"],
            },
            {
              text: "b[0] + b[0]",
              fragment: true,
              items: ['"rougerouge"'],
            },
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
