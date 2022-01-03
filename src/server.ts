import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import { router } from './routes';
import { ErrosApp } from './middlewares/Errors';

const errors = new ErrosApp();
const app = express();
app.use(express.json());
app.use(router);
app.use(errors.execute);
app.listen(3000);
