import { Image, List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Encoding(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="encoding"
      title="Codage"
      subTitle={props.chapter}
    >
      <Section level={2} title="Fichier">
        <List
          fragment={[true, true]}
          items={[
            "Un fichier est une suite d'**octets** (8 bits).",
            [
              "L'**extension** d'un fichier indique son **format**.",
              ["`.txt` : fichier texte", "`.jpg` : image", "`.mp3` : audio"],
            ],
            [
              "L'extension définie le **logiciel** par défaut pour ouvrir le fichier.",
              [
                "On peut décider d'ouvrir une image avec un éditeur de texte.",
                "Clic droit sur le fichier > Ouvrir avec",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Fichier binaire">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Wikipedia_favicon_hexdump.svg"
          url="https://commons.wikimedia.org/wiki/File:Wikipedia_favicon_hexdump.svg"
        />
      </Section>
      <Section level={2} title="Table ASCII">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg"
          url="https://commons.wikimedia.org/wiki/File:ASCII-Table-wide.svg"
        />
      </Section>
      <Section level={2} title="Table ASCII">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg"
          url="https://commons.wikimedia.org/wiki/File:ASCII-Table-wide.svg"
          height="650px"
        />
        <List
          fragment={[false, true]}
          items={[
            [
              "0101 0110 0110 0101 0111 0010 0111 0100 = 0x56657274 = ?",
              ["Vert"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Fichier texte">
        <List
          fragment
          items={[
            "Un fichier texte est composé d'une suite de **caractères**.",
            "Chaque caractère est représenté par un **code** en **octet**.",
            [
              "Le **codage** définit la correspondance entre les caractères et les codes.",
              [
                "La table **ASCII** permet d'associer un code de 8 bits à un caractère.",
                "Représentation en **hexadécimal** : `0x41` (0100 0001) pour le caractère `A`.",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="ASCII Art">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Fish-shell-logo-ascii-black.svg"
          url="https://commons.wikimedia.org/wiki/File:Fish-shell-logo-ascii-black.svg"
        />
      </Section>
    </RevealDeck>
  );
}
