import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function PresentationProgram(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="presentation-program"
      title="Logiciel de présentation"
      subTitle={props.chapter}
    >
      <Section level={2} title="Logiciel de présentation"></Section>
    </RevealDeck>
  );
}
