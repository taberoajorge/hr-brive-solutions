import React, { useContext, useState } from "react";
import { Button, Box, TextField, Grid, CardMedia } from "@mui/material";
import { UserContext } from "../context/userContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const { activeUser, setActiveUser, saveItem, deleteUser } =
    useContext(UserContext);

  const { register, handleSubmit } = useForm();
  const [edit, setEdit] = useState(false);

  const { first, last, title, email, phone } = activeUser;

  const onSubmit = (data) => {
    setActiveUser(data);
    saveItem([data]);
    setEdit(false);
  };

  const onDelete = (text) => {
    deleteUser(text);
    navigate(-1);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component={"img"}
            image={activeUser?.url || "https://via.placeholder.com/150"}
            title="Employee"
            sx={{
              width: "100%",
              height: "85vh",
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem",
            paddingTop: "0",
          }}
          item
          xs={12}
          sm={6}
        >
          <TextField
            defaultValue={first}
            label="First name"
            {...register("first", {required: true})}
            disabled={!edit}
          />
          <TextField
            defaultValue={last}
            label="Last name"
            {...register("last", {required: true})}
            disabled={!edit}
          />
          <TextField
            defaultValue={phone}
            label="Phone"
            {...register("phone", {required: true})}
            disabled={!edit}
          />
          <TextField
            defaultValue={email}
            label="Email"
            {...register("email", {required: true})}
            disabled={!edit}
          />
          <TextField
            defaultValue={title}
            label="Title"
            {...register("title", {required: true})}
            disabled={!edit}
          />

          <Button 
            disabled={!edit}
          type="submit" variant="contained" size="large">
            Save
          </Button>
          <Button variant="outlined" onClick={handleEdit} size="large">
            Edit
          </Button>
          <Button onClick={() => onDelete(first)} size="large">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserDetails;
