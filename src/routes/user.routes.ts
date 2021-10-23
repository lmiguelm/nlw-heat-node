import { Router } from 'express';

import { ensureAuthenticate } from '../middleware/ensureAuthenticate';

import { ProfileUserController } from '../controllers/ProfileUserController';

export const userRoutes = Router();

userRoutes.get('/profile', ensureAuthenticate, new ProfileUserController().handle);
