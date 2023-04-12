import * as React from "react";
import config from "../../config.json";
import { useRef } from "react";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

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

export default function CreateProjectModal() {
  const [open, setOpen] = React.useState(false);
  const createProject = () => {
    const project = {
      name: projectName.current.value,
      briefDescription: projectDescription.current.value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    };
    fetch(config.serverURL + "projects/?userId=" + userId, requestOptions)
      .then((response) => {
        if (response.ok) {
          setOpen(false);
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          alert(data.message);
        }
      });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const projectName = useRef();
  const projectDescription = useRef();
  const userId = sessionStorage.getItem("userId");

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Create new project
      </Button>
      <div style={{ height: 0, width: 0, display: "inline-flex" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="h6" component="h2">
                      New project
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      required
                      inputRef={projectName}
                      label="Project name"
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      inputRef={projectDescription}
                      label="Project description"
                      multiline
                      fullWidth
                      rows={5}
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      onClick={createProject}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Create project
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleClose}
                      variant="contained"
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
