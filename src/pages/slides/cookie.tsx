import {
  ArrowRight,
  Browser,
  ComputerTower,
  User,
} from "@phosphor-icons/react";
import { Columns, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Cookie(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="cookie"
      title="Cookie"
      subTitle={props.chapter}
    >
      <Section level={2} title="Visite d'un site web">
        <Columns vertical="start">
          <div>
            <User size={128} />
            <Text>Utilisateur·ice</Text>
          </div>
          <div className="fragment" data-fragment-index="0">
            <br />
            <ArrowRight size={64} />
          </div>
          <div className="fragment" data-fragment-index="0">
            <Browser size={128} />
            <Text>Navigateur Web (Firefox, Chrome, Safari, &hellip;)</Text>
          </div>
          <div className="fragment" data-fragment-index="1">
            <br />
            <ArrowRight size={64} />
          </div>
          <div className="fragment" data-fragment-index="1">
            <ComputerTower size={128} />
            <Text>Serveur Web (ordinateur)</Text>
          </div>
        </Columns>
      </Section>
      <Section level={2} title="Un monde sans cookie">
        <Mermaid>
          {`
          sequenceDiagram
            actor U as Utilisateur·ice
            participant N as Navigateur
            participant S as Serveur (example.com)
            U->>N: Aller sur https://example.com
            N->>S: Demande la page web
            S->>N: Envoie la page web
            N->>U: Affiche la page web
          `}
        </Mermaid>
      </Section>
    </RevealDeck>
  );
}
