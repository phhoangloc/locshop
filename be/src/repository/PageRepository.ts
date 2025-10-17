import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class PageRepository {

    async findPage(query: any) {
        try {
            const result = await prisma.page.findMany({
                where: {
                    slug: query.slug ? query.slug : undefined,
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    async findOnePage(query: any) {
        try {
            const result = await prisma.page.findFirst({
                where: {
                    id: query.id ? Number(query.id) : undefined,
                    slug: query.slug ? query.slug : undefined,
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    async createPage(body: any) {
        try {
            const result = await prisma.page.create({ data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async updatePage(body: any, id: number) {
        try {
            const result = await prisma.page.update({ where: { id }, data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async deletePage(id: number) {
        try {
            const result = await prisma.page.delete({ where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
}