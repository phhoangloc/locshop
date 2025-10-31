import fetch from "node-fetch";
import { prompt } from "./promt";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.PRIVATE_KEY });

export const getData = async (url: string) => {
    const res = await fetch(url);
    const html = await res.text();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt("archive", { title: "hello", link: "hello", content: "hello" }, html)
    });
    const data = response.text
    const array = data ? JSON.parse(data) : []
    const feed = { items: array }
    return feed

}