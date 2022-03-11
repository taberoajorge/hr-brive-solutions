// import axios from 'axios';

export const getUsers = async () => {
  const url = `https://randomuser.me/api/?results=10`;
  const resp = await fetch(url);
  const { results } = await resp.json();
  const getUsers = results.map((user) => {
    return {
      first: user.name.first,
      last: user.name.last,
      title: user.name.title,
      gender: user.gender,
      phone: user.phone,
      email: user.email,
      url: user?.picture.large,
      id: user.login.uid,
      username: user.login.username,
    };
  });

  return getUsers;
};
