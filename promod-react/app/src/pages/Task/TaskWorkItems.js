import MyAppBar from "../../modules/MyAppBar";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddInputOutputModal from "../../modules/Task/AddInputOutputModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import config from "../../config.json";

export default function TaskWorkItems() {
  const [task, setTask] = useState({
    mandatoryInputs: [],
    optionalInputs: [],
    outputs: [],
    guidanceWorkItems: [],
  });
  const { taskId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "tasks/" + taskId)
      .then((res) => res.json())
      .then(
        (result) => {
          setTask(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [taskId]);

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <Typography variant={"h4"} component={"h2"}>
          Inputs
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {task.mandatoryInputs.map((input) => (
            <MyListItem
              key={input.id}
              name={input.name}
              id={input.id}
              description={input.briefDescription}
              type="input"
            />
          ))}
        </List>
        <AddInputOutputModal type={"input"} />
        <Typography variant={"h4"} component={"h2"} marginTop={3}>
          Outputs
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {task.outputs.map((output) => (
            <MyListItem
              key={output.id}
              id={output.id}
              name={output.name}
              description={output.briefDescription}
              type="output"
            />
          ))}
        </List>
        <AddInputOutputModal type={"output"} />
      </Container>
      <TaskSubMenuFooter state="workItems" />
    </>
  );
}
