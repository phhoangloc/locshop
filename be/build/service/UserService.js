"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const IRepository_1 = require("../repository/IRepository");
const bscrypt_1 = require("../ult/bscrypt");
const jwt_1 = require("../ult/jwt");
const mail_1 = require("../ult/mail");
const validate_1 = require("../ult/validate");
const iUserRepository = new IRepository_1.IUserRepository();
class UserService {
    async find(query) {
        const result = iUserRepository.find(query);
        return result;
    }
    async findFirst(params) {
        const result = iUserRepository.findFirst(params);
        return result;
    }
    async create(body) {
        const password_encode = (0, bscrypt_1.encode)(body.password);
        const newBody = { ...body };
        newBody.password = password_encode;
        const validateResult = await (0, validate_1.validate)(newBody);
        if (validateResult) {
            return validateResult;
        }
        try {
            await iUserRepository.create(newBody);
            await (0, mail_1.sendMailToAcceptRegister)(newBody.email);
            return "please check email to active account";
        }
        catch (err) {
            throw err;
        }
    }
    async active(query) {
        const users = await iUserRepository.find({ email: query.email });
        const id = users[0]?.id;
        if (!id) {
            return "this email is not existed";
        }
        try {
            await iUserRepository.update(id, { active: true });
            return "your account is active";
        }
        catch (err) {
            throw err;
        }
    }
    async login(body) {
        const users = await iUserRepository.find({ username: body.username });
        const id = users[0]?.id;
        if (!id) {
            throw Error("this username is not existed");
        }
        const active = users[0]?.active;
        if (!active) {
            throw Error("this account is not active");
        }
        const password = users[0]?.password;
        if (!password) {
            throw Error;
        }
        const isPasswordCorrect = (0, bscrypt_1.decode)(body.password, password);
        if (!isPasswordCorrect) {
            throw Error("this password is not correct");
        }
        try {
            const isToken = await (0, jwt_1.generateToken)(id);
            const token = isToken ? isToken : "";
            return token;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map