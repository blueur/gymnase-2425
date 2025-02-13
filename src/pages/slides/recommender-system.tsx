import { Section } from "@site/src/components/Deck";
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
      <Section level={2} title="Système de recommandation"></Section>
    </RevealDeck>
  );
}
