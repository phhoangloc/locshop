import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class NewsRepository {

    async findNews(query: any) {
        try {
            const result = await prisma.news.findMany({
                where: {
                    archive: query.archive ? query.archive : undefined,
                    id: query.id ? Number(query.id) : undefined,
                    slug: query.slug ? query.slug : undefined,
                    hostId: query.hostId ? Number(query.hostId) : undefined,
                },
                include: {
                    host: {
                        select: { username: true }
                    }
                }

            })
            return result
        } catch (error) {
            throw error
        }
    }
    async findOneNews(params: any, query: any) {
        try {
            const result = await prisma.news.findFirst({
                where: {
                    archive: query.archive ? query.archive : undefined,
                    id: params.id ? Number(params.id) : undefined,
                    slug: query.slug ? query.slug : undefined,
                    hostId: query.hostId ? Number(query.hostId) : undefined,
                },
                include: {
                    host: {
                        select: { username: true }
                    }
                }

            })
            return result
        } catch (error) {
            throw error
        }
    }
    async createNews(body: any) {
        try {
            const result = await prisma.news.create({ data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async updateNews(id: number, body: any) {
        try {
            const result = await prisma.news.update({ where: { id }, data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async deleteNews(id: number) {
        try {
            const result = await prisma.news.delete({ where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
}