"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const bcryptjs_1 = require("bcryptjs");
const encode = (str) => {
    const salt = (0, bcryptjs_1.genSaltSync)(10);
    const result = str && (0, bcryptjs_1.hashSync)(str, salt);
    return result;
};
exports.encode = encode;
const decode = async (password, currentPassword) => {
    const isValid = await (0, bcryptjs_1.compare)(password, currentPassword);
    return isValid;
};
exports.decode = decode;
//# sourceMappingURL=bscrypt.js.map