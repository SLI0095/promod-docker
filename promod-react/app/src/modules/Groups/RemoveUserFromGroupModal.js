import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { Clear } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import config from "../../config.json";
import { useParams } from "react-router";
import { useSnackbar } from "notistack";

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

export default function RemoveUserFromGroupModal(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const { userId } = useParams();
  const { groupId } = useParams();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const removeUser = () => {
    const user = {
      id: props.user.id,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(
      config.serverURL +
        "userGroups/" +
        groupId +
        "/removeUser?userId=" +
        userId,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setOpen(false);
          window.location.reload(false);
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          enqueueSnackbar(data.message, { variant: "error" });
        }
      });
  };

  return (
    <>
      <IconButton
        edge={"end"}
        aria-label="remove"
        id="remove-button"
        onClick={() => handleOpen()}
        sx={{
          marginLeft: 2,
        }}
      >
        <Clear />
      </IconButton>
      <div style={{ height: 0, width: 0, display: "inline-flex" }}>
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
                    Are you sure you want remove this user from group:
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography variant="h6" component="h2">
                    {props.user.username}
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Button
                    onClick={removeUser}
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
