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
                "Transformeur génératif pré-entraîné (ex: ChatGPT, Bard)",
                "Réseau antagoniste génératif (GAN)",
                "Modèles de langage (ex: LLaMA, Claude)",
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
          src="https://www.universalis.fr/typo3temp/assets/_processed_/f/e/csm_de230508_dcfe9ff0eb.webp"
          url="https://www.universalis.fr/media/architecture-dun-reseau-antagoniste-generatif-gan-de230508/"
        />
      </Section>
      <Section level={2} title="Investissement dans l'IA">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Private_investment_in_generative_AI_-_2024_AI_index.jpg"
          url="https://commons.wikimedia.org/wiki/File:Private_investment_in_generative_AI_-_2024_AI_index.jpg"
        />
      </Section>
    </RevealDeck>
  );
}
