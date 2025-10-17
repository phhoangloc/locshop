import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class CategoryRepository {

    async findCategory(query: any) {
        try {
            const result = await prisma.category.findMany({
                where: {
                    id: query.id ? Number(query.id) : undefined,
                },

            })
            return result
        } catch (error) {
            throw error
        }
    }
    async createCategory(body: any) {
        try {
            const result = await prisma.category.create({ data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async updateCategory(id: number, body: any) {
        try {
            const result = await prisma.category.update({ where: { id }, data: body })
            return result
        } catch (error) {
            throw error
        }
    }
    async deleteCategory(id: number) {
        try {
            const result = await prisma.category.delete({ where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
}