import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import RegisterModal from "../modules/RegisterModal";
import * as React from "react";
import { useRef } from "react";
import config from "../config.json";
import { useNavigate } from "react-router";
import { setDefaultProject } from "../resources/Utils";

export default function StartPage() {
  const [openSnack, setOpenSnack] = React.useState(false);
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };
  const username = useRef();
  const password = useRef();
  let navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    let user = {
      username: username.current.value,
      password: password.current.value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(config.serverURL + "login", requestOptions).then(function (response) {
      if (response.status === 200) {
        response.json().then((data) => {
          let userId = data;
          sessionStorage.setItem("userId", userId);
          sessionStorage.setItem("userName", user.username);
          sessionStorage.setItem("isLoggedIn", true);
          setDefaultProject();
          navigate("/user/" + userId + "/processes");
          console.log(data);
        });
      }
      if (response.status === 400) {
        setOpenSnack(true);
      }
    });
  }

  return (
    <>
      <Container>
        <Box textAlign={"center"}>
          <Typography
            variant="h2"
            component="h1"
            marginY={5}
            fontWeight={"bold"}
          >
            ProMod - Process Modeling Tool
          </Typography>
        </Box>
        <form>
          <Grid container spacing={1}>
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Box>
                <Typography variant="h5" component={"h4"}>
                  Please, log in:
                </Typography>
              </Box>
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
                  onClick={login}
                  type={"submit"}
                  variant="contained"
                  sx={{
                    marginRight: 2,
                  }}
                >
                  Log in
                </Button>
                <RegisterModal />
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
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
          Unable to log in, please try again.
        </Alert>
      </Snackbar>
    </>
  );
}
