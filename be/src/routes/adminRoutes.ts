import { Router } from "express";
import { IUserController, IProductController, IBlogController, ICategoryController } from "../controller/IController";

const userController = new IUserController()
const productController = new IProductController()
const iCategoryController = new ICategoryController()
const iBlogController = new IBlogController()
export const adminRouter = Router()

adminRouter.get("/", userController.find)
adminRouter.get("/:id", userController.findUser)

adminRouter.post("/product", productController.create)

adminRouter.post("/category", iCategoryController.create)
adminRouter.put("/category/:id", iCategoryController.update)
adminRouter.delete("/category/:id", iCategoryController.delete)

adminRouter.post("/blog", iBlogController.create)
adminRouter.put("/blog/:id", iBlogController.update)
adminRouter.delete("/blog/:id", iBlogController.delete)