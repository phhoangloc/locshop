import express from "express"
import bodyParser from "body-parser"
import { route } from "./routes"
import cors from "cors"

import cron from "node-cron";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
import { getRankingByItem, getRankingTop } from "./automation/getItemFromRanking";
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

cron.schedule("00 10 * * * ", async () => {
    getRankingTop(5)
})
getRankingByItem("アディダス")
app.listen(4000, () => {
    console.log("server is running with port: " + port)
})

