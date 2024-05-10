import Image from 'next/image'
import React from 'react'

function Feature({ title, image, descriptions}) {
  return (
    <div className='bg-primary-500 px-6 py-10 mt-10'>
      <div className='w-fit mx-auto flex flex-col items-center mb-5'>
        <span className='text-yellow-400 font-semibold text-xl block'>Memperkenalkan</span>
        <h1 className='text-white text-2xl sm:text-3xl font-bold text-center'>{title}</h1>
        <div className='border-b-2 border-yellow-400 w-48 mt-4'></div>
        <div className='border-b-2 border-yellow-400 w-48 mt-1'></div>
      </div>

      <section className="flex flex-col lg:flex-row justify-evenly items-center px-3">
      <div className="relative w-64 sm:w-96 h-64 sm:h-96 mt-8 sm:mt-0 sm:ml-3">
        <Image src={image} alt={`Fitur produk ${title} | Sumber Griya Abadi`} fill={true} objectFit="cover" className=" rounded-md" />
      </div>
      <div className='mt-2 sm:mt-0 sm:max-w-[50%] sm:px-5 text-white font-medium'>
        {
          descriptions && descriptions.map((description, index) => (
            <p key={index} className="my-2 max-w-lg">{description}</p>
          ))
        }
      </div>
    </section>
    </div>
  )
}

export default Feature