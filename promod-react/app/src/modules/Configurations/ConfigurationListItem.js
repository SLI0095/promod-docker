import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import { CompareArrows } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

export default function ConfigurationListItem(props) {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginBottom: 2,
        }}
      >
        <ListItem>
          <ListItemText
            primary={props.name}
            secondary={"In project: " + props.projectName}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge={"end"}
              aria-label="Switch to project"
              id="switch-button"
              onClick={() =>
                props.function(props.projectId, props.projectName, props.id)
              }
            >
              <CompareArrows />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
}
