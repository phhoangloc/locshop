import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class BlogRepository {

    async findBlog(query: any) {
        try {
            const result = await prisma.blog.findMany({
                where: {
                    archive: query.archive ? query.archive : undefined,
                    id: query.id ? Number(query.id) : undefined,
                    draft: query.draft ? Boolean(query.dfraft) : undefined,

                    content: {
                        contains: query.search ? query.search : undefined,
                    },
                    slug: query.slug ? query.slug : undefined,
                    hostId: query.hostId ? Number(query.hostId) : undefined,
                    category: query.category ? { name: query.category } : undefined
                },
                include: {
                    host: {
                        select: { id: true, username: true }
                    },
                    category: true
                },
                skip: query.skip ? Number(query.skip) : undefined,
                take: query.limit ? Number(query.limit) : undefined,
                orderBy: {
                    createdAt: 'desc',
                },
            })
            return result
        } catch (error) {
            throw error
        }

    }
    async findOneBlog(params: any, query: any) {
        try {
            const result = await prisma.blog.findFirst({
                where: {
                    archive: query.archive ? query.archive : undefined,
                    id: params.id ? Number(params.id) : undefined,
                    draft: query.draft ? Boolean(query.dfraft) : undefined,
                    content: {
                        contains: query.search ? query.search : undefined,
                    },
                    slug: query.slug ? query.slug : undefined,
                    hostId: query.hostId ? Number(query.hostId) : undefined
                },
                include: {
                    host: {
                        select: { id: true, username: true }
                    }
                },
                skip: query.skip ? Number(query.skip) : undefined,
                take: query.limit ? Number(query.limit) : undefined,
                orderBy: {
                    createdAt: 'desc',
                },
            })

            return result
        } catch (error) {
            throw error
        }

    }
    async createBlog(body: any) {
        try {
            const result = await prisma.blog.create({ data: body })
            return result
        } catch (error) {
            throw error
        }

    }
    async updateBlog(body: any, id: number) {
        try {
            const result = await prisma.blog.update({ where: { id }, data: body })
            return result
        } catch (error) {
            throw error

        }
    }
    async deleteBlog(id: number) {
        try {
            const result = await prisma.blog.delete({ where: { id } })
            return result
        } catch (error) {
            throw error
        }

    }
}