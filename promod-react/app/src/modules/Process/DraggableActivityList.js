import { List } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableContainer from "./DraggableContainer";

export default function DraggableActivityList(props) {
  return (
    <>
      <DragDropContext onDragEnd={props.onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {props.activities.map((activity, index) => (
                <DraggableContainer
                  activity={activity}
                  index={index}
                  key={activity.elementId}
                />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
