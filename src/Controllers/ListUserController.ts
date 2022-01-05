import { Request, Response } from 'express';
import { ListUserService } from '../services/ListUserService';

class ListUserController {
    async handle(req: Request, res: Response) {
        const listUserService = new ListUserService();
        const listUsers = await listUserService.execute();
        return res.json(listUsers);
    }
}

export { ListUserController } 