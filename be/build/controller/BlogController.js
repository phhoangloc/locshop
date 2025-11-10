"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const IService_1 = require("../service/IService");
const DTO_1 = require("../ult/DTO");
const iBlogService = new IService_1.IBlogService();
const returnDTO = new DTO_1.ReturnDTO();
class BlogController {
    async find(req, res) {
        const query = req.query;
        try {
            const result = await iBlogService.find(query);
            res.json(returnDTO.data(true, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async findBlog(req, res) {
        const params = req.params;
        try {
            const result = await iBlogService.findFirst(params);
            const success = result?.id ? true : false;
            res.json(returnDTO.data(success, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async create(req, res) {
        const body = req.body;
        const id = req.id;
        const newBody = { ...body };
        newBody.host = {
            connect: { id }
        };
        newBody.hostId = undefined;
        newBody.category = {
            connect: { id: body.categoryId }
        };
        newBody.categoryId = undefined;
        try {
            await iBlogService.create(newBody);
            res.json(returnDTO.message(true, "a Blog has been created"));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async update(req, res) {
        const params = req.params;
        const body = req.body;
        const id = params.id;
        const hostId = req.id;
        try {
            if (id !== hostId) {
                throw Error("you are not blog 's owner");
            }
            await iBlogService.update(Number(id), body);
            res.json(returnDTO.message(true, "a Blog has been updated"));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async delete(req, res) {
        const params = req.params;
        const id = params.id;
        const hostId = req.id;
        try {
            if (id !== hostId) {
                throw Error("you are not blog 's owner");
            }
            await iBlogService.delete(Number(id));
            res.json(returnDTO.message(true, "a Blog has been deleted"));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
}
exports.BlogController = BlogController;
//# sourceMappingURL=BlogController.js.map