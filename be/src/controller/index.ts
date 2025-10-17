import { Request, Response } from "express"
import { IUserService } from "../services/IServices"
import { saveCookie } from "../ult/cookie"
import { UserDTO } from "../DTO/user";
import { ResponseDTO } from "../DTO/response";
import Parser = require("rss-parser");
const parser = new Parser()
interface CustomRequest extends Request {
    id?: number;
}
const iUserService = new IUserService()

export class Controller {

    async getNews(req: Request, res: Response) {
        try {
            // thay bằng link RSS thực tế của Google Alerts
            const feed = await parser.parseURL(
                "https://www.google.co.jp/alerts/feeds/02914769060042923735/1066734219932877081"
            );

            // chỉ lấy một số field cần thiết
            const items = feed.items.map((item) => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                content: item.contentSnippet,
            }));

            res.json(new ResponseDTO(true, items))
        } catch (error) {
            console.error(error);
            res.json(new ResponseDTO(false, "this RSS is not existed"));
        }
    }

    async createUser(req: Request, res: Response) {
        const body = req.body
        try {
            await iUserService.signup(body)
            res.json(new ResponseDTO(true, "check mail to active your account"))

        } catch (error: any) {
            const responseDTO = new ResponseDTO(false, error.message)
            res.json(responseDTO)
        }
    }
    async active(req: Request, res: Response) {
        const query = req.query
        try {
            await iUserService.active(query)
            res.json(new ResponseDTO(true, "your account is active"))

        } catch (error: any) {
            const responseDTO = new ResponseDTO(false, error.message)
            res.json(responseDTO)
        }
    }
    async login(req: Request, res: Response) {
        const body = req.body
        try {
            const token = await iUserService.login(body)
            if (token) {
                saveCookie(token, res)
                res.json(new ResponseDTO(true, "login success"))
            }
        } catch (error: any) {
            const responseDTO = new ResponseDTO(false, error.message)
            res.json(responseDTO)
        }
    }
    async findUserByMySelf(req: CustomRequest, res: Response) {
        const id = req.id
        try {
            const result: any = await iUserService.findOneUser({ id })
            res.json(new ResponseDTO(true, new UserDTO(result)))
        } catch (error: any) {
            res.json(new ResponseDTO(false, error.message))
        }
    }
    async findUserByQuery(req: Request, res: Response) {
        let query = req.query
        try {
            const result: any = await iUserService.findOneUser(query)
            if (!result) {
                throw Error("there is no account like this")
            }
            res.json(new ResponseDTO(true, null))
        } catch (error: any) {
            res.json(new ResponseDTO(false, error.message))
        }
    }
    async logout(req: Request, res: Response) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true, // nếu bạn dùng HTTPS
            sameSite: 'strict' // hoặc 'lax' tùy theo setup
        });

        res.json(new ResponseDTO(true, "logout success"))

    }
}