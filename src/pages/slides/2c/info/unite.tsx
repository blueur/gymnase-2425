import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Unite(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Unité"
      subTitle={props.chapter ?? "Introduction à l'Informatique"}
    >
      <Section level={2} title="Unité"></Section>
    </RevealDeck>
  );
}
