import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, Grid, Snackbar, TextField } from "@mui/material";
import { useRef } from "react";
import config from "../config.json";

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

export default function RegisterModal() {
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [snackText, setSnackText] = React.useState("Unable to register!");
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenSuccess(false);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  function registerUser(event) {
    event.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      setSnackText("Passwords not match!");
      setOpenSnack(true);
      return;
    }
    let currentUsername = username.current.value;
    let currentPassword = password.current.value;
    let user = {
      username: currentUsername,
      password: currentPassword,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(config.serverURL + "register", requestOptions).then(function (
      response
    ) {
      if (response.status === 200) {
        setOpenSuccess(true);
      }
      if (response.status === 400) {
        setSnackText("User already exists!");
        setOpenSnack(true);
      }
    });
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Sign up
      </Button>
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
                    Register new user
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <TextField
                    margin={"normal"}
                    required
                    inputRef={username}
                    label="Username"
                  />
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <TextField
                    margin={"normal"}
                    required
                    inputRef={password}
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <TextField
                    margin={"normal"}
                    required
                    inputRef={passwordAgain}
                    label="Password again"
                    type="password"
                  />
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                >
                  <Box
                    sx={{
                      marginTop: 2,
                    }}
                  >
                    <Button
                      type="submit"
                      onClick={registerUser}
                      variant="contained"
                      sx={{
                        marginRight: 2,
                      }}
                    >
                      Register
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Modal>
      </div>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackText}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={1000}
        onClose={handleSuccessClose}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          User registered!
        </Alert>
      </Snackbar>
    </>
  );
}
