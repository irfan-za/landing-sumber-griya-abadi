import Image from 'next/image'
import React from 'react'

function Testimony({title, images}) {
  return (
    <div className='bg-primary-500 text-white px-6 py-10 mt-10 text-center'>
      <h3 className='font-bold text-2xl lg:text-3xl'>Testimoni Pembeli</h3>
      <p>Dapat Mengirim ke Seluruh Wilayah di Indonesia</p>
      <div className='border-b-2 border-yellow-400 w-48 mt-4 mx-auto'></div>
      <div className='border-b-2 border-yellow-400 w-48 mt-1 mx-auto'></div>

      <div className='grid grid-cols-12 mt-5 gap-2 sm:mt-10 gap-y-5 sm:gap-y-0'>
        {
          images && images.map((image, index) => (
            <div key={index} className='col-span-12 border border-red-800 sm:col-span-6 relative h-[500px]'>
              <Image src={image} alt={title} fill={true} objectFit="contain" className="rounded-t-lg" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimony