import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import * as React from "react";
import CreateProjectModal from "../../modules/Projects/CreateProjectModal";
import ProjectListItem from "../../modules/Projects/ProjectListItem";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import config from "../../config.json";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function MainProjects() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    isProjectOwner: [],
    canEditProjects: [],
    hasAccessProjects: [],
  });
  const { userId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "users/" + userId + "/projects")
      .then((res) => res.json())
      .then(
        (result) => {
          setUser(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [userId]);

  const switchToDefault = () => {
    sessionStorage.setItem("projectName", "DEFAULT");
    sessionStorage.setItem("projectId", -1);
    navigate(0);
  };

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Current project
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <ProjectListItem
            name={sessionStorage.getItem("projectName")}
            projectId={sessionStorage.getItem("projectId")}
            id={sessionStorage.getItem("projectId")}
            key={sessionStorage.getItem("projectId")}
            type={"noSwitch"}
          />
        </List>

        <Box paddingTop={1}>
          <CreateProjectModal />
          <Button
            variant="contained"
            onClick={switchToDefault}
            sx={{ marginLeft: 2 }}
          >
            Switch to default
          </Button>
        </Box>

        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          User's projects
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {user.isProjectOwner.map((project) => (
            <ProjectListItem
              name={project.name}
              projectId={project.id}
              description={project.briefDescription}
              id={project.id}
              key={project.id}
            />
          ))}
        </List>

        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Projects user can edit
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {user.canEditProjects.map((project) => (
            <ProjectListItem
              name={project.name}
              projectId={project.id}
              description={project.briefDescription}
              id={project.id}
              key={project.id}
            />
          ))}
        </List>

        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Projects user can view
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {user.hasAccessProjects.map((project) => (
            <ProjectListItem
              name={project.name}
              projectId={project.id}
              description={project.briefDescription}
              id={project.id}
              key={project.id}
            />
          ))}
        </List>
      </Container>
    </>
  );
}
