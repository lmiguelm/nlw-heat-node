import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { messageRoutes } from './message.routes';

export const routes = Router();
routes.use(authRoutes);
routes.use(messageRoutes);
