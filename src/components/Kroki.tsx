import { deflate } from "pako";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function Kroki(
  props: PropsWithChildren<{ fragment?: boolean; type: "plantuml" }>,
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
        ...deflate(textEncode(props.children.toString().trim()), {
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
      className="kroki"
      style={{
        width: "100%",
        height: "750px",
        objectFit: "contain",
      }}
    />
  );
}
