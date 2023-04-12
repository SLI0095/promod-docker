import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import NewStepModal from "../../modules/Task/NewStepModal";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import config from "../../config.json";

export default function TaskSteps() {
  const [task, setTask] = useState({ steps: [] });
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
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {task.steps.map((step) => (
            <MyListItem
              name={step.name}
              description={step.description}
              id={step.id}
              key={step.id}
              type="step"
            />
          ))}
        </List>
        <NewStepModal />
      </Container>
      <TaskSubMenuFooter state="steps" />
    </>
  );
}
