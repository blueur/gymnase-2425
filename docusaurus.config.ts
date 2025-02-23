import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
import { remarkKroki } from "remark-kroki";
import type { Options as SassOptions } from "sass";

const config: Config = {
  title: "Informatique",
  tagline: "Cours d'informatique au gymnase",
  favicon: "img/favicon.ico",

  url: "https://gymnase.davidtang.ch",
  baseUrl: "/",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },
  future: {
    experimental_faster: true,
  },
  plugins: [
    [
      "docusaurus-plugin-sass",
      {
        sassOptions: {
          silenceDeprecations: ["import"],
          quietDeps: true,
        } satisfies SassOptions<"sync">,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/1m/prog/algopython-1",
            from: "/docs/1m/prog/algopython",
          },
        ],
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          remarkPlugins: [
            [
              remarkKroki,
              // https://github.com/show-docs/remark-kroki
              {
                server: "https://kroki.io",
                // server: "https://kroki.blueur.com",
                target: "mdx3",
              },
            ],
          ],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.scss",
        },
        gtag: {
          trackingID: "G-JCVS4ZXEMM",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      title: "Informatique",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/1m6", label: "1M6", position: "left" },
        { to: "/1m7", label: "1M7", position: "left" },
        { to: "/1m8", label: "1M8", position: "left" },
        { to: "/1mb1", label: "1MB1", position: "left" },
        { to: "/1mb2", label: "1MB2", position: "left" },
        { to: "/2c1", label: "2C1", position: "left" },
        { to: "/3cci1", label: "3CCI1", position: "left" },
        {
          href: "https://www.linkedin.com/in/davidtangch/",
          position: "right",
          className: "ph ph-linkedin-logo",
        },
        {
          href: "mailto:david.tang@eduvaud.ch",
          position: "right",
          className: "ph ph-envelope-simple",
        },
      ],
    },
    footer: {
      copyright: `<div xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://gymnase.davidtang.ch/" target="_blank">Informatique</a> © 2024-${new Date().getFullYear()} by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0</a></div>`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
