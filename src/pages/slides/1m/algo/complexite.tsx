import { Code, Columns, List, Section, Table } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Tri(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Complexité"
      subTitle={props.chapter ?? "Introduction à l'algorithmique"}
    >
      <Section level={3} title="Recettes pour une omelette">
        <Columns>
          <List
            items={[
              {
                item: "[swissmilk](https://www.swissmilk.ch/fr/recettes-idees/recettes/SM2017_DIVE_04/omelette/)",
                items: [
                  {
                    item: "Temps de préparation",
                    items: ["10 minutes"],
                  },
                  {
                    item: "Ingrédients",
                    items: ["3 oeufs", "1cs de lait", "1cs de beurre"],
                  },
                ],
              },
            ]}
          />
          <List
            items={[
              {
                item: "[marmiton](https://www.marmiton.org/recettes/recette_omelette-nature_21255.aspx)",
                items: [
                  {
                    item: "Temps de préparation",
                    items: ["15 minutes"],
                  },
                  {
                    item: "Ingrédients",
                    items: ["2 oeufs", "12.5g de beurre", ""],
                  },
                ],
              },
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Complexité algorithmique">
        <List
          items={[
            {
              item: "Mesurer l'efficacité d'un algorithme",
              items: [
                {
                  item: "En temps",
                  items: [
                    "Nombre d'opérations effectuées",
                    "1 opération = 1 unité de temps",
                    "1 opération = 1 comparaison, 1 addition, 1 affectation, ou &hellip;",
                  ],
                },
                {
                  item: "En espace",
                  items: [
                    "Nombre d'espaces dans la mémoire",
                    "1 variable = 1 espace",
                    "1 liste de n élément = n espaces",
                  ],
                },
              ],
            },
            {
              item: "Notation grand O de Landau",
              items: ["Ordre de grandeur selon des entrées possibles"],
            },
          ]}
        />
      </Section>
      <Section level={2} title="Complexité de la somme"></Section>
      <Section level={2} title="Grand O de Landau">
        <Columns>
          <List
            fragment
            items={[
              "O(1) : **Constant** (min, max)",
              "O(log(n)) : Logarithmique (recherche dichotomique)",
              "O(n) : **Linéaire** (recherche dans liste)",
              "O(n log(n)) : Log-linéaire (tri fusion)",
              "O(n<sup>2</sup>) : **Quadratique** (tri par insertion/sélection)",
              "2<sup>O(n)</sup> : Exponentiel",
              "O(n!) : Factorielle",
            ]}
          />
          <Table
            fragment
            headers={["n", "O(1)", "O(n)", "O(n<sup>2</sup>)"]}
            lines={[
              ["1", "1", "1", "1"],
              ["10", "1", "10", "100"],
              ["100", "1", "100", "10000"],
              ["1000", "1", "1000", "1000000"],
              ["&hellip;", "&hellip;", "&hellip;", "&hellip;"],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Pire & meilleur cas">
        <List
          items={[
            "_Pire cas_ : l'instance (le choix des entrées) où l'algorithme sera le plus lent et/ou utilisera le plus d'espace",
            "_Meilleur cas_ : l'instance où l'algorithme sera le plus rapide et/ou utilisera le moins d'espace",
          ]}
        />
      </Section>
      <Section level={2} title="Exercice">
        <Columns>
          <Code>
            {`
            FONCTION max(a, b)
              SI a < b
                RETOURNER b
              SINON
                RETOURNER a
              FIN SI
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              {
                item: "Complexité temporelle",
                fragment: true,
                items: ["O(1)"],
              },
              {
                item: "Complexité spatiale",
                fragment: true,
                items: ["O(1)"],
              },
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Exercice">
        <Columns>
          <Code>
            {`
            FONCTION Factorielle(n)
              résultat ← 1
              REPETER pour i ← 1, 2, ..., n
                résultat ← résultat *i
              FIN REPETER
              RETOURNER résultat
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              {
                item: "Complexité temporelle",
                fragment: true,
                items: ["O(n)"],
              },
              {
                item: "Complexité spatiale",
                fragment: true,
                items: ["O(1)"],
              },
            ]}
          />
        </Columns>
      </Section>
    </RevealDeck>
  );
}
