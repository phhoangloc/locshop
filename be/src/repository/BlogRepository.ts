import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class BlogRepository {
    async find(query: any) {
        const result = prisma.blog.findMany({
            where: {
                name: query.name ? query.name : undefined,
                slug: query.slug ? query.slug : undefined,
            },
            include: {
                category: {
                    select: {
                        name: true
                    }
                }
            },
            take: query.limit ? Number(query.limit) : undefined,
            orderBy: {
                createdAt: 'desc',
            },
        })
        return result
    }
    async findFirst(params: any) {
        const result = prisma.blog.findFirst({
            where: {
                id: Number(params.id),
            }
        })
        return result
    }
    async create(body: any) {
        const result = prisma.blog.create({ data: body })
        return result
    }
    async update(id: number, body: any) {
        const result = prisma.blog.update({ where: { id }, data: body })
        return result
    }
    async delete(id: number) {
        const result = prisma.blog.delete({ where: { id } })
        return result
    }
}