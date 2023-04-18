import { Grid, Link, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaperElementMenu from "./PaperElementMenu";

export default function PaperElement(props) {
  const userId = sessionStorage.getItem("userId");

  function getLink(type) {
    if (type === "process") {
      return (
        <Link
          href={"/user/" + userId + "/processes/" + props.element.id}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          {props.element.name}
        </Link>
      );
    }
    if (type === "task") {
      return (
        <Link
          href={"/user/" + userId + "/tasks/" + props.element.id}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          {props.element.name}
        </Link>
      );
    }
    if (type === "workItem") {
      return (
        <Link
          href={"/user/" + userId + "/workItems/" + props.element.id}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          {props.element.name}
        </Link>
      );
    }
    if (type === "role") {
      return (
        <Link
          href={"/user/" + userId + "/roles/" + props.element.id}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          {props.element.name}
        </Link>
      );
    }

    return <></>;
  }

  return (
    <>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >
            <Typography
              noWrap
              variant={"h6"}
              component={"h3"}
              sx={{
                paddingX: 2,
                paddingY: 2,
              }}
            >
              {getLink(props.type)}
            </Typography>
            <PaperElementMenu type={props.type} element={props.element} />
          </Box>
          <Box height={70}>
            <Typography
              noWrap
              variant={"body1"}
              component={"p"}
              sx={{
                paddingX: 2,
                paddingBottom: 2,
              }}
            >
              {props.element.briefDescription}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
