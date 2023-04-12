import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { History, Info, Settings, Shuffle } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router";

export default function RoleSubMenuFooter(props) {
  const [value] = React.useState(props.state);
  let navigate = useNavigate();
  const { roleId } = useParams();
  const userId = sessionStorage.getItem("userId");

  const handleChange = (event, newValue) => {
    if (newValue === "main") {
      navigate("/user/" + userId + "/roles/" + roleId);
    }
    if (newValue === "history") {
      navigate("/user/" + userId + "/roles/" + roleId + "/history");
    }
    if (newValue === "configurations") {
      navigate("/user/" + userId + "/roles/" + roleId + "/configurations");
    }
    if (newValue === "settings") {
      navigate("/user/" + userId + "/roles/" + roleId + "/settings");
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
