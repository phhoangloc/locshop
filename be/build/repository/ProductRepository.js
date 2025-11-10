"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProductRepository {
    async find(query) {
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
        });
        return result;
    }
    async findFirst(params) {
        const result = prisma.product.findFirst({
            where: {
                id: Number(params.id),
            }
        });
        return result;
    }
    async create(body) {
        const result = prisma.product.create({ data: body });
        return result;
    }
    async update(id, body) {
        const result = prisma.product.update({ where: { id }, data: body });
        return result;
    }
    async delete(id, body) {
        const result = prisma.product.delete({ where: { id } });
        return result;
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map