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
import { useParams } from "react-router";
import config from "../../config.json";

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

//TODO add check if none selected
export default function NewRasciModal() {
  const [roles, setRoles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const addRasci = () => {
    const rasci = {
      role: {
        id: selectedRole.current.getElementsByTagName("input")[0].value,
      },
      type: rasciType.current.getElementsByTagName("input")[0].value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rasci),
    };
    fetch(
      config.serverURL + "tasks/" + taskId + "/addRasci?userId=" + userId,
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
          alert(data.message);
        }
      });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedRole = useRef();
  const rasciType = useRef();
  const { taskId } = useParams();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    fetch(
      config.serverURL + "roles/forTask?userId=" + userId + "&taskId=" + taskId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRoles(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [taskId, userId]);

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add new RASCI
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
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1} lineHeight={4.5}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ marginBottom: 2 }}
                    >
                      Adding new RASCI to the task
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label1">Role</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="Role"
                        ref={selectedRole}
                        defaultValue={""}
                      >
                        {roles.map((role) => (
                          <MenuItem key={role.id} value={role.id}>
                            {role.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label2">Responsibility</InputLabel>
                      <Select
                        defaultValue={"R"}
                        labelId="label2"
                        label="Responsibility"
                        ref={rasciType}
                        sx={{ minWidth: 175 }}
                      >
                        <MenuItem value={"R"}>Responsible</MenuItem>
                        <MenuItem value={"A"}>Accountable</MenuItem>
                        <MenuItem value={"S"}>Support</MenuItem>
                        <MenuItem value={"C"}>Consulted</MenuItem>
                        <MenuItem value={"I"}>Informed</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      onClick={addRasci}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Save RASCI
                    </Button>
                    <Button
                      type="submit"
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
