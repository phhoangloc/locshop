"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const IService_1 = require("../service/IService");
const DTO_1 = require("../ult/DTO");
const cookie_1 = require("../ult/cookie");
const returnDTO = new DTO_1.ReturnDTO();
const iUserService = new IService_1.IUserService();
class UserController {
    async find(req, res) {
        const query = req.query;
        try {
            const result = await iUserService.find(query);
            res.json(returnDTO.data(true, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async findUser(req, res) {
        const params = req.params;
        try {
            const result = await iUserService.findFirst(params);
            const success = result?.id ? true : false;
            res.json(returnDTO.data(success, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async checkUser(req, res) {
        const query = req.query;
        if (!query) {
            res.json(returnDTO.boolean(false));
        }
        try {
            const result = await iUserService.find(query);
            if (!result.length) {
                res.json(returnDTO.boolean(false));
                return;
            }
            const username = result[0]?.username;
            const email = result[0]?.email;
            const success = query.username === username || query.email === email;
            res.json(returnDTO.boolean(success));
        }
        catch (error) {
            res.json(returnDTO.boolean(false));
        }
    }
    async createUser(req, res) {
        const body = req.body;
        try {
            const result = await iUserService.create(body);
            res.json(returnDTO.message(true, 'user account has been created'));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async active(req, res) {
        const query = req.query;
        try {
            const result = await iUserService.active(query);
            res.json(returnDTO.message(true, result));
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async login(req, res) {
        const body = req.body;
        try {
            const token = await iUserService.login(body);
            if (token) {
                (0, cookie_1.saveCookie)(token, res);
                res.json(returnDTO.message(true, "login success"));
            }
        }
        catch (error) {
            res.json(returnDTO.message(false, error.message));
        }
    }
    async logout(req, res) {
        res.clearCookie('token', {
            httpOnly: false,
            secure: false, // nếu bạn dùng HTTPS
            sameSite: 'lax' // hoặc 'lax' tùy theo setup
        });
        res.json(res.json(returnDTO.message(true, "logout success")));
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map