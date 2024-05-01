import { StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import ButtonPromo from "./ButtonPromo"

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-evenly items-center px-3">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Bor Unik Elektrik Mudah Dipasang</h1>
        <p className="my-2 max-w-lg">Siapa sih yang engga tertarik dengan bor mewah ini? Bor ini cuma bisa didapatkan di toko cepat</p>
        <p className="my-2 max-w-lg">Dapat 2 Baterai</p>
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
        <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="cover" className=" rounded-md" />
      </div>
     
    </section>
  )
}

export default Hero