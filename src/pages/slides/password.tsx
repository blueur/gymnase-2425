import { List, Section, Text } from "@site/src/components/Deck";
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
    </RevealDeck>
  );
}
