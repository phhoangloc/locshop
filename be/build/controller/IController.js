"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBlogController = exports.ICategoryController = exports.IProductController = exports.IUserController = void 0;
const UserController_1 = require("./UserController");
const ProductController_1 = require("./ProductController");
const CategoryController_1 = require("./CategoryController");
const BlogController_1 = require("./BlogController");
class IUserController extends UserController_1.UserController {
}
exports.IUserController = IUserController;
class IProductController extends ProductController_1.ProductController {
}
exports.IProductController = IProductController;
class ICategoryController extends CategoryController_1.CategoryController {
}
exports.ICategoryController = ICategoryController;
class IBlogController extends BlogController_1.BlogController {
}
exports.IBlogController = IBlogController;
//# sourceMappingURL=IController.js.map