"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const IService_1 = require("../service/IService");
const DTO_1 = require("../ult/DTO");
const iProductService = new IService_1.IProductService();
const returnDTO = new DTO_1.ReturnDTO();
class ProductController {
    async find(req, res) {
        const query = req.query;
        try {
            const result = await iProductService.find(query);
            res.json(returnDTO.data(true, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async findProduct(req, res) {
        const params = req.params;
        try {
            const result = await iProductService.findFirst(params);
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
            const result = await iProductService.create(body);
            res.json(returnDTO.message(true, "a product has been created"));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map