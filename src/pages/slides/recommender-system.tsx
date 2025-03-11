import { List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function RecommenderSystem(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="recommender-system"
      title="Système de recommandation"
      subTitle={props.chapter}
    >
      <Section level={3} title="Point commun ?">
        <List
          fragment
          items={[
            "Google, Instagram, Netflix, TikTok, YouTube, &hellip;",
            [
              "Beaucoup de données à trier/filtrer",
              [
                "Plusieurs milliards de vidéos sur YouTube",
                "Plus de 6000 séries sur Netflix",
              ],
            ],
            "Comment savoir lesquelles vous intéresseraient ?",
          ]}
        />
      </Section>
      <Section level={2} title="Système de recommandation">
        <List
          fragment
          items={[
            "Algorithme",
            "Filtrage de l'information susceptible d'intéresser l'utilisateur·ice",
            "Recommandation de contenu",
          ]}
        />
      </Section>
      <Section level={2} title="Filtrage collaboratif"></Section>
      <Section level={2} title="Filtrage collaboratif">
        <List
          fragment
          items={[
            [
              "Basé sur les évaluations des autres utilisateur·ice·s",
              [
                "Explicite (note, &hellip;)",
                "Implicite (temps passé, nombre de visionnages, &hellip;)",
              ],
            ],
            [
              "Pas de connaissance sur l'article",
              [
                "Quel genre de film ?",
                "Durée du film ?",
                "Réalisateur·ice ?",
                "Année de sortie ?",
                "&hellip;",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Filtrage basé sur le contenu"></Section>
      <Section level={2} title="Filtrage basé sur le contenu">
        <List
          fragment
          items={[
            "Ne dépend pas des autres utilisateur·ice·s",
            [
              "Choix des caractéristiques ?",
              ["Genre ?", "Durée ?", "Année de sortie ?"],
            ],
            [
              "Objectivité des caractéristiques ?",
              ["Comment définir un genre à un film ?"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Biais">
        <Text>Objectivité des algorithmes ?</Text>
      </Section>
      <Section level={3} title="Bulle de filtres">
        <List
          fragment
          items={[
            "Concept définit par Eli Pariser en 2010",
            "Chaque utilisateur a une vision personnalisée du monde (p.ex. suggestion de vidéos)",
            'Enfermement dans une "bulle" unique (p.ex. ne propose que des films d\'action)',
          ]}
        />
      </Section>
      <Section level={3} title="Bulle de filtres">
        <List
          fragment={[true, true]}
          items={[
            [
              "Conséquences",
              [
                'Recherche du terme "Python" (Animal ou langage de programmation ?)',
                "Renforcement des théories du complot (Ne va voir que des avis qui vont dans son sens)",
                "Radicalisation politique",
                "Standardisation culturelle",
              ],
            ],
            [
              "Solutions ?",
              [
                "En avoir conscience",
                "Sortir volontairement de sa bulle",
                "Confrontation aux points de vue différents et opposés",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
