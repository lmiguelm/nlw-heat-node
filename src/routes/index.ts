import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { messageRoutes } from './message.routes';
import { userRoutes } from './user.routes';

export const routes = Router();
routes.use(authRoutes);
routes.use(messageRoutes);
routes.use(userRoutes);
