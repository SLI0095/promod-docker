import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { useEffect, useState } from "react";
import config from "../../config.json";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import * as React from "react";

export default function ProcessMatrix() {
  const [matrix, setMatrix] = useState([[]]);
  const { processId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "processes/" + processId + "/rasci")
      .then((res) => res.json())
      .then(
        (result) => {
          setMatrix(result);
        },
        () => {
          alert("Could not load RASCI matrix");
        }
      );
  }, [processId]);

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "70%", marginBottom: 7 }}>
        <Box
          paddingTop={4}
          width={"100%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <table>
            <tbody>
              {matrix.map((a, index) => {
                if (index === 0) {
                  return (
                    <tr>
                      {a.map((b) => {
                        return <td className={"tableRole"}>{b}</td>;
                      })}
                    </tr>
                  );
                } else {
                  return (
                    <tr>
                      {a.map((b, index2) => {
                        if (index2 === 0) {
                          return <td className={"tableTask"}>{b}</td>;
                        } else {
                          return <td className={"table" + b}>{b}</td>;
                        }
                      })}
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </Box>
      </Container>
      <ProcessSubMenuFooter state="rasci" />
    </>
  );
}
