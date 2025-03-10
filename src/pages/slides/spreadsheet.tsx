import { Image, List, Section } from "@site/src/components/Deck";
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
      <Section level={2} title="Tableur">
        <List
          fragment
          items={[
            "Feuille de calcul (**tableau**)",
            "Cellules",
            [
              "Logiciels",
              ["Excel, Google Sheets, LibreOffice Calc, Numbers, &hellip;"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Nomeclature">
        <Image
          src="/2c-bure/interface_tableur.png"
          url="http://prof.math.free.fr/afficher.php?id=73"
        />
      </Section>
      <Section level={2} title="Calculs">
        <List
          fragment
          items={[
            "=32 + 10",
            "=A1 * B1",
            "=$D$4 - C5",
            "=SOMME(A1:A10)",
            "=MOYENNE(A3:B8)",
            "=MIN(B4:B10)",
            "=NB(C5:C9)",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
