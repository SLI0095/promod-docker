import * as React from "react";
import config from "../../config.json";
import { useNavigate, useParams } from "react-router";
import Button from "@mui/material/Button";
import { Delete } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { setDefaultProject } from "../../resources/Utils";
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

export default function DeleteProjectModal() {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const deleteProject = () => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(
      config.serverURL + "projects/" + projectId + "?userId=" + userId,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar("Project deleted.", { variant: "error" });
          setOpen(false);
          setDefaultProject();
          navigate("/user/" + userId + "/projects");
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          enqueueSnackbar(data.message, { variant: "error" });
        }
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { projectId } = useParams();
  const userId = sessionStorage.getItem("userId");

  return (
    <>
      <Button
        sx={{ marginX: 2 }}
        variant="contained"
        startIcon={<Delete />}
        onClick={handleOpen}
      >
        Remove project
      </Button>
      <div>
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
                      Are you sure you want delete the project?
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="subtitle1" component="h2">
                      This will also delete all items included in this project.
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      onClick={deleteProject}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ marginLeft: 1 }}
                    >
                      No
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
