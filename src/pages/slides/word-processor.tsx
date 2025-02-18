import { Image, List, Section } from "@site/src/components/Deck";
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
      <Section level={2} title="Logiciel de traitement de texte">
        <List
          fragment={[true, true]}
          items={[
            "Remplace la **machine à écrire**",
            "Permet de **créer** et **modifier** des **documents**",
            [
              "_Éditeur de texte_",
              [
                "Manipule les fichiers texte **brut** (ASCII, UTF-8, &hellip;)",
                "Pas de mise en forme (gras, italique, &hellip;)",
                "Exemples: Notepad++, TextEdit, Sublime Text, &hellip;",
              ],
            ],
            [
              "_Traitement de texte interactif_",
              [
                "Gère en plus la **mise en forme** (gras, taille, tabulation, &hellip;)",
                "**WYSIWYG** (What You See Is What You Get)",
                "Exemples: Microsoft Word, LibreOffice Writer, Google Docs, &hellip;",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="LaTeX">
        <Image
          src="https://sharelatex-wiki-cdn-671420.c.cdn77.org/learn-scripts/images/8/82/V2exampleproject.png"
          url="https://fr.overleaf.com/learn/how-to/Creating_a_document_in_Overleaf"
        />
      </Section>
      <Section level={2} title="Interface">
        <Image
          src="https://zestedesavoir.com/media/galleries/558/8a29ce0c-0c4a-43e3-b49f-de1a085f4855.png"
          url="https://zestedesavoir.com/tutoriels/630/traitez-des-textes-avec-word/477_prise-en-main-de-word/2416_word-le-logiciel-de-traitement-de-texte/"
        />
      </Section>
      <Section level={2} title="Ruban">
        <Image
          src="https://zestedesavoir.com/media/galleries/558/cbc4a6a9-688c-41e8-bdef-92b9c2bd6933.png"
          url="https://zestedesavoir.com/tutoriels/630/traitez-des-textes-avec-word/477_prise-en-main-de-word/2416_word-le-logiciel-de-traitement-de-texte/"
        />
      </Section>
      <Section level={2} title="Principales fonctionnalités">
        <List
          fragment={[true, true]}
          items={[
            [
              "_Styles_",
              [
                "**Définir** une mise en forme pour l'**appliquer** à plusieurs éléments",
                "Exemple: Titre, Sous-titre, Corps de texte, &hellip;",
              ],
            ],
            [
              "_Table des matières_",
              [
                "**Générée** automatiquement avec liens hypertextes",
                "Utilise les **styles** de titre",
              ],
            ],
            [
              "_Images_",
              [
                "**Intégration** avec le texte et **légende**",
                "**Table des illustrations** générée automatiquement",
              ],
            ],
            [
              "_Références_",
              [
                "**Notes** de bas de page",
                "**Citations** et **bibliographie**",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
