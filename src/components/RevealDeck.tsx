import { useLocation } from "@docusaurus/router";
import Deck from "@site/src/components/Deck";
import Reveal from "@site/src/components/Reveal";
import { PropsWithChildren } from "react";

export default function RevealDeck(
  props: PropsWithChildren<{
    embedded: boolean;
    name: string;
    title: string;
    chapter: string;
  }>,
) {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const page = urlSearchParams.get("page") !== null;

  return (
    <Reveal name={props.name} full={!props.embedded} page={page}>
      <Deck title={props.title} chapter={props.chapter}>
        {props.children}
      </Deck>
    </Reveal>
  );
}
