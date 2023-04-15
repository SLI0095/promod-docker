import "./App.css";
import "./quill.bubble.css";
import "./quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Processes from "./pages/Process/Processes";
import ProcessBasicInformation from "./pages/Process/ProcessBasicInformation";
import NewProcess from "./pages/Process/NewProcess";
import ElementSettings from "./pages/ElementSettings";
import Tasks from "./pages/Task/Tasks";
import WorkItems from "./pages/WorkItem/WorkItems";
import Roles from "./pages/Role/Roles";
import NewTask from "./pages/Task/NewTask";
import NewWorkItem from "./pages/WorkItem/NewWorkItem";
import NewRole from "./pages/Role/NewRole";
import TaskBasicInformation from "./pages/Task/TaskBasicInformation";
import WorkItemBasicInformation from "./pages/WorkItem/WorkItemBasicInformation";
import RoleBasicInformation from "./pages/Role/RoleBasicInformation";
import TaskSteps from "./pages/Task/TaskSteps";
import TaskWorkItems from "./pages/Task/TaskWorkItems";
import TaskRasci from "./pages/Task/TaskRasci";
import ProcessMetrics from "./pages/Process/ProcessMetrics";
import ProcessWorkflow from "./pages/Process/ProcessWorkflow";
import ProcessMatrix from "./pages/Process/ProcessMatrix";
import ProcessActivities from "./pages/Process/ProcessActivities";
import WorkItemStates from "./pages/WorkItem/WorkItemStates";
import HistoryPage from "./pages/HistoryPage";
import UserGroupsView from "./pages/Groups/UserGroupsView";
import GroupDetail from "./pages/Groups/GroupDetail";
import MainProjects from "./pages/Projects/MainProjects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Configurations from "./pages/Configurations";
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  palette: {
    secondary: {
      main: '#6035bd'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider autoHideDuration={3000} maxSnack={3}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<StartPage />} />
              <Route path="/user/:userId/processes" element={<Processes />} />
              <Route
                path="/user/:userId/processes/:processId"
                element={<ProcessBasicInformation />}
              />
              <Route
                path="/user/:userId/processes/newProcess"
                element={<NewProcess />}
              />
              <Route
                path="/user/:userId/processes/:processId/metrics"
                element={<ProcessMetrics />}
              />
              <Route
                path="/user/:userId/processes/:processId/workflow"
                element={<ProcessWorkflow />}
              />
              <Route
                path="/user/:userId/processes/:processId/activities"
                element={<ProcessActivities />}
              />
              <Route
                path="/user/:userId/processes/:processId/rasci"
                element={<ProcessMatrix />}
              />
              <Route
                path="/user/:userId/processes/:processId/history"
                element={<HistoryPage type={"process"} />}
              />
              <Route
                path="/user/:userId/processes/:processId/configurations"
                element={<Configurations type={"process"} />}
              />
              <Route
                path="/user/:userId/processes/:processId/settings"
                element={<ElementSettings type="process" />}
              />

              <Route path="/user/:userId/tasks" element={<Tasks />} />
              <Route path="/user/:userId/tasks/newTask" element={<NewTask />} />
              <Route
                path="/user/:userId/tasks/:taskId"
                element={<TaskBasicInformation />}
              />
              <Route
                path="/user/:userId/tasks/:taskId/steps"
                element={<TaskSteps />}
              />
              <Route
                path="/user/:userId/tasks/:taskId/workItems"
                element={<TaskWorkItems />}
              />
              <Route
                path="/user/:userId/tasks/:taskId/rasci"
                element={<TaskRasci />}
              />
              <Route
                path="/user/:userId/tasks/:taskId/history"
                element={<HistoryPage type={"task"} />}
              />
              <Route
                path="/user/:userId/tasks/:taskId/configurations"
                element={<Configurations type="task" />}
              />
              <Route
                path="/user/:userId/tasks/:taskId/settings"
                element={<ElementSettings type="task" />}
              />

              <Route path="/user/:userId/workItems" element={<WorkItems />} />
              <Route
                path="/user/:userId/workItems/newWorkItem"
                element={<NewWorkItem />}
              />
              <Route
                path="/user/:userId/workItems/:workItemId"
                element={<WorkItemBasicInformation />}
              />
              <Route
                path="/user/:userId/workItems/:workItemId/states"
                element={<WorkItemStates />}
              />
              <Route
                path="/user/:userId/workItems/:workItemId/history"
                element={<HistoryPage type={"workItem"} />}
              />
              <Route
                path="/user/:userId/workItems/:workItemId/configurations"
                element={<Configurations type="workItem" />}
              />
              <Route
                path="/user/:userId/workItems/:workItemId/settings"
                element={<ElementSettings type="workItem" />}
              />

              <Route path="/user/:userId/roles" element={<Roles />} />
              <Route path="/user/:userId/roles/newRole" element={<NewRole />} />
              <Route
                path="/user/:userId/roles/:roleId"
                element={<RoleBasicInformation />}
              />
              <Route
                path="/user/:userId/roles/:roleId/history"
                element={<HistoryPage type="role" />}
              />
              <Route
                path="/user/:userId/roles/:roleId/configurations"
                element={<Configurations type="role" />}
              />
              <Route
                path="/user/:userId/roles/:roleId/settings"
                element={<ElementSettings type="role" />}
              />

              <Route path="/user/:userId/groups" element={<UserGroupsView />} />
              <Route
                path="/user/:userId/groups/:groupId"
                element={<GroupDetail />}
              />

              <Route path="/user/:userId/projects" element={<MainProjects />} />

              <Route
                path="/user/:userId/projects/:projectId"
                element={<ProjectDetail />}
              />

              <Route path="/test" element={<ProcessWorkflow />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
