import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, List, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import MyListItem from "../MyListItem";
import ReactBpmn from "react-bpmn";

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

const divStyle = {
  border: "solid #282c34 1px",
  marginTop: "2",
  marginBottom: "2",
};

export function ProcessSnapshotDetail(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={{ marginTop: 2 }}>
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
                      Workflow
                    </Typography>
                  </Grid>

                  <Grid textAlign={"center"} item xs={12}>
                    <div style={divStyle}>
                      <ReactBpmn
                        diagramXML={
                          props.process.workflow == undefined
                            ? null
                            : props.process.workflow.bpmnContent
                        }
                      />
                    </div>
                  </Grid>

                  <Grid textAlign={"center"} item xs={12} marginTop={7}>
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
                      defaultValue={props.process.name}
                      fullWidth
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
                      defaultValue={props.process.briefDescription}
                      multiline
                      rows={5}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Main description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.process.mainDescription}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Purpose:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.process.purpose}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Scope:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.process.scope}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Usage notes:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.process.usageNotes}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Alternatives:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.process.alternatives}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      How to staff:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.process.howToStaff}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Key considerations:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.process.keyConsiderations}
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
                      defaultValue={props.process.version}
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
                      defaultValue={props.process.changeDate}
                      type="date"
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
                      defaultValue={props.process.changeDescription}
                      theme="snow"
                    />
                  </Grid>

                  <Grid textAlign={"center"} item xs={12} marginTop={7}>
                    <Typography variant="h4" component="h2">
                      Process metrics
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {props.process.metrics.map((metric) => (
                        <MyListItem
                          name={metric.name}
                          description={metric.description}
                          id={metric.id}
                          key={metric.id}
                          type="snapshot"
                        />
                      ))}
                    </List>
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
