import Image from "next/image"

export default function Carousel({image, alt}) {
  return (
        <div className="sm:w-full min-w-[320px] snap-center">
          <div className="relative min-w-[192px] h-48 sm:w-72 sm:h-72 mx-auto">
              <Image src={image} objectFit="cover" fill={true} alt={alt} className="rounded-lg" />
          </div>
      </div>
  )
}


