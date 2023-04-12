import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AddCircle } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

const ITEM_HEIGHT = 48;

export default function NewProcessButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleImport = () => {
    setAnchorEl(null);
  };
  const handleEmpty = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={3} align={"center"}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            minWidth: 75,
            minHeight: 75,
          }}
        >
          <AddCircle
            sx={{
              minWidth: 75,
              minHeight: 75,
              color: blue[600],
            }}
          />
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
          <MenuItem key={"empty"} onClick={handleEmpty}>
            Empty
          </MenuItem>
          <MenuItem key={"bpmn"} onClick={handleImport}>
            Import using BPMN
          </MenuItem>
        </Menu>
      </div>
    </Grid>
  );
}
