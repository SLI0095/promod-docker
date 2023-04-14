import { useEffect, useRef, useState } from "react";
import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import ReactQuill from "react-quill";
import * as React from "react";
import WorkItemSubMenuFooter from "../../modules/WorkItem/WorkItemSubMenuFooter";
import { Save } from "@mui/icons-material";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { useParams } from "react-router";
import config from "../../config.json";
import { useSnackbar } from "notistack";

export default function WorkItemBasicInformation() {
  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const workItemType = useRef();
  const urlAddress = useRef();
  const templateText = useRef();
  const purpose = useRef();
  const keyConsiderations = useRef();
  const briefOutline = useRef();
  const notation = useRef();
  const impactOfNotHaving = useRef();
  const reasonForNotNeeding = useRef();
  const version = useRef();
  const changDate = useRef();
  const changeDescription = useRef();

  const { workItemId } = useParams();
  const userId = sessionStorage.getItem("userId");
  const [workItem, setWorkItem] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetch(config.serverURL + "workItems/" + workItemId)
      .then((res) => res.json())
      .then(
        (result) => {
          setWorkItem(result);
        },
        (error) => {
          alert(error.body.message);
        }
      );
  }, [workItemId]);

  const saveChanges = (event) => {
    event.preventDefault();
    const workItem = {
      name: name.current.value,
      briefDescription: briefDescription.current.value,
      mainDescription: mainDescription.current.getEditor().root.innerHTML,
      workItemType: workItemType.current.value,
      urlAdress: urlAddress.current.value,
      purpose: purpose.current.getEditor().root.innerHTML,
      keyConsiderations: keyConsiderations.current.getEditor().root.innerHTML,
      briefOutline: briefOutline.current.getEditor().root.innerHTML,
      notation: notation.current.getEditor().root.innerHTML,
      impactOfNotHaving: impactOfNotHaving.current.getEditor().root.innerHTML,
      reasonForNotNeeding:
        reasonForNotNeeding.current.getEditor().root.innerHTML,
      version: version.current.value,
      changeDate: changDate.current.value,
      templateText: templateText.current.getEditor().root.innerHTML,
      changeDescription: changeDescription.current.getEditor().root.innerHTML,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workItem),
    };
    fetch(
      config.serverURL + "workItems/" + workItemId + "?userId=" + userId,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar("Changes saved.", { variant: "success" });
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

  if (workItem === null) {
    return (
      <>
        <MyAppBar />
        <TaskSubMenuFooter state="main" />
      </>
    );
  } else {
    return (
      <>
        <MyAppBar />
        <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
          <form onSubmit={saveChanges}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant={"h5"} component={"label"}>
                  Name:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin={"normal"}
                  inputRef={name}
                  fullWidth
                  defaultValue={workItem.name}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Brief description:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin={"normal"}
                  inputRef={briefDescription}
                  multiline
                  rows={5}
                  fullWidth
                  defaultValue={workItem.briefDescription}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Main description:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={workItem.mainDescription}
                  theme="snow"
                  ref={mainDescription}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"h5"} component={"label"}>
                  Work item type:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin={"normal"}
                  inputRef={workItemType}
                  fullWidth
                  defaultValue={workItem.workItemType}
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
                  inputRef={urlAddress}
                  defaultValue={workItem.urlAdress}
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
                  defaultValue={workItem.templateText}
                  theme="snow"
                  ref={templateText}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Purpose:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={workItem.purpose}
                  theme="snow"
                  ref={purpose}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Key considerations:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={workItem.keyConsiderations}
                  theme="snow"
                  ref={keyConsiderations}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Brief outline:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={workItem.briefOutline}
                  theme="snow"
                  ref={briefOutline}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Notation:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={workItem.notation}
                  theme="snow"
                  ref={notation}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Impact of not having:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={workItem.impactOfNotHaving}
                  theme="snow"
                  ref={impactOfNotHaving}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Reasons for not needing:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={workItem.reasonForNotNeeding}
                  theme="snow"
                  ref={reasonForNotNeeding}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"h5"} component={"label"}>
                  Version:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={workItem.version}
                  margin={"normal"}
                  inputRef={version}
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
                  defaultValue={workItem.changeDate}
                  margin={"normal"}
                  inputRef={changDate}
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
                  defaultValue={workItem.changeDescription}
                  theme="snow"
                  ref={changeDescription}
                />
              </Grid>
              <Grid item xs={2} marginTop={4} marginBottom={5}>
                <Button
                  startIcon={<Save />}
                  type={"submit"}
                  variant="contained"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
        <WorkItemSubMenuFooter state="main" />
      </>
    );
  }
}
