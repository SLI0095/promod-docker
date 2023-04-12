import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AccountTree,
  FormatListNumbered,
  History,
  Info,
  People,
  Settings,
  Shuffle,
  Straighten,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router";

export default function ProcessSubMenuFooter(props) {
  const [value] = React.useState(props.state);
  const { processId } = useParams();
  const userId = sessionStorage.getItem("userId");
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    if (newValue === "main") {
      navigate("/user/" + userId + "/processes/" + processId);
    }
    if (newValue === "metrics") {
      navigate("/user/" + userId + "/processes/" + processId + "/metrics");
    }
    if (newValue === "workflow") {
      navigate("/user/" + userId + "/processes/" + processId + "/workflow");
    }
    if (newValue === "activities") {
      navigate("/user/" + userId + "/processes/" + processId + "/activities");
    }
    if (newValue === "rasci") {
      navigate("/user/" + userId + "/processes/" + processId + "/rasci");
    }
    if (newValue === "history") {
      navigate("/user/" + userId + "/processes/" + processId + "/history");
    }
    if (newValue === "configurations") {
      navigate(
        "/user/" + userId + "/processes/" + processId + "/configurations"
      );
    }
    if (newValue === "settings") {
      navigate("/user/" + userId + "/processes/" + processId + "/settings");
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
          label="Metrics"
          value="metrics"
          icon={<Straighten />}
        />
        <BottomNavigationAction
          label="Workflow"
          value="workflow"
          icon={<AccountTree />}
        />
        <BottomNavigationAction
          label="Activities"
          value="activities"
          icon={<FormatListNumbered />}
        />
        <BottomNavigationAction
          label="RASCI matrix"
          value="rasci"
          icon={<People />}
        />
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
