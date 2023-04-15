import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Add } from "@mui/icons-material";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
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

export default function AddUserToGroupModal() {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  const { groupId } = useParams();
  const { userId } = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedUser = useRef();

  const addUser = (event) => {
    const user = {
      id: selectedUser.current.getElementsByTagName("input")[0].value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(
      config.serverURL + "userGroups/" + groupId + "/addUser?userId=" + userId,
      requestOptions
    )
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

  useEffect(() => {
    fetch(config.serverURL + "users")
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [groupId]);

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add user to group
      </Button>
      <div style={{ height: 0, width: 0, display: "inline-flex" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={addUser}>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1} lineHeight={4.5}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ marginBottom: 2 }}
                    >
                      Adding user to group
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label1">User</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="User"
                        ref={selectedUser}
                        defaultValue={""}
                        required
                      >
                        {users.map((user) => (
                          <MenuItem key={user.id} value={user.id}>
                            {user.username}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Add user
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="error"
                      sx={{ marginLeft: 1 }}
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
