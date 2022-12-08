const users = [
  { name: 'Bob', id: 2 },
  { name: 'Rob', id: 3 },
];
export const getAllUsers = () => {
  return users;
};
export const findUser = (id) => {
  return users.find((user) => user.id === +id);
};
export const addUser = (user) => {
  return user;
};
