import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import config from "../config.json";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal(props) {
  const [open, setOpen] = React.useState(false);
  const userId = sessionStorage.getItem("userId");
  let navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const deleteElement = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.element),
    };
    if (props.type === "process") {
      fetch(
        config.serverURL +
          "processes/" +
          props.element.id +
          "?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
    if (props.type === "task") {
      fetch(
        config.serverURL + "tasks/" + props.element.id + "?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
    if (props.type === "workItem") {
      fetch(
        config.serverURL +
          "workItems/" +
          props.element.id +
          "?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
    if (props.type === "role") {
      fetch(
        config.serverURL + "roles/" + props.element.id + "?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            navigate(0);
            return;
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
        });
    }
  };

  return (
    <>
      <MenuItem key={"delete"} onClick={handleOpen}>
        Delete
      </MenuItem>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form>
            <Box sx={style}>
              <Grid container spacing={1}>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography variant="h6" component="h2">
                    Are you sure you want delete this {props.type}:
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography variant="h6" component="h2">
                    {props.element.name}
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Button
                    onClick={deleteElement}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Yes
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{ marginLeft: 1 }}
                  >
                    No
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Modal>
      </div>
    </>
  );
}
