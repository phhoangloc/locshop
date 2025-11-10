"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const IRepository_1 = require("../repository/IRepository");
const iCategoryRepository = new IRepository_1.ICategoryRepository();
class CategoryService {
    async find(query) {
        const result = iCategoryRepository.find(query);
        return result;
    }
    async findFirst(params) {
        const result = iCategoryRepository.findFirst(params);
        return result;
    }
    async create(body) {
        const result = iCategoryRepository.create(body);
        return result;
    }
    async update(id, body) {
        const result = iCategoryRepository.update(id, body);
        return result;
    }
    async delete(id) {
        const result = iCategoryRepository.delete(id);
        return result;
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=CategoryService.js.map