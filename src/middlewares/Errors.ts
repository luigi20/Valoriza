import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

class ErrosApp {

    execute(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        }
        return res.status(500).json({
            status: err,
            message: "Internal Server Error"
        });
    }
}

export { ErrosApp };

