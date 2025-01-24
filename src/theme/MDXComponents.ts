import "@fontsource-variable/inconsolata";
import "@phosphor-icons/web/regular";
import Check from "@site/src/components/Check";
import Reveal from "@site/src/components/Reveal";
import MDXComponents from "@theme-original/MDXComponents";

// https://docusaurus.io/docs/markdown-features/react#mdx-component-scope
export default {
  ...MDXComponents,
  Check,
  Reveal,
};
