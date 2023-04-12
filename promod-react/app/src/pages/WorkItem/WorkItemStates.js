import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import WorkItemSubMenuFooter from "../../modules/WorkItem/WorkItemSubMenuFooter";
import NewWorkItemStateModal from "../../modules/WorkItem/NewWorkItemStateModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import config from "../../config.json";

export default function WorkItemStates() {
  const [workItem, setWorkItem] = useState({ workItemStates: [] });
  const { workItemId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "workItems/" + workItemId)
      .then((res) => res.json())
      .then(
        (result) => {
          setWorkItem(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [workItemId]);
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {workItem.workItemStates.map((state) => (
            <MyListItem
              name={state.stateName}
              description={state.stateDescription}
              id={state.id}
              key={state.id}
              type="work item state"
            />
          ))}
        </List>
        <NewWorkItemStateModal />
      </Container>
      <WorkItemSubMenuFooter state="states" />
    </>
  );
}
