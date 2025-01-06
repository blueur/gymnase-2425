import Deck, {
  Columns,
  Image,
  List,
  ListItem,
  Section,
  Text,
} from "@site/src/components/Deck";
import Kroki from "@site/src/components/Kroki";
import Mermaid from "@site/src/components/Mermaid";
import Reveal from "@site/src/components/Reveal";

export default function Organigramme(props: {
  embedded: boolean;
  chapter?: string;
}) {
  return (
    <Reveal name="1m/algo/organigramme" full={!props.embedded}>
      <Deck
        title="Organigramme"
        chapter={props.chapter ?? "Introduction à l'algorithmique"}
      >
        <Section level={2} title="Algorithme">
          <List>
            <ListItem fragment>
              Un _algorithme_ est une suite **finie** et **non ambiguë**
              d'opérations ou d'**instructions** permettant de résoudre un
              **problème** ou d'obtenir un **résultat**.
            </ListItem>
            <ListItem fragment>
              _Objectif_ : Comment **résoudre** un problème
              <ListItem fragment>Entrée(s) : état de départ</ListItem>
              <ListItem fragment>Sortie(s) : état final</ListItem>
            </ListItem>
          </List>
          <Mermaid fragment>
            {`flowchart LR
                input([Entrées]):::blank --> Algorithme:::black
                Algorithme --> output([Sorties]):::blank
            `}
          </Mermaid>
        </Section>
        <Section level={3} title="Comment faire une omelette ?">
          <List>
            <ListItem>
              _Entrée(s)_
              <ListItem fragment>Ingrédients (oeufs, &hellip;)</ListItem>
            </ListItem>
            <ListItem>
              _Sortie(s)_
              <ListItem fragment>Omelette</ListItem>
            </ListItem>
          </List>
          <Mermaid fragment>
            {`flowchart LR
                input([Oeufs]):::blank --> Algorithme:::black
                Algorithme --> output([Omelette]):::blank
            `}
          </Mermaid>
        </Section>
        <Section level={4} title="Algorithme d'une omelette">
          <List order>
            <ListItem fragment>Casser les oeufs dans un bol</ListItem>
            <ListItem fragment>
              Battre les oeufs jusqu'à obtenir un mélange homogène
            </ListItem>
            <ListItem fragment>
              Verser le mélange dans une poêle chaude
            </ListItem>
            <ListItem fragment>
              Chauffer jusqu'à ce que l'omelette soit cuite
            </ListItem>
            <ListItem fragment>Servir l'omelette dans une assiette</ListItem>
          </List>
          <Text fragment>
            **Plusieurs** algorithmes possibles pour résoudre un **même**
            problème
          </Text>
        </Section>
        <Section level={3} title="Standardisation">
          <Image
            src="https://imgs.xkcd.com/comics/iso_8601.png"
            url="https://xkcd.com/1179"
          />
        </Section>
        <Section level={2} title="Organigramme">
          <List>
            <ListItem fragment>
              Comment **décrire** un algorithme de manière **standardisé** ?
            </ListItem>
            <ListItem fragment>
              Un organigramme est une **représentation visuelle** d'un
              algorithme.
            </ListItem>
          </List>
        </Section>
        <Section level={3} title="Organigramme d'une omelette">
          <Mermaid>
            {`stateDiagram-v2
                state "Casser les œufs dans un bol" as casser
                state "Battre les œufs jusqu'à obtenir un mélange homogène" as battre
                state "Verser le mélange dans une poêle chaude" as verser
                state "Chauffer jusqu'à ce que l'omelette soit cuite" as chauffer
                state "Servir l'omelette dans une assiette" as servir
                [*] --> casser
                casser --> battre
                battre --> verser
                verser --> chauffer
                chauffer --> servir
                servir --> [*]
            `}
          </Mermaid>
        </Section>
        <Section level={3} title="Condition">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Pstricks_exo_organigramme_simple.png"
            url="https://commons.wikimedia.org/wiki/File:Pstricks_exo_organigramme_simple.png"
          />
        </Section>
        <Section
          level={4}
          title="Organigramme d'une omelette avec des conditions"
        >
          <Mermaid>
            {`stateDiagram-v2
                state "Casser les œufs dans un bol" as casser
                state "Battre les œufs" as battre
                state si_homogene <<choice>>
                state "Verser le mélange dans une poêle chaude" as verser
                state "Chauffer la poêle" as chauffer
                state si_cuit <<choice>>
                state "Servir l'omelette dans une assiette" as servir

                [*] --> casser
                casser --> battre
                battre --> si_homogene
                si_homogene --> verser: Si mélange homogène
                si_homogene --> battre: Si mélange hétérogène
                verser --> chauffer
                chauffer --> si_cuit
                si_cuit --> servir: Si omelette cuite
                si_cuit --> chauffer: Si omelette pas cuite
                servir --> [*]
            `}
          </Mermaid>
        </Section>
        <Section level={3} title="Algorithmes CORFA">
          <Image
            src="/1m-algo/asur-corfa-10.jpg"
            url="https://es-asur.ch/corfa"
          />
        </Section>
        <Section level={3} title="Exécution d'un algorithme">
          <Text>
            **Instance** : exécution d'un algorithme pour des entrées données
          </Text>
        </Section>
        <Section level={3} title="Exemple">
          <Columns>
            <Kroki type="plantuml">
              {`:Entrées : a, b;
                if (a < b ?) then (vrai)
                  :Retourner b;
                  kill
                else (faux)
                  :Retourner a;
                  kill
                endif
              `}
            </Kroki>
            <List>
              <ListItem fragment>
                Instance : a = 5, b = 3 ?
                <ListItem fragment>Résultat : 5</ListItem>
              </ListItem>
              <ListItem fragment>
                Instance : a = 2, b = 4 ?
                <ListItem fragment>Résultat : 4</ListItem>
              </ListItem>
              <ListItem fragment>
                Fonction ?<ListItem fragment>Max(a, b)</ListItem>
              </ListItem>
            </List>
          </Columns>
        </Section>
        <Section level={3} title="Exercice">
          <Columns>
            <Kroki type="plantuml">
              {`:Entrée : n;
                :résultat ← 0
                i ← 1;
                while (i ≤ n ?) is (vrai)
                  :résultat ← résultat + i
                  i ← i + 1;
                endwhile (faux)
                :Retourner résultat;
                kill​
              `}
            </Kroki>
            <List>
              <ListItem fragment>
                Instance : n = 0 ?<ListItem fragment>Résultat : 0</ListItem>
              </ListItem>
              <ListItem fragment>
                Instance : n = 2 ?<ListItem fragment>Résultat : 3</ListItem>
              </ListItem>
              <ListItem fragment>
                Fonction ?<ListItem fragment>Somme(n)</ListItem>
              </ListItem>
            </List>
          </Columns>
        </Section>
        <Section level={2} title="Nomenclature">
          <List>
            <ListItem>
              _Algorithme_
              <ListItem fragment>
                Une suite d'**instructions** permettant de résoudre un problème
              </ListItem>
            </ListItem>
            <ListItem>
              _Organigramme_
              <ListItem fragment>
                Une **représentation graphique** d'un algorithme
              </ListItem>
            </ListItem>
            <ListItem>
              _Instance_
              <ListItem fragment>**Exécution** d'un algorithme</ListItem>
            </ListItem>
            <ListItem>
              _Retourner_ une valeur
              <ListItem fragment>
                **Résultat** de l'instance d'un algorithme
              </ListItem>
            </ListItem>
            <ListItem>
              _Entrée(s)_
              <ListItem fragment>
                **Valeur(s)** d'entrée pour l'instance d'un algorithme
              </ListItem>
            </ListItem>
          </List>
        </Section>
      </Deck>
    </Reveal>
  );
}
