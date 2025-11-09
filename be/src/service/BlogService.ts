import { IBlogRepository } from "../repository/IRepository"
const iBlogRepository = new IBlogRepository()
export class BlogService {

    async find(query: any) {
        const result = iBlogRepository.find(query)
        return result
    }

    async findFirst(params: any) {
        const result = iBlogRepository.findFirst(params)
        return result
    }

    async create(body: any) {
        const result = iBlogRepository.create(body)
        return result
    }

    async update(id: number, body: any) {
        const result = iBlogRepository.update(id, body)
        return result
    }
    async delete(id: number) {
        const result = iBlogRepository.delete(id)
        return result
    }
}