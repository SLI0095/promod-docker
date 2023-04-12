import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "75%",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function RoleSnapshotDetail(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{ marginTop: 2 }}>
        Detail
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
                    <Typography variant="h4" component="h2">
                      Basic information
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"label"}>
                      Name:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      defaultValue={props.role.name}
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Brief description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin={"normal"}
                      multiline
                      rows={5}
                      fullWidth
                      defaultValue={props.role.briefDescription}
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Main description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.role.mainDescription}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Skills:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill defaultValue={props.role.skills} theme="snow" />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Assigment approaches:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.role.assignmentApproaches}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"label"}>
                      Version:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      defaultValue={props.role.version}
                      margin={"normal"}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Change date:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin={"normal"}
                      type="date"
                      defaultValue={props.role.changeDate}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Change description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.role.changeDescription}
                      theme="snow"
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
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
