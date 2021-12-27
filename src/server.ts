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
/*app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({
        status: err,
        message: "Internal Server Error"
    });
})*/
app.listen(3000);
