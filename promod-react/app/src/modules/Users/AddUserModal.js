import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useEffect, useRef } from "react";
import { Add } from "@mui/icons-material";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import config from "../../config.json";
import { getPath } from "../../resources/Utils";
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

export default function AddUserModal(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [userTypes, setUserTypes] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedUserType = useRef();
  const selectedRight = useRef();

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    fetch(config.serverURL + "userTypes")
      .then((res) => res.json())
      .then(
        (result) => {
          setUserTypes(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [userId]);

  const addRights = (event) => {
    const userType = {
      id: selectedUserType.current.getElementsByTagName("input")[0].value,
    };

    const right = selectedRight.current.getElementsByTagName("input")[0].value;
    const urlPath = getPath(props.type);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userType),
    };

    if (right === "edit") {
      fetch(
        config.serverURL + urlPath + props.itemId + "/addEdit?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
            event.preventDefault();
          }
        });
    }
    if (right === "view") {
      fetch(
        config.serverURL +
          urlPath +
          props.itemId +
          "/addAccess?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            enqueueSnackbar(data.message, { variant: "error" });
          }
        });
    }
  };

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add user rights
      </Button>
      <div style={{ height: 0, width: 0, display: "inline-flex" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={addRights}>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1} lineHeight={4.5}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ marginBottom: 2 }}
                    >
                      Adding new user right
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label1">User or group</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="User or group"
                        ref={selectedUserType}
                        defaultValue={""}
                        required
                      >
                        {userTypes.map((type) => (
                          <MenuItem key={type.id} value={type.id}>
                            {type.username !== undefined
                              ? type.username
                              : type.groupName}
                            {type.username !== undefined
                              ? " (User)"
                              : " (Group)"}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label2">Right</InputLabel>
                      <Select
                        defaultValue={"edit"}
                        labelId="label2"
                        label="Right"
                        ref={selectedRight}
                        sx={{ minWidth: 175 }}
                      >
                        <MenuItem value={"edit"}>Can edit</MenuItem>
                        <MenuItem value={"view"}>Can view</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Add
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ marginLeft: 1 }}
                    >
                      Close
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
