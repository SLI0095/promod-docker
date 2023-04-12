import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteModal from "./DeleteModal";
import NewConfigurationModal from "./NewConfigurationModal";

const ITEM_HEIGHT = 48;

export default function PaperElementMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          width: "100",
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {/*<MenuItem key={"newVersion"} onClick={handleTemplate}>
          Use as template
        </MenuItem>*/}
        <NewConfigurationModal type={props.type} element={props.element} />
        <DeleteModal
          type={props.type}
          element={props.element}
          parentClose={handleClose}
        />
      </Menu>
    </div>
  );
}
