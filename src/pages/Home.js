import React, { useContext } from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Add } from "@mui/icons-material";
import Header from "../components/Header";
import DetailItem from "../layout/DetailItem";
import ListContainer from "../layout/ListContainer";

function Home() {
  const { item, loading, error, setActiveUser, userValues } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    setActiveUser(userValues);
    navigate("/employee");
  };

  return (
    <Container>
      <Header detail={"HR Brive Solutions"} />
      {error && <p>{error}</p>}
      {!loading && error && <p>Loading...</p>}
      {!loading && item && (
        <ListContainer>
          {item.map((user) => (
            <DetailItem
              key={user.id + user.username}
              user={user}
              setActiveUser={setActiveUser}
            />
          ))}
        </ListContainer>
      )}
      <Button
        variant="contained"
        sx={{
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          justifyContent: "center",
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          zIndex: "1000",
        }}
        onClick={handleAdd}
      >
        <Add />
      </Button>
    </Container>
  );
}

export default Home;
