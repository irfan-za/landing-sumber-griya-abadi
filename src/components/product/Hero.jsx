import { StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import ButtonPromo from "./ButtonPromo"

const Hero = ({title, descriptions, image}) => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-evenly items-center px-3">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        {
          descriptions && descriptions.map((description, index) => (
            <p key={index} className="my-2 max-w-lg">{description}</p>
          ))
        }
        <span className="flex items-center my-2">
          <StarIcon width={24} height={24} color="orange" fill="orange" />
          <StarIcon width={24} height={24} color="orange" fill="orange" />
          <StarIcon width={24} height={24} color="orange" fill="orange" />
          <StarIcon width={24} height={24} color="orange" fill="orange" />
          <StarIcon width={24} height={24} color="orange" fill="orange" />
          <span className="ml-3 font-semibold text-sm"> Rating unggulan</span>
        </span>
        <ButtonPromo/>
      </div>
      <div className="relative w-64 sm:w-96 h-64 sm:h-96 mb-5 sm:mt-0 sm:ml-3">
        <Image src={image} alt={`Gambar produk ${title} | Sumber Griya Abadi`} fill={true} objectFit="cover" className=" rounded-md" />
      </div>
     
    </section>
  )
}

export default Hero