"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBlogService = exports.ICategoryService = exports.IProductService = exports.IUserService = void 0;
const ProductService_1 = require("./ProductService");
const UserService_1 = require("./UserService");
const CategoryService_1 = require("./CategoryService");
const BlogService_1 = require("./BlogService");
class IUserService extends UserService_1.UserService {
}
exports.IUserService = IUserService;
class IProductService extends ProductService_1.ProductService {
}
exports.IProductService = IProductService;
class ICategoryService extends CategoryService_1.CategoryService {
}
exports.ICategoryService = ICategoryService;
class IBlogService extends BlogService_1.BlogService {
}
exports.IBlogService = IBlogService;
//# sourceMappingURL=IService.js.map