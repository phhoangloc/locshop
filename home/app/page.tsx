'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import Cover from "@/conponents/cover";
import Image from "next/image";
import parse from 'html-react-parser';
import { useRouter } from "next/navigation";

export default function Home() {

  const [_name, set_name] = useState<string>("")
  const [_slug, set_slug] = useState<string>("")
  const [_archive, set_archive] = useState<string>("")
  const [_description, set_description] = useState<string>("")
  const [_affiliateUrl, set_affiliateUrl] = useState<string>("")
  const [_image, set_image] = useState<string[]>([])

  const [_items, set_items] = useState<{ name: string, images: string, price: number }[]>([])
  const [_blogs, set_blogs] = useState<{ name: string, cover: string, category: { name: string }, content: string, archive: string, slug: string }[]>([])

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:4000/api/blog/1")
      set_name(result.data.data.name)
      set_description(result.data.data.description)
      set_image(JSON.parse(result.data.data.cover))
      set_slug(result.data.data.slug)
      set_archive(result.data.data.archive)
      set_affiliateUrl(result.data.data.affiliateUrl)
    })();
    (async () => {
      const result = await axios.get("http://localhost:4000/api/blog?limit=3")
      set_blogs(result.data.data)

    })();
    (async () => {
      const result = await axios.get("http://localhost:4000/api/product?limit=6")
      console.log(result.data.data)
      set_items(result.data.data)
    })()
  }, [])

  const toPage = useRouter()

  return (
    <div>
      <Cover name={_name} image={_image} description={_description} slug={_slug} archive={_archive} affiliateUrl={_affiliateUrl} />
      <div className="max-w-[1200px] m-auto py-24 px-4">
        <div className="text-xl font-bold uppercase h-12 flex flex-col justify-center border-b-2">
          Blog
        </div>
        <div className="flex flex-col gap-8 py-8">
          {_blogs.map((it, index) => {
            const img = it.cover ? JSON.parse(it.cover)[0] : ""
            return (
              <div key={index} className="flex flex-col sm:flex-row gap-8 cursor-pointer" onClick={() => toPage.push("/" + it.archive + "/" + it.slug)}>
                <div className="relative overflow-hidden w-full aspect-square sm:w-1/3">
                  {img ? <Image sizes="100" src={img} fill className="object-cover" alt="img" /> : null}
                </div>
                <div className="w-full sm:w-2/3">
                  <div className="uppercase text-sm opacity-75">{it.category.name}</div>
                  <div className="line-clamp-2 text-base md:text-lg font-title font-bold">{it.name}</div>
                  <div className="h-8"></div>
                  <div className="line-clamp-4 text-sm md:text-base">{parse(it.content)}</div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="max-w-[1200px] m-auto py-24 px-4">
        <div className="text-xl font-bold uppercase h-12 flex flex-col justify-center border-b-2 ">
          New Arrivals
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8">
          {_items.map((it, index) => {
            const img = it.images ? JSON.parse(it.images)[0] : ""
            return (
              <div key={index} className="w-full">
                <div className="relative overflow-hidden w-full aspect-square">
                  {img ? <Image sizes="100" src={img} fill className="object-cover" alt="img" /> : null}
                </div>
                <div className="line-clamp-2 font-bold">{it.name}</div>
                <div className="font-bold w-20 h-8 flex flex-col justify-center text-center rounded-md ml-auto mr-0 my-4">{it.price}</div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}
