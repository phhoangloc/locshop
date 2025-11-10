"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const IService_1 = require("../service/IService");
const DTO_1 = require("../ult/DTO");
const iCategoryService = new IService_1.ICategoryService();
const returnDTO = new DTO_1.ReturnDTO();
class CategoryController {
    async find(req, res) {
        const query = req.query;
        try {
            const result = await iCategoryService.find(query);
            res.json(returnDTO.data(true, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async findCategory(req, res) {
        const params = req.params;
        try {
            const result = await iCategoryService.findFirst(params);
            const success = result?.id ? true : false;
            res.json(returnDTO.data(success, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async create(req, res) {
        const body = req.body;
        try {
            await iCategoryService.create(body);
            res.json(returnDTO.message(true, "a Category has been created"));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async update(req, res) {
        const params = req.params;
        const body = req.body;
        const id = params.id;
        try {
            await iCategoryService.update(Number(id), body);
            res.json(returnDTO.message(true, "a Category has been updated"));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async delete(req, res) {
        const params = req.params;
        const id = params.id;
        try {
            await iCategoryService.delete(Number(id));
            res.json(returnDTO.message(true, "a Category has been deleted"));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=CategoryController.js.map