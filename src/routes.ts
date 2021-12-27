import { Router } from 'express';
import { CreateUserController } from './Controllers/CreateUserController';
import { CreateTagController } from './Controllers/CreateTagController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handle);
router.post('/tags', createTagController.handle);

export { router };