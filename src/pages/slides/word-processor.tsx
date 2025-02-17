import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function WordProcessor(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="word-processor"
      title="Logiciel de traitement de texte"
      subTitle={props.chapter}
    >
      <Section level={2} title="Logiciel de traitement de texte"></Section>
    </RevealDeck>
  );
}
