import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import UserListItem from "../../modules/UserListItem";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import config from "../../config.json";
import AddUserToGroupModal from "../../modules/Groups/AddUserToGroupModal";

export default function GroupDetail() {
  const [group, setGroup] = useState({ creator: { username: "" }, users: [] });
  const { groupId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "userGroups/" + groupId)
      .then((res) => res.json())
      .then(
        (result) => {
          setGroup(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [groupId]);

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <Typography variant={"h4"} component={"h2"} marginTop={3}>
          {group.groupName}
        </Typography>

        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Creator of the group
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <UserListItem name={group.creator.username} type="creator" />
        </List>

        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Members
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {group.users.map((user) => (
            <UserListItem
              user={user}
              name={user.username}
              id={user.id}
              key={user.id}
              type="member"
            />
          ))}
        </List>
        <AddUserToGroupModal />
      </Container>
    </>
  );
}
