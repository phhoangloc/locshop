import express from "express"
import { Request, Response } from "express"
require('dotenv').config()
import { ApiRouter } from "./routes"
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json({ limit: '5mb' }));

app.use("/api", ApiRouter)

app.listen(4000, () => {
    console.log("server is connect")
    console.log("http://localhost:4000")
})