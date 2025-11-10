import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import "dotenv/config";
import { tool } from "langchain"
import { createAgent } from "langchain"
import * as z from "zod"
const getTheCityName = tool(
    () => {
        console.log("OSAKA")
        return "OSAKA"
    },
    {
        name: "get_the_city_name",
        description: "Get the city name.",
    }
);
const sayByeCityName = tool(
    (city: string) => {
        console.log("Bye " + city)
        return ("Bye " + city)
    },
    {
        name: "say_bye_the_city_name",
        description: "Bye the city name.",
    }
);
const agent = createAgent({
    model: new ChatGoogleGenerativeAI({ model: "gemini-2.5-flash", apiKey: "AIzaSyAK-rlv-34Hk2FGkQRON8KcPj7kN_fCtuI" }),
    tools: [getTheCityName, sayByeCityName],

});
(
    async () => {
        const result = await agent.invoke(
            {
                messages: [{ role: "human", content: "call get_the_city_name, then call say_bye_the_city_name" }]
            },);
        console.log(result)

    }
)()

