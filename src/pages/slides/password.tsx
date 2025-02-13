import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Password(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="password"
      title="Mot de passe"
      subTitle={props.chapter}
    >
      <Section level={2} title="Mot de passe"></Section>
    </RevealDeck>
  );
}
