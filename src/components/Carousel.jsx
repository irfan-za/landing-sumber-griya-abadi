import Image from "next/image"

export default function Carousel({image, alt, isSquare=true}) {
  return (
      <div className="sm:w-full min-w-[180px] sm:min-w-[300px] snap-center">
        <div className={`relative mx-auto ${isSquare ? 'w-44 aspect-square sm:w-72' : 'w-48 h-[400px] sm:w-60 sm:h-[500px]'}`}>
            <Image src={image} objectFit="cover" fill={true} alt={alt} className="rounded-lg" />
        </div>
      </div>
  )
}


