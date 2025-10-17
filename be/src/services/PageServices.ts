import { IPageRepository } from "../repository/IRepository";
const iPageRepository = new IPageRepository()

export class PageServices {

    async findAllPage(query: any) {
        try {
            const result = await iPageRepository.findPage(query)
            return result
        } catch (error) {
            throw error
        }

    }
    async findOnePage(query: any) {
        try {
            const result = await iPageRepository.findOnePage(query)
            return result
        } catch (error) {
            throw error
        }

    }
    async createPage(body: any) {
        try {
            const result = await iPageRepository.createPage(body)
            return result
        } catch (error) {
            throw error
        }

    }
    async updatePage(body: any, id: number) {
        try {
            const result = await iPageRepository.updatePage(body, id)
            return result
        } catch (error) {
            throw error
        }

    }
    async deletePage(id: number) {
        try {
            const result = await iPageRepository.deletePage(id)
            return result
        } catch (error) {
            throw error
        }

    }
}