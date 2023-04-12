import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { AddCircle } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate, useParams } from "react-router";

export default function NewElementButton(props) {
  let navigate = useNavigate();
  const { userId } = useParams();

  const handleClick = () => {
    if (props.type === "process") {
      navigate("/user/" + userId + "/processes/newProcess");
      return;
    }
    if (props.type === "task") {
      navigate("/user/" + userId + "/tasks/newTask");
      return;
    }
    if (props.type === "workItem") {
      navigate("/user/" + userId + "/workItems/newWorkItem");
      return;
    }
    if (props.type === "role") {
      navigate("/user/" + userId + "/roles/newRole");
    }
  };

  return (
    <Grid item xs={3} align={"center"}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <IconButton
          aria-label="Add new"
          id="long-button"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            minWidth: 75,
            minHeight: 75,
          }}
        >
          <AddCircle
            sx={{
              minWidth: 75,
              minHeight: 75,
              color: blue[600],
            }}
          />
        </IconButton>
      </div>
    </Grid>
  );
}
