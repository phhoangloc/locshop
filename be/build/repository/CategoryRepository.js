"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CategoryRepository {
    async find(query) {
        const result = prisma.category.findMany({
            where: {
                name: query.name ? query.name : undefined,
            }
        });
        return result;
    }
    async findFirst(params) {
        const result = prisma.category.findFirst({
            where: {
                id: Number(params.id),
            }
        });
        return result;
    }
    async create(body) {
        const result = prisma.category.create({ data: body });
        return result;
    }
    async update(id, body) {
        const result = prisma.category.update({ where: { id }, data: body });
        return result;
    }
    async delete(id) {
        const result = prisma.category.delete({ where: { id } });
        return result;
    }
}
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=CategoryRepository.js.map