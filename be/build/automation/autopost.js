"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAIToMakeImage = exports.callAIToMakeDescription = exports.callAIToMakeKeyword = exports.callAI = void 0;
const genai_1 = require("@google/genai");
const promt_1 = require("./promt");
const ai = new genai_1.GoogleGenAI({ apiKey: process.env.PRIVATE_KEY });
const node_fetch_1 = __importDefault(require("node-fetch"));
const callAI = async (body, images) => {
    const res = await (0, node_fetch_1.default)(body.link);
    const html = await res.text();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: (0, promt_1.prompt)("blog", body, html, images)
    });
    return response.text;
};
exports.callAI = callAI;
const callAIToMakeKeyword = async (body) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: (0, promt_1.prompt)("keyword", body)
    });
    return response.text;
};
exports.callAIToMakeKeyword = callAIToMakeKeyword;
const callAIToMakeDescription = async (body) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: (0, promt_1.prompt)("description", body)
    });
    return response.text;
};
exports.callAIToMakeDescription = callAIToMakeDescription;
const callAIToMakeImage = async (body) => {
    const res = await (0, node_fetch_1.default)(body.link);
    const html = await res.text();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: (0, promt_1.prompt)("image", body, html)
    });
    const result = response.text?.split(",");
    return result;
};
exports.callAIToMakeImage = callAIToMakeImage;
//# sourceMappingURL=autopost.js.map