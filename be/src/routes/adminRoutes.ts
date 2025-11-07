import { Request, Response, Router } from "express";
import { UserController } from "../controller/UserController";
const userController = new UserController()
export const adminRouter = Router()

adminRouter.get("/", userController.find)
adminRouter.get("/:id", userController.findUser)
