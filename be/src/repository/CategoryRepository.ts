import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class CategoryRepository {
    async find(query: any) {
        const result = prisma.category.findMany({
            where: {
                name: query.name ? query.name : undefined,
            }
        })
        return result
    }
    async findFirst(params: any) {
        const result = prisma.category.findFirst({
            where: {
                id: Number(params.id),
            }
        })
        return result
    }
    async create(body: any) {
        const result = prisma.category.create({ data: body })
        return result
    }
    async update(id: number, body: any) {
        const result = prisma.category.update({ where: { id }, data: body })
        return result
    }
    async delete(id: number) {
        const result = prisma.category.delete({ where: { id } })
        return result
    }
}