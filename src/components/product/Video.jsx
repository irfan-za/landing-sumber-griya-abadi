import React from 'react'
import Timer from './Timer'
import { discount } from '@/utils'

function Video({ title, youtubeVideoId, normalPrice, discountPrice, discountDate, discountDuration}) {
  return (
    <div className='p-4 text-center my-8 sm:my-10'>
      <h3 className='font-bold text-gray-800 text-2xl lg:text-3xl'>Dapatkan {title}</h3>
      <p className='font-semibold text-yellow-500 text-2xl lg:text-3xl'>Diskon {discount(normalPrice, discountPrice)}%</p>
      <Timer discountDate={discountDate} discountDuration={discountDuration} />
      <span className='text-xl font-semibold block mt-5 sm:mt-10' >Tonton Video Produknya!</span>
      <iframe
        className='aspect-video rounded-lg sm:my-5'
        width='100%'
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        title={`Video Produk ${title} | Sumber Griya Abadi`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
  </div>
  )
}

export default Video