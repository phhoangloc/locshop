import express from "express"
import bodyParser from "body-parser"
import { route } from "./routes"
import cors from "cors"

import cron from "node-cron";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.PRIVATE_KEY });

require('dotenv').config()

const port = process.env.PORT

const app = express()
const front_end_url = process.env.FRONT_END_URL
const admin_url = process.env.ADMIN_URL

const allowedOrigins = [
    admin_url,
    front_end_url
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}))

app.use(bodyParser.json())

route(app)

cron.schedule("52 16 * * *", async () => {
    console.log("Now : ", new Date().toLocaleString());
    const resultsearch = await axios.get("https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601?format=json&affiliateId=4d5c5cbf.d5d0f387.4d5c5cc0.237cc945&genreId=206906&applicationId=1054709467074415269")

    const Items = resultsearch.data.Items
    const item = Items[0].Item

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `as a marketing, write me a report about ${item.itemName} , among 300 word by japanese. wrap it in a div tag`
    });
    console.log(response.text);
    const body = {
        name: item.itemName,
        slug: "slug_01",
        content: response.text,
        price: item.itemPrice,
        affiliateUrl: item.affiliateUrl,
        mediumImageUrls: JSON.stringify(item.mediumImageUrls)
    }

    if (!process.env.NODE_APP_URL) { return }
    const result = await axios.post(process.env.NODE_APP_URL + "api/product", body)
    console.log(result)
});

app.listen(4000, () => {
    console.log("server is running with port: " + port)
})

