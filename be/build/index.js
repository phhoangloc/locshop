"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '5mb' }));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true
}));
// getItemByRanking()
// writeBlogFromItem("abcmartsports:10130075")
app.use("/api", routes_1.ApiRouter);
app.listen(4000, () => {
    console.log("server is connect");
    console.log("http://localhost:4000");
});
//# sourceMappingURL=index.js.map