import { Image, List, Section, Table, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";
import { ReactElement } from "react";

export default function ImageDeck(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      title="Image"
      subTitle={props.chapter ?? "Introduction à l'Informatique"}
    >
      <Section level={2} title="Image matricielle">
        <Image
          src="https://desktop.arcgis.com/fr/arcmap/latest/manage-data/geodatabases/GUID-CC2D28F9-B2CF-47AF-80BE-3CA13E04E596-web.gif"
          url="https://desktop.arcgis.com/fr/arcmap/latest/manage-data/geodatabases/raster-basics.htm"
        />
      </Section>
      <Section level={3} title="Image en noir et blanc">
        <ImageTable
          cells={[
            ["1", "0", "0", "1", "0", "0", "1"],
            ["0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0"],
            ["1", "0", "0", "0", "0", "0", "1"],
            ["1", "1", "0", "0", "0", "1", "1"],
            ["1", "1", "1", "0", "1", "1", "1"],
          ]}
          getCell={(cell) => (
            <div
              style={{
                background: cell === "1" ? "white" : "black",
                height: "100%",
                width: "100%",
              }}
            />
          )}
        />
        <div className="fragment">
          <Text>Table d'encodage</Text>
          <Table
            headers={["Couleur", "Valeur"]}
            lines={[
              ["Noir", "0"],
              ["Blanc", "1"],
            ]}
          />
        </div>
      </Section>
      <Section level={3} title="Image en noir et blanc">
        <ImageTable
          cells={[
            ["1", "0", "0", "1", "0", "0", "1"],
            ["0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0"],
            ["1", "0", "0", "0", "0", "0", "1"],
            ["1", "1", "0", "0", "0", "1", "1"],
            ["1", "1", "1", "0", "1", "1", "1"],
          ]}
          getCell={(cell) => (
            <div
              style={{
                height: "100%",
                width: "100%",
                textAlign: "center",
              }}
            >
              {cell}
            </div>
          )}
        />
        <Text>Table d'encodage</Text>
        <Table
          headers={["Couleur", "Valeur"]}
          lines={[
            ["Noir", "0"],
            ["Blanc", "1"],
          ]}
        />
      </Section>
      <Section level={3} title="Taille de l'image">
        <List
          fragment={[false, true]}
          items={[
            "**Largeur**: 7 pixels",
            "**Hauteur**: 6 pixels",
            ["Combien de pixels ?", ["Total: 7 &times; 6 = 42 **pixels**"]],
            [
              "Combien de bits ?",
              ["1 bit par pixel : 42 &times; 1 = 42 **bits**"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Image en couleur">
        <ImageTable
          cells={[
            ["11", "00", "00", "11", "00", "00", "11"],
            ["00", "10", "01", "00", "00", "00", "00"],
            ["00", "01", "00", "00", "00", "01", "00"],
            ["11", "00", "00", "00", "01", "00", "11"],
            ["11", "11", "00", "00", "00", "11", "11"],
            ["11", "11", "11", "00", "11", "11", "11"],
          ]}
          getCell={(cell) => (
            <div
              style={{
                height: "100%",
                width: "100%",
                textAlign: "center",
              }}
            >
              {cell}
            </div>
          )}
        />
        <div className="fragment">
          <Text>Table d'encodage</Text>
          <Table
            headers={["Couleur", "Valeur"]}
            lines={[
              ["Noir", "00"],
              ["Gris", "01"],
              ["Gris clair", "10"],
              ["Blanc", "11"],
            ]}
          />
        </div>
      </Section>
      <Section level={3} title="Image en couleur">
        <ImageTable
          cells={[
            ["11", "00", "00", "11", "00", "00", "11"],
            ["00", "10", "01", "00", "00", "00", "00"],
            ["00", "01", "00", "00", "00", "01", "00"],
            ["11", "00", "00", "00", "01", "00", "11"],
            ["11", "11", "00", "00", "00", "11", "11"],
            ["11", "11", "11", "00", "11", "11", "11"],
          ]}
          getCell={(cell) => (
            <div
              style={{
                background:
                  cell === "00"
                    ? "black"
                    : cell === "01"
                      ? "gray"
                      : cell === "10"
                        ? "lightgray"
                        : "white",
                height: "100%",
                width: "100%",
              }}
            />
          )}
        />
        <Text>Table d'encodage</Text>
        <Table
          headers={["Couleur", "Valeur"]}
          lines={[
            ["Noir", "00"],
            ["Gris", "01"],
            ["Gris clair", "10"],
            ["Blanc", "11"],
          ]}
        />
      </Section>
      <Section level={3} title="Image en couleur">
        <ImageTable
          cells={[
            ["11", "00", "00", "11", "00", "00", "11"],
            ["00", "10", "01", "00", "00", "00", "00"],
            ["00", "01", "00", "00", "00", "01", "00"],
            ["11", "00", "00", "00", "01", "00", "11"],
            ["11", "11", "00", "00", "00", "11", "11"],
            ["11", "11", "11", "00", "11", "11", "11"],
          ]}
          getCell={(cell) => (
            <div
              style={{
                background:
                  cell === "00"
                    ? "red"
                    : cell === "01"
                      ? "pink"
                      : cell === "10"
                        ? "white"
                        : "black",
                height: "100%",
                width: "100%",
              }}
            />
          )}
        />
        <Text>Table d'encodage</Text>
        <Table
          headers={["Couleur", "Valeur"]}
          lines={[
            ["Rouge", "00"],
            ["Rose", "01"],
            ["Blanc", "10"],
            ["Noir", "11"],
          ]}
        />
      </Section>
      <Section level={3} title="Taille de l'image">
        <List
          fragment={[false, true]}
          items={[
            "**Largeur**: 7 pixels",
            "**Hauteur**: 6 pixels",
            ["Combien de pixels ?", ["Total: 7 &times; 6 = 42 **pixels**"]],
            [
              "Combien de bits ?",
              ["2 bits par pixel : 42 &times; 2 = 84 **bits**"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Profondeur de couleur">
        <Table
          headers={["1-bit", "2-bit", "4-bit", "8-bit", "24-bit"]}
          lines={[
            [
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/1_bit.png"
                url="https://commons.wikimedia.org/wiki/File:1_bit.png"
                height="240px"
                width="260px"
              />,
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/2_bit.png"
                url="https://commons.wikimedia.org/wiki/File:2_bit.png"
                height="240px"
                width="260px"
              />,
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/4_bit.png"
                url="https://commons.wikimedia.org/wiki/File:4_bit.png"
                height="240px"
                width="260px"
              />,
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/8_bit.png"
                url="https://commons.wikimedia.org/wiki/File:8_bit.png"
                height="240px"
                width="260px"
              />,
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/9f/24_bit.png"
                url="https://commons.wikimedia.org/wiki/File:24_bit.png"
                height="240px"
                width="260px"
              />,
            ],
            [
              "2<sup>1</sup> = 2 couleurs",
              "2<sup>2</sup> = 4 couleurs",
              "2<sup>4</sup> = 16 couleurs",
              "2<sup>8</sup> = 256 couleurs",
              "2<sup>24</sup> = 16'777'216 couleurs",
            ],
            ["4 [Kio]", "6 [Kio]", "13 [Kio]", "37 [Kio]", "98 [Kio]"],
          ]}
        />
      </Section>
      <Section level={2} title="Code couleur RGB">
        <List
          fragment
          items={[
            "**Rouge** (Red)",
            "**Vert** (Green)",
            "**Bleu** (Blue)",
            "Valeur entre **0** (aucune couleur) et **255** (couleur maximale)",
          ]}
        />
        <Image
          fragment
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/AdditiveColorMixing.svg"
          url="https://commons.wikimedia.org/wiki/File:AdditiveColorMixing.svg"
          height="500px"
        />
      </Section>
      <Section level={2} title="Code couleur RGB">
        <List
          fragment={[true, true]}
          items={[
            [
              "R = 255, G = &nbsp;&nbsp;0, B = &nbsp;&nbsp;0",
              [<span style={{ backgroundColor: "#FF0000" }}>Rouge</span>],
            ],
            [
              "R = &nbsp;&nbsp;0, G = 255, B = &nbsp;&nbsp;0",
              [<span style={{ backgroundColor: "#00FF00" }}>Vert</span>],
            ],
            [
              "R = &nbsp;&nbsp;0, G = &nbsp;&nbsp;0, B = 255",
              [
                <span style={{ backgroundColor: "#0000FF", color: "white" }}>
                  Bleu
                </span>,
              ],
            ],
            [
              "R = 255, G = 255, B = &nbsp;&nbsp;0",
              [<span style={{ backgroundColor: "#FFFF00" }}>Jaune</span>],
            ],
            [
              "R = 255, G = 255, B = 255",
              [<span style={{ backgroundColor: "#FFFFFF" }}>Blanc</span>],
            ],
            [
              "R = 100, G = 100, B = 100",
              [
                <span style={{ backgroundColor: "#646464", color: "white" }}>
                  Gris
                </span>,
              ],
            ],
            [
              "R = &nbsp;&nbsp;0, G = &nbsp;&nbsp;0, B = &nbsp;&nbsp;0",
              [
                <span style={{ backgroundColor: "#000000", color: "white" }}>
                  Noir
                </span>,
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Code couleur hexadécimal">
        <List
          fragment={[true, true]}
          items={[
            [
              "Encodage en **hexadécimal** (00 à FF)",
              [
                '#<span style="color:red">FF</span><span style="color:green">FF</span><span style="color:blue">FF</span>',
                "24 bits : 8 bits par couleur",
              ],
            ],
            [
              "#000000",
              [
                <span style={{ backgroundColor: "#000000", color: "white" }}>
                  Noir
                </span>,
              ],
            ],
            [
              "#FF0000",
              [
                <span style={{ backgroundColor: "#FF0000", color: "white" }}>
                  Rouge
                </span>,
              ],
            ],
            [
              "#646464",
              [
                <span style={{ backgroundColor: "#646464", color: "white" }}>
                  Gris
                </span>,
              ],
            ],
            [
              "#08BD04",
              [
                <span style={{ backgroundColor: "#08BD04", color: "white" }}>
                  Vert
                </span>,
              ],
            ],
            [
              "#0064BE",
              [
                <span style={{ backgroundColor: "#0064BE", color: "white" }}>
                  Bleu
                </span>,
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}

function ImageTable<T>(props: {
  cells: T[][];
  getCell: (cell: T) => ReactElement;
}) {
  return (
    <table style={{ border: "none", width: "unset" }}>
      <tbody>
        {props.cells.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={j}
                style={{
                  width: "64px",
                  height: "64px",
                  padding: 0,
                  border: "1px solid darkgray",
                }}
              >
                {props.getCell(cell)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
