import { List, Paper } from "@mui/material";
import React from "react";

function ListContainer({ children }) {
  return (
    <Paper elevation={5}>
      <List sx={{ width: "100%" }}>{children}</List>
    </Paper>
  );
}

export default ListContainer;
