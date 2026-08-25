import { Router } from 'express';
import { UserModel } from '../models/User.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    response.json(await UserModel.find().sort({ username: 1 }));
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    response.status(201).json(await UserModel.create(request.body));
  } catch (error) {
    next(error);
  }
});

export default router;