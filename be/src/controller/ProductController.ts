import { IProductService } from "../service/IService"
import { ReturnDTO } from "../ult/DTO"
import { Request, Response } from "express"
const iProductService = new IProductService()
const returnDTO = new ReturnDTO()
export class ProductController {

    async find(req: Request, res: Response) {
        const query = req.query
        try {
            const result = await iProductService.find(query)
            res.json(returnDTO.data(true, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }

    async findProduct(req: Request, res: Response) {
        const params = req.params
        try {
            const result = await iProductService.findFirst(params)
            const success = result?.id ? true : false
            res.json(returnDTO.data(success, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }

    async create(req: Request, res: Response) {
        const body = req.body
        try {
            const result = await iProductService.create(body)
            res.json(returnDTO.message(true, "a product has been created"))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
}