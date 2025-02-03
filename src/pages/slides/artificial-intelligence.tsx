import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function ArtificialIntelligence(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="artificial-intelligence"
      title="Intelligence artificielle"
      subTitle={props.chapter}
    >
      <Section level={2} title="Intelligence artificielle"></Section>
    </RevealDeck>
  );
}
