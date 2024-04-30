import { FaceFrownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

function Feature() {
  return (
    <div className='bg-blue-500 px-6 py-10 mt-10'>
      <div className='w-fit mx-auto flex flex-col items-center mb-5'>
        <span className='text-yellow-400 font-semibold text-xl block'>Memperkenalkan</span>
        <h1 className='text-white text-2xl sm:text-3xl font-bold'>Bor Elektrik Premium </h1>
        <div className='border-b-2 border-yellow-400 w-48 mt-4'></div>
        <div className='border-b-2 border-yellow-400 w-48 mt-1'></div>
      </div>

      <section className="flex flex-col lg:flex-row justify-evenly items-center px-3">
      <div className="relative w-64 sm:w-96 h-64 sm:h-96 mt-8 sm:mt-0 sm:ml-3">
        <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="cover" className=" rounded-md" />
      </div>
      <div className='mt-2 sm:mt-0 sm:max-w-[50%] sm:px-5 text-white font-medium'>
        <p className="my-2 max-w-lg">Siapa sih yang engga tertarik dengan bor mewah ini? Bor ini cuma bisa didapatkan di toko cepat</p>
        <p className="my-2 max-w-lg">Dapat 2 Baterai</p>
        <ol className='list-disc'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ol>
      </div>
    </section>
    </div>
  )
}

export default Feature