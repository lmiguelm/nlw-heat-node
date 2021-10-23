import { Router } from 'express';

import { ensureAuthenticate } from '../middleware/ensureAuthenticate';

import { CreateMessageController } from '../controllers/CreateMessageController';
import { GetLast3MessagesController } from '../controllers/GetLast3MessagesController';

export const messageRoutes = Router();

messageRoutes.post('/messages', ensureAuthenticate, new CreateMessageController().handle);
messageRoutes.get('/messages/last3', new GetLast3MessagesController().handle);
