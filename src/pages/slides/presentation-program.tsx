import { List, Section } from "@site/src/components/Deck";
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
      <Section level={2} title="Logiciel de présentation">
        <List
          fragment
          items={[
            "Logiciel permettant de créer des présentations sous forme de **diapositives**",
            [
              "Les plus populaires :",
              ["Microsoft PowerPoint", "Google Slides", "Apple Keynote"],
            ],
            "Insertion de texte, images, vidéos, graphiques, &hellip;",
            "Possibilité d'ajouter des animations, transitions, &hellip;",
          ]}
        />
      </Section>
      <Section level={2} title="Masques de diapositives">
        <List
          fragment
          items={[
            "PowerPoint : Affichage > Masque des diapositives",
            "Permet de définir le style des diapositives (comme les styles dans Word)",
            "Modifie l'apparence des éléments communs à toutes les diapositives",
            "Exemple : pied de page, numérotation, position et taille des éléments, &hellip;",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
