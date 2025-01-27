import clsx from "clsx";
import {
  Children,
  createElement,
  PropsWithChildren,
  ReactElement,
} from "react";
import Markdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGfm from "remark-gfm";

export function Section(
  props: PropsWithChildren<{
    level: number;
    title: string;
    fragment?: boolean;
  }>,
) {
  return (
    <section data-auto-animate>
      {createElement(
        `h${props.level}`,
        {
          className: clsx({ fragment: props.fragment }),
        },
        props.title,
      )}
      {props.children}
    </section>
  );
}

type ListItem =
  | string
  | ReactElement
  | {
      item: string | ReactElement;
      fragment?: boolean;
      items?: ListItem[];
    };

export function List(
  props: PropsWithChildren<{
    fragment?: boolean;
    order?: boolean;
    items?: ListItem[];
  }>,
) {
  const children = props.items
    ? props.items.map((item, index) =>
        typeof item === "string" ? (
          <li
            key={index}
            className={clsx({
              fragment: props.fragment,
            })}
            style={{
              listStyleType: item ? undefined : "none",
            }}
          >
            <Text>{item ? item : "&nbsp;"}</Text>
          </li>
        ) : "item" in item ? (
          <li
            key={index}
            className={clsx({
              fragment: item.fragment ?? props.fragment,
            })}
          >
            {typeof item.item === "string" ? (
              <Text>{item.item}</Text>
            ) : (
              item.item
            )}
            {item.items ? (
              <List items={item.items} fragment={item.fragment} />
            ) : undefined}
          </li>
        ) : (
          <li
            key={index}
            className={clsx({
              fragment: props.fragment,
            })}
          >
            {item}
          </li>
        ),
      )
    : Children.map(props.children, (child: ReactElement, index) => (
        <li
          key={index}
          className={clsx({
            fragment: child.props.fragment ?? props.fragment,
          })}
        >
          {child}
        </li>
      ));

  return props.order ? <ol>{children}</ol> : <ul>{children}</ul>;
}

export function Text(
  props: PropsWithChildren<{
    fragment?: boolean;
    color?: "green" | "red" | "blue";
  }>,
) {
  return (
    <Markdown
      className={clsx({ fragment: props.fragment }, props.color)}
      rehypePlugins={[RehypeRaw]}
      remarkPlugins={[RemarkGfm]}
    >
      {props.children.toString()}
    </Markdown>
  );
}

export function Image(props: {
  fragment?: boolean;
  src: string;
  url?: string;
}) {
  return [
    <img
      key={0}
      className={clsx({ fragment: props.fragment })}
      style={{
        width: "100%",
        height: "750px",
        objectFit: "contain",
      }}
      src={props.src}
    />,
    <p key={1}>
      <a className="reference" href={props.url} target="_blank">
        {props.url}
      </a>
    </p>,
  ];
}

export function Columns(props: PropsWithChildren) {
  return (
    <div className="columns">
      {Children.map(props.children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}

export function Code(
  props: PropsWithChildren<{
    fragment?: boolean;
    lines?: string;
  }>,
) {
  const code = props.children.toString();
  if (code.trim().length === 0) {
    return undefined;
  }
  const firstLine = code.split("\n").find((line) => line.trim().length > 0);
  if (firstLine === undefined) {
    return undefined;
  }
  let i = 0;
  while (firstLine[i] === " ") {
    i++;
  }
  const unindented = code.replaceAll(" ".repeat(i), "");
  return (
    <pre className={clsx({ fragment: props.fragment })}>
      <code data-trim data-noescape data-line-numbers={props.lines ?? true}>
        {unindented}
      </code>
    </pre>
  );
}

export function Table(props: {
  fragment?: boolean;
  headers?: string[];
  lines: (string | ReactElement)[][];
}) {
  return (
    <table
      className={clsx({ fragment: props.fragment })}
      style={{ width: "unset" }}
    >
      {props.headers ? (
        <thead>
          <tr>
            {props.headers.map((header, index) => (
              <th
                key={index}
                style={{ textAlign: "center", padding: "0em 1em" }}
              >
                <Text>{header}</Text>
              </th>
            ))}
          </tr>
        </thead>
      ) : undefined}
      <tbody>
        {props.lines.map((line, index) => (
          <tr key={index}>
            {line.map((item, index) => (
              <td
                key={index}
                style={{ textAlign: "center", padding: "0em 1em" }}
              >
                {typeof item === "string" ? (
                  <Text>{item ? item : "&nbsp;"}</Text>
                ) : (
                  item
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
