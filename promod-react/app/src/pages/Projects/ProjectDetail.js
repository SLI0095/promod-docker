//TODO - name and description editable, plus save button and owner plus list of users and right same as in element settings with add user right button
import { useEffect, useRef, useState } from "react";
import MyAppBar from "../../modules/MyAppBar";
import {
  Alert,
  Button,
  Container,
  Grid,
  List,
  Snackbar,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Save } from "@mui/icons-material";
import * as React from "react";
import config from "../../config.json";
import { useParams } from "react-router";
import UserListItem from "../../modules/UserListItem";
import AddUserModal from "../../modules/Users/AddUserModal";
import DeleteProjectModal from "../../modules/Projects/DeleteProjectModal";

export default function ProjectDetail() {
  const [project, setProject] = useState(null);
  const [openSnack, setOpenSnack] = React.useState(false);
  const { projectId } = useParams();
  const name = useRef();
  const briefDescription = useRef();
  const userId = sessionStorage.getItem("userId");

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

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

  const saveChanges = () => {
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

  const getDeleteButton = () => {
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
              />
            </Grid>
            <Grid item xs={12} marginTop={2} marginBottom={5}>
              <Button
                startIcon={<Save />}
                onClick={saveChanges}
                variant="contained"
              >
                Save
              </Button>
              {getDeleteButton()}
            </Grid>
          </Grid>

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
        </Container>
      </>
    );
  }
}
