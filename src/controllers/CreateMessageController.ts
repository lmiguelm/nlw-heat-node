import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

export class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;

    const service = new CreateMessageService();

    try {
      const result = await service.execute(message, user_id);
      response.json({ message: result });
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
