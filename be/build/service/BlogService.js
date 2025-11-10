"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const IRepository_1 = require("../repository/IRepository");
const iBlogRepository = new IRepository_1.IBlogRepository();
class BlogService {
    async find(query) {
        const result = iBlogRepository.find(query);
        return result;
    }
    async findFirst(params) {
        const result = iBlogRepository.findFirst(params);
        return result;
    }
    async create(body) {
        const result = iBlogRepository.create(body);
        return result;
    }
    async update(id, body) {
        const result = iBlogRepository.update(id, body);
        return result;
    }
    async delete(id) {
        const result = iBlogRepository.delete(id);
        return result;
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=BlogService.js.map