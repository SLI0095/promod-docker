import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router";
import config from "../../config.json";
import { useSnackbar } from "notistack";

export default function NewRole() {
  let navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const projectId = sessionStorage.getItem("projectId");
  const { enqueueSnackbar } = useSnackbar();

  const saveRole = (event) => {
    event.preventDefault();
    let role;
    // eslint-disable-next-line eqeqeq
    if (projectId == -1) {
      role = {
        name: name.current.value,
        briefDescription: briefDescription.current.value,
        mainDescription: mainDescription.current.getEditor().root.innerHTML,
        skills: skills.current.getEditor().root.innerHTML,
        assignmentApproaches:
          assignmentApproaches.current.getEditor().root.innerHTML,
        version: version.current.value,
        changeDate: changDate.current.value,
        changeDescription: changeDescription.current.getEditor().root.innerHTML,
        project: null,
      };
    } else {
      role = {
        name: name.current.value,
        briefDescription: briefDescription.current.value,
        mainDescription: mainDescription.current.getEditor().root.innerHTML,
        skills: skills.current.getEditor().root.innerHTML,
        assignmentApproaches:
          assignmentApproaches.current.getEditor().root.innerHTML,
        version: version.current.value,
        changeDate: changDate.current.value,
        changeDescription: changeDescription.current.getEditor().root.innerHTML,
        project: { id: projectId },
      };
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(role),
    };
    fetch(config.serverURL + "roles/?userId=" + userId, requestOptions)
      .then((response) => {
        if (response.ok) {
          cancelCreation();
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
  const cancelCreation = () => {
    navigate("/user/" + userId + "/roles");
  };

  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const skills = useRef();
  const assignmentApproaches = useRef();
  const version = useRef();
  const changDate = useRef();
  const changeDescription = useRef();

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
        <Typography variant={"h4"} component={"h2"} marginBottom={7}>
          New role
        </Typography>
        <form onSubmit={saveRole}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant={"h5"} component={"label"}>
                Name:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField required margin={"normal"} inputRef={name} fullWidth />
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
              <ReactQuill theme="snow" ref={mainDescription} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Skills:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={skills} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Assigment approaches:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={assignmentApproaches} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Version:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField margin={"normal"} inputRef={version} fullWidth />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Change date:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin={"normal"}
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
              <ReactQuill theme="snow" ref={changeDescription} />
            </Grid>
            <Grid item xs={12} marginTop={4} marginBottom={5}>
              <Button type={"submit"} variant="contained">
                Create
              </Button>
              <Button
                onClick={cancelCreation}
                variant="contained"
                sx={{ marginLeft: 2 }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
