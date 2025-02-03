import {
  Code,
  Columns,
  List,
  Section,
  Table,
  Text,
} from "@site/src/components/Deck";
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
          <div>
            <Text>
              [swissmilk](https://www.swissmilk.ch/fr/recettes-idees/recettes/SM2017_DIVE_04/omelette/)
            </Text>
            <List
              items={[
                ["Temps de préparation", ["10 minutes"]],
                ["Ingrédients", ["3 oeufs", "1cs de lait", "1cs de beurre"]],
              ]}
            />
          </div>
          <div>
            <Text>
              [marmiton](https://www.marmiton.org/recettes/recette_omelette-nature_21255.aspx)
            </Text>
            <List
              items={[
                ["Temps de préparation", ["15 minutes"]],
                ["Ingrédients", ["2 oeufs", "12.5g de beurre", ""]],
              ]}
            />
          </div>
        </Columns>
      </Section>
      <Section level={2} title="Complexité algorithmique">
        <List
          fragment={[true, true]}
          items={[
            [
              "Mesurer l'efficacité d'un algorithme",
              [
                [
                  "En **temps** (opérations effectuées)",
                  [
                    "1 opération = 1 unité de temps",
                    "1 opération = 1 comparaison, 1 addition, 1 affectation, ou &hellip;",
                  ],
                ],
                [
                  "En **espace** (espaces dans la mémoire utilisés)",
                  ["1 variable = 1 espace", "1 liste de n élément = n espaces"],
                ],
              ],
            ],
            [
              "Notation grand **O** de Landau",
              ["Ordre de grandeur selon des entrées possibles"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Multiplication">
        <Columns>
          <Code>
            {`
            FONCTION mult(a, b)
              RETOURNER a*b
            FIN FONCTION
            `}
          </Code>
          <List
            fragment={[true, true, true]}
            items={[
              [
                "**Instance** : a=3, b=4",
                [
                  ["_Opérations_", ["1 (multiplication)"]],
                  ["_Espaces_", ["2 (variables a et b)"]],
                ],
              ],
              [
                "**Instance** : a=2048, b=130",
                [
                  ["_Opérations_", ["1"]],
                  ["_Espaces_", ["2"]],
                ],
              ],
              "Complexité **temporelle** : constante O(1)",
              "Complexité **spatiale** : constante O(1)",
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Multiplication">
        <Columns>
          <Code>
            {`
            FONCTION mult(a, b)
              r ← 0
              POUR i DE 1 À b FAIRE
                r ← r + a
              FIN POUR
              RETOURNER r
            FIN FONCTION
            `}
          </Code>
          <List
            fragment={[true, true, true]}
            items={[
              [
                "**Instance** : a=3, b=4",
                [
                  ["_Opérations_", ["4 (assign. + add.)"]],
                  ["_Espaces_", ["3 (variables a, b, r)"]],
                ],
              ],
              [
                "**Instance** : a=2048, b=130",
                [
                  ["_Opérations_", ["130"]],
                  ["_Espaces_", ["3"]],
                ],
              ],
              "Complexité **temporelle** : linéaire O(b) ou O(n)",
              "Complexité **spatiale** : constante O(1)",
            ]}
          />
        </Columns>
      </Section>
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
            fragment={[false, true]}
            items={[
              ["Complexité temporelle", ["O(1)"]],
              ["Complexité spatiale", ["O(1)"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Exercice">
        <Columns>
          <Code>
            {`
            FONCTION factorielle(n)
              r ← 1
              POUR i DE 1 À n FAIRE
                r ← r*i
              FIN POUR
              RETOURNER r
            FIN FONCTION
            `}
          </Code>
          <List
            fragment={[false, true]}
            items={[
              ["Complexité temporelle", ["O(n)"]],
              ["Complexité spatiale", ["O(1)"]],
            ]}
          />
        </Columns>
      </Section>
    </RevealDeck>
  );
}
