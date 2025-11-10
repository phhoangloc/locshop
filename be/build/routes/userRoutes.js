"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const IController_1 = require("../controller/IController");
const userController = new IController_1.IUserController();
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/:id", userController.findUser);
exports.userRouter.post("/logout", userController.logout);
//# sourceMappingURL=userRoutes.js.map