import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import { CompareArrows, Info } from "@mui/icons-material";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import * as React from "react";

export default function ProjectListItem(props) {
  let navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  const openProjectDetail = () => {
    navigate("/user/" + userId + "/projects/" + props.projectId);
  };

  const switchToSelectedProject = () => {
    sessionStorage.setItem("projectName", props.name);
    sessionStorage.setItem("projectId", props.projectId);
    navigate(0);
  };

  function getEdit() {
    // eslint-disable-next-line eqeqeq
    if (props.projectId == -1) {
      return <></>;
    } else {
      return (
        <>
          <IconButton
            edge={"end"}
            aria-label="Detail"
            id="detail-button"
            onClick={() => openProjectDetail()}
            sx={{
              marginLeft: 2,
            }}
          >
            <Info />
          </IconButton>
        </>
      );
    }
  }
  function getSwitch() {
    if (props.type === "noSwitch") {
      return <></>;
    } else {
      return (
        <>
          <IconButton
            edge={"end"}
            aria-label="Switch project"
            id="switch-button"
            onClick={() => switchToSelectedProject()}
            sx={{
              marginLeft: 2,
            }}
          >
            <CompareArrows />
          </IconButton>
        </>
      );
    }
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
            {getEdit()}
            {getSwitch()}
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
}
