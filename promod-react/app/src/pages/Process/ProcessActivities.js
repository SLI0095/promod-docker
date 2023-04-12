import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import DraggableActivityList from "../../modules/Process/DraggableActivityList";
import { Alert, Button, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import config from "../../config.json";
import { useParams } from "react-router";
import * as React from "react";

export default function ProcessActivities() {
  const [orderedList, setOrderedList] = useState([]);
  const { processId } = useParams();
  const userId = sessionStorage.getItem("userId");

  const [openSnack, setOpenSnack] = React.useState(false);
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const saveOrder = () => {
    let list = [];
    for (let i = 0; i < orderedList.length; i++) {
      list.push(orderedList[i].elementId);
    }
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list),
    };
    fetch(
      config.serverURL +
        "processes/" +
        processId +
        "/changeOrder?userId=" +
        userId,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setOpenSnack(true);
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

  function reorder(list, startIndex, endIndex) {
    const result = list;
    const removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    for (let i = 0; i < result.length; i++) {
      result[i].id = i;
    }
    return result;
  }

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;
    const newItems = reorder(orderedList, source.index, destination.index);
    setOrderedList(newItems);
  };

  useEffect(() => {
    fetch(config.serverURL + "processes/" + processId)
      .then((res) => res.json())
      .then(
        (result) => {
          createOrderedList(result);
        },
        (error) => {
          alert(error.body.message);
        }
      );
  }, [processId, userId]);

  function createOrderedList(process) {
    const list = [];
    const ids = process.elementsOrder;
    const elements = process.elements;

    for (let i = 0; i < ids.length; i++) {
      for (let j = 0; j < elements.length; j++) {
        if (elements[j].id === ids[i]) {
          let type = "task";
          if (elements[j].steps === undefined) {
            type = "process";
          }
          const activity = {
            id: i,
            name: elements[j].name,
            description: elements[j].briefDescription,
            type: type,
            elementId: elements[j].id,
          };
          elements.splice(j, 1);
          list.push(activity);
          break;
        }
      }
    }
    setOrderedList(list);
  }

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <DraggableActivityList activities={orderedList} onDragEnd={onDragEnd} />
        <Button onClick={saveOrder} variant="contained">
          Save order
        </Button>
      </Container>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          Order changed.
        </Alert>
      </Snackbar>
      <ProcessSubMenuFooter state="activities" />
    </>
  );
}
