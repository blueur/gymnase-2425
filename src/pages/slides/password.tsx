import {
  Columns,
  Image,
  List,
  Section,
  Table,
  Text,
} from "@site/src/components/Deck";
import Mermaid, { MermaidSequence } from "@site/src/components/Mermaid";
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
          fragment={[false, true]}
          items={[
            [
              "_Pourquoi_ ?",
              [
                "**Authentification**",
                "**Preuve** que vous êtes bien qui vous prétendez être.",
              ],
            ],
            [
              "_Comment_ ?",
              [
                "Chaîne de caractères **secrète**",
                "Vous êtes la **seule** personne à la **connaître**.",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Stockage des mots de passe"></Section>
      <Section level={3} title="Base de données">
        <Table
          headers={["Nom d'utilisateur", "Mot de passe"]}
          rows={[
            ["user0", "password"],
            ["user1", "bonjour123"],
            ["gymnase", "vaud25"],
            ["admin", "123456"],
            ["&hellip;", "&hellip;"],
          ]}
        />
      </Section>
      <Section level={3} title="Solution naïve">
        <MermaidSequence
          height="700px"
          participants={[
            "actor U as Utilisateur·ice",
            "participant S as Serveur",
            "participant D as Base de données",
          ]}
          sequences={[
            "U->>S: user0 + password",
            "S->>D: Mot de passe de user0 ?",
            "D->>S: password",
            "S->>S: password == password ?",
            "S->>U: Authentifié·e !",
          ]}
        />
      </Section>
      <Section level={3} title="Solution naïve">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Problème_",
              [
                "Stockage des mots de passe en **clair**.",
                "**Vol** de la base de données ?",
                "**Accès** à tous les mots de passe (par des hackers et des employés).",
              ],
            ],
            [
              "Meilleure _solution_ ?",
              [
                "Pas **besoin** de stocker le mot de passe en **clair**.",
                "**Vérifier** s'il est correct.",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Fonction de hachage">
        <Mermaid>
          {`
          flowchart LR
            input([Information<br />Objet]):::blank --> function[Fonction de hachage]
            function --> output([Valeur de hachage<br />Empreinte<br />Signature]):::blank
            classDef blank stroke:none,fill:none;
          `}
        </Mermaid>
        <Image
          fragment
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Gen_not_surjection_not_injection.svg"
          url="https://commons.wikimedia.org/wiki/File:Gen_not_surjection_not_injection.svg"
          height="400px"
        />
      </Section>
      <Section level={3} title="Fonction de hachage : Empreinte digitale">
        <List
          fragment={[false, true]}
          items={[
            [
              "**Caractéristique** d'une fonction de hachage :",
              [
                [
                  "_Déterministe_ (Identique)",
                  [
                    "Une même personne a **toujours** la même empreinte digitale.",
                  ],
                ],
                [
                  "_Unique_ (Pas de collision)",
                  [
                    "Deux personnes **différentes** ont des empreintes digitales différentes.",
                  ],
                ],
                [
                  "_Irréversible_ (Fonction à sens unique)",
                  [
                    "Impossible de **retrouver** la personne uniquement à partir de son empreinte digitale.",
                  ],
                ],
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Fonction de hachage : Pixellisation">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/Pedagogical_illustration_of_the_principle_of_hashing_functions.png"
          url="https://commons.wikimedia.org/wiki/File:Pedagogical_illustration_of_the_principle_of_hashing_functions.png"
        />
      </Section>
      <Section level={3} title="Fonction de hachage : Exemples">
        <Image
          src="https://static.techno-science.net/illustration/Definitions/1200px/h/hash-function-fr.svg_745a950d98138029cbeab8200870123d.png"
          url="https://www.techno-science.net/glossaire-definition/Fonction-de-hachage.html"
        />
      </Section>
      <Section level={3} title="Base de données">
        <Table
          headers={["Nom d'utilisateur", "Empreinte"]}
          rows={[
            ["user0", "5f4dcc3b"],
            ["user1", "dd3aee22"],
            ["gymnase", "4994ed91"],
            ["admin", "e10adc39"],
            ["&hellip;", "&hellip;"],
          ]}
        />
        <Text>https://www.md5.fr/</Text>
      </Section>
      <Section level={3} title="Solution avec hachage">
        <MermaidSequence
          height="700px"
          participants={[
            "actor U as Utilisateur·ice",
            "participant S as Serveur",
            "participant D as Base de données",
          ]}
          sequences={[
            "U->>S: user0 + password",
            "S->>D: Empreinte de user0 ?",
            "D->>S: 5f4dcc3b",
            "S->>S: hachage(password) == 5f4dcc3b ?",
            "S->>U: Authentifié·e !",
          ]}
        />
      </Section>
      <Section level={3} title="Solution avec hachage">
        <List
          fragment={[true, true]}
          items={[
            "Les mots de passe ne sont plus stockés en **clair**.",
            [
              "Si la base de données est **volée**, les mots de passe ne sont pas **accessibles**.",
              ["Besoin de **casser** le hachage"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Attaque par force brute">
        <Text>Comment **casser** un mot de passe haché ?</Text>
      </Section>
      <Section level={2} title="Attaque par force brute">
        <Columns>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Padlock_4_combination.JPG"
            url="https://commons.wikimedia.org/wiki/File:Padlock_4_combination.JPG"
          />
          <List
            fragment={[true, true]}
            items={[
              "**Tester** toutes les combinaisons possibles",
              "0000, 0001, 0002, &hellip; 9999",
              [
                "Combien de **combinaisons** possibles ?",
                ["10x10x10x10 = 10<sup>4</sup> = 10 000"],
              ],
            ]}
          />
        </Columns>
      </Section>
      <Section level={3} title="Nombre de combinaisons">
        <List
          fragment={[true, true, true]}
          items={[
            [
              "_Combien_ de caractères possibles ?",
              [
                ["**Chiffres** : 0-9 ?", ["10"]],
                ["Lettres **minuscules** : a-z", ["26"]],
                ["Lettres **minuscules** et **majuscules** : a-zA-Z", ["52"]],
                ["**Caractères spéciaux** : !@#$%^&*()", ["10 (par exemple)"]],
              ],
            ],
            "**Longueur** du mot de passe ?",
            [
              "Que des **minuscules** d'une longueur de **6** caractères ?",
              ["26<sup>6</sup> = 308 915 776 combinaisons"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Nombre de combinaisons">
        <Table
          headers={[
            "",
            "Nombres",
            "Lettres minuscules",
            "Lettres majuscules et minuscules",
            "Nombres et lettres",
          ]}
          rowHeaders={[
            "Longueur 4",
            "Longueur 8",
            "Longueur 12",
            "Longueur 16",
          ]}
          rows={[
            [
              "10<sup>4</sup>",
              "26<sup>4</sup>",
              "52<sup>4</sup>",
              "62<sup>4</sup>",
            ],
            [
              "10<sup>8</sup>",
              "26<sup>8</sup>",
              "52<sup>8</sup>",
              "62<sup>8</sup>",
            ],
            [
              "10<sup>12</sup>",
              "26<sup>12</sup>",
              "52<sup>12</sup>",
              "62<sup>12</sup>",
            ],
            [
              "10<sup>16</sup>",
              "26<sup>16</sup>",
              "52<sup>16</sup>",
              "62<sup>16</sup>",
            ],
          ]}
        />
        <Text />
        <Text />
        <Text />
      </Section>
      <Section level={3} title="Nombre de combinaisons">
        <Table
          headers={[
            "",
            "Nombres",
            "Lettres minuscules",
            "Lettres majuscules et minuscules",
            "Nombres et lettres",
          ]}
          rowHeaders={[
            "Longueur 4",
            "Longueur 8",
            "Longueur 12",
            "Longueur 16",
          ]}
          rows={[
            ["10 k", "457 k", "7 M", "15 M"],
            ["100 M", "209 G", "53 T", "218 T"],
            ["1 T", "95 P", "391 E", "3 Z"],
            ["10 P", "43 Z", "3 R", "48 R"],
          ]}
        />
        <Text>{`k = 10<sup>3</sup> ; M = 10<sup>6</sup> ; G = 10<sup>9</sup> ; T = 10<sup>12</sup>`}</Text>
        <Text>{`P = 10<sup>15</sup> ; E = 10<sup>18</sup> ; Z = 10<sup>21</sup> ; R = 10<sup>27</sup>`}</Text>
      </Section>
      <Section level={3} title="Vitesse d'un ordinateur">
        <List
          fragment={[true, true]}
          items={[
            [
              "_CPU_ : 4 coeurs de 2 GHz",
              ["8 **milliards** d'opérations par seconde"],
            ],
            [
              "_GPU_",
              [
                "**2020** (RTX 3070) : **3.65** milliards de hachages par seconde",
                "**2022** (RTX 4090) : **6.95** milliards de hachages par seconde",
                "**2025** (RTX 5090) : **8.90** milliards de hachages par seconde",
              ],
            ],
          ]}
        />
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
            "**Optimisation** de la force brute",
            "Souvent une suite de **mots**",
            "Essais de combinaisons de mots qui **existent**",
            [
              "https://www.passwortcheck.ch/fr/",
              ["passwordGymnase (avec et sans le dictionnaire anglais)"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Gestionnaire de mots de passe">
        <List
          fragment
          items={[
            "**Stockage** de tous les mots de passe",
            "Un **seul** mot de passe à retenir (mot de passe maître)",
            "Génération de mots de passe **aléatoires** pour les sites non critiques",
            "**Exemples** : Bitwarden, KeePass, 1Password, Dashlane, &hellip;",
          ]}
        />
      </Section>
      <Section level={3} title="Complexité du mot de passe">
        <Image
          src="https://xkcd.arnaud.at/comics/936.jpg"
          url="https://xkcd.arnaud.at/936"
        />
      </Section>
    </RevealDeck>
  );
}
