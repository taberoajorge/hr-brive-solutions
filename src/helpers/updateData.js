export const updateData = (item, dataUserToCheck) => {
  const userIndex = item.findIndex((user) => user.email === dataUserToCheck[0].email);
  if (userIndex === -1) {
    return false;
  } else {
    const newUsers = [...item];
    newUsers[userIndex] = {...dataUserToCheck[0]};
    return newUsers;
  }
}