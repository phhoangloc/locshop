import { Express } from "express";
import { Controller } from "../controller";
import { MiddleWare } from "../middleware";
import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";
import { PageController } from "../controller/page.controller";
import { BlogController } from "../controller/blog.controller";
import { CategoryController } from "../controller/category.controller";
import { NewsController } from "../controller/newsController";
import { ProductController } from "../controller/product.controller";
const userMiddlewear = new MiddleWare("user")
const adminMiddlewear = new MiddleWare("admin")
const controller = new Controller()
const pageController = new PageController()
const blogController = new BlogController()
const categoryController = new CategoryController()
const newsController = new NewsController()
const productController = new ProductController()
export const route = (app: Express) => {
    app.get("/api/checkuser", controller.findUserByQuery)
    app.post("/api/signup", controller.createUser)
    app.get("/api/active", controller.active)
    app.post("/api/login", controller.login)
    app.get("/api/page", pageController.findPage)
    app.get("/api/page/:id", pageController.findOnePage)
    app.get("/api/blog", blogController.findBlog)
    app.get("/api/blog/:id", blogController.findOneBlog)
    app.get("/api/category", categoryController.findCategory)
    app.get("/api/alert", controller.getNews)
    app.get("/api/news", newsController.findNews)
    app.get("/api/news/:id", newsController.findOneNews)
    app.use("/api/user", userMiddlewear.checkPosition, UserRoutes)
    app.use("/api/admin", adminMiddlewear.checkPosition, AdminRoutes)

    app.get("/api/product", productController.findProduct)
    app.post("/api/product", productController.createProduct)
}