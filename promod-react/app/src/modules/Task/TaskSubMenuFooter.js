import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  FilePresent,
  FormatListNumbered,
  History,
  Info,
  People,
  Settings,
  Shuffle,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router";

export default function TaskSubMenuFooter(props) {
  const [value] = React.useState(props.state);
  const { taskId } = useParams();
  const userId = sessionStorage.getItem("userId");
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    if (newValue === "main") {
      navigate("/user/" + userId + "/tasks/" + taskId);
    }
    if (newValue === "steps") {
      navigate("/user/" + userId + "/tasks/" + taskId + "/steps");
    }
    if (newValue === "workItems") {
      navigate("/user/" + userId + "/tasks/" + taskId + "/workItems");
    }
    if (newValue === "rasci") {
      navigate("/user/" + userId + "/tasks/" + taskId + "/rasci");
    }
    if (newValue === "history") {
      navigate("/user/" + userId + "/tasks/" + taskId + "/history");
    }
    if (newValue === "configurations") {
      navigate("/user/" + userId + "/tasks/" + taskId + "/configurations");
    }
    if (newValue === "settings") {
      navigate("/user/" + userId + "/tasks/" + taskId + "/settings");
    }
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Main info"
          value="main"
          icon={<Info />}
        />
        <BottomNavigationAction
          label="Steps"
          value="steps"
          icon={<FormatListNumbered />}
        />
        <BottomNavigationAction
          label="Work items"
          value="workItems"
          icon={<FilePresent />}
        />
        <BottomNavigationAction label="RASCI" value="rasci" icon={<People />} />
        <BottomNavigationAction
          label="History"
          value="history"
          icon={<History />}
        />
        <BottomNavigationAction
          label="Configurations"
          value="configurations"
          icon={<Shuffle />}
        />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<Settings />}
        />
      </BottomNavigation>
    </Paper>
  );
}
