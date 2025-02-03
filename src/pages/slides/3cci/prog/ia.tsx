import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Ia(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Intelligence artificielle"
      subTitle="Algorithmique et programmation avancée"
    >
      <Section level={2} title="Intelligence artificielle"></Section>
    </RevealDeck>
  );
}
