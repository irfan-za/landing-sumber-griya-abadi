import React from 'react'
import Timer from './Timer'

function Video({ promoDate}) {
  return (
    <div className='p-4 text-center my-8 sm:my-10'>
      <h3 className='font-bold text-gray-800 text-2xl lg:text-3xl'>Dapatkan Bor Elektrik Murah</h3>
      <p className='font-semibold text-yellow-500 text-2xl lg:text-3xl'>Diskon 50%</p>
      <Timer promoDate={promoDate} />
      <span className='text-xl font-semibold block mt-5 sm:mt-10' >Tonton Video Produknya!</span>
      <iframe
        className='aspect-video rounded-lg sm:my-5'
        width='100%'
        src='https://www.youtube.com/embed/Qcm2AJ1qi1c?si=Uhf20r8NhYCIexpN'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
  </div>
  )
}

export default Video