import { Router } from "express";
import { IUserController } from "../controller/IController";
const userController = new IUserController()
export const userRouter = Router()


userRouter.get("/:id", userController.findUser)

userRouter.post("/logout", userController.logout)
