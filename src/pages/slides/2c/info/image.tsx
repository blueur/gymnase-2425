import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Image(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Image"
      subTitle={props.chapter ?? "Introduction à l'Informatique"}
    >
      <Section level={2} title="Image"></Section>
    </RevealDeck>
  );
}
