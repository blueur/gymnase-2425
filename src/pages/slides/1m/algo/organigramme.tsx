import { Columns, Image, List, Section, Text } from "@site/src/components/Deck";
import Kroki from "@site/src/components/Kroki";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Organigramme(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Organigramme"
      subTitle={props.chapter ?? "Introduction à l'algorithmique"}
    >
      <Section level={2} title="Algorithme">
        <List
          fragment
          items={[
            "Un _algorithme_ est une suite **finie** et **non ambiguë** d'opérations ou d'**instructions** permettant de résoudre un **problème** ou d'obtenir un **résultat**.",
            [
              "_Objectif_ : Comment **résoudre** un problème",
              ["Entrée(s) : état de départ", "Sortie(s) : état final"],
            ],
          ]}
        />

        <Mermaid fragment>
          {`
          flowchart LR
            input([Entrées]):::blank --> Algorithme:::black
            Algorithme --> output([Sorties]):::blank
          `}
        </Mermaid>
      </Section>
      <Section level={3} title="Comment faire une omelette ?">
        <List
          fragment={[false, true]}
          items={[
            ["Entrée(s)", ["Ingrédients (oeufs, &hellip;)"]],
            ["Sortie(s)", ["Omelette"]],
          ]}
        />
        <Mermaid fragment>
          {`flowchart LR
              input([Oeufs]):::blank --> Recette:::black
              Recette --> output([Omelette]):::blank
            `}
        </Mermaid>
      </Section>
      <Section level={4} title="Algorithme d'une omelette">
        <List
          order
          fragment
          items={[
            "Casser les oeufs dans un bol",
            "Battre les oeufs jusqu'à obtenir un mélange homogène",
            "Verser le mélange dans une poêle chaude",
            "Chauffer jusqu'à ce que l'omelette soit cuite",
            "Servir l'omelette dans une assiette",
          ]}
        />
        <Text fragment>
          **Plusieurs** algorithmes possibles pour résoudre un **même** problème
        </Text>
      </Section>
      <Section level={2} title="Organigramme">
        <List
          fragment
          items={[
            "Comment **décrire** un algorithme pour le communiquer ?",
            "Un organigramme est une **représentation visuelle** d'un algorithme.",
          ]}
        />
      </Section>
      <Section level={3} title="Organigramme d'une omelette">
        <Mermaid>
          {`
          stateDiagram-v2
            state "Casser les oeufs dans un bol" as casser
            state "Battre les oeufs jusqu'à obtenir un mélange homogène" as battre
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
      <Section level={4} title="Réparer une lampe">
        <Mermaid>
          {`
          stateDiagram-v2
            state "La lampe ne fonctionne pas" as lampe
            state si_branche <<choice>>
            state "Brancher la lampe" as brancher
            state si_ampoule <<choice>>
            state "Changer l'ampoule" as changer
            state "Réparer la lampe" as reparer

            [*] --> lampe
            lampe --> si_branche
            si_branche --> brancher: Si la lampe n'est pas branchée
            si_branche --> si_ampoule: Si la lampe est branchée
            si_ampoule --> changer: Si l'ampoule est cassée
            si_ampoule --> reparer: Si l'ampoule fonctionne
            reparer --> [*]
            changer --> [*]
            brancher --> [*]
          `}
        </Mermaid>
      </Section>
      <Section level={4} title="Réparer une lampe">
        <Kroki type="plantuml">
          {`:La lampe ne fonctionne pas;
              if (La lampe est branchée ?) then (oui)
                if (L'ampoule est cassée ?) then (oui)
                  :Changer l'ampoule;
                  kill
                else (non)
                  :Réparer la lampe;
                  kill
                endif
              else (non)
                :Brancher la lampe;
                kill
              endif
              `}
        </Kroki>
      </Section>
      <Section level={3} title="Algorithmes CORFA">
        <Image
          src="/1m-algo/asur-corfa-10.jpg"
          url="https://es-asur.ch/corfa"
        />
      </Section>
      <Section level={3} title="Standardisation">
        <Image
          src="https://imgs.xkcd.com/comics/iso_8601.png"
          url="https://xkcd.com/1179"
        />
      </Section>
      <Section level={3} title="Exécution d'un algorithme">
        <List
          fragment
          items={[
            "Problème : Trouver le plus grand nombre entre a et b",
            "**Instance** : exécution d'un algorithme pour des entrées données",
            [
              "Instances possibles :",
              ["a = 7, b = 1", "a = 3, b = 3", "a = 5, b = 9"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Max(a, b)">
        <Columns>
          <Kroki type="plantuml">
            {`
            :Entrées : a, b;
            if (a < b ?) then (vrai)
              :Retourner b;
              kill
            else (faux)
              :Retourner a;
              kill
            endif
            `}
          </Kroki>
          <List
            fragment={[false, true]}
            items={[
              ["Instance : a = 5, b = 3 ?", ["Résultat : 5"]],
              ["Instance : a = 2, b = 4 ?", ["Résultat : 4"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={3} title="Max(a, b, c)">
        <Kroki type="plantuml" fragment>
          {`
          :Entrées : a, b, c;
          if (a < b ?) then (vrai)
            if (b < c ?) then (vrai)
              :Retourner c;
              kill
            else (faux)
              :Retourner b;
              kill
            endif
          else (faux)
            if (a < c ?) then (vrai)
              :Retourner c;
              kill
            else (faux)
              :Retourner a;
              kill
            endif
          endif
          `}
        </Kroki>
      </Section>
      <Section level={3} title="Exercice">
        <Columns>
          <Kroki type="plantuml">
            {`
            :Entrée : n;
            :r ← 0;
            :i ← 1;
            while (i ≤ n ?) is (vrai)
              :r ← r + i;
              :i ← i + 1;
            endwhile (faux)
            :Retourner r;
            kill​
            `}
          </Kroki>
          <List
            fragment={[false, true]}
            items={[
              ["Instance : n = 0 ?", ["Résultat : 0"]],
              ["Instance : n = 2 ?", ["Résultat : 3"]],
              ["Fonction ?", ["Somme(n) : 1 + 2 + &hellip; + n"]],
            ]}
          />
        </Columns>
      </Section>
      <Section level={2} title="Nomenclature">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Algorithme_",
              [
                "Une suite d'**instructions** permettant de résoudre un problème",
              ],
            ],
            [
              "_Organigramme_",
              ["Une **représentation graphique** d'un algorithme"],
            ],
            ["_Instance_", ["**Exécution** d'un algorithme"]],
            [
              "_a &larr; b + c_",
              ["**Calculer** `b + c`, puis **remplacer** la valeur de `a`"],
            ],
            [
              "_Retourner_ une valeur",
              ["**Résultat** de l'instance d'un algorithme"],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
