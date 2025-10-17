import { Router } from "express";
import { Controller } from "../controller";
import { PageController } from "../controller/page.controller";
import { BlogController } from "../controller/blog.controller";
import { CategoryController } from "../controller/category.controller";
import { NewsController } from "../controller/newsController";
const controller = new Controller()
export const UserRoutes = Router()
const pageController = new PageController()
const blogController = new BlogController()
const categoryController = new CategoryController()
const newsController = new NewsController()

UserRoutes.get("/", controller.findUserByMySelf)
UserRoutes.get("/page", pageController.findPage)
UserRoutes.get("/page/:id", pageController.findOnePage)
UserRoutes.get("/blog", blogController.findBlog)
UserRoutes.get("/blog/:id", blogController.findOneBlog)
UserRoutes.post("/blog", blogController.createBlog)
UserRoutes.put("/blog/:id", blogController.updateBlog)
UserRoutes.delete("/blog/:id", blogController.deleteBlog)
UserRoutes.get("/category", categoryController.findCategory)
UserRoutes.get("/news", newsController.findNews)
UserRoutes.get("/news/:id", newsController.findOneNews)
UserRoutes.post("/logout", controller.logout)