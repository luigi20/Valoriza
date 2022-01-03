import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);
        const userExists = await userRepositories.findOne({ email });
        if (!userExists) {
            throw new Error("Email/Password Incorrect");
        }
        const passwordMath = await compare(password, userExists.password);
        if (!passwordMath) {
            throw new Error("Email/Password Incorrect");
        }
        const token = sign({
            email: userExists.email,
        }, "40b5a4737ca4fcbe00030d7f9ee98c77", {
            subject: userExists.id,
            expiresIn: "1d"
        });
        return token;
    }
}

export { AuthenticateUserService };