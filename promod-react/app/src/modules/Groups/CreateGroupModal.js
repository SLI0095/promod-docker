import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import config from "../../config.json";
import { useParams } from "react-router";
import { useRef } from "react";
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

export default function CreateGroupModal() {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const createGroup = (event) => {
    const group = {
      groupName: groupName.current.value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    };
    fetch(config.serverURL + "userGroups?userId=" + userId, requestOptions)
      .then((response) => {
        if (response.ok) {
          setOpen(false);
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          enqueueSnackbar(data.message, { variant: "error" });
          event.preventDefault();
        }
      });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userId } = useParams();
  const groupName = useRef();

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Create new group
      </Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={createGroup}>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="h6" component="h2">
                      New group
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      required
                      inputRef={groupName}
                      label="Group name"
                    />
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Create
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="error"
                      sx={{ marginRight: 1 }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </form>
        </Modal>
      </div>
    </>
  );
}
