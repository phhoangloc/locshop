'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import parse from 'html-react-parser';

const Slug = () => {
    const params = useParams<{ archive: string, slug: string }>()
    const archive = params.archive
    const slug = params.slug

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [_item, set_item] = useState<any>()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [_imgs, set_imgs] = useState<any[]>([])
    useEffect(() => {
        (async () => {
            const result = await axios.get("http://localhost:4000/api/" + archive + "?slug=" + slug)
            if (!result.data.success) { return }
            set_item(result.data.data[0])
            set_imgs(result.data.data[0].cover && JSON.parse(result.data.data[0].cover))
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        _item ? <div className="">
            <div className="w-full h-[575px] relative">
                <div className="absolute w-full h-full top-0 left-0 backdrop-brightness-50 z-1"></div>
                <div className="relative w-full px-4 max-w-[1200px] m-auto text-center h-full top-0 left-0 flex flex-col justify-center text-white text-2xl md:text-3xl font-bold font-title z-2 leading-10">{_item.name}</div>
                {_imgs?.length ? <Image sizes="100" src={_imgs[0]} fill className="object-cover" alt="img" /> : null}
            </div>
            <div className="w-full px-4 max-w-[1200px] m-auto pb-12">
                <div className="h-24"></div>
                <div className="font-bold text-2xl uppercase h-12 flex flex-col justify-center">{_item.archive}</div>
                <div className="border-b"></div>
                <div className="h-6"></div>
                <div className=" text-2xl md:text-3xl font-bold font-title leading-10">{_item.name}</div>
                <div className="blog_content">{parse(_item.content)}</div>
                <div className="font-title">link order:</div>
                <a className="line-clamp-2 w-full truncate" target="_blank" href={_item.affiliateUrl}>{_item.affiliateUrl}</a>
            </div>
        </div> : null
    )
}

export default Slug