import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { useRef } from "react";
import { Edit } from "@mui/icons-material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import config from "../../config.json";

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

export default function StepEditModal(props) {
  const [open, setOpen] = React.useState(false);
  const saveStep = () => {
    const step = {
      name: stepName.current.value,
      description: stepDescription.current.value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(step),
    };
    fetch(
      config.serverURL + "taskSteps/" + props.id + "?userId=" + userId,
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
          alert(data.message);
        }
      });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const stepName = useRef();
  const stepDescription = useRef();
  const userId = sessionStorage.getItem("userId");

  return (
    <>
      <IconButton
        edge="end"
        aria-label="edit"
        id="edit-button"
        onClick={() => handleOpen()}
      >
        <Edit />
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
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="h6" component="h2">
                      Editing task step
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      required
                      inputRef={stepName}
                      defaultValue={props.name}
                      label="Step name"
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      inputRef={stepDescription}
                      label="Step description"
                      defaultValue={props.description}
                      multiline
                      fullWidth
                      rows={5}
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      onClick={saveStep}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Save step
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
