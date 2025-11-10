"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleWare = void 0;
const cookie_1 = require("cookie");
const jsonwebtoken_1 = require("jsonwebtoken");
const IService_1 = require("../service/IService");
const DTO_1 = require("../ult/DTO");
const returnDTO = new DTO_1.ReturnDTO();
const iUserService = new IService_1.IUserService();
class middleWare {
    position;
    constructor(position) {
        this.position = position;
        this.checkPosition = this.checkPosition.bind(this);
    }
    async checkPosition(req, res, next) {
        const cookies = req.headers.cookie;
        const token = cookies ? (0, cookie_1.parse)(cookies).token : null;
        try {
            if (!token) {
                throw new Error("you haven't logged in yet");
            }
            if (!process.env.SECRETTOKEN) {
                throw new Error("you haven't logged in yet");
            }
            const result = (0, jsonwebtoken_1.verify)(token, process.env.SECRETTOKEN);
            if (typeof result !== 'object' || !result.id) {
                throw new Error("your token is expired");
            }
            const user = await iUserService.findFirst({ id: result.id });
            if (!user) {
                throw new Error("id is not Existed");
            }
            req.id = result.id;
            next();
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
}
exports.middleWare = middleWare;
//# sourceMappingURL=index.js.map