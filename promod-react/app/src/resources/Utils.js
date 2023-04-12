import ProcessSubMenuFooter from "../modules/Process/ProcessSubMenuFooter";
import TaskSubMenuFooter from "../modules/Task/TaskSubMenuFooter";
import WorkItemSubMenuFooter from "../modules/WorkItem/WorkItemSubMenuFooter";
import RoleSubMenuFooter from "../modules/Role/RoleSubMenuFooter";
import * as React from "react";

export function getPath(type) {
  if (type === "role") {
    return "roles/";
  }
  if (type === "process") {
    return "processes/";
  }
  if (type === "task") {
    return "tasks/";
  }
  if (type === "workItem") {
    return "workItems/";
  }
  if (type === "project") {
    return "projects/";
  }
}

export function getFooter(type, setState) {
  if (type === "process") {
    return <ProcessSubMenuFooter state={setState} />;
  }
  if (type === "task") {
    return <TaskSubMenuFooter state={setState} />;
  }
  if (type === "workItem") {
    return <WorkItemSubMenuFooter state={setState} />;
  }
  if (type === "role") {
    return <RoleSubMenuFooter state={setState} />;
  }
}

export function setDefaultProject() {
  sessionStorage.setItem("projectName", "DEFAULT");
  sessionStorage.setItem("projectId", -1);
}
