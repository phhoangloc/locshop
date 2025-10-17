import { Response, Request } from "express"
import { IBlogService } from "../services/IServices"
interface CustomRequest extends Request {
    id?: number;
}
const iBlogService = new IBlogService()
export class BlogController {

    async findBlog(req: Request, res: Response) {
        const query = req.query
        try {
            const result = await iBlogService.findAllBlog(query)
            res.json({
                success: true,
                data: result
            })
        } catch (error: any) {
            res.json(error.message)
        }
    }
    async findOneBlog(req: Request, res: Response) {
        const query = req.query
        const params = req.params
        try {
            const result = await iBlogService.findOneBlog(params, query)
            res.json({
                success: true,
                data: result
            })
        } catch (error: any) {
            res.json(error.message)
        }
    }
    async createBlog(req: CustomRequest, res: Response) {
        const body = req.body
        const newBody = body
        newBody.host = {
            connect: { id: req.id }
        }
        newBody.category = {
            connect: { id: body.categoryId }
        }
        newBody.categoryId = undefined
        try {
            const result = await iBlogService.createBlog(newBody)
            if (!result) {
                throw Error("There are Something wrong. Please check again.")
            }
            res.json({
                success: true,
                msg: "you have been post a blog"
            })
        } catch (error: any) {
            res.json(error.message)
        }
    }
    async updateBlog(req: CustomRequest, res: Response) {
        const query = req.query
        const params = req.params
        const id = Number(params.id)
        const body = req.body
        try {
            const blog = await iBlogService.findOneBlog(params, query)
            if (blog?.hostId != Number(req.id)) {
                throw new Error("you are not this blog 's owner")
            }
            await iBlogService.updateBlog(body, id)
            res.json({
                success: true,
                msg: "you have been update a blog"
            })
        } catch (error: any) {
            res.json(error.message)
        }
    }
    async deleteBlog(req: CustomRequest, res: Response) {
        const query = req.query
        const params = req.params
        const id = Number(params.id)
        try {
            const blog = await iBlogService.findOneBlog(params, query)
            if (blog?.hostId != Number(req.id)) {
                throw new Error("you are not this blog 's owner")
            }
            await iBlogService.deleteBlog(id)
            res.json({
                success: true,
                msg: "you have been delete a blog"
            })
        } catch (error: any) {
            res.json(error.message)
        }
    }
}