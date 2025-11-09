import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class ProductRepository {
    async find(query: any) {
        const result = prisma.product.findMany({
            where: {
                name: query.productname ? { contains: query.productname } : undefined,
                slug: query.slug ? query.slug : undefined,
            },
            skip: query.skip ? Number(query.skip) : undefined,
            take: query.limit ? Number(query.limit) : undefined,
            orderBy: {
                createdAt: 'desc',
            },

        })
        return result
    }
    async findFirst(params: any) {
        const result = prisma.product.findFirst({
            where: {
                id: Number(params.id),
            }
        })
        return result
    }
    async create(body: any) {
        const result = prisma.product.create({ data: body })
        return result
    }
    async update(id: number, body: any) {
        const result = prisma.product.update({ where: { id }, data: body })
        return result
    }
    async delete(id: number, body: any) {
        const result = prisma.product.delete({ where: { id } })
        return result
    }
}