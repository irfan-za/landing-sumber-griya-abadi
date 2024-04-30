import React from 'react'

function Video() {
  return (
    <div className='p-4 text-center'>
      <h3 className='font-bold text-gray-800 text-2xl lg:text-3xl'>Dapatkan Bor Elektrik Murah</h3>
      <p className='font-semibold text-yellow-500 text-2xl lg:text-3xl'>Diskon 50%</p>
      <span className='text-xl font-semibold block mt-5 sm:mt-10' >Tonton Video Produknya!</span>
      <iframe
        className='aspect-video rounded-lg sm:my-5'
        width='100%'
        src='https://www.youtube.com/embed/kYNTrRVHNmk?si=uf77r3a-cKUNyx3o'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
  </div>
  )
}

export default Video