import { List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function RolePlayingGame(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="role-playing-game"
      title="Jeu de rôle"
      subTitle={props.chapter}
    >
      <Section level={2} title="Scénario">
        <List
          fragment
          items={[
            "Le Service de la Mobilité de la Ville souhaite innover en matière de transports publics et envisage un projet de **navettes autonomes**.",
            [
              "Groupes de travail :",
              [
                "Conseil communal",
                "Service mobilité de la ville",
                'Association "Halte au progrès"',
                "Google Buss",
                "Syndicat du personnel des transports publics",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Déroulement">
        <List
          fragment
          items={[
            [
              "15 minutes",
              [
                "**Préparation** des arguments (min 3)",
                "Désignation d'un·e porte-parole",
              ],
            ],
            [
              "4 x 3 minutes",
              ["**Présentation** des porte-paroles au conseil"],
            ],
            ["4 x 1 minutes", ["Le conseil pose les **questions**"]],
            "**Vote** du conseil",
          ]}
        />
      </Section>
      <Section level={2} title="Synthèse">
        <List
          fragment
          items={[
            ["Difficultés à endosser les rôles ?", ["Pourquoi ?"]],
            "Évolution d'avis sur la conduite autonome ?",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
