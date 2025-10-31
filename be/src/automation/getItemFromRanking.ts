import axios from "axios";
import { callAI, callAIToMakeImage } from "./autopost";
export const getRankingByItem = async (search: string) => {
    if (!search) {
        console.log("your search have no value!")
        return
    }
    console.log("Now : ", new Date().toLocaleString());
    const resultsearch = await axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601?format=json&affiliateId=${process.env.AFFILIATE_ID}&applicationId=${process.env.APPLICATION_ID}&genreId=558885`)
    const Items = resultsearch.data.Items
    const ItemsFilter = Items.filter((item: any) => item.Item.itemName.includes(search))
    if (ItemsFilter.length === 0) {
        console.log(`không có món hàng này trong rangking được tìm thấy!`)
        return
    }
    console.log(`có ${ItemsFilter.length} món hàng được tìm thấy!`)
    for (let index = 0; index < ItemsFilter.length; index++) {
        const item = ItemsFilter[index].Item;
        const resultItemCode = await axios.get(process.env.NODE_APP_URL + "api/product?slug=" + item.itemCode)

        if (resultItemCode.data.data.length) {
            continue
        }
        const itemName = item.itemName
        const itemUrl = item.itemUrl
        console.log("bắt đầu viết bài " + (index + 1))
        console.log("bước 1: lấy ảnh ... ")
        const images = await callAIToMakeImage({ title: itemName, link: itemUrl })
        console.log("lấy ảnh xong ... ")
        console.log("bước 2:  viết bài ... ")
        try {
            const content = await callAI({ title: itemName, link: itemUrl }, images)
            console.log(content)
            console.log("viết bài xong ... ")
            const body = {
                name: item.itemName,
                slug: item.itemCode,
                content: content,
                price: item.itemPrice.toString(),
                affiliateUrl: item.affiliateUrl,
                mediumImageUrls: JSON.stringify(images)
            }

            if (!process.env.NODE_APP_URL) {
                console.log("you must supply your link nodejs")
                return
            }
            const result = await axios.post(process.env.NODE_APP_URL + "api/product", body)
            console.log(result.data)
        } catch (error) {
            console.log("hết dung lượng")
        }

    }
    // ItemsFilter

}

export const getRankingTop = async (amount: number) => {
    if (!amount) {
        console.log("you must input the amount of item")
        return
    }
    console.log("Now : ", new Date().toLocaleString());
    const resultsearch = await axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601?format=json&affiliateId=${process.env.AFFILIATE_ID}&applicationId=${process.env.APPLICATION_ID}`)
    const Items = resultsearch.data.Items
    const ItemsFilter = Items
    if (ItemsFilter.length === 0) {
        console.log(`không có món hàng này trong rangking được tìm thấy!`)
        return
    }
    console.log(`you selected ${amount} item from top to bottom`)
    for (let index = 0; index < amount; index++) {
        const item = ItemsFilter[index].Item;
        const resultItemCode = await axios.get(process.env.NODE_APP_URL + "api/product?slug=" + item.itemCode)

        if (resultItemCode.data.data.length) {
            continue
        }
        const itemName = item.itemName
        const itemUrl = item.itemUrl
        console.log("bắt đầu viết bài " + (index + 1))
        console.log("bước 1: lấy ảnh ... ")
        const images = await callAIToMakeImage({ title: itemName, link: itemUrl })
        console.log("lấy ảnh xong ... ")
        console.log("bước 2:  viết bài ... ")
        try {
            const content = await callAI({ title: itemName, link: itemUrl }, images)
            console.log(content)
            console.log("viết bài xong ... ")
            const body = {
                name: item.itemName,
                slug: item.itemCode,
                content: content,
                price: item.itemPrice.toString(),
                affiliateUrl: item.affiliateUrl,
                mediumImageUrls: JSON.stringify(images)
            }

            if (!process.env.NODE_APP_URL) {
                console.log("you must supply your link nodejs")
                return
            }
            const result = await axios.post(process.env.NODE_APP_URL + "api/product", body)
            console.log(result.data)
        } catch (error) {
            console.log("hết dung lượng")
        }

    }
    // ItemsFilter

}