import { ICategoryRepository } from "../repository/IRepository"
const iRepository = new ICategoryRepository()
export class CategoryService {

    async findAllCategory(query: any) {
        try {
            const result = await iRepository.findCategory(query)
            return result
        } catch (error) {
            throw error
        }
    }
    async createCategory(body: any) {
        try {
            await iRepository.createCategory(body)
            return true
        } catch (error) {
            throw error
        }
    }
    async updateCategory(id: number, body: any) {

        try {
            await iRepository.updateCategory(id, body)
            return true
        } catch (error) {
            throw error
        }

    }
    async deleteCategory(id: number) {
        try {
            await iRepository.deleteCategory(id)
            return true
        } catch (error) {
            throw error
        }

    }
}
