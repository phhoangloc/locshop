import { UserRepository } from "./UserRepository";
import { ProductRepository } from "./ProductRepository";
import { CategoryRepository } from "./CategoryRepository";
import { BlogRepository } from "./BlogRepository";
export class IUserRepository extends UserRepository { }
export class IProductRepository extends ProductRepository { }
export class ICategoryRepository extends CategoryRepository { }
export class IBlogRepository extends BlogRepository { }
