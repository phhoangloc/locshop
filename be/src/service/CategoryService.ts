import { ICategoryRepository } from "../repository/IRepository"
const iCategoryRepository = new ICategoryRepository()
export class CategoryService {

    async find(query: any) {
        const result = iCategoryRepository.find(query)
        return result
    }

    async findFirst(params: any) {
        const result = iCategoryRepository.findFirst(params)
        return result
    }

    async create(body: any) {
        const result = iCategoryRepository.create(body)
        return result
    }

    async update(id: number, body: any) {
        const result = iCategoryRepository.update(id, body)
        return result
    }
    async delete(id: number) {
        const result = iCategoryRepository.delete(id)
        return result
    }
}