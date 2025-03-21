import { List, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Introduction1MB(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="introduction-1mb"
      title="Informatique"
      subTitle="David Tang"
    >
      <Section level={2} title="Parcours">
        <Mermaid>
          {`
          timeline
            Gymnase d'Yverdon
            EPFL : BSc & MSc en Informatique
            Ingénieur informaticien : ELCA (CFF, transN, TPF, RhB, SECUTIX, BCV) : EPFL (ENAC-IT4R)
            Enseignant : Gymnase Provence : HEIG-VD : Gymnase pour Adultes : HEP Vaud
          `}
        </Mermaid>
      </Section>
      <Section level={2} title="Organisation">
        <List
          items={[
            "**Cours** et **Travaux pratiques**",
            [
              "2 périodes / semaine",
              ["Cours en classe", "Cours tutoré à distance"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Présence">
        <List
          fragment
          items={[
            [
              "**Retard**",
              ["Être **prêt·e** à suivre le cours à la **sonnerie**"],
            ],
            ["**Absence**", ["À partir de quinze minutes de retard"]],
            [
              "**Prévenir** par mail en cas d'**absence**",
              ["Sinon pas de rattrapage de test"],
            ],
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
            [
              "**Information** et **architecture**",
              [
                "Représentation et structuration de l'**information**",
                "**Architecture** des ordinateurs",
              ],
            ],
            [
              "**Algorithmique** et **programmation**",
              [
                "Introduction à l'**algorithmique**",
                "Introduction à la **programmation**",
              ],
            ],
            "Introduction aux enjeux **sociaux**",
          ]}
        />
      </Section>
      <Section level={2} title="Site du cours">
        <List
          items={[
            [
              "**Calendrier**",
              "**Supports** de cours",
              "Se souvenir du **lien**",
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
