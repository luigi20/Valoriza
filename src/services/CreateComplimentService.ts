import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
interface IComplimentRequest {
    tag_id: string;
    user_receiver: string;
    user_sender: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_receiver, user_sender, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const userRepositories = getCustomRepository(UsersRepositories);
        const userExists = await userRepositories.findOne(user_receiver);
        if (user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver");
        }
        if (!userExists) {
            throw new Error("User Receiver not exists");
        }
        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });
        await complimentsRepositories.save(compliment);
        return compliment;
    }
}

export { CreateComplimentService };