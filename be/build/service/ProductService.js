"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const IRepository_1 = require("../repository/IRepository");
const iProductRepository = new IRepository_1.IProductRepository();
class ProductService {
    async find(query) {
        const result = iProductRepository.find(query);
        return result;
    }
    async findFirst(params) {
        const result = iProductRepository.findFirst(params);
        return result;
    }
    async create(body) {
        const result = iProductRepository.create(body);
        return result;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map