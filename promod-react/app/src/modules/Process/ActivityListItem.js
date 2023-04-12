import { ListItem, ListItemText } from "@mui/material";

export default function ActivityListItem(props) {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={props.activity.name + " (" + props.activity.type + ")"}
          secondary={props.activity.description}
        />
      </ListItem>
    </>
  );
}
