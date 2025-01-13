import clsx from "clsx";
import {
  Children,
  createElement,
  PropsWithChildren,
  ReactElement,
} from "react";
import Markdown from "react-markdown";

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
  | { text: string; fragment?: boolean; items?: ListItem[] };

export function List(
  props: PropsWithChildren<{
    fragment?: boolean;
    order?: boolean;
    items?: ListItem[];
  }>,
) {
  const children = props.items
    ? props.items.map((item, index) => {
        if (typeof item === "string") {
          return (
            <li
              key={index}
              className={clsx({
                fragment: props.fragment,
              })}
            >
              <Markdown>{item}</Markdown>
            </li>
          );
        } else {
          return (
            <li
              key={index}
              className={clsx({
                fragment: item.fragment ?? props.fragment,
              })}
            >
              <Markdown>{item.text}</Markdown>
              <List items={item.items} fragment={item.fragment} />
            </li>
          );
        }
      })
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
  }>,
) {
  return (
    <Markdown className={clsx({ fragment: props.fragment })}>
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
    <pre>
      <code data-trim data-noescape data-line-numbers={props.lines ?? true}>
        {unindented}
      </code>
    </pre>
  );
}
