import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Spreadsheet(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="spreadsheet"
      title="Tableur"
      subTitle={props.chapter}
    >
      <Section level={2} title="Tableur"></Section>
    </RevealDeck>
  );
}
