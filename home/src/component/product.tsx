'use client'
import React from 'react'
import { ItemType } from '@/app/page'
import Link from 'next/link'
type Props = {
    item: ItemType,
    close: () => void
}
const Product = ({ item, close }: Props) => {
    console.log(item)
    return (
        <div className='fixed w-full h-full top-0 left-0 z-1 overflow-scroll'>
            <div className="absolute backdrop-blur-xs w-full h-full top-0 left-0 -z-1 " onClick={() => close()}>

            </div>
            <div className='w-11/12 m-auto text-justify bg-slate-900 p-2 sm:p-4 md:p-12'>
                <h1 className='text-2xl font-bold'>{item.name}</h1>
                <div className='dangerous_content' dangerouslySetInnerHTML={{ __html: item.content.replace(/^```html\s*|```$/g, '').trim() }}>
                </div>
                <div className='text-2xl font-bold text-right text-red-600'>{item.price} <span className='text-lg'>円</span></div>
                <Link href={item.affiliateUrl} target='_blank'><div className='uppercase w-24 h-12 flex flex-col justify-center my-4 ml-auto mr-0 font-bold bg-red-600 text-center rounded-md'>購入</div></Link>
            </div>
        </div>
    )
}

export default Product