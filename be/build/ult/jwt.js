"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateToken = async (id) => {
    const payload = { id };
    if (process.env.SECRETTOKEN) {
        return (0, jsonwebtoken_1.sign)(payload, process.env.SECRETTOKEN);
    }
    else {
        return "you must provide the secret token";
    }
};
exports.generateToken = generateToken;
//# sourceMappingURL=jwt.js.map