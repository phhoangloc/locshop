'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ShopArchive() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [_data, set_data] = useState<any[]>([])
    useEffect(() => {
        (async () => {
            await fetch("http://localhost:4000/api/product").then(res => res.json()).then((data) => set_data(data.data));
        })()
    }, [])

    // console.log(_data)

    const toPage = useRouter()
    return (
        <div>
            <div className="colums-1 sm:columns-2 lg:columns-3 gap-1 max-w-(--lg) m-auto">
                {
                    _data.map((item, index) =>
                        <div key={index} className="w-full inline-block mb-1 bg-two/25" onClick={() => toPage.push(item.archive + "/" + item.slug)}>
                            <div>
                                {
                                    JSON.parse(item.mediumImageUrls)[0].imageUrl ?
                                        <Image src={JSON.parse(item.mediumImageUrls)[0].imageUrl.split("?")[0]} width={500} height={500} className="w-full max-w-(--sm) m-auto" alt="pic 0" /> :
                                        <Image src={JSON.parse(item.mediumImageUrls)[0]} width={500} height={500} className="w-full max-w-(--sm) m-auto" alt="pic 0" />
                                }                            </div>
                            <div className="h-4"></div>
                            <div className="p-2">
                                <div className="font-bold text-lg line-clamp-4">
                                    {item.name}
                                </div>
                                <div className="h-4"></div>
                                <div className="text-2xl font-bold text-right text-four">{item.price}</div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
}
