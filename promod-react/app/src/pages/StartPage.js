import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import RegisterModal from "../modules/RegisterModal";
import * as React from "react";
import { useRef } from "react";
import config from "../config.json";
import { useNavigate } from "react-router";
import { setDefaultProject } from "../resources/Utils";
import { useSnackbar } from "notistack";

export default function StartPage() {
  const username = useRef();
  const password = useRef();
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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
        });
      }
      if (response.status === 400) {
        enqueueSnackbar("Unable to log in, please try again.", {
          variant: "error",
        });
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
        <Grid container spacing={1}>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}
          >
            <form id="login" onSubmit={login}>
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
            </form>
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
                type={"submit"}
                form="login"
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
      </Container>
    </>
  );
}
