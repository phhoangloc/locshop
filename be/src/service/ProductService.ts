import { IProductRepository } from "../repository/IRepository"
const iProductRepository = new IProductRepository()
export class ProductService {

    async find(query: any) {
        const result = iProductRepository.find(query)
        return result
    }

    async findFirst(params: any) {
        const result = iProductRepository.findFirst(params)
        return result
    }

    async create(body: any) {
        const result = iProductRepository.create(body)
        return result
    }
}