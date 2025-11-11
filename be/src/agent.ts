import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import "dotenv/config";
import { tool } from "langchain"
import { createAgent } from "langchain"
import * as z from "zod"
import { callAI, callAIToMakeImage } from "./automation/autopost";

// const title = "hello world"
// const url = "https://znews.vn/hang-giay-nhat-khien-cac-ong-lon-adidas-nike-phai-de-chung-post1599687.html"
const informTitle = tool(
    async (title, config) => {
        console.log(title)
        return title
    },
    {
        name: "get_the_title",
        description: "Get the title",
    }
);
const informURL = tool(
    (url, config) => {
        console.log(url)
        return url
    },
    {
        name: "get_the_url",
        description: "Get the url",
    }
);
const writeBlogFromTitleAndUrl = tool(
    async ({ title, url }) => {
        // console.log(body)
        console.log("title: " + title)
        console.log("url: " + url)
        const images = await callAIToMakeImage({ title, link: url })
        const content = await callAI({ title, link: url }, images)
        console.log(content)
        return ("content")
    },
    {
        name: "write_blog",
        description: "Write blog from title and url",
        schema: z.object({
            title: z.string(),
            url: z.string()
        })
    }
);
const agent = createAgent({
    model: new ChatGoogleGenerativeAI({ model: "gemini-2.5-flash", apiKey: process.env.API_KEY_GOOGLE }),
    tools: [informTitle, informURL, writeBlogFromTitleAndUrl]

});
(
    async (title, url) => {
        await agent.invoke(
            {
                messages: [{ role: "human", content: "title:" + title + ", url:" + url + ".  call write_blog" }]
            },
        );
    }
)("Thương hiệu Onitsuka Tiger, thương hiệu giày nội địa Nhật Bản, hành trình trỗi dậy vươn ra toàn cầu. ", "https://znews.vn/hang-giay-nhat-khien-cac-ong-lon-adidas-nike-phai-de-chung-post1599687.html")

