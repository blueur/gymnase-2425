import { PropsWithChildren, useState } from "react";

export default function Check(
  props: PropsWithChildren<{ fragment?: boolean }>,
) {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setIsOn((previousState) => !previousState)}>
        Vérifier
      </button>
      {isOn ? <div>{props.children}</div> : undefined}
    </div>
  );
}
