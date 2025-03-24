import { Columns, Image, List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function DigitalEconomy(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="digital-economy"
      title="Économie numérique"
      subTitle={props.chapter}
    >
      <Section level={2} title="GAFAM">
        <List
          fragment
          items={[
            "**G**oogle (Alphabet)",
            "**A**mazon",
            "**F**acebook (Meta)",
            "**A**pple",
            "**M**icrosoft",
          ]}
        />
      </Section>
      <EnterpriseSection
        name="Google (Alphabet)"
        imageSrc="https://substack-post-media.s3.amazonaws.com/public/images/986a84e7-5031-4f6a-8261-aa03f1be37b4_2457x1377.png"
        imageUrl="https://www.appeconomyinsights.com/p/google-capex-arms-race"
        creation="1998"
        mainRevenue="Publicité ciblée"
      />
      <EnterpriseSection
        name="Amazon"
        imageSrc="https://substack-post-media.s3.amazonaws.com/public/images/1543310e-2de7-4104-a65c-e9ea42d2a9d9_2459x1379.png"
        imageUrl="https://www.appeconomyinsights.com/p/amazon-outspending-everyone"
        creation="1994"
        mainRevenue="Vente en ligne"
        particularity="Amazon Web Services (**AWS**) : n°1 du cloud computing"
      />
      <EnterpriseSection
        name="Facebook (Meta)"
        imageSrc="https://storage.googleapis.com/swipe-insight/content/images/article_images/355_edited_3485913.webp"
        imageUrl="https://web.swipeinsight.app/posts/meta-achieves-record-q4-2024-revenue-and-user-growth-with-ambitious-ai-investment-plans-14393"
        creation="2004"
        mainRevenue="Publicité ciblée"
      />
      <EnterpriseSection
        name="Apple"
        imageSrc="https://substack-post-media.s3.amazonaws.com/public/images/20fc4de1-e895-4310-873d-5119e7a26e44_2459x1379.png"
        imageUrl="https://www.appeconomyinsights.com/p/apple-app-store-shenanigans"
        creation="1976"
        mainRevenue="Matériel informatique"
      />
      <EnterpriseSection
        name="Microsoft"
        imageSrc="https://substack-post-media.s3.amazonaws.com/public/images/c9195e94-62c8-4a1b-8322-da9dfc2ed74b_2457x1377.png"
        imageUrl="https://www.appeconomyinsights.com/p/microsoft-ai-demand-paradox"
        creation="1975"
        mainRevenue="Logiciels"
        particularity="**OpenAI** (ChatGPT)"
      />
      <Section level={2} title="GAFAM">
        <List
          fragment
          items={[
            "Américain",
            "Puissance économique",
            "Influence politique ?",
            "Domination dans un secteur",
            "Peu de régulation",
          ]}
        />
      </Section>
      <Section level={2} title="GAFAM">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Les_10_entreprises_ayant_les_plus_grandes_capitalisations_boursi%C3%A8res.png"
          url="https://commons.wikimedia.org/wiki/File:Les_10_entreprises_ayant_les_plus_grandes_capitalisations_boursi%C3%A8res.png"
        />
      </Section>
      <Section level={2} title="Dynamiques des plateformes">
        <List
          fragment={[true, true]}
          items={[
            [
              "_Gratuité_ apparente",
              ["Motivation pour les nouveaux utilisateur·rice·s"],
            ],
            ["_Effet de réseau_", ["Je suis là où sont mes ami·e·s"]],
            [
              "_Économie d'échelle_",
              ["Coût par utilisateur·rice supplémentaire négligeable"],
            ],
            ["Économie de l'_attention_", ["Rester sur la plateforme"]],
            [
              "&rightarrow; Nous au **service** de l'application",
              ["Ne devrait pas être l'inverse ?"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Alternative Libre (free en anglais)">
        <List
          fragment={[true, true]}
          items={[
            "**Libre** de **partager** et de **modifier**",
            ["Oeuvre libre", ["Wikipedia"]],
            [
              "Logiciel libre",
              ["Mozilla Firefox", "Linux", "LibreOffice", "GIMP", "Python"],
            ],
            "https://francoischarlet.ch/2020/covid19-liste-non-exhaustive-alternatives-produits-gafam/",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}

function EnterpriseSection(props: {
  name: string;
  imageSrc: string;
  imageUrl: string;
  creation: string;
  mainRevenue: string;
  particularity?: string;
}) {
  return (
    <Section level={3} title={props.name} fragment>
      <Columns grows={[1, 3]}>
        <List
          fragment={[false, true]}
          items={[
            ["_Création_", [props.creation]],
            ["_Revenu principal_", [props.mainRevenue]],
            props.particularity
              ? ["_Particularité_", [props.particularity]]
              : undefined,
          ]}
        />
        <Image fragment src={props.imageSrc} url={props.imageUrl} />
      </Columns>
    </Section>
  );
}
