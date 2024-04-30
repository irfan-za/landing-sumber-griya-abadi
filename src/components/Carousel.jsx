import Image from "next/image"

export default function Carousel({image, alt}) {
  return (
        <div className="sm:w-full min-w-[180px] sm:min-w-[300px] snap-center">
          <div className="relative w-44 aspect-square sm:w-72 mx-auto">
              <Image src={image} objectFit="cover" fill={true} alt={alt} className="rounded-lg" />
          </div>
      </div>
  )
}


