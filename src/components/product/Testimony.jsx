import Image from 'next/image'
import React from 'react'
import Carousel from '../Carousel'

function Testimony({title, images}) {
  return (
    <div className='bg-primary text-white px-6 py-10 mt-10 text-center'>
      <h3 className='font-bold text-2xl lg:text-3xl'>Testimoni Pembeli</h3>
      <p>Dapat Mengirim ke Seluruh Wilayah di Indonesia</p>
      <div className='border-b-2 border-yellow-400 w-48 mt-4 mx-auto'></div>
      <div className='border-b-2 border-yellow-400 w-48 mt-1 mx-auto'></div>

      <div className="flex space-x-6 overflow-x-scroll sm:overflow-x-auto rounded-xl snap-x py-4 mx-auto">
        {
          images && images.map((image, index) => (
           <Carousel key={index} image={image} alt={title} isSquare={false} />
          ))
        }

      </div>
    </div>
  )
}

export default Testimony