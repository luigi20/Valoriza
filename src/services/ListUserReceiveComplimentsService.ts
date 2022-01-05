import { Request } from 'express';
import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(ComplimentsRepositories);
        const compliment = complimentRepositories.find({
            where: {
                user_receiver: user_id
            },
        });
        return compliment;
    }
}

export { ListUserReceiveComplimentsService };
