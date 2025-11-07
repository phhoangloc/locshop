import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class UserRepository {
    async find(query: any) {
        const result = prisma.user.findMany({
            where: {
                username: query.username ? { contains: query.username } : undefined,
                email: query.email ? query.email : undefined,
            }
        })
        return result
    }
    async findFirst(params: any) {
        const result = prisma.user.findFirst({
            where: {
                id: Number(params.id),
            }
        })
        return result
    }
    async create(body: any) {
        const result = prisma.user.create({ data: body })
        return result
    }
    async update(id: number, body: any) {
        const result = prisma.user.update({ where: { id }, data: body })
        return result
    }
    async delete(id: number, body: any) {
        const result = prisma.user.delete({ where: { id } })
        return result
    }
}