import { Image, List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Password(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="password"
      title="Mot de passe"
      subTitle={props.chapter}
    >
      <Section level={2} title="Mot de passe">
        <List
          fragment={[true, true]}
          items={[
            [
              "_Pourquoi_ ?",
              [
                "Authentification",
                "Preuve que vous êtes bien qui vous prétendez être",
              ],
            ],
            [
              "_Comment_ ?",
              ["Chaîne de caractères secrète", "Vous seuls la connaissez"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Stockage des mots de passe"></Section>
      <Section level={2} title="Attaque par force brute">
        <Text>Casser un mot de passe haché ?</Text>
      </Section>
      <Section level={2} title="Attaque par force brute">
        <Image
          src="/1m-enje/Hive Systems Password Table - 2024_French.png"
          url="https://www.hivesystems.com/blog/are-your-passwords-in-the-green"
        />
      </Section>
      <Section level={2} title="Attaque par dictionnaire">
        <List
          fragment
          items={[
            "Optimisation de la force brute",
            "Souvent une suite de mots",
            "Essais de combinaisons de mots qui existent",
            "https://www.passwortcheck.ch/fr/",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
