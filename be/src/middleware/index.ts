import { parse } from "cookie";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { IUserService } from "../service/IService";
import { ReturnDTO } from "../ult/DTO";
const returnDTO = new ReturnDTO()
const iUserService = new IUserService()
interface CustomRequest extends Request {
    id?: number;
}
export class middleWare {

    position;

    constructor(position: string) {
        this.position = position;
        this.checkPosition = this.checkPosition.bind(this);
    }
    async checkPosition(req: CustomRequest, res: Response, next: NextFunction) {
        const cookies = req.headers.cookie;
        const token = cookies ? parse(cookies).token : null;
        try {
            if (!token) {
                throw new Error("you haven't logged in yet")
            }
            if (!process.env.SECRETTOKEN) {
                throw new Error("you haven't logged in yet")
            }
            const result = verify(token, process.env.SECRETTOKEN)
            if (typeof result !== 'object' || !result.id) {
                throw new Error("your token is expired")
            }
            const user = await iUserService.findFirst({ id: result.id })
            if (!user) {
                throw new Error("id is not Existed")
            }
            req.id = result.id
            next()
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))
        }
    }
}