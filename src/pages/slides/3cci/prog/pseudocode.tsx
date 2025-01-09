import Clone from "@site/src/pages/slides/1m/algo/pseudocode";

export default function Organigramme(props: { embedded: boolean }) {
  return (
    <Clone
      embedded={props.embedded}
      name="3cci/prog/pseudocode"
      chapter="Algorithmique et programmation avancée"
    />
  );
}
