import {
  ArrowRight,
  Browser,
  ComputerTower,
  User,
} from "@phosphor-icons/react";
import { Columns, Image, List, Section, Text } from "@site/src/components/Deck";
import Mermaid, { MermaidSequence } from "@site/src/components/Mermaid";
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
        <MermaidSequence
          height="500px"
          participants={[
            "actor U as Utilisateur·ice",
            "participant N as Navigateur Web",
            "participant S as Serveur (example.com)",
          ]}
          sequences={[
            "U->>N: Aller sur https://example.com",
            "N->>S: Demander la page Web",
            "S->>N: Envoyer la page Web",
            "N->>U: Afficher la page Web",
          ]}
        />
      </Section>
      <Section level={3} title="Serveur Web">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Web_server_serving_static_content.png"
          url="https://commons.wikimedia.org/wiki/File:Web_server_serving_static_content.png"
        />
      </Section>
      <Section level={3} title="Changer la langue">
        <MermaidSequence
          height="650px"
          participants={[
            "actor U as Utilisateur·ice",
            "participant N as Navigateur Web",
            "participant S as Serveur (example.com)",
          ]}
          sequences={[
            "U->>N: Aller sur https://example.com",
            "N->>S: Demander la page Web",
            "S->>N: Envoyer la page Web en anglais",
            "N->>U: Afficher la page Web en anglais",
            "U->>N: Changer la langue en français",
            "N->>S: Demander la page Web en français",
            "S->>N: Envoyer la page Web en français",
            "N->>U: Afficher la page Web en français",
          ]}
        />
      </Section>
      <Section level={4} title="Revenir plus tard">
        <MermaidSequence
          height="650px"
          participants={[
            "actor U as Utilisateur·ice",
            "participant N as Navigateur Web",
            "participant S as Serveur (example.com)",
          ]}
          sequences={[
            "U->>N: Aller sur https://example.com",
            "N->>S: Demander la page Web",
            "S->>N: Envoyer la page Web en anglais",
            "N->>U: Afficher la page Web en anglais",
            "U->>N: Changer la langue en français",
            "Note right of N: Pareil qu'avant...",
          ]}
        />
      </Section>
      <Section level={2} title="Un monde avec cookie">
        <MermaidSequence
          height="800px"
          participants={{
            0: [
              "actor U as Utilisateur·ice",
              "participant N as Navigateur Web",
              "participant S as Serveur (example.com)",
            ],
            6: [
              "actor U as Utilisateur·ice",
              "participant N as Navigateur Web<br/>Langue = français",
              "participant S as Serveur (example.com)",
            ],
          }}
          sequences={[
            "U->>N: Aller sur https://example.com",
            "N->>S: Demander la page Web",
            "S->>N: Envoyer la page Web en anglais",
            "N->>U: Afficher la page Web en anglais",
            "U->>N: Changer la langue en français",
            "N->>S: Demander la page Web en français",
            "S->>N: Envoyer la page Web + cookie",
            "N->>U: Afficher la page Web en français",
          ]}
        />
      </Section>
      <Section level={3} title="Revenir plus tard">
        <MermaidSequence
          height="500px"
          participants={[
            "actor U as Utilisateur·ice",
            "participant N as Navigateur Web<br/>Langue = français",
            "participant S as Serveur (example.com)",
          ]}
          sequences={[
            "U->>N: Aller sur https://example.com",
            "N->>S: Demander la page Web + cookie",
            "S->>N: Envoyer la page Web en français",
            "N->>U: Afficher la page Web en français",
          ]}
        />
      </Section>
      <Section level={3} title="Cookie">
        <List
          fragment
          items={[
            'En français : "témoin" ou "témoin de connexion"',
            "Stocke de l'information dans le navigateur",
            "Envoie automatiquement ces informations aux serveurs correspondants",
          ]}
        />
      </Section>
      <Section level={2} title="Utilisations des cookies"></Section>
      <Section level={3} title="Personnalisation">
        <Mermaid>
          {`
          flowchart LR
            S[Server Web]
            P1[Langue = français<br/>Thème = clair]
            P2[Langue = anglais<br/>Thème = sombre]
            P3[Langue = français<br/>Thème = sombre]
            P4[Langue = allemand<br/>Thème = clair]
            P1 --> S
            P2 --> S
            P3 --> S
            P4 --> S
          `}
        </Mermaid>
      </Section>
      <Section level={3} title="Authentification/Session">
        <Image
          src="https://miro.medium.com/v2/1*RjOzvxk18dtTYVQfvGn9Fw.png"
          url="https://javascript.plainenglish.io/how-does-cookie-session-authentication-work-cedce41cb982"
        />
      </Section>
      <Section level={3} title="Pistage/Tracking">
        <Image
          src="https://www.cookieyes.com/wp-content/uploads/2022/10/Third-party-cookie-retargeting-1024x918.png"
          url="https://www.cookieyes.com/blog/tracking-cookies/"
        />
      </Section>
      <Section level={3} title="Quelques idées reçues">
        <List
          fragment={[true, true]}
          items={[
            [
              "Les cookies ne sont PAS : ",
              [
                "Des virus",
                "Des logiciels espions",
                "Des programmes exécutables",
                "Des pop-ups",
                "Utilisés uniquement pour la publicité",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
