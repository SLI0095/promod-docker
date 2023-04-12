import { Paper } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import ActivityListItem from "./ActivityListItem";

export default function DraggableContainer(props) {
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
          className={snapshot.isDragging ? "draggingListItem" : ""}
        >
          <ActivityListItem activity={props.activity} />
        </Paper>
      )}
    </Draggable>
  );
}
