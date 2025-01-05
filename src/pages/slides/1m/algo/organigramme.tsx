import Deck, {
  Columns,
  Image,
  Item,
  List,
  Section,
} from "@site/src/components/Deck";
import Kroki from "@site/src/components/Kroki";
import Mermaid from "@site/src/components/Mermaid";
import Reveal from "@site/src/components/Reveal";

export default function Organigramme(props: { embedded: boolean }) {
  return (
    <Reveal name="1m/algo/organigramme" full={!props.embedded}>
      <Deck title="Organigramme" chapter="Introduction à l'algorithmique">
        <Section level={2} title="Algorithme">
          <List>
            <Item fragment>
              Un algorithme est une suite **finie** et **non ambiguë**
              d'opérations ou d'**instructions** permettant de résoudre un
              **problème** ou d'obtenir un **résultat**.
            </Item>
            <Item fragment>
              Résoudre un problème
              <Item fragment>Entrée(s)</Item>
              <Item fragment>Sortie(s)</Item>
            </Item>
            <Item fragment>
              Algorithmique
              <Item fragment>Domaine d'étude des algorithmes</Item>
            </Item>
          </List>
        </Section>
        <Section level={3} title="Comment faire une omelette ?">
          <List>
            <Item>
              Entrée(s)
              <Item fragment>Ingrédients (oeufs, &hellip;)</Item>
            </Item>
            <Item>
              Sortie(s)
              <Item fragment>Omelette</Item>
            </Item>
          </List>
          <Mermaid fragment>
            {`flowchart LR
                input([Oeufs]):::blank --> Algorithme:::black
                Algorithme --> output([Omelette]):::blank
                classDef blank fill:none,stroke:none
                classDef black fill:black,stroke:black,color:white
            `}
          </Mermaid>
        </Section>
        <Section level={4} title="Algorithme d'une omelette">
          <List order>
            <Item fragment>Casser les oeufs dans un bol</Item>
            <Item fragment>
              Battre les oeufs jusqu'à obtenir un mélange homogène
            </Item>
            <Item fragment>Verser le mélange dans une poêle chaude</Item>
            <Item fragment>Chauffer jusqu'à ce que l'omelette soit cuite</Item>
            <Item fragment>Servir l'omelette dans une assiette</Item>
          </List>
          <Item fragment>
            **Plusieurs** algorithmes possibles pour résoudre un **même**
            problème
          </Item>
        </Section>
        <Section level={2} title="Organigramme">
          <Item>
            Un organigramme est une **représentation graphique** d'un
            algorithme.
          </Item>
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
          <Item>
            **Instance** : exécution d'un algorithme pour des entrées données
          </Item>
        </Section>
        <Section level={3} title="Exercice 1">
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
              <Item fragment>
                Instance : a = 5, b = 3 ?<Item fragment>Résultat : 5</Item>
              </Item>
              <Item fragment>
                Instance : a = 2, b = 4 ?<Item fragment>Résultat : 4</Item>
              </Item>
              <Item fragment>
                Fonction ?<Item fragment>Max(a, b)</Item>
              </Item>
            </List>
          </Columns>
        </Section>
        <Section level={3} title="Exercice 2">
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
              <Item fragment>
                Instance : n = 0 ?<Item fragment>Résultat : 0</Item>
              </Item>
              <Item fragment>
                Instance : n = 2 ?<Item fragment>Résultat : 3</Item>
              </Item>
              <Item fragment>
                Fonction ?<Item fragment>Somme(n)</Item>
              </Item>
            </List>
          </Columns>
        </Section>
      </Deck>
    </Reveal>
  );
}
