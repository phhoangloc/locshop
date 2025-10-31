'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ShopDetail() {

    const params = useParams<{ archive: string, slug: string }>()
    const archive = params.archive
    const slug = params.slug
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [_data, set_data] = useState<any>()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [_images, set_images] = useState<any[]>([])
    useEffect(() => {
        (async () => {
            await fetch(`http://localhost:4000/api/${archive}?slug=${slug}`).then(res => res.json()).then((data) => set_data(data.data[0]));
        })()
    }, [archive, slug])

    useEffect(() => {
        if (!_data) { return }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        set_images(JSON.parse(_data.mediumImageUrls))
    }, [_data])

    const [_index, set_index] = useState<number>(-1)
    return (
        <div className="w-11/12 pb-24 m-auto">
            {_index != -1 ? <div className="fixed top-0 left-0 w-full h-full z-1 ">
                <div className="w-full h-full overflow-scroll">
                    <div className="absolute w-1/2 h-full top-0 left-0 backdrop-brightness-50 hover:backdrop-blur-md backdrop-blur-xs cursor-pointer z-0" onClick={() => set_index(i => i - 1)}></div>
                    <div className="absolute w-1/2 h-full top-0 right-0 backdrop-brightness-50 hover:backdrop-blur-md backdrop-blur-xs cursor-pointer z-0" onClick={() => set_index(i => i < _images.length - 1 ? i + 1 : -1)}></div>
                    <div className="h-24"></div>
                    {_images[_index]?.imageUrl ?
                        <Image onClick={() => set_index(-1)} src={_images[_index].imageUrl.split("?")[0]} width={500} height={500} className="w-11/12 max-w-(--sm)  m-auto mb-2 cursor-pointer z-1 relative" alt="pic 0" /> :
                        <Image onClick={() => set_index(-1)} src={_images[_index]} width={500} height={500} className="w-11/12 max-w-(--sm) m-auto z-1 relative" alt="pic 0" />

                    }
                </div>
            </div> : null}
            <div className="h-12"></div>
            {_data ?
                <div className=" p-4 md:p-8 lg:flex gap-8">
                    {
                        _images[0] ?
                            _images[0].imageUrl ?
                                <div className="relative w-full">

                                    <Image src={_images[0].imageUrl.split("?")[0]} width={500} height={500} className="w-full max-w-(--sm) m-auto" alt="pic 0" /> :

                                    <div className="h-8"></div>
                                    <div className="columns-3 gap-2">
                                        {_images.map((img, index) =>
                                            <Image key={index} onClick={() => set_index(index)} src={img.imageUrl.split("?")[0]} width={500} height={500} className="w-full mb-2 cursor-pointer" alt="pic 0" />)}

                                    </div>
                                </div> :
                                <div className="relative w-full">

                                    <Image src={_images[0]} width={500} height={500} className="w-full max-w-(--sm) m-auto" alt="pic 0" /> :

                                    <div className="h-8"></div>
                                    <div className="columns-3 gap-2">
                                        {_images.map((img, index) =>
                                            <Image key={index} onClick={() => set_index(index)} src={img} width={500} height={500} className="w-full mb-2 cursor-pointer" alt="pic 0" />)}

                                    </div>
                                </div> :
                            null}
                    <div className="h-12"></div>
                    <div className="w-full m-auto">
                        <div className="font-bold text-xl">{_data.name}</div>
                        <div className="h-4"></div>
                        <div className="text-justify main_contain" dangerouslySetInnerHTML={{ __html: _data.content.replace(/^```html\s*/, '').replace(/```$/, '') }}></div>
                        <div className="text-2xl font-bold text-right text-four">{_data.price}<span className="text-sm ml-2">円</span></div>
                        <div className="h-4"></div>
                        <div className=""><Link className="font-bold uppercase w-40 h-12 bg-five rounded-md text-white text-center flex! flex-col justify-center ml-auto mr-0" href={_data.affiliateUrl} target="_blank">order here</Link></div>
                    </div>
                </div>
                : <div>no item</div>}
        </div>
    )
}
