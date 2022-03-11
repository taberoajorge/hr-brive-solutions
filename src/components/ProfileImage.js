import React from "react";
import { Avatar } from "@mui/material";

function ProfileImage({ image }) {
  return (
    <Avatar
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "100px",
        minWidth: "100px",
        maxHeight: "100px",
        maxWidth: "100px",
        border: "3px solid #e0e0e0",
      }}
      alt="profilePic"
      src={image}
    />
  );
}

export default ProfileImage;
