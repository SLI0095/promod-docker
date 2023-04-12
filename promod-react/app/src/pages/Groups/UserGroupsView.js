import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import UserListItem from "../../modules/UserListItem";
import { List } from "@mui/material";
import CreateGroupModal from "../../modules/Groups/CreateGroupModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import config from "../../config.json";

export default function UserGroupsView() {
  const [user, setUser] = useState({ isCreator: [], groups: [] });
  const { userId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "users/" + userId)
      .then((res) => res.json())
      .then(
        (result) => {
          setUser(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [userId]);

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          My groups
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {user.isCreator.map((group) => (
            <UserListItem
              name={group.groupName}
              groupId={group.id}
              id={group.id}
              key={group.id}
              type="myGroup"
            />
          ))}
        </List>

        <CreateGroupModal />

        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Member of groups
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {user.groups.map((group) => (
            <UserListItem
              name={group.groupName}
              groupId={group.id}
              id={group.id}
              key={group.id}
              type="memberGroup"
            />
          ))}
        </List>
      </Container>
    </>
  );
}
