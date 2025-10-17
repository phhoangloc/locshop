import { Request, Response } from "express";
import { IPageService } from "../services/IServices";
import { ResponseDTO } from "../DTO/response";
const iPageService = new IPageService()
interface CustomRequest extends Request {
    id?: number;
}
export class PageController {
    async findPage(req: Request, res: Response) {
        const query = req.query
        try {
            const result = await iPageService.findAllPage(query)
            res.json(new ResponseDTO(true, result))
        } catch (error: any) {
            res.json(new ResponseDTO(false, error.message))
        }
    }
    async findOnePage(req: CustomRequest, res: Response) {
        const params = req.params
        try {
            const result = await iPageService.findOnePage(params)
            res.json(new ResponseDTO(true, result))
        } catch (error: any) {
            res.json(new ResponseDTO(false, error.message))
        }
    }
    async createPage(req: CustomRequest, res: Response) {
        const body = req.body
        const newBody = body
        try {
            await iPageService.createPage(newBody)
            res.json(new ResponseDTO(true, "you have created a new page"))
        } catch (error: any) {
            res.json(new ResponseDTO(false, error.message))

        }
    }
    async updatePage(req: CustomRequest, res: Response) {
        const params = req.params
        const id = params.id
        const body = req.body
        try {
            await iPageService.updatePage(body, Number(id))
            res.json(new ResponseDTO(true, "you have updated a recent page"))
        } catch (error: any) {
            res.json(new ResponseDTO(false, error.message))
        }
    }
    async deletePage(req: CustomRequest, res: Response) {
        const params = req.params
        const id = params.id
        try {
            await iPageService.deletePage(Number(id))
            res.json(new ResponseDTO(true, "you have delete a recent page"))
        } catch (error: any) {
            res.json(new ResponseDTO(false, error.message))
        }
    }
}