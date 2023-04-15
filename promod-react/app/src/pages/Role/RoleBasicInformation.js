import { useEffect, useRef, useState } from "react";
import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import ReactQuill from "react-quill";
import * as React from "react";
import RoleSubMenuFooter from "../../modules/Role/RoleSubMenuFooter";
import { Save } from "@mui/icons-material";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { useParams } from "react-router";
import config from "../../config.json";
import { useSnackbar } from "notistack";

export default function RoleBasicInformation() {
  const { enqueueSnackbar } = useSnackbar();
  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const skills = useRef();
  const assignmentApproaches = useRef();
  const version = useRef();
  const changDate = useRef();
  const changeDescription = useRef();

  const { roleId } = useParams();
  const userId = sessionStorage.getItem("userId");
  const [role, setRole] = useState(null);

  useEffect(() => {
    fetch(config.serverURL + "roles/" + roleId)
      .then((res) => res.json())
      .then(
        (result) => {
          setRole(result);
        },
        (error) => {
          alert(error.body.message);
        }
      );
  }, [roleId]);

  const saveChanges = (event) => {
    event.preventDefault();
    const role = {
      name: name.current.value,
      briefDescription: briefDescription.current.value,
      mainDescription: mainDescription.current.value,
      skills: skills.current.value,
      assignmentApproaches: assignmentApproaches.current.value,
      version: version.current.value,
      changeDate: changDate.current.value,
      changeDescription: changeDescription.current.value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(role),
    };
    fetch(
      config.serverURL + "roles/" + roleId + "?userId=" + userId,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar("Changes saved.", { variant: "success" });
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

  if (role === null) {
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
          <form onSubmit={saveChanges}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant={"h5"} component={"label"}>
                  Name:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin={"normal"}
                  inputRef={name}
                  fullWidth
                  defaultValue={role.name}
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
                  multiline
                  rows={5}
                  fullWidth
                  defaultValue={role.briefDescription}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Main description:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={role.mainDescription}
                  theme="snow"
                  ref={mainDescription}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Skills:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={role.skills}
                  theme="snow"
                  ref={skills}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Assigment approaches:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={role.assignmentApproaches}
                  theme="snow"
                  ref={assignmentApproaches}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Version:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={role.version}
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
                  inputRef={changDate}
                  type="date"
                  defaultValue={role.changeDate}
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
                  defaultValue={role.changeDescription}
                  theme="snow"
                  ref={changeDescription}
                />
              </Grid>
              <Grid item xs={2} marginTop={4} marginBottom={5}>
                <Button
                  startIcon={<Save />}
                  type={"submit"}
                  variant="contained"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
        <RoleSubMenuFooter state="main" />
      </>
    );
  }
}
