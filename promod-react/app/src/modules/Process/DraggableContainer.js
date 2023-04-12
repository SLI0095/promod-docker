import { Paper } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@mui/styles";
import ActivityListItem from "./ActivityListItem";

const useStyles = makeStyles({
  draggingListItem: {
    background: "rgb(235,235,235)",
  },
});

export default function DraggableContainer(props) {
  const classes = useStyles();
  return (
    <Draggable
      draggableId={props.activity.elementId.toString()}
      index={props.activity.id}
    >
      {(provided, snapshot) => (
        <Paper
          elevation={3}
          sx={{
            marginBottom: 2,
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? classes.draggingListItem : ""}
        >
          <ActivityListItem activity={props.activity} />
        </Paper>
      )}
    </Draggable>
  );
}
