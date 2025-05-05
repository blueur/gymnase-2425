import { Image, List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function GenerativeArtificialIntelligence(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="generative-artificial-intelligence"
      title="Intelligence artificielle générative"
      subTitle={props.chapter}
    >
      <Section level={2} title="Intelligence artificielle générative">
        <List
          fragment
          items={[
            "IA générative, GenAI, &hellip;",
            "Un **type** d'IA capable de **générer** du texte, des images, des vidéos ou d'autres médias en réponse à des **requêtes** (invites ou prompts)",
            [
              "Plusieurs types d'IA générative :",
              [
                "Modèle de diffusion (ex: DALL-E, Midjourney)",
                "Réseaux antagonistes génératifs (GANs)",
                "Transformeur génératif pré-entraîné (ex: ChatGPT, Bard)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Modèle de diffusion">
        <List items={["Diffusion model"]} />
        <Image
          src="https://i.imgur.com/26LEFe3.png"
          url="https://pareto.ai/blog/diffusion-models"
        />
      </Section>
      <Section level={2} title="Modèle de diffusion">
        <Image
          src="https://miro.medium.com/v2/0*CvJeaqjx8FwsSdBZ.gif"
          url="https://dzdata.medium.com/intro-to-diffusion-model-part-1-29fe7724c043"
        />
      </Section>
      <Section level={2} title="Réseaux antagonistes génératifs">
        <List items={["Generative adversarial networks (GANs)"]} />
        <Image
          src="https://www.universalis.fr/typo3temp/assets/_processed_/f/e/csm_de230508_dcfe9ff0eb.webp"
          url="https://www.universalis.fr/media/architecture-dun-reseau-antagoniste-generatif-gan-de230508/"
        />
      </Section>
      <Section level={2} title="Transformeur génératif préentraîné">
        <List items={["Generative pre-trained transformer (GPT)"]} />
        <Image
          src="https://miro.medium.com/v2/1*kXg3zEXnzRDzSBrYLKlnxA.png"
          url="https://ajay-arunachalam08.medium.com/an-illustration-of-next-word-prediction-with-state-of-the-art-network-architectures-like-bert-gpt-c0af02921f17"
          height="700px"
        />
      </Section>
      <Section level={2} title="Transformeur génératif préentraîné">
        <Image
          src="https://help.apple.com/assets/67B3DC69C33F63574F01B3A4/67B3DC6DC33F63574F01B3B0/fr_FR/5ce82ba35a4a45bd16e19b1c07ab3176.png"
          url="https://support.apple.com/fr-ch/guide/iphone/iphd4ea90231/ios"
        />
      </Section>
      <Section level={2} title="Transformeur génératif préentraîné">
        <Image
          src="https://www.science.org/cms/10.1126/sciadv.adn7744/asset/0dbbf044-5d51-49fb-9d12-5f09ba673d6a/assets/images/large/sciadv.adn7744-f1.jpg"
          url="https://www.science.org/doi/10.1126/sciadv.adn7744"
        />
      </Section>
      <Section level={2} title="Investissement dans l'IA">
        <Image
          src="https://www.investir.ch/app/uploads//2024-05-03-chatgpt.png"
          url="https://www.investir.ch/article/intelligence-artificielle-investir-pour-ne-pas-subir/"
        />
      </Section>
      <Section level={2} title="Investissement dans l'IA">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Private_investment_in_generative_AI_-_2024_AI_index.jpg"
          url="https://commons.wikimedia.org/wiki/File:Private_investment_in_generative_AI_-_2024_AI_index.jpg"
        />
      </Section>
      <Section level={2} title="Privatisation d'une technologie">
        <List
          fragment
          items={[
            "l'IA générative est majoritairement privatisée (ex: OpenAI, Google, X, Microsoft, &hellip;)",
            "Changement des conditions d'utilisation ?",
            "Neutralité des réponses ?",
            "Transparence de l'entraînement ?",
            "Dépendance à l'égard de l'IA générative ?",
            "Techno-solution ? Technocratie ?",
          ]}
        />
      </Section>
      <Section level={2} title="Théorie de l'Internet Mort">
        <List
          fragment
          items={[
            "Dead Internet theory",
            "Théorie du complot apparue en 2021",
            "L'IA crée beaucoup de contenu sur Internet et ces contenus sont utilisés pour former d'autres IA.",
            "Submergé par du contenu généré par l'IA au lieu de contenu humain.",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
