import Image from "next/image"
type CoverType = {
  name: string,
  description: string,
  image: string[]
}

const Cover = ({ name, description, image }: CoverType) => {

  return (
    <div className="bg-slate-100 ">
      <div className="grid grid-cols-12 min-h-[575px] max-h-[768px] h-screen gap-4 p-4 max-w-[1600px] m-auto">
        <div className="col-span-3 h-full flex flex-col gap-4">
          {image.slice(1, 5).map((img, index) =>
            <div className="relative h-1/4 w-full rounded-md overflow-hidden" key={index}>
              <Image sizes="100" src={img} fill className="object-cover" alt="img" />
            </div>)}
        </div>
        <div className="col-span-6 relative rounded-md overflow-hidden">
          {image[0] ? <Image sizes="100" src={image[0]} fill className="object-cover" alt="img" /> : null}
        </div>
        <div className="col-span-3 h-full flex flex-col gap-4">
          {image.slice(5, 9).map((img, index) =>
            <div className="relative h-1/4 w-full rounded-md overflow-hidden" key={index}>
              <Image sizes="100" src={img} fill className="object-cover" alt="img" />
            </div>)}
        </div>
      </div>
      <div className="py-8">
        <div className="text-3xl font-bold px-4 text-center max-w-3xl m-auto font-title">{name}</div>
        <div className="px-4 text-center my-8 max-w-[1200px] m-auto">{description}</div>
        <div className="flex w-max my-8 mx-auto gap-4">
          <div className="w-40 h-12 text-white bg-black flex flex-col justify-center text-center font-bold text-xl rounded-md">詳細を見る</div>
          <div className="w-40 h-12 text-white bg-black flex flex-col justify-center text-center font-bold text-xl rounded-md">オーダー</div>
        </div>
      </div>
    </div>
  )
}

export default Cover