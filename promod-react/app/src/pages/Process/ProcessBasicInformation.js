import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { Download, Save } from "@mui/icons-material";
import config from "../../config.json";
import { useParams } from "react-router";
import { useSnackbar } from "notistack";

export default function ProcessBasicInformation() {
  const { processId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const userId = sessionStorage.getItem("userId");
  const saveChanges = (event) => {
    event.preventDefault();
    const process = {
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
    };
    console.log(process);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(process),
    };
    fetch(
      config.serverURL + "processes/" + processId + "?userId=" + userId,
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
  const [process, setProcess] = useState(null);

  useEffect(() => {
    fetch(config.serverURL + "processes/" + processId)
      .then((res) => res.json())
      .then(
        (result) => {
          setProcess(result);
        },
        (error) => {
          alert(error.body.message);
        }
      );
  }, [processId]);

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

  function downloadHtml(processName) {
    fetch(config.serverURL + "processes/" + processId + "/generateHTML")
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
      })
      .then((data) => {
        var a = document.getElementById("downloadLink");
        a.setAttribute("href", URL.createObjectURL(data));
        a.setAttribute("download", processName + ".zip");
        a.click();
      });
  }

  if (process === null) {
    return (
      <>
        <MyAppBar />
        <ProcessSubMenuFooter state="main" />
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
                  margin={"normal"}
                  inputRef={name}
                  required
                  defaultValue={process.name}
                  fullWidth
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
                  inputRef={briefDescription}
                  defaultValue={process.briefDescription}
                  multiline
                  rows={5}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Main description:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={process.mainDescription}
                  theme="snow"
                  ref={mainDescription}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Purpose:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={process.purpose}
                  theme="snow"
                  ref={purpose}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Scope:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={process.scope}
                  theme="snow"
                  ref={scope}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Usage notes:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={process.usageNotes}
                  theme="snow"
                  ref={usageNotes}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Alternatives:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={process.alternatives}
                  theme="snow"
                  ref={alternatives}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  How to staff:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={process.howToStaff}
                  theme="snow"
                  ref={howToStaff}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Key considerations:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  defaultValue={process.keyConsiderations}
                  theme="snow"
                  ref={keyConsiderations}
                />
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Typography variant={"h5"} component={"label"}>
                  Version:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={process.version}
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
                  margin={"normal"}
                  defaultValue={process.changeDate}
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
                  defaultValue={process.changeDescription}
                  theme="snow"
                  ref={changeDescription}
                />
              </Grid>
              <Grid item xs={12} marginTop={2} marginBottom={5}>
                <Button type="submit" startIcon={<Save />} variant="contained">
                  Save
                </Button>
                <Button
                  startIcon={<Download />}
                  sx={{ marginLeft: 2 }}
                  onClick={() => downloadHtml(process.name)}
                  variant="contained"
                >
                  Download as HTML
                </Button>
              </Grid>
            </Grid>
          </form>
          <ProcessSubMenuFooter state="main" />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */}
          <a id="downloadLink" hidden></a>
        </Container>
      </>
    );
  }
}
