import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import RemoveUserFromGroupModal from "./Groups/RemoveUserFromGroupModal";
import IconButton from "@mui/material/IconButton";
import { Info } from "@mui/icons-material";
import * as React from "react";
import { useNavigate } from "react-router";
import RemoveRightModal from "./Users/RemoveRightModal";

export default function UserListItem(props) {
  let navigate = useNavigate();

  const openGroupDetail = () => {
    console.log(props.groupId);
    navigate(
      "/user/" + sessionStorage.getItem("userId") + "/groups/" + props.groupId
    );
  };

  function getDelete(type) {
    if (type === "userEdit") {
      return (
        <RemoveRightModal
          type={"edit"}
          name={props.name}
          user={props.user}
          elementType={props.elementType}
          elementId={props.elementId}
        />
      );
    }
    if (type === "userAccess") {
      return (
        <RemoveRightModal
          type={"access"}
          name={props.name}
          user={props.user}
          elementType={props.elementType}
          elementId={props.elementId}
        />
      );
    }
    if (type === "member") {
      return <RemoveUserFromGroupModal user={props.user} />;
    }
    if (type === "myGroup") {
      return (
        <>
          <IconButton
            edge={"end"}
            aria-label="Detail"
            id="detail-button"
            onClick={() => openGroupDetail()}
            sx={{
              marginLeft: 2,
            }}
          >
            <Info />
          </IconButton>
        </>
      );
    }
    return <></>;
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
          <ListItemText primary={props.name} />
          <ListItemSecondaryAction>
            {getDelete(props.type)}
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
}
