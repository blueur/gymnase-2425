import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Composant(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Composants d'un ordinateur"
      subTitle={props.chapter ?? "Introduction à l'Informatique"}
    >
      <Section level={2} title="Composants d'un ordinateur"></Section>
    </RevealDeck>
  );
}
