import MyAppBar from "../modules/MyAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  FormGroup,
  List,
  Snackbar,
} from "@mui/material";
import UserListItem from "../modules/UserListItem";
import AddUserModal from "../modules/Users/AddUserModal";
import MyListItem from "../modules/MyListItem";
import AddProcessSettingsModal from "../modules/AddProcessSettingsModal";
import ChangeOwnerModal from "../modules/Users/ChangeOwnerModal";
import AddTaskSettingsModal from "../modules/AddTaskSettingsModal";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import config from "../config.json";
import { getFooter } from "../resources/Utils";

export default function ElementSettings(props) {
  const [item, setItem] = useState({
    id: -1,
    canEdit: [],
    hasAccess: [],
    isTemplate: false,
    owner: { username: "" },
  });

  const [tasks, setTasks] = useState([]);
  const [processes, setProcesses] = useState([]);
  const [selected, setSelected] = useState(false);
  const { workItemId } = useParams();
  const { taskId } = useParams();
  const { roleId } = useParams();
  const { processId } = useParams();
  const { userId } = useParams();
  const projectId = sessionStorage.getItem("projectId");

  const [openSnack, setOpenSnack] = React.useState(false);
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  useEffect(() => {
    if (props.type === "workItem") {
      Promise.all([
        fetch(config.serverURL + "workItems/" + workItemId),
        fetch(
          config.serverURL + "workItems/" + workItemId + "/usableInProcesses"
        ),
        fetch(config.serverURL + "workItems/" + workItemId + "/usableInTasks"),
      ])
        .then(([resItem, resProcesses, resTasks]) =>
          Promise.all([resItem.json(), resProcesses.json(), resTasks.json()])
        )
        .then(
          ([resultItem, resultProcesses, resultTasks]) => {
            setSelected(resultItem.isTemplate);
            setItem(resultItem);
            setProcesses(resultProcesses);
            setTasks(resultTasks);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "role") {
      Promise.all([
        fetch(config.serverURL + "roles/" + roleId),
        fetch(config.serverURL + "roles/" + roleId + "/usableIn"),
      ])
        .then(([resItem, resTasks]) =>
          Promise.all([resItem.json(), resTasks.json()])
        )
        .then(
          ([resultItem, resultTasks]) => {
            setSelected(resultItem.isTemplate);
            setItem(resultItem);
            setTasks(resultTasks);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "process") {
      Promise.all([
        fetch(config.serverURL + "processes/" + processId),
        fetch(config.serverURL + "processes/" + processId + "/usableIn"),
      ])
        .then(([resItem, resProcesses]) =>
          Promise.all([resItem.json(), resProcesses.json()])
        )
        .then(
          ([resultItem, resultProcesses]) => {
            setSelected(resultItem.isTemplate);
            setItem(resultItem);
            setProcesses(resultProcesses);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "task") {
      Promise.all([
        fetch(config.serverURL + "tasks/" + taskId),
        fetch(config.serverURL + "tasks/" + taskId + "/usableIn"),
      ])
        .then(([resItem, resProcesses]) =>
          Promise.all([resItem.json(), resProcesses.json()])
        )
        .then(
          ([resultItem, resultProcesses]) => {
            setSelected(resultItem.isTemplate);
            setItem(resultItem);
            setProcesses(resultProcesses);
          },
          (error) => {
            alert(error);
          }
        );
    }
  }, [processId, props.type, roleId, taskId, workItemId]);

  const saveTemplateChange = (checked) => {
    const requestOptions = {
      method: "PUT",
    };
    if (props.type === "workItem") {
      fetch(
        config.serverURL +
          "workItems/" +
          workItemId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
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
    }
    if (props.type === "role") {
      fetch(
        config.serverURL +
          "roles/" +
          roleId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
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
    }
    if (props.type === "process") {
      fetch(
        config.serverURL +
          "processes/" +
          processId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
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
    }
    if (props.type === "task") {
      fetch(
        config.serverURL +
          "tasks/" +
          taskId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
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
    }
  };

  function getUsableIn(type) {
    if (type === "process") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this processes
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {processes.map((process) => (
              <MyListItem
                name={process.name}
                id={process.id}
                key={process.id}
                type="usableRemove"
                itemType={"Process"}
                settingsElementType={"processes"}
                settingsElementId={processId}
              />
            ))}
          </List>
          <AddProcessSettingsModal type={type} />
        </>
      );
    }
    if (type === "task") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this processes
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {processes.map((process) => (
              <MyListItem
                name={process.name}
                id={process.id}
                key={process.id}
                type="usableRemove"
                itemType={"Process"}
                settingsElementType={"tasks"}
                settingsElementId={taskId}
              />
            ))}
          </List>
          <AddProcessSettingsModal type={type} />
        </>
      );
    }
    if (type === "workItem") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this processes
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {processes.map((process) => (
              <MyListItem
                name={process.name}
                id={process.id}
                key={process.id}
                type="usableRemove"
                itemType={"Process"}
                settingsElementType={"workItems"}
                settingsElementId={workItemId}
              />
            ))}
          </List>
          <AddProcessSettingsModal type={type} />
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this tasks
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {tasks.map((task) => (
              <MyListItem
                name={task.name}
                id={task.id}
                key={task.id}
                type="usableRemove"
                itemType={"Task"}
                settingsElementType={"workItems"}
                settingsElementId={workItemId}
              />
            ))}
          </List>
          <AddTaskSettingsModal type={type} />
        </>
      );
    }
    if (type === "role") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this tasks
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {tasks.map((task) => (
              <MyListItem
                name={task.name}
                id={task.id}
                key={task.id}
                type="usableRemove"
                itemType={"Task"}
                settingsElementType={"roles"}
                settingsElementId={roleId}
              />
            ))}
          </List>
          <AddTaskSettingsModal type={type} />
        </>
      );
    }
  }
  const getChangeOwnerButton = () => {
    if (item.owner != null && item.owner.id == userId) {
      return <ChangeOwnerModal type={props.type} itemId={item.id} />;
    }
    return <></>;
  };

  function getUsersPart() {
    if (projectId == -1) {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Owner of the item
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <UserListItem
              type="owner"
              name={item.owner !== null ? item.owner.username : ""}
            />
          </List>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Who can edit item
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {item.canEdit.map((userType) => (
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
                elementType={props.type}
                elementId={item.id}
              />
            ))}
          </List>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Who can view item
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {item.hasAccess.map((userType) => (
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
                elementType={props.type}
                elementId={item.id}
              />
            ))}
          </List>
          <AddUserModal type={props.type} itemId={item.id} />
          {getChangeOwnerButton()}
        </>
      );
    } else {
      return (
        <>
          <Typography variant={"body2"} fontStyle={"italic"} marginY={2}>
            In projects other than DEFAULT, user settings are same as projects
            settings
          </Typography>
        </>
      );
    }
  }

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Basic settings
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selected}
                onChange={(e) => saveTemplateChange(e.target.checked)}
              />
            }
            label="Marked as template"
          />
        </FormGroup>
        <Typography variant={"body2"} fontStyle={"italic"} marginY={2}>
          Items marked as template can be use in all other processes or tasks.
        </Typography>
        {getUsableIn(props.type)}
        <Typography variant={"h4"} component={"h2"} marginTop={5}>
          User settings
        </Typography>
        {getUsersPart()}
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
      {getFooter(props.type, "settings")}
    </>
  );
}
