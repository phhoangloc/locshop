'use client'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const param = useParams<{ archive: string }>()
    const archive = param.archive
    const toPage = useRouter()
    return (
        <div className='relative'>
            <div className='fixed z-1 bottom-0 left-0 h-12 bg-one w-full border-t border-two flex flex-row justify-center md:h-screen md:w-12 md:flex-col  md:border-t-0 md:border-r' >
                <HomeIcon onClick={() => toPage.push("/")} className={`${!archive ? "!w-18 !h-18 -translate-y-1/2  md:translate-y-0 border-t-2" : "!w-12 !h-12"} p-2 !block  rounded-[50%] bg-one border-two`} />
                <LocalMallIcon onClick={() => toPage.push("/product")} className={`${archive === "product" ? "w-20! h-20! -translate-y-1/2 md:translate-y-0 border-t-2" : "w-12! h-12!"}  p-2 block  rounded-[50%] bg-one  border-two`} />
            </div>
            <div className='  ml-auto lg:m-auto mr-0 w-full md:w-11/12 max-w-(--xxl)'>{children}</div>

        </div>
    )
}

export default Layout