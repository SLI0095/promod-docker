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

export default function MetricEditModal(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const saveMetric = (event) => {
    const metric = {
      name: metricName.current.value,
      description: metricDescription.current.value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metric),
    };
    fetch(
      config.serverURL + "metrics/" + props.id + "?userId=" + userId,
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
  const metricName = useRef();
  const metricDescription = useRef();
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
          <form onSubmit={saveMetric}>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="h6" component="h2">
                      Editing metric
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      required
                      inputRef={metricName}
                      defaultValue={props.name}
                      label="Metric name"
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      inputRef={metricDescription}
                      defaultValue={props.description}
                      label="Metric description"
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
                      Save metric
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
