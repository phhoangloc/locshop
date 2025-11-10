"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class BlogRepository {
    async find(query) {
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
            orderBy: {
                createdAt: 'desc',
            },
        });
        return result;
    }
    async findFirst(params) {
        const result = prisma.blog.findFirst({
            where: {
                id: Number(params.id),
            }
        });
        return result;
    }
    async create(body) {
        const result = prisma.blog.create({ data: body });
        return result;
    }
    async update(id, body) {
        const result = prisma.blog.update({ where: { id }, data: body });
        return result;
    }
    async delete(id) {
        const result = prisma.blog.delete({ where: { id } });
        return result;
    }
}
exports.BlogRepository = BlogRepository;
//# sourceMappingURL=BlogRepository.js.map