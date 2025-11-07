import { Router } from "express";
import { Request, Response } from "express";
import { userRouter } from "./userRoutes";
import { adminRouter } from "./adminRoutes";
import { IUserController } from "../controller/IController";
import { middleWare } from "../middleware";
export const ApiRouter = Router()


const iUserController = new IUserController()
const userMiddleWare = new middleWare("user")
const adminMiddleWare = new middleWare("admin")

ApiRouter.use("/user", userMiddleWare.checkPosition, userRouter)
ApiRouter.use("/admin", adminMiddleWare.checkPosition, adminRouter)
ApiRouter.get("/check", iUserController.checkUser)
ApiRouter.post("/signup", iUserController.createUser)
ApiRouter.get("/active", iUserController.active)
ApiRouter.post("/login", iUserController.login)
ApiRouter.post("/logout", iUserController.logout)
ApiRouter.get("/", (req: Request, res: Response) => {
    res.json("hello api")
})
