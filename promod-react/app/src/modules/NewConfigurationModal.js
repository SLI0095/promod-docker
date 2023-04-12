import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  Alert,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Snackbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import config from "../config.json";
import { useEffect, useRef } from "react";

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

export default function NewConfigurationModal(props) {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = React.useState([]);
  const userId = sessionStorage.getItem("userId");
  const selectedProject = useRef();
  const [openSnack, setOpenSnack] = React.useState(false);
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  useEffect(() => {
    fetch(config.serverURL + "projects/canEdit?userId=" + userId)
      .then((res) => res.json())
      .then(
        (result) => {
          setProjects(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [userId]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const createConfig = () => {
    const projectId =
      selectedProject.current.getElementsByTagName("input")[0].value;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    if (props.type === "process") {
      fetch(
        config.serverURL +
          "processes/" +
          props.element.id +
          "/newConfiguration?userId=" +
          userId +
          "&projectId=" +
          projectId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpenSnack(true);
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
    if (props.type === "task") {
      fetch(
        config.serverURL +
          "tasks/" +
          props.element.id +
          "/newConfiguration?userId=" +
          userId +
          "&projectId=" +
          projectId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpenSnack(true);
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
    if (props.type === "workItem") {
      fetch(
        config.serverURL +
          "workItems/" +
          props.element.id +
          "/newConfiguration?userId=" +
          userId +
          "&projectId=" +
          projectId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpenSnack(true);
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
    if (props.type === "role") {
      fetch(
        config.serverURL +
          "roles/" +
          props.element.id +
          "/newConfiguration?userId=" +
          userId +
          "&projectId=" +
          projectId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpenSnack(true);
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
  };

  return (
    <>
      <MenuItem key={"delete"} onClick={handleOpen}>
        New configuration
      </MenuItem>
      <div>
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
                    Select project:
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <FormControl>
                    <InputLabel id="label1">Project</InputLabel>
                    <Select
                      sx={{ minWidth: 175 }}
                      labelId="label1"
                      label="Project"
                      ref={selectedProject}
                      defaultValue={""}
                    >
                      <MenuItem key={-1} value={-1}>
                        DEFAULT
                      </MenuItem>
                      {projects.map((project) => (
                        <MenuItem key={project.id} value={project.id}>
                          {project.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Button
                    onClick={createConfig}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Create
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{ marginLeft: 1 }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Modal>
        <Snackbar
          open={openSnack}
          autoHideDuration={3000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="success"
            sx={{ width: "100%" }}
          >
            Configuration created.
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
