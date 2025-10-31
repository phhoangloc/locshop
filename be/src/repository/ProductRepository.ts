import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class ProductRepository {

    async findProduct(query: any) {
        try {
            const result = await prisma.product.findMany({
                where: {
                    id: query.id ? Number(query.id) : undefined,
                    slug: query.slug ? query.slug : undefined,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            })
            return result
        } catch (error) {
            throw error
        }
    }
    async createProduct(body: any) {
        try {
            const result = await prisma.product.create({ data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async updateProduct(id: number, body: any) {
        try {
            const result = await prisma.product.update({ where: { id }, data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async deleteProduct(id: number) {
        try {
            const result = await prisma.product.delete({ where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
}