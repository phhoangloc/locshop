import axios from "axios";
import { callAI, callAIToMakeDescription, callAIToMakeImage, callAIToMakeKeyword } from "./autopost";
export const getItemByRanking = async () => {
    console.log("Now : ", new Date().toLocaleString());
    const resultsearch = await axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601?format=json&affiliateId=${process.env.AFFILIATE_ID}&applicationId=${process.env.APPLICATION_ID}&genreId=558885`)
    const Items = resultsearch.data.Items
    const ItemsFilter = Items
    console.log(`there are ${ItemsFilter.length} item!`)
    for (let index = 0; index < 10; index++) {
        const item = ItemsFilter[index].Item;
        const resultItemCode = await axios.get(process.env.NODE_APP_URL + "api/product?slug=" + item.itemCode)

        if (resultItemCode.data.data.length) {
            continue
        }
        const itemName = item.itemName
        const itemUrl = item.itemUrl
        console.log("writting post " + (index + 1))
        console.log("getting picture ... ")
        const images = await callAIToMakeImage({ title: itemName, link: itemUrl })
        console.log("getting picture finish ... ")
        console.log("writting blog ...")
        try {
            const content = await callAI({ title: itemName, link: itemUrl }, images)
            console.log("writing blog finish ... ")
            const keyword = await callAIToMakeKeyword({ title: itemName, content: "", link: itemUrl, })
            const description = await callAIToMakeDescription({ title: itemName, content: "", link: itemUrl, })
            const body = {
                name: item.itemName,
                slug: item.itemCode,
                content: content,
                price: item.itemPrice.toString(),
                affiliateUrl: item.affiliateUrl,
                images: JSON.stringify(images),
                keyword,
                description
            }

            if (!process.env.NODE_APP_URL) {
                console.log("you must supply your link nodejs")
                return
            }
            if (!process.env.TOKEN) {
                console.log("you must supply your link nodejs")
                return
            }
            const result = await axios.post(process.env.NODE_APP_URL + "api/admin/product", body, {
                headers: {
                    Cookie: "token=" + process.env.TOKEN
                }
            })
            if (!result.data.success) {
                throw Error("error")
            }
        } catch (error: any) {
            console.log(error.message)
            return
        }

    }

}

export const writeBlogFromItem = async (keyword: string) => {
    if (!keyword) {
        console.log("you must input the keyword of item you want to write")
        return
    }
    console.log("Now : ", new Date().toLocaleString());
    const resultsearch = await axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&affiliateId=${process.env.AFFILIATE_ID}&applicationId=${process.env.APPLICATION_ID}&itemCode=${keyword}`)
    const Items = resultsearch.data.Items
    const ItemsFilter = Items
    if (ItemsFilter.length === 0) {
        console.log(`there are no item founded`)
        return
    }
    const item = ItemsFilter[0].Item;
    const resultItemCode = await axios.get(process.env.NODE_APP_URL + "api/blog?slug=" + item.itemCode)
    if (resultItemCode.data.data.length) {
        console.log("this item is exist in your store")
        return
    }
    const itemName = item.itemName
    const itemUrl = item.itemUrl
    console.log("writting post ")
    console.log("getting picture ... ")
    const images = await callAIToMakeImage({ title: itemName, link: itemUrl })
    console.log("getting picture finish ... ")
    console.log("writting blog ...")
    try {
        const content = await callAI({ title: itemName, link: itemUrl }, images)
        console.log("writing blog finish ... ")
        console.log("finding keyword ")
        const keyword = await callAIToMakeKeyword({ title: itemName, content: "", link: itemUrl, })
        console.log("finding keyword finish ...")

        console.log("finding description ")
        const description = await callAIToMakeDescription({ title: itemName, content: "", link: itemUrl, })
        console.log("finding description finish ...")

        const body = {
            name: item.itemName,
            slug: item.itemCode,
            content: content,
            affiliateUrl: item.affiliateUrl,
            cover: JSON.stringify(images),
            categoryId: 1,
            keyword,
            description
        }

        if (!process.env.NODE_APP_URL) {
            console.log("you must supply your link nodejs")
            return
        }
        if (!process.env.TOKEN) {
            console.log("you must supply your link token to use gemini")
            return
        }

        console.log("posting blog ")
        const result = await axios.post(process.env.NODE_APP_URL + "api/admin/blog", body, {
            headers: {
                Cookie: "token=" + process.env.TOKEN
            }
        })
        console.log(result.data)
        if (!result.data.success) {
            throw Error("error")
        }
        console.log(" a blog has been posted")
        console.log(" finish")

    } catch (error: any) {
        console.log(error.message)
        return
    }


}