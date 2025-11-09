import { IUserService } from "../service/IService";
import { Request, Response } from "express";
import { ReturnDTO } from "../ult/DTO";
import { saveCookie } from "../ult/cookie";
const returnDTO = new ReturnDTO()
const iUserService = new IUserService()

export class UserController {
    async find(req: Request, res: Response) {
        const query = req.query
        try {
            const result = await iUserService.find(query)
            res.json(returnDTO.data(true, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
    async findUser(req: Request, res: Response) {
        const params = req.params
        try {
            const result = await iUserService.findFirst(params)
            const success = result?.id ? true : false
            res.json(returnDTO.data(success, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
    async checkUser(req: Request, res: Response) {
        const query = req.query
        if (!query) {
            res.json(returnDTO.boolean(false))
        }
        try {
            const result = await iUserService.find(query)
            if (!result.length) {
                res.json(returnDTO.boolean(false))
                return
            }
            const username = result[0]?.username
            const email = result[0]?.email
            const success = query.username === username || query.email === email
            res.json(returnDTO.boolean(success))
        } catch (error: any) {
            res.json(returnDTO.boolean(false))

        }

    }
    async createUser(req: Request, res: Response) {
        const body = req.body
        try {
            const result = await iUserService.create(body)
            res.json(returnDTO.message(true, 'user account has been created'))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
    async active(req: Request, res: Response) {
        const query = req.query
        try {
            const result = await iUserService.active(query)
            res.json(returnDTO.message(true, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
    async login(req: Request, res: Response) {
        const body = req.body
        try {
            const token = await iUserService.login(body)
            if (token) {
                saveCookie(token, res)
                res.json(returnDTO.message(true, "login success"))
            }
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))
        }
    }
    async logout(req: Request, res: Response) {
        res.clearCookie('token', {
            httpOnly: false,
            secure: false, // nếu bạn dùng HTTPS
            sameSite: 'lax' // hoặc 'lax' tùy theo setup
        });

        res.json(res.json(returnDTO.message(true, "logout success"))
        );
    }

}