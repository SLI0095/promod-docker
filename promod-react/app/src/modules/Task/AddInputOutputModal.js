import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router";
import config from "../../config.json";
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
export default function AddInputOutputModal(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [workItems, setWorkItems] = useState([]);
  const addWorkItem = (event) => {
    const workItem = {
      id: selectedWorkItem.current.getElementsByTagName("input")[0].value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workItem),
    };
    if (props.type === "input") {
      fetch(
        config.serverURL +
          "tasks/" +
          taskId +
          "/addMandatoryInput?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
            event.preventDefault();
          }
        });
    } else if (props.type === "output") {
      fetch(
        config.serverURL + "tasks/" + taskId + "/addOutput?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
            event.preventDefault();
          }
        });
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedWorkItem = useRef();
  const { taskId } = useParams();
  const userId = sessionStorage.getItem("userId");
  const projectId = sessionStorage.getItem("projectId");

  useEffect(() => {
    fetch(
      config.serverURL +
        "workItems/forTask?userId=" +
        userId +
        "&taskId=" +
        taskId +
        "&projectId=" +
        projectId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setWorkItems(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [projectId, taskId, userId]);

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add {props.type}
      </Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={addWorkItem}>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="h6" component="h2">
                      Adding {props.type} to the task
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label1">Work item</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="Work item"
                        ref={selectedWorkItem}
                        defaultValue={""}
                        required
                      >
                        {workItems.map((workItem) => (
                          <MenuItem key={workItem.id} value={workItem.id}>
                            {workItem.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Save
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="error"
                      sx={{ marginRight: 1 }}
                    >
                      Close
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </form>
        </Modal>
      </div>
    </>
  );
}
