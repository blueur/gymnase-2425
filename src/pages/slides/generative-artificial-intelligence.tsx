import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function GenerativeArtificialIntelligence(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="generative-artificial-intelligence"
      title="Intelligence artificielle générative"
      subTitle={props.chapter}
    >
      <Section level={2} title="Intelligence artificielle générative"></Section>
    </RevealDeck>
  );
}
