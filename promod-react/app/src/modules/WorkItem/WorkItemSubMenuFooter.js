import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  History,
  Info,
  MultipleStop,
  Settings,
  Shuffle,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router";

export default function WorkItemSubMenuFooter(props) {
  const [value] = React.useState(props.state);
  let navigate = useNavigate();
  const { workItemId } = useParams();
  const userId = sessionStorage.getItem("userId");

  const handleChange = (event, newValue) => {
    if (newValue === "main") {
      navigate("/user/" + userId + "/workItems/" + workItemId);
    }
    if (newValue === "states") {
      navigate("/user/" + userId + "/workItems/" + workItemId + "/states");
    }
    if (newValue === "history") {
      navigate("/user/" + userId + "/workItems/" + workItemId + "/history");
    }
    if (newValue === "configurations") {
      navigate(
        "/user/" + userId + "/workItems/" + workItemId + "/configurations"
      );
    }
    if (newValue === "settings") {
      navigate("/user/" + userId + "/workItems/" + workItemId + "/settings");
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
          label="States"
          value="states"
          icon={<MultipleStop />}
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
