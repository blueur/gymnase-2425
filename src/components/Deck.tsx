import clsx from "clsx";
import {
  Children,
  createElement,
  PropsWithChildren,
  ReactElement,
} from "react";
import Markdown from "react-markdown";

export default function Deck(
  props: PropsWithChildren<{
    title: string;
    chapter: string;
  }>,
) {
  return [
    <section key={0} data-auto-animate>
      <h1>{props.title}</h1>
      <p>{props.chapter}</p>
    </section>,
    props.children,
  ];
}

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

export function List(
  props: PropsWithChildren<{
    fragment?: boolean;
    order?: boolean;
  }>,
) {
  const children = Children.map(
    props.children,
    (child: ReactElement, index) => (
      <li
        key={index}
        className={clsx({
          fragment: child.props.fragment,
        })}
      >
        {child}
      </li>
    ),
  );

  return props.order ? <ol>{children}</ol> : <ul>{children}</ul>;
}

export function ListItem(
  props: PropsWithChildren<{
    fragment?: boolean;
  }>,
) {
  return Children.map(props.children, (child: ReactElement, index) =>
    typeof child === "string" ? (
      <Text key={index}>{child}</Text>
    ) : (
      <ul>
        <li
          key={index}
          className={clsx({
            fragment: child.props.fragment,
          })}
        >
          {child}
        </li>
      </ul>
    ),
  );
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
