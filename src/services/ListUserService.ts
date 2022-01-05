import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from 'typeorm';
import { instanceToPlain } from 'class-transformer';

class ListUserService {
    async execute() {
        const userRepositories = getCustomRepository(UsersRepositories);
        const listUsers = await userRepositories.find();
        return instanceToPlain(listUsers);
    }
}

export { ListUserService };