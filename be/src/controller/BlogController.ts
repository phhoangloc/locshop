import { IBlogService } from "../service/IService"
import { ReturnDTO } from "../ult/DTO"
import { Request, Response } from "express"
const iBlogService = new IBlogService()
const returnDTO = new ReturnDTO()

interface CustomRequest extends Request {
    id?: number;
}
export class BlogController {

    async find(req: Request, res: Response) {
        const query = req.query
        try {
            const result = await iBlogService.find(query)
            res.json(returnDTO.data(true, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }

    async findBlog(req: Request, res: Response) {
        const params = req.params
        try {
            const result = await iBlogService.findFirst(params)
            const success = result?.id ? true : false
            res.json(returnDTO.data(success, result))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }

    async create(req: CustomRequest, res: Response) {
        const body = req.body
        const id = req.id
        const newBody = { ...body }
        newBody.host = {
            connect: { id }
        }
        newBody.hostId = undefined
        newBody.category = {
            connect: { id: body.categoryId }
        }
        newBody.categoryId = undefined
        try {
            await iBlogService.create(newBody)
            res.json(returnDTO.message(true, "a Blog has been created"))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
    async update(req: CustomRequest, res: Response) {
        const params = req.params
        const body = req.body
        const id = params.id
        const hostId = req.id
        try {
            if (id !== hostId) {
                throw Error("you are not blog 's owner")
            }
            await iBlogService.update(Number(id), body)
            res.json(returnDTO.message(true, "a Blog has been updated"))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))
        }

    }
    async delete(req: CustomRequest, res: Response) {
        const params = req.params
        const id = params.id
        const hostId = req.id
        try {
            if (id !== hostId) {
                throw Error("you are not blog 's owner")
            }
            await iBlogService.delete(Number(id))
            res.json(returnDTO.message(true, "a Blog has been deleted"))
        } catch (error: any) {
            res.json(returnDTO.message(false, error.message))

        }

    }
}