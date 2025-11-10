"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_genai_1 = require("@langchain/google-genai");
(async () => {
    const model = new google_genai_1.ChatGoogleGenerativeAI({
        temperature: 0.7,
        model: "gemini-2.5-pro",
        apiKey: process.env.API_KEY_GOOGLE
    });
    const response = await model.invoke("Why do parrots talk?");
    console.log(response.content);
})();
//# sourceMappingURL=agent.js.map