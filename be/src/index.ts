import express from "express"
import { ApiRouter } from "./routes"
import bodyParser from 'body-parser';
import { getItemByRanking, writeBlogFromItem, writeBlogFromTitleAndUrl } from "./automation/getItemFromRanking";
import cors from "cors"

require('dotenv').config()

const app = express()
app.use(bodyParser.json({ limit: '5mb' }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

getItemByRanking()
// writeBlogFromItem("abcmartsports:10130075")
// writeBlogFromTitleAndUrl("Thương hiệu Onitsuka Tiger cú plot twist của ngành giày Nhật Bản và hành trình trỗi dậy vươn ra toàn cầu. ", "https://kenh14.vn/onitsuka-tiger-cu-plot-twist-cua-nganh-giay-tung-don-phan-cong-nhe-nhung-buoc-hai-ga-khong-lo-nike-va-adidas-phai-de-chung-215251103175118291.chn", "onitsukatiger:10000290")
app.use("/api", ApiRouter)

app.listen(4000, () => {
    console.log("server is connect")
    console.log("http://localhost:4000")
})