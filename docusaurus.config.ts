import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

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

  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
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

  themeConfig: {
    navbar: {
      title: "Informatique",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        { to: "/1m6", label: "1M6", position: "left" },
        { to: "/1m7", label: "1M7", position: "left" },
        { to: "/1m8", label: "1M8", position: "left" },
        { to: "/1mbi", label: "1MBi", position: "left" },
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
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" >This work © 2024 by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"></a></p>`,
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
