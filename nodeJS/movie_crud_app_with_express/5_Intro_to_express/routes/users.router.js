import { Router } from 'express';
import { getAllUsers, findUser, addUser } from '../utils.js';
export const userRouter = Router();

userRouter.get('', getAllUsers);

userRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = findUser(id);

  if (!user) {
    res.status(404).send('No user with the specified id');
  }
  res.status(200).send(user);
});

userRouter.post('', (req, res) => {
  const user = addUser(req.body);
  res.status(201).send(user);
});
userRouter.delete('', (req, res) => {
  const user = addUser(req.body);
  res.status(201).send(user);
});
