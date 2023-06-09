import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import config from "../config.json";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { Add } from "@mui/icons-material";
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

export default function CreateSnapshotModal(props) {
  const [open, setOpen] = React.useState(false);
  const userId = sessionStorage.getItem("userId");
  let navigate = useNavigate();
  const snapshotName = useRef();
  const snapshotDescription = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const createSnapshot = (event) => {
    const snapshotDetail = {
      snapshotName: snapshotName.current.value,
      snapshotDescription: snapshotDescription.current.value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snapshotDetail),
    };
    if (props.type === "process") {
      fetch(
        config.serverURL +
          "processes/" +
          props.element.id +
          "/createSnapshot?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            enqueueSnackbar("Snapshot created", { variant: "success" });
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
          event.preventDefault();
        });
    }
    if (props.type === "task") {
      fetch(
        config.serverURL +
          "tasks/" +
          props.element.id +
          "/createSnapshot?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
          event.preventDefault();
        });
    }
    if (props.type === "workItem") {
      fetch(
        config.serverURL +
          "workItems/" +
          props.element.id +
          "/createSnapshot?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
          event.preventDefault();
        });
    }
    if (props.type === "role") {
      fetch(
        config.serverURL +
          "roles/" +
          props.element.id +
          "/createSnapshot?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
          event.preventDefault();
        });
    }
  };

  return (
    <>
      <Button
        sx={{ marginTop: 2 }}
        variant={"contained"}
        onClick={handleOpen}
        startIcon={<Add />}
      >
        Create snapshot
      </Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={createSnapshot}>
            <Box sx={style}>
              <Grid container spacing={1}>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography variant="h6" component="h2">
                    Creating new snapshot:
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <TextField
                    margin={"normal"}
                    fullWidth
                    required
                    inputRef={snapshotName}
                    label="Snapshot name"
                  />
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <TextField
                    margin={"normal"}
                    inputRef={snapshotDescription}
                    label="Snapshot description"
                    multiline
                    fullWidth
                    rows={5}
                  />
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Button
                    type={"submit"}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Create
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="error"
                    sx={{ marginLeft: 1 }}
                  >
                    Cancel
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
