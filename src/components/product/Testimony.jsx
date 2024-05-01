import Image from 'next/image'
import React from 'react'

function Testimony() {
  return (
    <div className='bg-blue-500 text-white px-6 py-10 mt-10 text-center'>
      <h3 className='font-bold text-2xl lg:text-3xl'>Testimoni Pembeli</h3>
      <p>Dapat Mengirim ke Seluruh Wilayah di Indonesia</p>
      <div className='border-b-2 border-yellow-400 w-48 mt-4 mx-auto'></div>
      <div className='border-b-2 border-yellow-400 w-48 mt-1 mx-auto'></div>

      <div className='grid grid-cols-12 mt-5 gap-2 sm:mt-10 gap-y-5 sm:gap-y-0'>
        <div className='col-span-12 sm:col-span-6 relative h-64 sm:h-72 lg:h-96'>
        <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="contain" className="rounded-t-lg" />
        </div>
        <div className='col-span-12 sm:col-span-6 relative h-64 sm:h-72 lg:h-96'>
        <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="contain" className="rounded-t-lg" />
        </div>
      </div>
    </div>
  )
}

export default Testimony