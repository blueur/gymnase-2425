import { Check, ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import { List, Section, Table, Text } from "@site/src/components/Deck";
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
      <Section level={3} title="Point commun entre &hellip; ?">
        <List
          fragment
          items={[
            "Google, Instagram, Netflix, TikTok, YouTube, &hellip;",
            [
              "**Beaucoup** de **données** à trier/filtrer",
              [
                "Plusieurs milliards de vidéos sur YouTube",
                "Plus de 6000 séries sur Netflix",
              ],
            ],
            "Comment savoir lesquelles vous **intéresseraient** ?",
          ]}
        />
      </Section>
      <Section level={2} title="Système de recommandation">
        <List
          fragment
          items={[
            "**Algorithme**",
            "**Filtrage** de l'information susceptible d'intéresser l'utilisateur·ice",
            "**Recommandation** de contenu",
          ]}
        />
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <List
          fragment
          items={[
            [
              "_Alice_ a évalué les films suivants",
              [
                "**Aime** Fight Club, Interstellar et WALL-E",
                "**N'aime pas** Forrest Gump",
              ],
            ],
            [
              "_Bob_ a évalué les films suivants",
              [
                "**Aime** Forrest Gump",
                "**N'aime pas** Interstellar et WALL-E",
              ],
            ],
            [
              "_Charlie_ a évalué les films suivants",
              [
                "**Aime** Fight Club et Forrest Gump",
                "**N'aime pas** Interstellar",
              ],
            ],
            "&hellip;",
          ]}
        />
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "Inter&shy;stellar",
            "WALL-E",
          ]}
          rowHeaders={["Alice", "Bob", "Charlie", "Dave", "Eve"]}
          rows={[
            [<Like />, <Dislike />, <Like />, <Like />],
            ["", <Like />, <Dislike />, <Dislike />],
            [<Like />, <Like />, <Dislike />, ""],
            [<Dislike />, "", <Like />, ""],
            [<Like />, <Like />, "", <Dislike />],
          ]}
        />
        <Text>Mettre les avis sous forme de **tableau**.</Text>
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "_Inter&shy;stellar_",
            "WALL-E",
          ]}
          rowHeaders={["Alice", "Bob", "Charlie", "Dave", "_Eve_"]}
          rows={[
            [<ThumbsUp />, <ThumbsDown />, <ThumbsUp />, <ThumbsUp />],
            ["", <ThumbsUp />, <ThumbsDown />, <ThumbsDown />],
            [<ThumbsUp />, <ThumbsUp />, <ThumbsDown />, ""],
            [<ThumbsDown />, "", <ThumbsUp />, ""],
            [<ThumbsUp />, <ThumbsUp />, <Text>**?**</Text>, <ThumbsDown />],
          ]}
        />
        <Text>Objectif : **Deviner** si _Eve_ aimerait _Interstellar_</Text>
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "_Inter&shy;stellar_",
            "WALL-E",
          ]}
          rowHeaders={["Alice", "Bob", "Charlie", "Dave", "_Eve_"]}
          rows={[
            [<ThumbsUp />, <ThumbsDown />, <ThumbsUp />, <ThumbsUp />],
            ["", <ThumbsUp />, <ThumbsDown />, <ThumbsDown />],
            [<ThumbsUp />, <ThumbsUp />, <ThumbsDown />, ""],
            [<ThumbsDown />, "", <ThumbsUp />, ""],
            [<Like />, <Like />, "?", <Dislike />],
          ]}
        />
        <Text>Regarder les **avis** d'Eve.</Text>
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "_Inter&shy;stellar_",
            "WALL-E",
          ]}
          rowHeaders={["Alice", "**Bob**", "**Charlie**", "Dave", "_Eve_"]}
          rows={[
            [<ThumbsUp />, <ThumbsDown />, <ThumbsUp />, <ThumbsUp />],
            ["", <Like />, <ThumbsDown />, <Dislike />],
            [<Like />, <Like />, <ThumbsDown />, ""],
            [<ThumbsDown />, "", <ThumbsUp />, ""],
            [<Like />, <Like />, "?", <Dislike />],
          ]}
        />
        <Text>
          Regarder les autres **personnes** qui ont des avis **similaires**.
        </Text>
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "_Inter&shy;stellar_",
            "WALL-E",
          ]}
          rowHeaders={["Alice", "**Bob**", "**Charlie**", "Dave", "_Eve_"]}
          rows={[
            [<ThumbsUp />, <ThumbsDown />, <ThumbsUp />, <ThumbsUp />],
            ["", <ThumbsUp />, <Dislike />, <ThumbsDown />],
            [<ThumbsUp />, <ThumbsUp />, <Dislike />, ""],
            [<ThumbsDown />, "", <ThumbsUp />, ""],
            [<ThumbsUp />, <ThumbsUp />, "?", <ThumbsDown />],
          ]}
        />
        <Text>Regarder **leur avis** sur le film.</Text>
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "_Inter&shy;stellar_",
            "WALL-E",
          ]}
          rowHeaders={["Alice", "**Bob**", "**Charlie**", "Dave", "_Eve_"]}
          rows={[
            [<ThumbsUp />, <ThumbsDown />, <ThumbsUp />, <ThumbsUp />],
            ["", <ThumbsUp />, <Dislike />, <ThumbsDown />],
            [<ThumbsUp />, <ThumbsUp />, <Dislike />, ""],
            [<ThumbsDown />, "", <ThumbsUp />, ""],
            [<ThumbsUp />, <ThumbsUp />, <Dislike />, <ThumbsDown />],
          ]}
        />
        <Text>**Probable** qu'Eve n'aimera pas le film.</Text>
      </Section>
      <Section level={2} title="Filtrage collaboratif">
        <List
          fragment
          items={[
            [
              "Basé sur les **évaluations** des **autres utilisateur·ice·s**",
              [
                "Explicite (note, &hellip;)",
                "Implicite (temps passé, nombre de visionnages, &hellip;)",
              ],
            ],
            [
              "**Pas** de **connaissance** sur l'objet à recommander",
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
      <Section level={2} title="Filtrage basé sur le contenu">
        <List
          fragment
          items={[
            [
              "_Fight Club_ est catégorisé comme",
              ["**Drame** et **Thriller**"],
            ],
            [
              "_Forrest Gump_ est catégorisé comme",
              ["**Comédie** et **Drame**"],
            ],
            [
              "_Interstellar_ est catégorisé comme",
              ["**Aventure** et **Science-fiction (SF)**"],
            ],
            ["_WALL-E_ est catégorisé comme", ["**Aventure** et **Famille**"]],
          ]}
        />
      </Section>
      <Section level={2} title="Filtrage basé sur le contenu">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "Inter&shy;stellar",
            "WALL-E",
          ]}
          rowHeaders={[
            "Aventure",
            "Comédie",
            "Drame",
            "Famille",
            "SF",
            "Thriller",
          ]}
          rows={[
            ["", "", <Check />, <Check />],
            ["", <Check />, "", ""],
            [<Check />, <Check />, "", ""],
            ["", "", "", <Check />],
            ["", "", <Check />, ""],
            [<Check />, "", "", ""],
          ]}
        />
        <Text>Mettre les genres sous forme de **tableau**.</Text>
      </Section>
      <Section level={2} title="Filtrage basé sur le contenu">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "Inter&shy;stellar",
            "WALL-E",
          ]}
          rowHeaders={[
            "Aventure",
            "Comédie",
            "Drame",
            "Famille",
            "SF",
            "Thriller",
            "Évaluation",
          ]}
          rows={[
            ["", "", <Check />, <Check />],
            ["", <Check />, "", ""],
            [<Check />, <Check />, "", ""],
            ["", "", "", <Check />],
            ["", "", <Check />, ""],
            [<Check />, "", "", ""],
            [<Dislike />, <Dislike />, <Like />, <Like />],
          ]}
        />
        <Text>**Connaître** les **préférences** pour ces films.</Text>
      </Section>
      <Section level={2} title="Filtrage basé sur le contenu">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "_Inter&shy;stellar_",
            "_WALL-E_",
          ]}
          rowHeaders={[
            "Aventure",
            "Comédie",
            "Drame",
            "Famille",
            "SF",
            "Thriller",
            "Évaluation",
          ]}
          rows={[
            [
              "",
              "",
              <Check className="purple" />,
              <Check className="purple" />,
            ],
            ["", <Check />, "", ""],
            [<Check />, <Check />, "", ""],
            ["", "", "", <Check className="purple" />],
            ["", "", <Check className="purple" />, ""],
            [<Check />, "", "", ""],
            [<Dislike />, <Dislike />, <Like />, <Like />],
          ]}
        />
        <Text>Regarder les films qui sont **appréciés**.</Text>
      </Section>
      <Section level={2} title="Filtrage basé sur le contenu">
        <Table
          headers={[
            "",
            "Fight Club",
            "Forrest Gump",
            "Inter&shy;stellar",
            "WALL-E",
          ]}
          rowHeaders={[
            "_Aventure_",
            "Comédie",
            "Drame",
            "_Famille_",
            "_SF_",
            "Thriller",
            "Évaluation",
          ]}
          rows={[
            [
              "",
              "",
              <Check className="purple" />,
              <Check className="purple" />,
            ],
            ["", <Check />, "", ""],
            [<Check />, <Check />, "", ""],
            ["", "", "", <Check className="purple" />],
            ["", "", <Check className="purple" />, ""],
            [<Check />, "", "", ""],
            [<Dislike />, <Dislike />, <Like />, <Like />],
          ]}
        />
        <Text>
          La personne appréciera **probablement** d'autres films avec ces
          **genres**.
        </Text>
      </Section>
      <Section level={2} title="Filtrage basé sur le contenu">
        <List
          fragment
          items={[
            "Ne dépend **pas** des **autres utilisateur·ice·s**",
            [
              "**Choix** des caractéristiques ?",
              ["Genre ?", "Durée ?", "Année de sortie ?"],
            ],
            [
              "**Objectivité** des caractéristiques ?",
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
            "Chaque utilisateur a une **vision personnalisée** du monde (p. ex. suggestion de vidéos)",
            'Enfermement dans une **"bulle"** unique (p.ex. ne propose que des films d\'action)',
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
                '**Recherche** du terme "Python" (Animal ou langage de programmation ?)',
                "**Renforcement** des théories du complot (Ne va voir que des avis qui vont dans son sens)",
                "**Radicalisation** politique",
                "**Standardisation** culturelle",
              ],
            ],
            [
              '"Solutions" ?',
              [
                "En avoir **conscience**",
                "Sortir **volontairement** de sa bulle",
                "**Confrontation** aux points de vue **différents et opposés**",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}

function Like() {
  return <ThumbsUp className="green" />;
}

function Dislike() {
  return <ThumbsDown className="red" />;
}
