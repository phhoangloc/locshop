"use client"
import Product from "@/component/product";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ItemType = {
  name: string;
  price: string;
  mediumImageUrls: string;
  content: string;
  affiliateUrl: string
}
export default function Home() {


  const [_item, set_item] = useState<ItemType[]>([])

  const getAPI = async () => {
    if (!process.env.api_url) { return }
    const result = await axios.get(process.env.api_url + "api/product")
    if (result.data) {
      set_item(result.data.data)
    }
  }

  useEffect(() => {
    getAPI()
  }, [])

  const [_index, set_index] = useState<number>(-1)
  return (
    <div>
      {_index != -1 ? <Product item={_item[_index]} close={() => set_index(-1)} /> : null}
      <div className="w-11/12 max-w-[768px] m-auto columns-2 md:columns-3">
        {_item.map((it, index) => <div className="w-full" key={index} onClick={() => set_index(index)}>
          {it.mediumImageUrls ? <Image src={JSON.parse(it.mediumImageUrls)[0].imageUrl.split("?")[0]} width={500} height={500} alt="noname" /> : null}
        </div>)}
      </div>
    </div>
  );
}
