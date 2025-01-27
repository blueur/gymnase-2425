import { List, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Introduction(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Informatique"
      subTitle="David Tang"
    >
      <Section level={2} title="Parcours">
        <Mermaid>
          {`
          timeline
            Gymnase d'Yverdon
            EPFL : BSc & MSc en Informatique
            Ingénieur informaticien : ELCA (CFF, transN, TPF, BCV) : EPFL
            Enseignant : Gymnase Provence : HEIG-VD : Gymnase pour Adultes : HEP Vaud
          `}
        </Mermaid>
      </Section>
      <Section level={2} title="Organisation">
        <List
          items={[
            {
              item: "**Cours** et **Travaux pratiques**",
              items: [
                {
                  item: "2 périodes / semaine",
                  items: ["Cours en classe", "Cours tutoré à distance"],
                },
              ],
            },
          ]}
        />
      </Section>
      <Section level={2} title="Présence">
        <List
          fragment
          items={[
            {
              item: "**Retard**",
              items: ["Être **prêt·e** à suivre le cours à la **sonnerie**"],
            },
            {
              item: "**Absence**",
              items: ["À partir de quinze minutes de retard"],
            },
            {
              item: "**Prévenir** par mail en cas d'**absence**",
              items: ["Sinon pas de rattrapage de test"],
            },
          ]}
        />
      </Section>
      <Section level={2} title="Prise de notes">
        <List
          fragment
          items={[
            "**Supports** mis à disposition",
            "Prendre des notes pour **compléter** les diapositives",
          ]}
        />
      </Section>
      <Section level={2} title="Contenu">
        <Text>
          [Plan
          d'études](https://www.vd.ch/fileadmin/user_upload/organisation/dfj/dgep/dgep_fichiers_pdf/DGEP_brochure_EM_web.pdf#DGEP_brochure_EM_2024_WEB_corr2.indd%3A.78832%3A9401)
        </Text>
        <List
          fragment
          items={[
            {
              item: "**Information** et **architecture**",
              items: [
                "Représentation et structuration de l'**information**",
                "**Architecture** des ordinateurs",
              ],
            },
            {
              item: "**Algorithmique** et **programmation**",
              items: [
                "Introduction à l'**algorithmique**",
                "Introduction à la **programmation**",
              ],
            },
            "Introduction aux enjeux **sociaux**",
          ]}
        />
      </Section>
      <Section level={2} title="Site du cours">
        <List
          items={[
            {
              item: "[gymnase.davidtang.ch](https://gymnase.davidtang.ch/)",
              items: [
                "**Calendrier**",
                "**Supports** de cours",
                "**Se rappeler** du lien",
              ],
            },
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
