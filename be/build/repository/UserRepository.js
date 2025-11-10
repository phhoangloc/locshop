"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserRepository {
    async find(query) {
        const result = prisma.user.findMany({
            where: {
                username: query.username ? { contains: query.username } : undefined,
                email: query.email ? query.email : undefined,
            }
        });
        return result;
    }
    async findFirst(params) {
        const result = prisma.user.findFirst({
            where: {
                id: Number(params.id),
            }
        });
        return result;
    }
    async create(body) {
        const result = prisma.user.create({ data: body });
        return result;
    }
    async update(id, body) {
        const result = prisma.user.update({ where: { id }, data: body });
        return result;
    }
    async delete(id) {
        const result = prisma.user.delete({ where: { id } });
        return result;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map