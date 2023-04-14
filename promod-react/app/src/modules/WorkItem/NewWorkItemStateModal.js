import * as React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import config from "../../config.json";
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

export default function NewWorkItemStateModal() {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const addState = (event) => {
    const state = {
      stateName: stateName.current.value,
      stateDescription: stateDescription.current.value,
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
        "/addState?userId=" +
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
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const stateName = useRef();
  const stateDescription = useRef();
  const { workItemId } = useParams();
  const userId = sessionStorage.getItem("userId");

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add new state
      </Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={addState}>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="h6" component="h2">
                      Adding new state
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      required
                      inputRef={stateName}
                      label="State name"
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      inputRef={stateDescription}
                      label="State description"
                      multiline
                      fullWidth
                      rows={5}
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Save state
                    </Button>
                    <Button
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
