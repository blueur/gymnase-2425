import { mermaidConfig } from "@site/src/components/Reveal";
import clsx from "clsx";
import mermaid from "mermaid";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function Mermaid(
  props: PropsWithChildren<{ fragment?: boolean; height?: string }>,
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
          if (divRef.current) {
            divRef.current.innerHTML = value.svg;
          }
        },
        (error) => {
          if (divRef.current) {
            divRef.current.innerHTML = error;
            divRef.current.style.color = "red";
          }
        },
      );
  });

  return (
    <div
      ref={divRef}
      className={clsx("mermaid", { fragment: props.fragment })}
      style={{
        height: props.height,
        width: "100%",
        backgroundColor: "var(--ifm-background-color)",
      }}
    />
  );
}

export function MermaidSequence(
  props: PropsWithChildren<{
    height: string;
    participants: string[] | { [key: number]: string[] };
    sequences: string[];
  }>,
) {
  if (Array.isArray(props.participants)) {
    const prefix = "sequenceDiagram\n" + props.participants.join("\n") + "\n";
    return (
      <div className="r-stack">
        {props.sequences.map((_, index) => (
          <Mermaid key={index} fragment={index > 0} height={props.height}>
            {prefix + props.sequences.slice(0, index + 1).join("\n")}
          </Mermaid>
        ))}
      </div>
    );
  } else {
    const indexes = Object.keys(props.participants)
      .map(Number)
      .sort()
      .reverse();
    const participants: string[][] = props.sequences.map(
      (_, index) =>
        props.participants[
          indexes.find((i) => i <= index) ?? indexes[0]
        ] as string[],
    );
    return (
      <div className="r-stack">
        {props.sequences.map((_, index) => (
          <Mermaid key={index} fragment={index > 0} height={props.height}>
            {"sequenceDiagram\n" +
              participants[index].join("\n") +
              "\n" +
              props.sequences.slice(0, index + 1).join("\n")}
          </Mermaid>
        ))}
      </div>
    );
  }
}
