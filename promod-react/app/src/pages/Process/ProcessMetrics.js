import MyAppBar from "../../modules/MyAppBar";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import NewMetricModal from "../../modules/Process/NewMetricModal";
import { useEffect, useState } from "react";
import config from "../../config.json";
import { useParams } from "react-router";

export default function ProcessMetrics() {
  const [process, setProcess] = useState({ metrics: [] });
  const { processId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "processes/" + processId)
      .then((res) => res.json())
      .then(
        (result) => {
          setProcess(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [processId]);

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {process.metrics.map((metric) => (
            <MyListItem
              name={metric.name}
              description={metric.description}
              id={metric.id}
              key={metric.id}
              type="metric"
            />
          ))}
        </List>
        <NewMetricModal />
      </Container>
      <ProcessSubMenuFooter state="metrics" />
    </>
  );
}
