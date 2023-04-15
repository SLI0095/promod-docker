import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import config from "../config.json";
import { useEffect, useRef } from "react";
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

export default function NewConfigurationModal(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = React.useState([]);
  const userId = sessionStorage.getItem("userId");
  const selectedProject = useRef();

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

  const showSuccess = () => {
    enqueueSnackbar("Configuration created.", { variant: "success" });
  };

  const handleClose = () => setOpen(false);
  const createConfig = (event) => {
    event.preventDefault();
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
            showSuccess();
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
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
            showSuccess();
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
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
            showSuccess();
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
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
            showSuccess();
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          enqueueSnackbar(data.message, { variant: "error" });
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
          <form onSubmit={createConfig}>
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
                      required
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
                    type="submit"
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Create
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{ marginLeft: 1 }}
                    color="error"
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
