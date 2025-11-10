"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCookie = void 0;
const cookie_1 = require("cookie");
const saveCookie = (token, res) => {
    res.setHeader('Set-Cookie', (0, cookie_1.serialize)('token', token, {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 2,
        path: '/',
        sameSite: 'lax',
    }));
};
exports.saveCookie = saveCookie;
//# sourceMappingURL=cookie.js.map