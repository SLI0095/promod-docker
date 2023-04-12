import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import DeleteModalListItem from "./DeleteModalListItem";
import MetricEditModal from "./Process/MetricEditModal";
import WorkItemStateEditModal from "./WorkItem/WorkItemStateEditModal";
import StepEditModal from "./Task/StepEditModal";
import DeleteUsableInModal from "./DeleteUsableInModal";

export default function MyListItem(props) {
  function getEdit(type) {
    if (type === "work item state") {
      return (
        <WorkItemStateEditModal
          name={props.name}
          description={props.description}
          id={props.id}
        />
      );
    }
    if (type === "step") {
      return (
        <StepEditModal
          name={props.name}
          description={props.description}
          id={props.id}
        />
      );
    }
    if (type === "metric") {
      return (
        <MetricEditModal
          name={props.name}
          description={props.description}
          id={props.id}
        />
      );
    }

    return <></>;
  }

  function getDelete(type) {
    if (type === "usableRemove") {
      return (
        <DeleteUsableInModal
          itemType={props.itemType}
          itemId={props.id}
          settingsElementType={props.settingsElementType}
          settingsElementId={props.settingsElementId}
          name={props.name}
        />
      );
    }
    if (type === "snapshot") {
      return <></>;
    }
    return (
      <DeleteModalListItem type={props.type} name={props.name} id={props.id} />
    );
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginBottom: 2,
        }}
      >
        <ListItem>
          <ListItemText primary={props.name} secondary={props.description} />
          <ListItemSecondaryAction>
            {getEdit(props.type)}
            {getDelete(props.type)}
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
}
