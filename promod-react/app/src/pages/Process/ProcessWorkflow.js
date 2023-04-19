import MyAppBar from "../../modules/MyAppBar";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-js.css";
import BpmnJS from "bpmn-js/lib/Modeler";
import BpmnPaletteModule from "bpmn-js/lib/features/palette";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Box, FormControl, Grid, InputLabel, Select } from "@mui/material";
import { Download, Save } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useNavigate, useParams } from "react-router";
import config from "../../config.json";
import { useSnackbar } from "notistack";

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

export default function ProcessWorkflow() {
  const [openTasks, setOpenTasks] = useState(false);
  const handleOpenTasks = () => setOpenTasks(true);
  const handleCloseTasks = () => setOpenTasks(false);
  const [openWorkItems, setOpenWorkItems] = useState(false);
  const handleOpenWorkItems = () => setOpenWorkItems(true);
  const handleCloseWorkItems = () => setOpenWorkItems(false);
  const modeler = useRef();
  const [allElements, setElements] = useState([]);
  const [allWorkItems, setAllWorkItems] = useState([]);
  const selectedWorkItem = useRef();
  const shapeElement = useRef(null);
  const selectedElement = useRef();
  const { processId } = useParams();
  const userId = sessionStorage.getItem("userId");
  const projectId = sessionStorage.getItem("projectId");
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();

  function getElement(id) {
    var result;
    id = parseInt(id);
    allElements.forEach(function (item) {
      if (item.id === id) {
        result = item;
      }
    });
    return result;
  }

  function getWorkItem(id) {
    var result;
    id = parseInt(id);
    allWorkItems.forEach(function (item) {
      if (item.id === id) {
        result = item;
      }
    });
    return result;
  }

  function bindModeler() {
    const $modelerContainer = document.querySelector("#canvas");
    modeler.current = new BpmnJS({
      container: $modelerContainer,
      keyboard: {
        bindTo: document.body,
      },
      BpmnPaletteModule,
    });
    modelerSetEvents();
    innitDiagram();
  }

  function innitDiagram(xml) {
    if (xml != null) {
      modeler.current.importXML(xml);
    } else {
      modeler.current.createDiagram();
    }
  }

  useEffect(() => {
    bindModeler();
    fetch(config.serverURL + "processes/" + processId)
      .then((res) => res.json())
      .then(
        (result) => {
          innitDiagram(result.workflow.bpmnContent);
        },
        (error) => {
          alert(error);
        }
      );
    fetch(
      config.serverURL +
        "elements/forProcess?userId=" +
        userId +
        "&processId=" +
        processId +
        "&projectId=" +
        projectId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let list = [];
          result.forEach(function (item) {
            if (item.id.toString() !== processId) {
              list.push(item);
            }
          });
          setElements(list);
        },
        (error) => {
          alert(error);
        }
      );
    fetch(
      config.serverURL +
        "workItems/forProcess?userId=" +
        userId +
        "&processId=" +
        processId +
        "&projectId=" +
        projectId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setAllWorkItems(result);
        },
        (error) => {
          alert(error.body.message);
        }
      );
    // eslint-disable-next-line
  }, []);

  function modelerSetEvents() {
    modeler.current.on("commandStack.shape.create.postExecute", (e) => {
      let element = e.context.shape;
      if (
        element.type === "bpmn:Task" &&
        element.businessObject.name === undefined
      ) {
        shapeElement.current = element.id;
        handleOpenTasks();
      } else if (
        element.type === "bpmn:DataObjectReference" &&
        element.businessObject.name === undefined
      ) {
        shapeElement.current = element.id;
        handleOpenWorkItems();
      }
    });
  }

  function createSelectedWorkItem(idOrValue) {
    const elementRegistry = modeler.current.get("elementRegistry"),
      modeling = modeler.current.get("modeling");

    if (idOrValue === "newWorkItem") {
      const element = elementRegistry.get(shapeElement.current);
      modeling.updateProperties(element, { id: "WorkItem_new_" + element.id });
    } else {
      let workItem = getWorkItem(
        selectedWorkItem.current.getElementsByTagName("input")[0].value
      );
      const element = elementRegistry.get(shapeElement.current);
      modeling.updateProperties(element, {
        id: "WorkItem_" + workItem.id + "_" + element.id,
        name: workItem.name,
      });
    }
  }

  function createSelectedTask() {
    const bpmnFactory = modeler.current.get("bpmnFactory"),
      elementFactory = modeler.current.get("elementFactory"),
      elementRegistry = modeler.current.get("elementRegistry"),
      modeling = modeler.current.get("modeling"),
      replace = modeler.current.get("bpmnReplace");

    if (
      selectedElement.current.getElementsByTagName("input")[0].value === "new"
    ) {
      const element = elementRegistry.get(shapeElement.current);
      modeling.updateProperties(element, { id: "Element_new_" + element.id });
    } else {
      let task_process = getElement(
        selectedElement.current.getElementsByTagName("input")[0].value
      );
      const element = elementRegistry.get(shapeElement.current);
      if (task_process.steps === undefined) {
        modeling.updateProperties(element, { name: task_process.name });
        let businessObject = bpmnFactory.create("bpmn:CallActivity", {
          name: task_process.name,
        });
        let proc = elementFactory.createShape({
          type: "bpmn:CallActivity",
          businessObject: businessObject,
        });
        modeling.updateProperties(element, {
          id: "Element_" + task_process.id + "_" + element.id,
        });
        replace.replaceElement(element, proc);
      } else {
        let businessObject = bpmnFactory.create(
          "bpmn:" +
            task_process.taskType[0].toUpperCase() +
            task_process.taskType.substring(1),
          { name: task_process.name }
        );
        let task = elementFactory.createShape({
          type:
            "bpmn:" +
            task_process.taskType[0].toUpperCase() +
            task_process.taskType.substring(1),
          businessObject: businessObject,
        });
        modeling.updateProperties(element, {
          name: task_process.name,
          id: "Element_" + task_process.id + "_" + element.id,
        });
        const newElement = replace.replaceElement(element, task);
        task_process.mandatoryInputs.forEach(function (item) {
          //console.log(newElement);
          const dataObjectBusinessObject = bpmnFactory.create(
            "bpmn:DataObjectReference",
            { name: item.name }
          );
          const dataObject = elementFactory.createShape({
            type: "bpmn:DataObjectReference",
            businessObject: dataObjectBusinessObject,
          });
          modeling.createShape(
            dataObject,
            { x: newElement.x + 10, y: newElement.y + 20 },
            newElement.parent
          );
          modeling.connect(dataObject, newElement);
          modeling.updateProperties(dataObject, {
            id: "WorkItem_" + item.id + "_" + dataObject.id,
          });
        });
        task_process.outputs.forEach(function (item) {
          const dataObjectBusinessObject = bpmnFactory.create(
            "bpmn:DataObjectReference",
            { name: item.name }
          );
          const dataObject = elementFactory.createShape({
            type: "bpmn:DataObjectReference",
            businessObject: dataObjectBusinessObject,
          });
          modeling.createShape(
            dataObject,
            { x: newElement.x + 10, y: newElement.y - 20 },
            newElement.parent
          );
          modeling.connect(newElement, dataObject);
          modeling.updateProperties(dataObject, {
            id: "WorkItem_" + item.id + "_" + dataObject.id,
          });
        });
      }
    }
  }

  function saveWorkflow() {
    let xml;
    modeler.current.saveXML().then((result) => {
      xml = result.xml;
      const bpmn = {
        bpmnContent: xml,
        process: {
          id: processId,
        },
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bpmn),
      };
      fetch(
        config.serverURL +
          "processes/" +
          processId +
          "/saveBPMN?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            navigate(0);
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
    });
  }

  function selectElement() {
    createSelectedTask();
    handleCloseTasks();
  }

  function newElement() {
    const elementRegistry = modeler.current.get("elementRegistry"),
      modeling = modeler.current.get("modeling");

    const element = elementRegistry.get(shapeElement.current);
    modeling.updateProperties(element, { id: "Element_new_" + element.id });
    handleCloseTasks();
  }

  function selectWorkItem() {
    createSelectedWorkItem(
      selectedWorkItem.current.getElementsByTagName("input")[0].value
    );
    handleCloseWorkItems();
  }

  function newWorkItem() {
    const elementRegistry = modeler.current.get("elementRegistry"),
      modeling = modeler.current.get("modeling");

    const element = elementRegistry.get(shapeElement.current);
    modeling.updateProperties(element, { id: "WorkItem_new_" + element.id });
    handleCloseWorkItems();
  }

  function downloadWorkflow() {
    let xml;
    modeler.current.saveXML().then((result) => {
      xml = result.xml;
      var a = document.getElementById("downloadLink");
      a.setAttribute(
        "href",
        "data:application/bpmn20-xml;charset=UTF-8," + encodeURIComponent(xml)
      );
      a.setAttribute("download", "diagram.bpmn");
      a.click();
    });
  }
  return (
    <>
      <MyAppBar />

      <div>
        <Modal
          open={openTasks}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container sx={{ width: "50%" }}>
              <Grid container spacing={1} lineHeight={4.5}>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ marginBottom: 2 }}
                  >
                    Select task/process you want to add
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <FormControl>
                    <InputLabel id="label1">Task/process</InputLabel>
                    <Select
                      sx={{ minWidth: 175 }}
                      labelId="label1"
                      label="Task/process"
                      ref={selectedElement}
                      defaultValue={""}
                    >
                      {allElements.map((element) => (
                        <MenuItem key={element.id} value={element.id}>
                          {element.name} (
                          {element.steps !== undefined ? "Task" : "Process"})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Button
                    onClick={selectElement}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Add selected element
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginRight: 1 }}
                    onClick={newElement}
                  >
                    Add new task/process
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Modal>
      </div>

      <div>
        <Modal
          open={openWorkItems}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container sx={{ width: "50%" }}>
              <Grid container spacing={1} lineHeight={4.5}>
                <Grid textAlign={"center"} item xs={12}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ marginBottom: 2 }}
                  >
                    Select work item you want to add
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <FormControl>
                    <InputLabel id="label1">Work item</InputLabel>
                    <Select
                      sx={{ minWidth: 175 }}
                      labelId="label1"
                      label="Work item"
                      ref={selectedWorkItem}
                      defaultValue={""}
                    >
                      {allWorkItems.map((workItem) => (
                        <MenuItem key={workItem.id} value={workItem.id}>
                          {workItem.name} ({workItem.workItemType})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid textAlign={"center"} item xs={12}>
                  <Button
                    onClick={selectWorkItem}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Add selected work item
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginRight: 1 }}
                    onClick={newWorkItem}
                  >
                    Add new work item
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Modal>
      </div>

      <Container sx={{ marginTop: 5, width: "100%", marginBottom: 5 }}>
        <div className="canvas" id="canvas"></div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a id="downloadLink" hidden>
          Download
        </a>
        <Box paddingTop={5}>
          <Button
            startIcon={<Save />}
            variant={"contained"}
            onClick={saveWorkflow}
          >
            Save
          </Button>
          <Button
            startIcon={<Download />}
            sx={{ marginLeft: 2 }}
            variant={"contained"}
            onClick={downloadWorkflow}
          >
            Download BPMN
          </Button>
        </Box>
      </Container>
      <Container
        sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}
      ></Container>
      <ProcessSubMenuFooter state="workflow" />
    </>
  );
}
