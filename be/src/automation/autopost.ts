import { GoogleGenAI } from "@google/genai";
import { prompt } from "./promt";
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY_GOOGLE });
import fetch from "node-fetch";

export const callAI = async (body: { title: string, link: string }, images?: string[]) => {
    const res = await fetch(body.link);
    const html = await res.text();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt("blog", body, html, images)
    });
    return response.text

}
export const callAIToMakeKeyword = async (body: { title: string, content: string, link: string }) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt("keyword", body)
    });
    return response.text

}
export const callAIToMakeDescription = async (body: { title: string, content: string, link: string }) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt("description", body)
    });
    return response.text
}

export const callAIToMakeImage = async (body: { title: string; link: string }) => {
    const res = await fetch(body.link);
    const html = await res.text();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt("image", body, html)
    });
    const result = response.text?.split(",")
    return result
}