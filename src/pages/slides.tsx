import useIsBrowser from "@docusaurus/useIsBrowser";
import Reveal from "@site/src/components/Reveal";

export default function Slide() {
  const isBrowser = useIsBrowser();
  const urlSearchParams = new URLSearchParams(
    isBrowser ? window.location.search : undefined,
  );
  const name = (urlSearchParams.get("name") ?? "").replace(/[^a-z\d-]/g, "");
  const page = urlSearchParams.get("page") !== null;
  return <Reveal name={name} page={page} full />;
}
