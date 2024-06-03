import React from 'react'
import Timer from './Timer'
import { discount } from '@/lib/utils'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

function Video({ title, youtubeVideoId, normalPrice, discountPrice, discountDate, discountDuration, thumbnail}) {
  return (
    <div className='p-4 text-center my-8 sm:my-10'>
      <h3 className='font-bold text-gray-800 text-2xl lg:text-3xl'>Dapatkan {title}</h3>
      <p className='font-semibold text-yellow-500 text-2xl lg:text-3xl'>Diskon {discount(normalPrice, discountPrice)}%</p>
      <Timer discountDate={discountDate} discountDuration={discountDuration} />
      <span className='text-xl font-semibold block mt-5 sm:mt-10' >Tonton Video Produknya!</span>
      <Dialog>
      <DialogTrigger className='inline-block w-full'>      
        <div className='relative w-full mx-auto aspect-video group sm:max-w-lg lg:max-w-2xl'>
          <div className='w-16 h-12 bg-red-500 rounded-xl z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex justify-center items-center group-hover:scale-90 cursor-pointer'>
            <PlayIcon className='text-white' fill='white' width={28} height={28} />
          </div>
        <Image src={thumbnail} alt={title} fill={true} objectFit='cover' className='rounded-lg border border-gray-200 drop-shadow-md bg-blend-overlay' />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-lg mx-auto max-w-3xl">
      <iframe
        className='aspect-video rounded-lg sm:my-5'
        width='100%'
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        title={`Video Produk ${title} | Sumber Griya Abadi`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      </DialogContent>
    </Dialog>
      
  </div>
  )
}

export default Video