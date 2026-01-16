import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { Button, Card, CardHeader } from "@mui/material";
import UserDetails from "../components/UserDetails";
import { useNavigate } from "react-router-dom";

function Employee() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader
        title="Edit employee"
        action={
          <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
            Back
          </Button>
        }
      />
      <UserDetails />
    </Card>
  );
}

export default Employee;
