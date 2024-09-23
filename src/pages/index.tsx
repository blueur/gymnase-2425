import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <div className="row">
            <div className="col padding-vert--md">
              <div className="card">
                <div className="card__header">
                  <h3>
                    <i className="ph ph-sun" />{" "}
                    <Link to="https://gyp.ch/">Gymnase Provence</Link>
                  </h3>
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    <Link className="button button--primary" to="/1m6">
                      1M6
                    </Link>
                    <Link className="button button--primary" to="/1m7">
                      1M7
                    </Link>
                    <Link className="button button--primary" to="/1m8">
                      1M8
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col padding-vert--md">
              <div className="card">
                <div className="card__header">
                  <h3>
                    <i className="ph ph-moon" />{" "}
                    <Link to="https://gypad.ch/">Gymnase pour Adultes</Link>
                  </h3>
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    <Link className="button button--primary" to="/1mbi">
                      1MBi
                    </Link>
                    <Link className="button button--primary" to="/2c1">
                      2C1
                    </Link>
                    <Link className="button button--primary" to="/3cci1">
                      3CCI1
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
