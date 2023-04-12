import MyAppBar from "../../modules/MyAppBar";
import {
  Button,
  Container,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";

import { useRef } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import { UploadFile } from "@mui/icons-material";
import { useNavigate } from "react-router";
import config from "../../config.json";

export default function NewProcess() {
  const [checked, setChecked] = React.useState(false);
  let navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const projectId = sessionStorage.getItem("projectId");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const saveProcess = () => {
    let process;
    // eslint-disable-next-line eqeqeq
    if (projectId == -1) {
      process = {
        name: name.current.value,
        briefDescription: briefDescription.current.value,
        mainDescription: mainDescription.current.getEditor().root.innerHTML,
        purpose: purpose.current.getEditor().root.innerHTML,
        scope: scope.current.getEditor().root.innerHTML,
        usageNotes: usageNotes.current.getEditor().root.innerHTML,
        alternatives: alternatives.current.getEditor().root.innerHTML,
        howToStaff: howToStaff.current.getEditor().root.innerHTML,
        keyConsiderations: keyConsiderations.current.getEditor().root.innerHTML,
        version: version.current.value,
        changeDate: changDate.current.value,
        changeDescription: changeDescription.current.getEditor().root.innerHTML,
        project: null,
      };
    } else {
      process = {
        name: name.current.value,
        briefDescription: briefDescription.current.value,
        mainDescription: mainDescription.current.getEditor().root.innerHTML,
        purpose: purpose.current.getEditor().root.innerHTML,
        scope: scope.current.getEditor().root.innerHTML,
        usageNotes: usageNotes.current.getEditor().root.innerHTML,
        alternatives: alternatives.current.getEditor().root.innerHTML,
        howToStaff: howToStaff.current.getEditor().root.innerHTML,
        keyConsiderations: keyConsiderations.current.getEditor().root.innerHTML,
        version: version.current.value,
        changeDate: changDate.current.value,
        changeDescription: changeDescription.current.getEditor().root.innerHTML,
        project: { id: projectId },
      };
    }

    if (checked) {
      const file = document.getElementById("fileInput").files[0];
      const fileReader = new FileReader();

      fileReader.onload = function (fileLoadedEvent) {
        const textFromFileLoaded = fileLoadedEvent.target.result;
        const bpmn = {
          bpmnContent: textFromFileLoaded,
        };
        const bodyRequest = {
          process: process,
          bpmn: bpmn,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyRequest),
        };
        fetch(
          config.serverURL + "processes/fromBpmn?userId=" + userId,
          requestOptions
        )
          .then((response) => {
            if (response.ok) {
              cancelCreation();
            } else {
              return response.json();
            }
          })
          .then((data) => {
            alert(data.message);
          });
      };
      fileReader.readAsText(file);
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(process),
      };
      fetch(config.serverURL + "processes/?userId=" + userId, requestOptions)
        .then((response) => {
          if (response.ok) {
            cancelCreation();
          } else {
            return response.json();
          }
        })
        .then((data) => {
          alert(data.message);
        });
    }
  };
  const cancelCreation = () => {
    navigate("/user/" + sessionStorage.getItem("userId") + "/processes");
  };

  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const purpose = useRef();
  const scope = useRef();
  const usageNotes = useRef();
  const alternatives = useRef();
  const howToStaff = useRef();
  const keyConsiderations = useRef();
  const version = useRef();
  const changDate = useRef();
  const changeDescription = useRef();

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
        <Typography variant={"h4"} component={"h2"} marginBottom={7}>
          New process
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
                Scope:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={scope} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Usage notes:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={usageNotes} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Alternatives:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={alternatives} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                How to staff:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={howToStaff} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Key considerations:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={keyConsiderations} />
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

            <Grid item xs={12} marginTop={5}>
              <FormControlLabel
                control={
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    name="bpmnSwitch"
                  />
                }
                label="Use BPMN file"
              />
            </Grid>
            <Grid hidden={!checked} item xs={12}>
              <Button
                variant="outlined"
                startIcon={<UploadFile />}
                component="label"
              >
                Upload File
                <input type="file" id="fileInput" accept=".bpmn" hidden />
              </Button>
            </Grid>
            <Grid item xs={12} marginTop={4} marginBottom={5}>
              <Button onClick={saveProcess} variant="contained">
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
