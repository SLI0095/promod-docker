import MyAppBar from "../modules/MyAppBar";
import Container from "@mui/material/Container";
import { Alert, List, Snackbar } from "@mui/material";
import * as React from "react";
import { getFooter, getPath } from "../resources/Utils";
import { useEffect, useState } from "react";
import config from "../config.json";
import ConfigurationListItem from "../modules/Configurations/ConfigurationListItem";
import { useNavigate, useParams } from "react-router";

export default function Configurations(props) {
  const [openSnack, setOpenSnack] = React.useState(false);
  const userId = sessionStorage.getItem("userId");
  const { workItemId } = useParams();
  const { taskId } = useParams();
  const { roleId } = useParams();
  const { processId } = useParams();
  let navigate = useNavigate();
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const checkProjectAccess = (projectId, projectName, configId) => {
    if (projectId == -1) {
      switchToSelectedProject(-1, "DEFAULT");
      navigateToListing(props.type);
      return;
    }
    const requestOptions = {
      method: "PUT",
    };
    fetch(
      config.serverURL +
        getPath("project") +
        projectId +
        "/canAccess?userId=" +
        userId,
      requestOptions
    ).then((response) => {
      if (response.ok) {
        switchToSelectedProject(projectId, projectName);
        navigateToDetail(props.type, configId);
      } else {
        setOpenSnack(true);
      }
    });
  };

  const switchToSelectedProject = (projectId, projectName) => {
    sessionStorage.setItem("projectName", projectName);
    sessionStorage.setItem("projectId", projectId);
  };

  const navigateToListing = (type) => {
    if (type === "process") {
      navigate("/user/" + sessionStorage.getItem("userId") + "/processes");
    } else if (type === "task") {
      navigate("/user/" + sessionStorage.getItem("userId") + "/tasks");
    } else if (type === "workItem") {
      navigate("/user/" + sessionStorage.getItem("userId") + "/workItems");
    } else if (type === "role") {
      navigate("/user/" + sessionStorage.getItem("userId") + "/roles");
    }
  };

  const navigateToDetail = (type, configId) => {
    if (type === "process") {
      navigate(
        "/user/" + sessionStorage.getItem("userId") + "/processes/" + configId
      );
    } else if (type === "task") {
      navigate(
        "/user/" + sessionStorage.getItem("userId") + "/tasks/" + configId
      );
    } else if (type === "workItem") {
      navigate(
        "/user/" + sessionStorage.getItem("userId") + "/workItems/" + configId
      );
    } else if (type === "role") {
      navigate(
        "/user/" + sessionStorage.getItem("userId") + "/roles/" + configId
      );
    }
  };

  const [element, setElement] = useState({ configurations: [] });

  useEffect(() => {
    let itemId;
    if (props.type === "workItem") {
      itemId = workItemId;
    } else if (props.type === "task") {
      itemId = taskId;
    } else if (props.type === "process") {
      itemId = processId;
    } else if (props.type === "role") {
      itemId = roleId;
    }
    fetch(config.serverURL + getPath(props.type) + itemId)
      .then((res) => res.json())
      .then(
        (result) => {
          setElement(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [processId, props.type, roleId, taskId, workItemId]);
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {element.configurations.map((configuration) => (
            <ConfigurationListItem
              name={configuration.name}
              projectName={
                configuration.project == null
                  ? "DEFAULT"
                  : configuration.project.name
              }
              id={configuration.id}
              key={configuration.id}
              projectId={
                configuration.project == null ? -1 : configuration.project.id
              }
              function={checkProjectAccess}
            />
          ))}
        </List>
        <Snackbar
          open={openSnack}
          autoHideDuration={3000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="error"
            sx={{ width: "100%" }}
          >
            Access to project not granted.
          </Alert>
        </Snackbar>
      </Container>
      {getFooter(props.type, "configurations")}
    </>
  );
}
