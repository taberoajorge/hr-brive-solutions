import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = React.createContext();

function UserProvider(props) {
  const userValues = {
    first: "",
    last: "",
    title: "",
    email: "",
    phone: "",
    url: "",
  };
  const { item, saveItem, loading, error } = useLocalStorage("USERS_V1", []);
  const [activeUser, setActiveUser] = useState(userValues);

  const deleteUser = (text) => {
    const userIndex = item.findIndex((user) => user.first === text);
    const newUsers = [...item];
    newUsers.splice(userIndex, 1);
    saveItem(newUsers, true);
  };

  return (
    <UserContext.Provider
      value={{
        deleteUser,
        item,
        saveItem,
        loading,
        error,
        activeUser,
        setActiveUser,
        userValues,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

<UserContext.Consumer></UserContext.Consumer>;

export { UserContext, UserProvider };
