import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, List, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import MyListItem from "../MyListItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "75%",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function WorkItemSnapshotDetail(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{ marginTop: 2 }}>
        Detail
      </Button>
      <div style={{ height: 0, width: 0, display: "inline-flex" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography variant="h4" component="h2">
                      Basic information
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"label"}>
                      Name:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      defaultValue={props.workItem.name}
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Brief description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin={"normal"}
                      multiline
                      rows={5}
                      fullWidth
                      defaultValue={props.workItem.briefDescription}
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Main description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.mainDescription}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"label"}>
                      Work item type:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      defaultValue={props.workItem.workItemType}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"label"}>
                      URL address:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type={"url"}
                      margin={"normal"}
                      defaultValue={props.workItem.urlAdress}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Template for work item:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.templateText}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Purpose:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.purpose}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Key considerations:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.keyConsiderations}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Brief outline:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.briefOutline}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Notation:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.notation}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Impact of not having:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.impactOfNotHaving}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Reasons for not needing:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.reasonForNotNeeding}
                      theme="snow"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"h5"} component={"label"}>
                      Version:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      defaultValue={props.workItem.version}
                      margin={"normal"}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Change date:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      defaultValue={props.workItem.changeDate}
                      margin={"normal"}
                      type="date"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} marginTop={5}>
                    <Typography variant={"h5"} component={"label"}>
                      Change description:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill
                      defaultValue={props.workItem.changeDescription}
                      theme="snow"
                    />
                  </Grid>

                  <Grid textAlign={"center"} item xs={12} marginTop={7}>
                    <Typography variant="h4" component="h2">
                      States
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <List
                      sx={{
                        backgroundColor: "background.paper",
                      }}
                    >
                      {props.workItem.workItemStates.map((state) => (
                        <MyListItem
                          name={state.stateName}
                          description={state.stateDescription}
                          id={state.id}
                          key={state.id}
                          type="snapshot"
                        />
                      ))}
                    </List>
                  </Grid>

                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      onClick={handleClose}
                      variant="contained"
                      sx={{ marginRight: 1 }}
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
