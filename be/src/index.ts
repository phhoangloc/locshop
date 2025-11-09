import express from "express"
import { ApiRouter } from "./routes"
import bodyParser from 'body-parser';
import { getItemByRanking, writeBlogFromItem } from "./automation/getItemFromRanking";
import cors from "cors"

require('dotenv').config()

const app = express()
app.use(bodyParser.json({ limit: '5mb' }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

// getItemByRanking()
// writeBlogFromItem("abcmartsports:10130075")
app.use("/api", ApiRouter)

app.listen(4000, () => {
    console.log("server is connect")
    console.log("http://localhost:4000")
})