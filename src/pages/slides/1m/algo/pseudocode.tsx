import { Code, Columns, List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Pseudocode(props: {
  embedded?: boolean;
  name?: string;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Pseudo-code"
      name={props.name ?? "1m/algo/pseudocode"}
      subTitle={props.chapter ?? "Introduction à l'algorithmique"}
    >
      <Section level={2} title="Pseudo-code">
        <List
          fragment
          items={[
            "Objectif : décrire un **algorithme**.",
            {
              text: "_Code_",
              items: ["Lu par une **machine**."],
            },
            {
              text: "_Pseudo-code_ / _organigramme_",
              items: ["Lu par des **humains**."],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Instructions de base">
        <List
          fragment
          items={[
            {
              text: "**Affectation** : variable _&larr;_ expression",
              items: ["a &larr; 42"],
            },
            {
              text: "**Condition** : _SI_ condition _ALORS_ instruction _SINON_ instruction _FIN SI_",
              items: ["SI il pleut ALORS je prends un parapluie FIN SI"],
            },
            {
              text: "**Boucle** : _TANT QUE_ condition _FAIRE_ instruction _FIN TANT QUE_",
              items: [
                "TANT QUE il fait beau FAIRE je reste dehors FIN TANT QUE",
              ],
            },
            {
              text: "**Boucle** : _POUR_ variable _DE_ nombre _À_ nombre _FAIRE_ instruction _FIN POUR_",
              items: ["POUR b DE 1 À 4 FAIRE avancer de b mètres FIN POUR"],
            },
            {
              text: "**Fonction** : _FONCTION_ nom(paramètres) _RETOURNER_ valeur _FIN FONCTION_",
              items: ["FONCTION double(c) RETOURNER 2 &times; c FIN FONCTION"],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Conditions">
        <List
          fragment
          items={[
            {
              text: "**Comparaison** entre deux expressions",
              fragment: true,
              items: [
                "a _&lt;_ b : plus petit que",
                "a _&gt;_ b : plus grand que",
                "a _=_ b : égal",
                "a _!=_ b : pas égal",
                "a _&lt;=_ b ou a _&le;_ b : plus petit ou égal",
                "a _&gt;=_ b ou a _&ge;_ b : plus grand ou égal",
              ],
            },
            {
              text: "**Opérateurs logique** pour combiner des conditions",
              fragment: true,
              items: [
                "4 &lt; a _ET_ a &lt; 10",
                "b &lt; 4 _OU_ 10 &lt; b",
                "_NON_ c = 6",
              ],
            },
          ]}
        />
      </Section>
      <Section level={3} title="Somme">
        <Columns>
          <Code>
            {`
FONCTION somme(x) 
  c <- 0 
  POUR i DE 1 À x 
    c <- c + i 
  FIN POUR
  RETOURNER c 
FIN FONCTION
            `}
          </Code>
        </Columns>
      </Section>
    </RevealDeck>
  );
}
