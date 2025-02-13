import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function DigitalEconomy(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="digital-economy"
      title="Économie numérique"
      subTitle={props.chapter}
    >
      <Section level={2} title="Économie numérique"></Section>
    </RevealDeck>
  );
}
