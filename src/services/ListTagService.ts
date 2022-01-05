import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';
import { instanceToPlain } from 'class-transformer';

class ListTagService {
    async execute() {
        const listTagRepository = getCustomRepository(TagsRepositories);
        const listTag = listTagRepository.find();
        return instanceToPlain(listTag);
    }
}

export { ListTagService };