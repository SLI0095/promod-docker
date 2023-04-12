import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function TaskHistory() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: "80%" }}>Task name</Typography>
            <Typography sx={{ color: "text.secondary" }}>19.08.2021</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button variant={"contained"} sx={{ marginTop: 2, marginRight: 1 }}>
              Detail
            </Button>
            <Button sx={{ marginTop: 2, marginLeft: 1 }} variant={"contained"}>
              Revert to this
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: "80%" }}>Task name</Typography>
            <Typography sx={{ color: "text.secondary" }}>19.08.2021</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button variant={"contained"} sx={{ marginTop: 2, marginRight: 1 }}>
              Detail
            </Button>
            <Button sx={{ marginTop: 2, marginLeft: 1 }} variant={"contained"}>
              Revert to this
            </Button>
          </AccordionDetails>
        </Accordion>
      </Container>
      <TaskSubMenuFooter state={"history"} />
    </>
  );
}
