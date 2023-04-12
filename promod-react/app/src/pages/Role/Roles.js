import MyAppBar from "../../modules/MyAppBar";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import PaperElement from "../../modules/PaperElement";
import NewElementButton from "../../modules/NewElementButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import config from "../../config.json";
import { useParams } from "react-router";

export default function Roles() {
  const [roles, setRoles] = useState([]);
  const [templates, setTemplates] = useState(true);
  const [nonTemplates, setNonTemplates] = useState(true);
  const { userId } = useParams();
  const projectId = sessionStorage.getItem("projectId");

  useEffect(() => {
    fetch(
      config.serverURL +
        "roles/all?userId=" +
        userId +
        "&projectId=" +
        projectId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRoles(result);
        },
        () => {
          alert("Could not load data.");
        }
      );
  }, [userId]);

  function loadRequiredData(nonTemplates, templates) {
    if (templates && nonTemplates) {
      fetch(
        config.serverURL +
          "roles/all?userId=" +
          userId +
          "&projectId=" +
          projectId
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setRoles(result);
          },
          () => {
            alert("Could not load data.");
          }
        );
    }
    if (templates && !nonTemplates) {
      fetch(
        config.serverURL +
          "roles/isTemplate?userId=" +
          userId +
          "&isTemplate=true" +
          "&projectId=" +
          projectId
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setRoles(result);
          },
          () => {
            alert("Could not load data.");
          }
        );
    }
    if (!templates && nonTemplates) {
      fetch(
        config.serverURL +
          "roles/isTemplate?userId=" +
          userId +
          "&isTemplate=false" +
          "&projectId=" +
          projectId
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setRoles(result);
          },
          () => {
            alert("Could not load data.");
          }
        );
    } else {
      setRoles([]);
    }
  }

  const changeCheckboxes = (checked, type) => {
    if (type === 1) {
      setNonTemplates(checked);
      loadRequiredData(checked, templates);
    }
    if (type === 2) {
      setTemplates(checked);
      loadRequiredData(nonTemplates, checked);
    }
  };

  return (
    <>
      <MyAppBar />
      <Container>
        <Grid container justifyContent={"flex-end"} marginTop={3}>
          <Grid item xs={6}>
            <Typography variant={"h4"} component={"h2"} marginY={3}>
              Roles
            </Typography>
          </Grid>
          <Grid container item xs={6} justifyContent={"flex-end"} marginTop={4}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={nonTemplates}
                    onChange={(e) => changeCheckboxes(e.target.checked, 1)}
                  />
                }
                label="Show non-templates"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={templates}
                    onChange={(e) => changeCheckboxes(e.target.checked, 2)}
                  />
                }
                label="Show templates"
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          marginTop={2}
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <NewElementButton type="role" />
          {roles.map((role) => (
            <PaperElement key={role.id} type={"role"} element={role} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
