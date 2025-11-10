"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const promt_1 = require("./promt");
const genai_1 = require("@google/genai");
const ai = new genai_1.GoogleGenAI({ apiKey: process.env.PRIVATE_KEY });
const getData = async (url) => {
    const res = await (0, node_fetch_1.default)(url);
    const html = await res.text();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: (0, promt_1.prompt)("archive", { title: "hello", link: "hello", content: "hello" }, html)
    });
    const data = response.text;
    const array = data ? JSON.parse(data) : [];
    const feed = { items: array };
    return feed;
};
exports.getData = getData;
//# sourceMappingURL=fetch.js.map