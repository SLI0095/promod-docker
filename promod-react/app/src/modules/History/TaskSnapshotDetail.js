import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, List, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import MyListItem from "../MyListItem";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  height: "75%",
  overflow: "scroll",
  boxShadow: 24,
  p: 4,
};

export function TaskSnapshotDetail(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rasciToRender, setRasciToRender] = useState({
    R: [],
    A: [],
    S: [],
    C: [],
    I: [],
  });

  useEffect(() => {
    let r = [];
    let a = [];
    let s = [];
    let c = [];
    let i = [];
    props.task.rasciList.forEach(function (item) {
      if (item.type === "R") {
        r.push(item);
      } else if (item.type === "A") {
        a.push(item);
      } else if (item.type === "S") {
        s.push(item);
      } else if (item.type === "C") {
        c.push(item);
      } else if (item.type === "I") {
        i.push(item);
      }
    });
    setRasciToRender({
      R: r,
      A: a,
      S: s,
      C: c,
      I: i,
    });
  }, [props.task.rasciList]);

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
                      defaultValue={props.task.name}
                      margin={"normal"}
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
                      defaultValue={props.task.briefDescription}
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
                      defaultValue={props.task.mainDescription}
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
                      defaultValue={props.task.purpose}
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
                      defaultValue={props.task.keyConsiderations}
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
                      defaultValue={props.task.version}
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
                      defaultValue={props.task.changeDate}
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
                      value={props.task.changeDescription}
                      theme="snow"
                    />
                  </Grid>

                  <Grid textAlign={"center"} item xs={12} marginTop={7}>
                    <Typography variant="h4" component="h2">
                      Task steps
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {props.task.steps.map((step) => (
                        <MyListItem
                          name={step.name}
                          description={step.description}
                          id={step.id}
                          key={step.id}
                          type="snapshot"
                        />
                      ))}
                    </List>
                  </Grid>

                  <Grid textAlign={"center"} item xs={12} marginTop={7}>
                    <Typography variant="h4" component="h2">
                      Work items
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"h2"}>
                      Inputs
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {props.task.mandatoryInputs.map((input) => (
                        <MyListItem
                          key={input.id}
                          name={input.name}
                          id={input.id}
                          description={input.briefDescription}
                          type="snapshot"
                        />
                      ))}
                    </List>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"h2"} marginTop={3}>
                      Outputs
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {props.task.outputs.map((output) => (
                        <MyListItem
                          key={output.id}
                          id={output.id}
                          name={output.name}
                          description={output.briefDescription}
                          type="snapshot"
                        />
                      ))}
                    </List>
                  </Grid>

                  <Grid textAlign={"center"} item xs={12} marginTop={7}>
                    <Typography variant="h4" component="h2">
                      RASCI
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"h2"}>
                      Required
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {rasciToRender.R.map((rasci) => (
                        <MyListItem
                          type="snapshot"
                          name={rasci.role.name}
                          description={rasci.role.briefDescription}
                          id={rasci.id}
                          key={rasci.id}
                        />
                      ))}
                    </List>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"h2"} marginTop={3}>
                      Accountable
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {rasciToRender.A.map((rasci) => (
                        <MyListItem
                          type="snapshot"
                          name={rasci.role.name}
                          description={rasci.role.briefDescription}
                          id={rasci.id}
                          key={rasci.id}
                        />
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"h2"} marginTop={3}>
                      Support
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {rasciToRender.S.map((rasci) => (
                        <MyListItem
                          type="snapshot"
                          name={rasci.role.name}
                          description={rasci.role.briefDescription}
                          id={rasci.id}
                          key={rasci.id}
                        />
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"h2"} marginTop={3}>
                      Consulted
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {rasciToRender.C.map((rasci) => (
                        <MyListItem
                          type="snapshot"
                          name={rasci.role.name}
                          description={rasci.role.briefDescription}
                          id={rasci.id}
                          key={rasci.id}
                        />
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"h2"} marginTop={3}>
                      Informed
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {rasciToRender.I.map((rasci) => (
                        <MyListItem
                          type="snapshot"
                          name={rasci.role.name}
                          description={rasci.role.briefDescription}
                          id={rasci.id}
                          key={rasci.id}
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
