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
          fragment={[true, true]}
          items={[
            "Pour contenir une **valeur**",
            "Chaque variable a un **type**",
            [
              "Déclarée avec un **nom**",
              [
                "Le nom peut contenir des lettres, des chiffres et des _",
                "Le nom doit commencer par une lettre",
                "Le nom ne peut pas être un mot réservé (if, else, for, ...)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Types de base">
        <List
          fragment={[true, true]}
          items={[
            ["42", ["Nombre entier : Integer (**int**)"]],
            [
              "3.14",
              ["Nombre décimal (virgule flottante) : Float (**float**)"],
            ],
            ["false / true", ["Booléen (vrai ou faux) : Boolean (**bool**)"]],
            [
              '"Hello"',
              [
                "Chaîne de caractères / texte : String (**str**)",
                "Délimitée par des guillemets",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Quiz : quel type ?">
        <List
          fragment={[true, true]}
          items={[
            ["16", ["int"]],
            ['"Bleu"', ["str"]],
            ['"7"', ["str"]],
            ["6.626", ["float"]],
            ["true", ["bool"]],
            ["3,14", ["erreur (virgule au lieu du point)"]],
          ]}
        />
      </Section>
      <Section level={2} title="Opérateurs">
        <List
          fragment={[true, true]}
          items={[
            ["16 + 5.2", ["**Addition** entre deux nombres (int ou float)"]],
            ["31 - 0", ["**Soustraction** entre deux nombres"]],
            ["8 * 1291", ["**Multiplication** entre deux nombres"]],
            ["42 / 5", ["**Division** entre deux nombres"]],
            ["5 % 2", ["**Modulo** : reste de la division entière"]],
            [
              '"Abra" + "cadabra"',
              ["**Concaténation** entre deux chaînes de caractères"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Type des opérations">
        <List
          fragment={[true, true]}
          items={[
            ["int + int", ["int"]],
            ["int - float", ["float"]],
            ["float * float", ["float"]],
            ["int / int", ["float"]],
            ["str + str", ["str"]],
            ["str + int", ["erreur (types différents)"]],
          ]}
        />
      </Section>
      <Section level={3} title="Quiz : quel type ?">
        <List
          fragment={[true, true]}
          items={[
            ["5 + 3", ["int"]],
            ["5 + 3.2", ["float"]],
            ['"5" + "3"', ["str"]],
            ['"5" + 3', ["erreur (str + int)"]],
          ]}
        />
      </Section>
      <Section level={2} title="Liste">
        <List
          fragment={[true, true]}
          items={[
            'liste = [42, 3.14, "Hello"]',
            "Liste : ensemble ordonné d'éléments",
            "Délimité par des **crochets**",
            "Chaque élément est séparé par une **virgule**",
            [
              "Chaque élément a un **index** (position dans la liste) qui débute à 0",
              [
                "liste[0] : premier élément, liste[1] : deuxième élément, &hellip;",
                "liste[-1] : dernier élément, liste[-2] : avant-dernier &hellip;",
                "liste[1] : 3.14",
                "liste[3] : erreur (index hors de la liste)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Quiz : évaluer l'expression">
        <List
          fragment={[true, true]}
          items={[
            "a = [54, 12, 29, 34, 87]",
            'b = ["rouge", "vert", "bleu"]',
            ["a[2]", ["29"]],
            ["b[1]", ['"vert"']],
            ["a[1] + a[3]", ["46"]],
            ["a[1] + b[0]", ["erreur (types différents)"]],
            ["b[0] + b[0]", ['"rougerouge"']],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
