import Clone from "@site/src/pages/slides/2c/info/composant";

export default function Composant(props: { embedded: boolean }) {
  return (
    <Clone embedded={props.embedded} chapter="Information et architecture" />
  );
}
