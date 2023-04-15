import { useEffect, useRef, useState } from "react";
import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, List, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Save } from "@mui/icons-material";
import * as React from "react";
import config from "../../config.json";
import { useParams } from "react-router";
import UserListItem from "../../modules/UserListItem";
import AddUserModal from "../../modules/Users/AddUserModal";
import DeleteProjectModal from "../../modules/Projects/DeleteProjectModal";
import { useSnackbar } from "notistack";

export default function ProjectDetail() {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  const name = useRef();
  const briefDescription = useRef();
  const userId = sessionStorage.getItem("userId");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetch(config.serverURL + "projects/" + projectId)
      .then((res) => res.json())
      .then(
        (result) => {
          setProject(result);
        },
        (error) => {
          alert(error.body.message);
        }
      );
  }, [projectId]);

  const saveChanges = (event) => {
    event.preventDefault();
    const project = {
      name: name.current.value,
      briefDescription: briefDescription.current.value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    };
    fetch(
      config.serverURL + "projects/" + projectId + "?userId=" + userId,
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

  const getDeleteButton = () => {
    // eslint-disable-next-line eqeqeq
    if (project.projectOwner != null && project.projectOwner.id == userId) {
      return <DeleteProjectModal />;
    }
    return <></>;
  };

  if (project === null) {
    return (
      <>
        <MyAppBar />
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
                <Typography variant={"h4"} component={"h2"}>
                  Project detail
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
                  required
                  inputRef={name}
                  defaultValue={project.name}
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
                  inputRef={briefDescription}
                  defaultValue={project.briefDescription}
                  multiline
                  rows={5}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} marginTop={2} marginBottom={5}>
                <Button startIcon={<Save />} type="submit" variant="contained">
                  Save
                </Button>
                {getDeleteButton()}
              </Grid>
            </Grid>
          </form>

          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Owner of the project
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <UserListItem
              type="owner"
              name={
                project.projectOwner !== null
                  ? project.projectOwner.username
                  : ""
              }
            />
          </List>

          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Who can edit project
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {project.canEdit.map((userType) => (
              <UserListItem
                user={userType}
                name={
                  userType.username !== undefined
                    ? userType.username
                    : userType.groupName
                }
                id={userType.id}
                key={userType.id}
                type="userEdit"
                elementType={"project"}
                elementId={projectId}
              />
            ))}
          </List>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Who can view project
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {project.hasAccess.map((userType) => (
              <UserListItem
                user={userType}
                name={
                  userType.username !== undefined
                    ? userType.username
                    : userType.groupName
                }
                id={userType.id}
                key={userType.id}
                type="userAccess"
                elementType={"project"}
                elementId={projectId}
              />
            ))}
          </List>
          <AddUserModal type={"project"} itemId={projectId} />
        </Container>
      </>
    );
  }
}
