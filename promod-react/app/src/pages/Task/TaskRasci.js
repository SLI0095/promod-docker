import MyAppBar from "../../modules/MyAppBar";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import NewRasciModal from "../../modules/Task/NewRasciModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import config from "../../config.json";

export default function TaskRasci() {
  const [rasciToRender, setRasciToRender] = useState({
    R: [],
    A: [],
    S: [],
    C: [],
    I: [],
  });
  const { taskId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "tasks/" + taskId)
      .then((res) => res.json())
      .then(
        (result) => {
          let r = [];
          let a = [];
          let s = [];
          let c = [];
          let i = [];
          result.rasciList.forEach(function (item) {
            if (item.type === "R") {
              r.push(item);
            } else if (item.type === "A") {
              a.push(item);
            } else if (item.type === "S") {
              s.push(item);
            } else if (item.type === "C") {
              c.push(item);
            } else if (item.type === "I") {
              i.push(item);
            }
          });
          setRasciToRender({
            R: r,
            A: a,
            S: s,
            C: c,
            I: i,
          });
        },
        (error) => {
          alert(error);
        }
      );
  }, [taskId]);
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <Typography variant={"h4"} component={"h2"}>
          Required
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {rasciToRender.R.map((rasci) => (
            <MyListItem
              type="rasci"
              name={rasci.role.name}
              description={rasci.role.briefDescription}
              id={rasci.id}
              key={rasci.id}
            />
          ))}
        </List>
        <Typography variant={"h4"} component={"h2"} marginTop={3}>
          Accountable
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {rasciToRender.A.map((rasci) => (
            <MyListItem
              type="rasci"
              name={rasci.role.name}
              description={rasci.role.briefDescription}
              id={rasci.id}
              key={rasci.id}
            />
          ))}
        </List>
        <Typography variant={"h4"} component={"h2"} marginTop={3}>
          Support
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {rasciToRender.S.map((rasci) => (
            <MyListItem
              type="rasci"
              name={rasci.role.name}
              description={rasci.role.briefDescription}
              id={rasci.id}
              key={rasci.id}
            />
          ))}
        </List>
        <Typography variant={"h4"} component={"h2"} marginTop={3}>
          Consulted
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {rasciToRender.C.map((rasci) => (
            <MyListItem
              type="rasci"
              name={rasci.role.name}
              description={rasci.role.briefDescription}
              id={rasci.id}
              key={rasci.id}
            />
          ))}
        </List>
        <Typography variant={"h4"} component={"h2"} marginTop={3}>
          Informed
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {rasciToRender.I.map((rasci) => (
            <MyListItem
              type="rasci"
              name={rasci.role.name}
              description={rasci.role.briefDescription}
              id={rasci.id}
              key={rasci.id}
            />
          ))}
        </List>
        <NewRasciModal />
      </Container>
      <TaskSubMenuFooter state="rasci" />
    </>
  );
}
