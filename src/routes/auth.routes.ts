import { Router, Request, Response } from 'express';

import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

export const authRoutes = Router();

authRoutes.get('/github', (request: Request, response: Response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

authRoutes.get('/signin/callback', (request: Request, response: Response) => {
  return response.send();
});

authRoutes.post('/authenticate', new AuthenticateUserController().handle);
