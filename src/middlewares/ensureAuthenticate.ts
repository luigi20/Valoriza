import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ Error: "Token missing" });
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = verify(token, "40b5a4737ca4fcbe00030d7f9ee98c77") as IPayload;
        req.user_id = sub;
        return next();
    } catch (err) {
        return err.status(401).json({ Error: "User Not Authorized" });
    }

}