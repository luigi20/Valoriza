import { Request } from 'express';
import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(ComplimentsRepositories);
        const compliment = complimentRepositories.find({
            where: {
                user_sender: user_id,
            },

        });
        return compliment;
    }
}

export { ListUserSendComplimentsService };