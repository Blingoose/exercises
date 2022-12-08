export const getAllUsers = (req, res) => {
  const users = getAllUsers();
  res.status(200).send(users);
};
