import { Router } from 'express';
import { bobRouter } from './bob.router.js';
import { userRouter } from './users.router.js';
export const indexRoute = Router();

//localhost:8000/api/bob
indexRoute.use('/bob', bobRouter);
//localhost:8000/api/users
indexRoute.use('/users', userRouter);
