import { Router } from 'express';

import { CreateMessageController } from '../controllers/CreateMessageController';
import { ensureAuthenticate } from '../middleware/ensureAuthenticate';

export const messageRoutes = Router();

messageRoutes.post('/messages', ensureAuthenticate, new CreateMessageController().handle);
