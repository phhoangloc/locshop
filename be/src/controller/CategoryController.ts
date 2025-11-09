import { ICategoryService } from "../service/IService"
import { ReturnDTO } from "../ult/DTO"
import { Request, Response } from "express"
const iCategoryService = new ICategoryService()
const returnDTO = new ReturnDTO()
export class CategoryController {

    async find(req: Request, res: Response) {
        const query = req.query
        try {
            const result = await iCategoryService.find(query)
            res.json(returnDTO.data(true, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }

    async findCategory(req: Request, res: Response) {
        const params = req.params
        try {
            const result = await iCategoryService.findFirst(params)
            const success = result?.id ? true : false
            res.json(returnDTO.data(success, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }

    async create(req: Request, res: Response) {
        const body = req.body
        try {
            await iCategoryService.create(body)
            res.json(returnDTO.message(true, "a Category has been created"))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
    async update(req: Request, res: Response) {
        const params = req.params
        const body = req.body
        const id = params.id
        try {
            await iCategoryService.update(Number(id), body)
            res.json(returnDTO.message(true, "a Category has been updated"))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
    async delete(req: Request, res: Response) {
        const params = req.params
        const id = params.id
        try {
            await iCategoryService.delete(Number(id))
            res.json(returnDTO.message(true, "a Category has been deleted"))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
}