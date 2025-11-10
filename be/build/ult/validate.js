"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const IRepository_1 = require("../repository/IRepository");
const client_1 = require("@prisma/client");
const iUserRepository = new IRepository_1.IUserRepository();
const prisma = new client_1.PrismaClient();
const validateUsernameExist = async (username) => {
    const user = await iUserRepository.find({ username: username });
    if (user[0]?.username === username) {
        return "this username is existed";
    }
};
const validateEmailExist = async (email) => {
    const user = await iUserRepository.find({ email });
    if (user[0]?.email === email) {
        return "this email is existed";
    }
};
const validateUsernameLength = async (username) => {
    if (username.length < 6) {
        return "your username must be equal or larger than 6 character";
    }
};
const validatePasswordLength = async (password) => {
    if (password.length < 6) {
        return "your password must be equal or larger than 6 character";
    }
};
const validateEmailLength = async (email) => {
    if (!/\S+@\S+\.\S+/.test(email) && email.length != 0) {
        return "your email is not valid";
    }
};
const validate = async (body) => await validateUsernameLength(body.username)
    || await validateUsernameExist(body.username)
    || await validatePasswordLength(body.password)
    || await validateEmailLength(body.email)
    || await validateEmailExist(body.email);
exports.validate = validate;
//# sourceMappingURL=validate.js.map