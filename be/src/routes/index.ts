import { Router } from "express";
import { Request, Response } from "express";
import { userRouter } from "./userRoutes";
import { adminRouter } from "./adminRoutes";
import { IUserController, IProductController, ICategoryController, IBlogController } from "../controller/IController";

import { middleWare } from "../middleware";
export const ApiRouter = Router()


const iUserController = new IUserController()
const iProductController = new IProductController()
const iCategoryController = new ICategoryController()
const iBlogController = new IBlogController()

const userMiddleWare = new middleWare("user")
const adminMiddleWare = new middleWare("admin")

ApiRouter.use("/user", userMiddleWare.checkPosition, userRouter)
ApiRouter.use("/admin", adminMiddleWare.checkPosition, adminRouter)
ApiRouter.get("/check", iUserController.checkUser)
ApiRouter.post("/signup", iUserController.createUser)
ApiRouter.get("/active", iUserController.active)
ApiRouter.post("/login", iUserController.login)
ApiRouter.post("/logout", iUserController.logout)

ApiRouter.get("/product", iProductController.find)
ApiRouter.get("/product/:id", iProductController.findProduct)

ApiRouter.get("/category", iCategoryController.find)
ApiRouter.get("/category/:id", iCategoryController.findCategory)

ApiRouter.get("/blog", iBlogController.find)
ApiRouter.get("/blog/:id", iBlogController.findBlog)

ApiRouter.get("/", (req: Request, res: Response) => {
    res.json("hello api")
})
