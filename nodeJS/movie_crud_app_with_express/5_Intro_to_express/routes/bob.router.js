import { Router } from 'express';
import { getAllUsers, findUser, addUser } from '../utils.js';
export const bobRouter = Router();

bobRouter.get('/users', (req, res) => {
  const users = getAllUsers();
  res.status(200).send(users);
});

bobRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = findUser(id);

  if (!user) {
    res.status(404).send('No user with the specified id');
  }
  res.status(200).send(user);
});

bobRouter.post('/users', (req, res) => {
  const user = addUser(req.body);
  res.status(201).send(user);
});
bobRouter.delete('/users', (req, res) => {
  const user = addUser(req.body);
  res.status(201).send(user);
});
