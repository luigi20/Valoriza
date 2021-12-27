import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from 'typeorm';

class CreateTagService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        if (!name) {
            throw new Error("Incorrect Name!");
        }
        const alReadyExists = await tagsRepositories.findOne({ name });
        if (alReadyExists) {
            throw new Error("Tag Already Exists!");
        }
        const tag = tagsRepositories.create({ name });
        await tagsRepositories.save(tag);
        return tag;
    }
}

export { CreateTagService } 