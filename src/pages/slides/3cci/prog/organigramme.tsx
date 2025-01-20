import Clone from "@site/src/pages/slides/1m/algo/organigramme";

export default function Organigramme(props: { embedded: boolean }) {
  return (
    <Clone
      embedded={props.embedded}
      chapter="Algorithmique et programmation avancée"
    />
  );
}
