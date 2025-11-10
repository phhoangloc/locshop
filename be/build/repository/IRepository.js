"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBlogRepository = exports.ICategoryRepository = exports.IProductRepository = exports.IUserRepository = void 0;
const UserRepository_1 = require("./UserRepository");
const ProductRepository_1 = require("./ProductRepository");
const CategoryRepository_1 = require("./CategoryRepository");
const BlogRepository_1 = require("./BlogRepository");
class IUserRepository extends UserRepository_1.UserRepository {
}
exports.IUserRepository = IUserRepository;
class IProductRepository extends ProductRepository_1.ProductRepository {
}
exports.IProductRepository = IProductRepository;
class ICategoryRepository extends CategoryRepository_1.CategoryRepository {
}
exports.ICategoryRepository = ICategoryRepository;
class IBlogRepository extends BlogRepository_1.BlogRepository {
}
exports.IBlogRepository = IBlogRepository;
//# sourceMappingURL=IRepository.js.map