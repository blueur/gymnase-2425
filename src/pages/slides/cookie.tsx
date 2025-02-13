import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Cookie(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="cookie"
      title="Cookie"
      subTitle={props.chapter}
    >
      <Section level={2} title="Cookie"></Section>
    </RevealDeck>
  );
}
