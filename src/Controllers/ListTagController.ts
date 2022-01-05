import { Request, Response } from 'express';
import { ListTagService } from '../services/ListTagService';

class ListTagController {
    async handle(req: Request, res: Response) {
        const listTagService = new ListTagService();
        const listTag = await listTagService.execute();
        return res.json(listTag);
    }
}

export { ListTagController };