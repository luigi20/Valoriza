import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import { router } from './routes';
import { ErrosApp } from './middlewares/Errors';
import cors from 'cors';

const errors = new ErrosApp();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors.execute);
app.listen(3000);
