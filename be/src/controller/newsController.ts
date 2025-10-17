import { Request, Response } from "express"
import { INewsService } from "../services/IServices"
import { ResponseDTO } from "../DTO/response"
const iService = new INewsService()
interface CustomRequest extends Request {
    id?: number
}
export class NewsController {

    async findNews(req: CustomRequest, res: Response) {
        try {
            const result = await iService.findAllNews(req.query)
            const DTO = new ResponseDTO(true, result)
            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }
    }
    async findOneNews(req: CustomRequest, res: Response) {
        const params = req.params
        try {
            const result = await iService.findOneNews(params, req.query)
            const DTO = new ResponseDTO(true, result)
            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }
    }
    async createNews(req: CustomRequest, res: Response) {
        if (req.id) {
            const body = req.body
            body.hostId = req.id
            try {
                await iService.createNews(req.body)
                const DTO = new ResponseDTO(true, "you have been post a news")
                res.json(DTO)
            } catch (error: any) {
                const DTO = new ResponseDTO(false, error.message)

                res.json(DTO)
            }
        } else {
            const DTO = new ResponseDTO(false, "you dont have permission")
            res.json(DTO)
        }

    }

    async updateNews(req: CustomRequest, res: Response) {
        try {
            const params = req.params
            const id = Number(params.id)
            const body = req.body
            await iService.updateNews(id, body)
            const DTO = new ResponseDTO(true, "you have been update a news")
            res.json(DTO)
        }
        catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }

    }
    async deleteNews(req: CustomRequest, res: Response) {
        try {
            const params = req.params
            const id = Number(params.id)
            const body = req.body
            await iService.updateNews(id, body)
            const DTO = new ResponseDTO(true, "you have been update a news")
            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }
    }
}
