import { Code, Columns, List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Pseudocode(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="pseudocode"
      title="Pseudo-code"
      subTitle={props.chapter}
    >
      <Section level={2} title="Pseudo-code">
        <List
          fragment
          items={[
            "Objectif : décrire un **algorithme**.",
            ["_Code_", ["Lu par une **machine**."]],
            ["_Pseudo-code_ / _organigramme_", ["Lu par des **humains**."]],
          ]}
        />
      </Section>
      <Section level={3} title="Instructions de base">
        <List
          fragment
          items={[
            ["**Affectation** : variable _&larr;_ expression", ["a &larr; 42"]],
            [
              "**Condition** : _SI_ condition _ALORS_ instruction _SINON_ instruction _FIN SI_",
              ["SI il pleut ALORS je prends un parapluie FIN SI"],
            ],
            [
              "**Boucle** : _TANT QUE_ condition _FAIRE_ instruction _FIN TANT QUE_",
              ["TANT QUE il fait beau FAIRE je reste dehors FIN TANT QUE"],
            ],
            [
              "**Boucle** : _POUR_ variable _DE_ nombre _À_ nombre _FAIRE_ instruction _FIN POUR_",
              ["POUR b DE 1 À 4 FAIRE avancer de b mètres FIN POUR"],
            ],
            [
              "**Fonction** : _FONCTION_ nom(paramètres) _RETOURNER_ valeur _FIN FONCTION_",
              ["FONCTION double(c) RETOURNER 2 &times; c FIN FONCTION"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Conditions">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Comparaison** entre deux expressions",
              [
                "a _&lt;_ b : plus petit que",
                "a _&gt;_ b : plus grand que",
                "a _=_ b : égal",
                "a _!=_ b : pas égal",
                "a _&lt;=_ b ou a _&le;_ b : plus petit ou égal",
                "a _&gt;=_ b ou a _&ge;_ b : plus grand ou égal",
              ],
            ],
            [
              "**Opérateurs logique** pour combiner des conditions",
              [
                "4 &lt; a _ET_ a &lt; 10",
                "b &lt; 4 _OU_ 10 &lt; b",
                "_NON_ c = 6",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <List
          fragment
          items={[
            "_Problème_ : **calculer** la **somme** des premiers entiers positifs.",
            "_Entrée_ : un **nombre** entier positif x",
            "_Sortie_ : la **somme** des entiers de 1 à x (1 + 2 + ... + x)",
          ]}
        />
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code>
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List items={["Instance : somme(3)"]} />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="1">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={["Instance : somme(3)", ["Variables", ["x = 3", "", ""]]]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="2">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 0", ""]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="3">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 0", "i = 1"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="4">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 1", "i = 1"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="3">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 1", "i = 2"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="4">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 3", "i = 2"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="3">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 3", "i = 3"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="4">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 6", "i = 3"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="5">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 6", "i = 3"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="6">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 6", "i = 3"]],
              "Résultat : 6",
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Somme des premiers entiers">
        <Columns>
          <Code lines="7">
            {`
            FONCTION somme(x) 
              c <- 0 
              POUR i DE 1 À x FAIRE 
                c <- c + i 
              FIN POUR
              RETOURNER c 
            FIN FONCTION
            `}
          </Code>
          <List
            items={[
              "Instance : somme(3)",
              ["Variables", ["x = 3", "c = 6", "i = 3"]],
              "Résultat : 6",
            ]}
          />
        </Columns>
      </Section>
    </RevealDeck>
  );
}
