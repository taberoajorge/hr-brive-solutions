import React from "react";
import {
  Button,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import ProfileImage from "../components/ProfileImage";
import { useNavigate } from "react-router-dom";

function DetailItem({ user, setActiveUser }) {
  const { url } = user;
  const { first, last, title } = user;
  const navigate = useNavigate();

  const handleClick = (e) => {
    setActiveUser(user);
    navigate(`/employee/${user.username}`);
  };

  return (
    <>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <ProfileImage image={url} />
        </ListItemAvatar>
        <ListItemText
          sx={{
            padding: "0.5rem",
          }}
          primary={`${first} ${last}`}
          secondary={title}
        />
        <Button onClick={handleClick}>Show more...</Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default DetailItem;
