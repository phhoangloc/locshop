import { Request, Response } from "express"
import { ICategoryService } from "../services/IServices"
import { ResponseDTO } from "../DTO/response"
const iService = new ICategoryService
interface CustomRequest extends Request {
    id?: number
}
export class CategoryController {

    async findCategory(req: CustomRequest, res: Response) {
        try {
            const result = await iService.findAllCategory(req.query)
            const DTO = new ResponseDTO(true, result)
            res.json(DTO)
        } catch (error: any) {
            const DTO = new ResponseDTO(false, error.message)
            res.json(DTO)
        }
    }

    async createCategory(req: CustomRequest, res: Response) {
        if (req.id) {
            try {
                await iService.createCategory(req.body)
                const DTO = new ResponseDTO(true, "you have been create a Category")
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

    async updateCategory(req: CustomRequest, res: Response) {
        const id = Number(req.params.id)
        if (req.id) {
            try {
                await iService.updateCategory(id, req.body)
                const DTO = new ResponseDTO(true, "you have been update a category")
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
    async deleteCategory(req: CustomRequest, res: Response) {
        const id = Number(req.params.id)
        if (req.id) {
            try {
                await iService.deleteCategory(id)
                const DTO = new ResponseDTO(true, "you have been delete a category")

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
}