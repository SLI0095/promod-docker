import ProcessSubMenuFooter from "../modules/Process/ProcessSubMenuFooter";
import TaskSubMenuFooter from "../modules/Task/TaskSubMenuFooter";
import WorkItemSubMenuFooter from "../modules/WorkItem/WorkItemSubMenuFooter";
import RoleSubMenuFooter from "../modules/Role/RoleSubMenuFooter";
import * as React from "react";
import MyAppBar from "../modules/MyAppBar";
import Container from "@mui/material/Container";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import config from "../config.json";
import CreateSnapshotModal from "../modules/CreateSnapshotModal";
import { WorkItemSnapshotDetail } from "../modules/History/WorkItemSnapshotDetail";
import { RoleSnapshotDetail } from "../modules/History/RoleSnapshotDetail";
import { TaskSnapshotDetail } from "../modules/History/TaskSnapshotDetail";
import { ProcessSnapshotDetail } from "../modules/History/ProcessSnapshotDetail";
import { useSnackbar } from "notistack";

export default function HistoryPage(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [item, setItem] = useState({ snapshots: [] });
  const userId = sessionStorage.getItem("userId");
  const { workItemId } = useParams();
  const { taskId } = useParams();
  const { roleId } = useParams();
  const { processId } = useParams();

  useEffect(() => {
    if (props.type === "workItem") {
      fetch(config.serverURL + "workItems/" + workItemId)
        .then((res) => res.json())
        .then(
          (result) => {
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "role") {
      fetch(config.serverURL + "roles/" + roleId)
        .then((res) => res.json())
        .then(
          (result) => {
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "process") {
      fetch(config.serverURL + "processes/" + processId)
        .then((res) => res.json())
        .then(
          (result) => {
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "task") {
      fetch(config.serverURL + "tasks/" + taskId)
        .then((res) => res.json())
        .then(
          (result) => {
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
  }, [processId, props.type, roleId, taskId, workItemId]);

  function getFooter(type) {
    if (type === "process") {
      return <ProcessSubMenuFooter state="history" />;
    }
    if (type === "task") {
      return <TaskSubMenuFooter state="history" />;
    }
    if (type === "workItem") {
      return <WorkItemSubMenuFooter state="history" />;
    }
    if (type === "role") {
      return <RoleSubMenuFooter state="history" />;
    }
  }

  function getDetail(type, snapshot) {
    if (type === "process") {
      return <ProcessSnapshotDetail process={snapshot} />;
    }
    if (type === "task") {
      return <TaskSnapshotDetail task={snapshot} />;
    }
    if (type === "workItem") {
      return <WorkItemSnapshotDetail workItem={snapshot} />;
    }
    if (type === "role") {
      return <RoleSnapshotDetail role={snapshot} />;
    }
  }

  function restoreSnapshot(e) {
    const snapshot = {
      id: e.target.value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snapshot),
    };
    if (props.type === "process") {
      fetch(
        config.serverURL + "processes/restore?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Restore successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
    if (props.type === "task") {
      fetch(
        config.serverURL + "tasks/restore?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Restore successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
    if (props.type === "workItem") {
      fetch(
        config.serverURL + "workItems/restore?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Restore successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
    if (props.type === "role") {
      fetch(
        config.serverURL + "roles/restore?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Restore successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
  }

  function revertSnapshot(e) {
    const snapshot = {
      id: e.target.value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snapshot),
    };
    if (props.type === "process") {
      fetch(
        config.serverURL + "processes/revert?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Revert successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
    if (props.type === "task") {
      fetch(
        config.serverURL + "tasks/revert?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Revert successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
    if (props.type === "workItem") {
      fetch(
        config.serverURL + "workItems/revert?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Revert successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
    if (props.type === "role") {
      fetch(
        config.serverURL + "roles/revert?userId=" + userId,
        requestOptions
      ).then((response) => {
        if (response.ok) {
          enqueueSnackbar("Revert successful.", { variant: "success" });
        } else {
          response.json().then((data) => {
            enqueueSnackbar(data.message, { variant: "error" });
          });
        }
      });
    }
  }

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        {item.snapshots.map((snap) => (
          <Accordion key={snap.id} id={snap.id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: "80%" }}>{snap.snapshotName}</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {snap.snapshotDate}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{snap.snapshotDescription}</Typography>
              {getDetail(props.type, snap)}
              <Button
                sx={{ marginTop: 2, marginLeft: 1 }}
                variant={"contained"}
                value={snap.id}
                onClick={restoreSnapshot}
              >
                Restore
              </Button>
              <Button
                sx={{ marginTop: 2, marginLeft: 1 }}
                variant={"contained"}
                color="secondary"
                value={snap.id}
                onClick={revertSnapshot}
              >
                Revert
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
        <CreateSnapshotModal element={item} type={props.type} />
      </Container>
      {getFooter(props.type)}
    </>
  );
}
