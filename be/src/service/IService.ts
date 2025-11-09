import { ProductService } from "./ProductService";
import { UserService } from "./UserService";
import { CategoryService } from "./CategoryService";
import { BlogService } from "./BlogService";
export class IUserService extends UserService { }
export class IProductService extends ProductService { }
export class ICategoryService extends CategoryService { }
export class IBlogService extends BlogService { }