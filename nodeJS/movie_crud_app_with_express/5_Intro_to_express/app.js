import express from 'express';

import { indexRoute } from './routes/index.router.js';

// import { getAllUsers, findUser, addUser } from './utils.js';

const app = express();
const PORT = '8000';

app.use(express.json());
// localhost:8000/api
app.use('/api', indexRoute);

// app.get('/api/users', (req, res) => {
//   const users = getAllUsers();
//   res.status(200).send(users);
// });

// app.get('/api/users/:id', (req, res) => {
//   const { id } = req.params;
//   const user = findUser(id);

//   if (!user) {
//     res.status(404).send('No user with the specified id');
//   }
//   res.status(200).send(user);
// });

// app.post('/api/users', (req, res) => {
//   const user = addUser(req.body);
//   res.status(201).send(user);
// });
// app.delete('/api/users', (req, res) => {
//   const user = addUser(req.body);
//   res.status(201).send(user);
// });

app.listen(PORT, () => {
  console.log('listen on port ' + PORT);
});
