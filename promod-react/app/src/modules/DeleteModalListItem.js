import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import config from "../config.json";
import { useParams } from "react-router";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModalListItem(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const userId = sessionStorage.getItem("userId");
  const { processId } = useParams();
  const { taskId } = useParams();
  const { workItemId } = useParams();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const deleteElement = () => {
    if (props.type === "metric") {
      const metric = {
        id: props.id,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metric),
      };
      fetch(
        config.serverURL +
          "processes/" +
          processId +
          "/removeMetric?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            window.location.reload(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
          }
        });
    }
    if (props.type === "step") {
      const step = {
        id: props.id,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(step),
      };
      fetch(
        config.serverURL + "tasks/" + taskId + "/removeStep?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            window.location.reload(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
          }
        });
    }
    if (props.type === "work item state") {
      const state = {
        id: props.id,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      };
      fetch(
        config.serverURL +
          "workItems/" +
          workItemId +
          "/removeState?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            window.location.reload(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
          }
        });
    }
    if (props.type === "input") {
      const workItem = {
        id: props.id,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workItem),
      };
      fetch(
        config.serverURL +
          "tasks/" +
          taskId +
          "/removeMandatoryInput?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            window.location.reload(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
          }
        });
    }
    if (props.type === "output") {
      const workItem = {
        id: props.id,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workItem),
      };
      fetch(
        config.serverURL + "tasks/" + taskId + "/removeOutput?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            window.location.reload(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
          }
        });
    }
    if (props.type === "rasci") {
      const rasci = {
        id: props.id,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rasci),
      };
      fetch(
        config.serverURL + "tasks/" + taskId + "/removeRasci?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            window.location.reload(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
          }
        });
    }
  };

  return (
    <>
      <IconButton
        edge={"end"}
        aria-label="remove"
        id="remove-button"
        onClick={() => handleOpen()}
        sx={{
          marginLeft: 2,
        }}
      >
        <Delete />
      </IconButton>
      <div style={{ height: 0, width: 0, display: "inline-flex" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form>
            <Box sx={style}>
              <Grid container spacing={1}>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography variant="h6" component="h2">
                    Are you sure you want delete this {props.type}:
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography variant="h6" component="h2">
                    {props.name}
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Button
                    onClick={deleteElement}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Yes
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{ marginLeft: 1 }}
                    color="error"
                  >
                    No
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Modal>
      </div>
    </>
  );
}
