import { mermaidConfig } from "@site/src/components/Reveal";
import mermaid from "mermaid";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function Mermaid(
  props: PropsWithChildren<{ fragment?: boolean }>,
) {
  const divRef = useRef<HTMLDivElement>();

  mermaid.initialize({
    startOnLoad: false,
    ...mermaidConfig,
  });

  useEffect(() => {
    mermaid
      .render(
        `mermaid-${Math.random().toString(36).substring(2)}`,
        props.children.toString().trim(),
      )
      .then(
        (value) => {
          divRef.current.innerHTML = value.svg;
        },
        (error) => {
          divRef.current.innerHTML = error.str;
        },
      );
  });

  return <div ref={divRef} className="mermaid" />;
}
