import { useState, useEffect } from "react";
import { getUsers } from "../helpers/getUsers";
import { updateData } from "../helpers/updateData";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const localStorageItem = localStorage.getItem(itemName);

  useEffect(() => {
    if (!localStorageItem) {
      getUsers()
        .then((res) => {
          localStorage.setItem("USERS_V1", JSON.stringify(res));
          setItem(res);
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setItem(JSON.parse(localStorageItem));
    }
    setLoading(false);
  }, []);

  const saveItem = (newItem, toDelete = false) => {
    let stringifiedItem;
    if (toDelete) {
      stringifiedItem = JSON.stringify(newItem);
        setItem(newItem);
    } else {
      const needUpdate = updateData(item, newItem);
      
      if (newItem.length > 1 && !needUpdate) {

        stringifiedItem = JSON.stringify(newItem);
        setItem(newItem);

      } else if (newItem.length === 1 && !needUpdate) {

        stringifiedItem = JSON.stringify([...newItem, ...item]);
        setItem([...newItem, ...item]);

      } else {
        stringifiedItem = JSON.stringify(needUpdate);
        setItem(needUpdate);
      } 
    }

    localStorage.setItem(itemName, stringifiedItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export default useLocalStorage;
