import { ICategoryRepository, IProductRepository } from "../repository/IRepository"
const iRepository = new IProductRepository()
export class ProductService {

    async findAllProduct(query: any) {
        try {
            const result = await iRepository.findProduct(query)
            return result
        } catch (error) {
            throw error
        }
    }
    async createProduct(body: any) {
        try {
            await iRepository.createProduct(body)
            return true
        } catch (error) {
            throw error
        }
    }
    async updateProduct(id: number, body: any) {

        try {
            await iRepository.updateProduct(id, body)
            return true
        } catch (error) {
            throw error
        }

    }
    async deleteProduct(id: number) {
        try {
            await iRepository.deleteProduct(id)
            return true
        } catch (error) {
            throw error
        }

    }
}
