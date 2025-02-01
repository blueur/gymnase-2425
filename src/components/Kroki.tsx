import clsx from "clsx";
import { deflate } from "pako";
import { PropsWithChildren, useEffect, useRef } from "react";
import { trimIndentation } from "./Deck";

export default function Kroki(
  props: PropsWithChildren<{
    fragment?: boolean;
    type:
      | "actdiag"
      | "blockdiag"
      | "c4plantuml"
      | "ditaa"
      | "dot"
      | "erd"
      | "graphviz"
      | "nomnoml"
      | "nwdiag"
      | "plantuml"
      | "seqdiag"
      | "svgbob"
      | "symbolator"
      | "umlet"
      | "vega"
      | "vegalite";
  }>,
) {
  const imgRef = useRef<HTMLImageElement>();

  // https://docs.kroki.io/kroki/setup/encode-diagram/#javascript
  function textEncode(str: string) {
    if (window.TextEncoder) {
      return new TextEncoder().encode(str);
    }
    const utf8 = unescape(encodeURIComponent(str));
    const result = new Uint8Array(utf8.length);
    for (let i = 0; i < utf8.length; i++) {
      result[i] = utf8.charCodeAt(i);
    }
    return result;
  }

  useEffect(() => {
    const result = btoa(
      String.fromCodePoint(
        ...deflate(textEncode(trimIndentation(props.children.toString())), {
          level: 9,
        }),
      ),
    )
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

    // https://docs.kroki.io/kroki/setup/diagram-options/
    let params = "";
    switch (props.type) {
      case "plantuml":
        params = "?theme=plain";
        break;
    }

    imgRef.current.src = `https://kroki.io/${props.type}/svg/${result}${params}`;
  });

  return (
    <img
      ref={imgRef}
      className={clsx("kroki", { fragment: props.fragment })}
      style={{
        width: "100%",
        height: "750px",
        objectFit: "contain",
      }}
    />
  );
}
