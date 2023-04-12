import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router";
import config from "../../config.json";

export default function NewWorkItem() {
  let navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const projectId = sessionStorage.getItem("projectId");

  const saveWorkItem = () => {
    let workItem;
    // eslint-disable-next-line eqeqeq
    if (projectId == -1) {
      workItem = {
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
        project: null,
      };
    } else {
      workItem = {
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
        project: { id: projectId },
      };
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workItem),
    };
    fetch(config.serverURL + "workItems?userId=" + userId, requestOptions)
      .then((response) => {
        if (response.ok) {
          cancelCreation();
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
  const cancelCreation = () => {
    navigate("/user/" + userId + "/workItems");
  };

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

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
        <Typography variant={"h4"} component={"h2"} marginBottom={7}>
          New work item
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant={"h5"} component={"label"}>
                Name:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField required margin={"normal"} inputRef={name} fullWidth />
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
              />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Main description:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={mainDescription} />
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
                fullWidth
              />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Template for work item:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={templateText} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Purpose:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={purpose} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Key considerations:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={keyConsiderations} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Brief outline:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={briefOutline} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Notation:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={notation} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Impact of not having:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={impactOfNotHaving} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Reasons for not needing:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={reasonForNotNeeding} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h5"} component={"label"}>
                Version:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField margin={"normal"} inputRef={version} fullWidth />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Change date:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
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
              <ReactQuill theme="snow" ref={changeDescription} />
            </Grid>
            <Grid item xs={12} marginTop={4} marginBottom={5}>
              <Button onClick={saveWorkItem} variant="contained">
                Create
              </Button>
              <Button
                onClick={cancelCreation}
                variant="contained"
                sx={{ marginLeft: 2 }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
