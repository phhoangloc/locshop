import { UserController } from "./UserController";
import { ProductController } from "./ProductController";
import { CategoryController } from "./CategoryController";
import { BlogController } from "./BlogController";
export class IUserController extends UserController { }
export class IProductController extends ProductController { }
export class ICategoryController extends CategoryController { }
export class IBlogController extends BlogController { }