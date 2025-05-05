import {
  ArrowLeft,
  ArrowRight,
  ThumbsDown,
  ThumbsUp,
} from "@phosphor-icons/react";
import { Columns, List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function MovingDebate(props: {
  embedded?: boolean;
  chapter?: string;
  proposition?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="moving-debate"
      title="Débat mouvant"
      subTitle={props.chapter}
    >
      <Section level={2} title="Débat mouvant">
        <List
          fragment
          items={[
            "**Respecter** les autres opinions",
            "Tout argument est **recevable**",
            "Respect des **temps** de parole",
            "Le but n'est pas d'avoir **raison**",
          ]}
        />
      </Section>
      <Section level={3} title={props.proposition}>
        <Columns>
          <ArrowLeft size={32} />
          <div>
            <ThumbsUp size={32} />
            <Text>Tout à fait d'accord</Text>
          </div>
          <Text>|</Text>
          <div>
            <ThumbsDown size={32} />
            <Text>Pas du tout d'accord</Text>
          </div>
          <ArrowRight size={32} />
        </Columns>
      </Section>
    </RevealDeck>
  );
}
