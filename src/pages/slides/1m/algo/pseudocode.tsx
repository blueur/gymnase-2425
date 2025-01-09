import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Pseudocode(props: {
  embedded?: boolean;
  name?: string;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Pseudo-code"
      name={props.name ?? "1m/algo/pseudocode"}
      chapter={props.chapter ?? "Introduction à l'algorithmique"}
    >
      <Section level={2} title="Pseudo-code"></Section>
    </RevealDeck>
  );
}
