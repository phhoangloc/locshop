import { INewsRepository } from "../repository/IRepository"

const iNewsRepository = new INewsRepository()
export class NewsService {

    async findAllNews(query: any) {
        try {
            const result = await iNewsRepository.findNews(query)
            return result
        } catch (error) {
            throw error
        }
    }
    async findOneNews(params: any, query: any) {
        try {
            const result = await iNewsRepository.findOneNews(params, query)
            return result
        } catch (error) {
            throw error
        }
    }
    async createNews(body: any) {
        const newBody = body
        newBody.host = {
            connect: { id: body.hostId }
        }
        newBody.hostId = undefined
        try {
            await iNewsRepository.createNews(newBody)
            return true
        } catch (error) {
            throw error
        }
    }
    async updateNews(id: number, body: any) {
        const newBody = body

        try {
            await iNewsRepository.updateNews(id, newBody)
            return true
        } catch (error) {
            throw error
        }

    }
    async deleteNews(id: number) {
        try {
            await iNewsRepository.deleteNews(id)
            return true
        } catch (error) {
            throw error
        }

    }
}
