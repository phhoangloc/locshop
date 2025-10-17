import { Request, Response } from "express"
import { ICategoryService, IProductService } from "../services/IServices"
import { ResponseDTO } from "../DTO/response"
const iService = new IProductService()
interface CustomRequest extends Request {
    id?: number
}
export class ProductController {

    async findProduct(req: CustomRequest, res: Response) {
        try {
            const result = await iService.findAllProduct(req.query)
            const DTO = new ResponseDTO(true, result)
            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }
    }

    async createProduct(req: CustomRequest, res: Response) {
        try {
            await iService.createProduct(req.body)
            const DTO = new ResponseDTO(true, "you have been create a Product")
            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)

            res.json(DTO)
        }
    }

    async updateProduct(req: CustomRequest, res: Response) {
        const id = Number(req.params.id)
        try {
            await iService.updateProduct(id, req.body)
            const DTO = new ResponseDTO(true, "you have been update a product")
            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }

    }
    async deleteProduct(req: CustomRequest, res: Response) {
        const id = Number(req.params.id)
        try {
            await iService.deleteProduct(id)
            const DTO = new ResponseDTO(true, "you have been delete a product")

            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }

    }
}