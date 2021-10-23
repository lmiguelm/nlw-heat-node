import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import http from 'http';
import { Server } from 'socket.io';

import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

export const serverHttp = http.createServer(app);

export const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => console.log(`Usuário conectado no socket ${socket.id}`));
