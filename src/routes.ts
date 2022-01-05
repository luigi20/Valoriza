import { Router } from 'express';
import { CreateUserController } from './Controllers/CreateUserController';
import { CreateComplimentController } from './Controllers/CreateComplimentController';
import { CreateTagController } from './Controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';
import { AuthenticateUserController } from './Controllers/AuthenticateUserController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliment', ensureAuthenticate, createComplimentController.handle);
export { router };
