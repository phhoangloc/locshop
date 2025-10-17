import { Router } from "express";
import { Controller } from "../controller";
import { PageController } from "../controller/page.controller";
import { BlogController } from "../controller/blog.controller";
import { CategoryController } from "../controller/category.controller";
import { NewsController } from "../controller/newsController";
export const AdminRoutes = Router()
const controller = new Controller()
const pageController = new PageController()
const blogController = new BlogController()
const categoryController = new CategoryController()
const newsController = new NewsController()
AdminRoutes.get("/", controller.findUserByMySelf)
AdminRoutes.post("/logout", controller.logout)

AdminRoutes.get("/page", pageController.findPage)
AdminRoutes.get("/page/:id", pageController.findOnePage)
AdminRoutes.post("/page", pageController.createPage)
AdminRoutes.put("/page/:id", pageController.updatePage)
AdminRoutes.delete("/page/:id", pageController.deletePage)

AdminRoutes.get("/blog", blogController.findBlog)
AdminRoutes.get("/blog/:id", blogController.findOneBlog)
AdminRoutes.post("/blog", blogController.createBlog)
AdminRoutes.put("/blog/:id", blogController.updateBlog)
AdminRoutes.delete("/blog/:id", blogController.deleteBlog)

AdminRoutes.get("/category", (categoryController.findCategory))
AdminRoutes.post("/category", (categoryController.createCategory))
AdminRoutes.put("/category/:id", (categoryController.updateCategory))
AdminRoutes.delete("/category/:id", (categoryController.deleteCategory))

AdminRoutes.get("/news", (newsController.findNews))
AdminRoutes.get("/news/:id", (newsController.findOneNews))
AdminRoutes.post("/news", (newsController.createNews))
AdminRoutes.put("/news/:id", (newsController.updateNews))
AdminRoutes.delete("/news/:id", (newsController.deleteNews))