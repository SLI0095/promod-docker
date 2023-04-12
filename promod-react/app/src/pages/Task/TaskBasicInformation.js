import { useEffect, useRef, useState } from "react";
import MyAppBar from "../../modules/MyAppBar";
import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ReactQuill from "react-quill";
import * as React from "react";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { Save } from "@mui/icons-material";
import config from "../../config.json";
import { useParams } from "react-router";

export default function TaskBasicInformation() {
  const { taskId } = useParams();
  const userId = sessionStorage.getItem("userId");
  const [task, setTask] = useState(null);
  const [openSnack, setOpenSnack] = React.useState(false);
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  useEffect(() => {
    fetch(config.serverURL + "tasks/" + taskId)
      .then((res) => res.json())
      .then(
        (result) => {
          setTask(result);
        },
        (error) => {
          alert(error.body.message);
        }
      );
  }, [taskId]);

  const saveChanges = () => {
    const task = {
      name: name.current.value,
      briefDescription: briefDescription.current.value,
      mainDescription: mainDescription.current.getEditor().root.innerHTML,
      purpose: purpose.current.getEditor().root.innerHTML,
      keyConsiderations: keyConsiderations.current.getEditor().root.innerHTML,
      version: version.current.value,
      changeDate: changDate.current.value,
      changeDescription: changeDescription.current.getEditor().root.innerHTML,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    };
    fetch(
      config.serverURL + "tasks/" + taskId + "?userId=" + userId,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setOpenSnack(true);
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

  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const purpose = useRef();
  const keyConsiderations = useRef();
  const version = useRef();
  const changDate = useRef();
  const changeDescription = useRef();

  if (task === null) {
    return (
      <>
        <MyAppBar />
        <TaskSubMenuFooter state="main" />
      </>
    );
  } else {
    return (
      <>
        <MyAppBar />
        <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant={"h5"} component={"label"}>
                  Name:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={task.name}
                  required
                  margin={"normal"}
                  inputRef={name}
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
                  required
                  margin={"normal"}
                  inputRef={briefDescription}
                  defaultValue={task.briefDescription}
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
                  defaultValue={task.mainDescription}
                  theme="snow"
                  ref={mainDescription}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Purpose:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={task.purpose}
                  theme="snow"
                  ref={purpose}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Key considerations:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={task.keyConsiderations}
                  theme="snow"
                  ref={keyConsiderations}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"h5"} component={"label"}>
                  Version:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={task.version}
                  margin={"normal"}
                  inputRef={version}
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
                  defaultValue={task.changeDate}
                  inputRef={changDate}
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
                  value={task.changeDescription}
                  theme="snow"
                  ref={changeDescription}
                />
              </Grid>
              <Grid item xs={2} marginTop={4} marginBottom={5}>
                <Button
                  startIcon={<Save />}
                  onClick={saveChanges}
                  variant="contained"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
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
            Changes saved.
          </Alert>
        </Snackbar>
        <TaskSubMenuFooter state="main" />
      </>
    );
  }
}
