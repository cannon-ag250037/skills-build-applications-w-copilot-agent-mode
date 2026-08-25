import { Router } from 'express';
import { TeamModel } from '../models/Team.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    response.json(await TeamModel.find().sort({ name: 1 }));
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    response.status(201).json(await TeamModel.create(request.body));
  } catch (error) {
    next(error);
  }
});

export default router;