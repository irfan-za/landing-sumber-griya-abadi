import { FaceFrownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import Timer from './Timer'
import ButtonPromo from './ButtonPromo'

function Benefit({promoDate}) {
  return (
    <div className='px-6 py-10 mt-10 sm:px-20 text-center'>
        <p className='font-bold text-yellow-500 text-3xl lg:text-5xl'>Diskon 50%</p>
        <Timer promoDate={promoDate} />
        <div>
          <ButtonPromo/>
        </div>        
      <div className='mt-10 grid grid-cols-12 gap-4 sm:gap-8'>
          <div className='col-span-6 sm:col-span-6'>
            <div className="aspect-square rounded-t-xl relative group bg-slate-50 " >
              <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="dark:text-slate-100 text-slate-700 rounded-b-xl bg-slate-50 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 h-8 sm:h-12 py-1 sm:py-2 px-2 sm:px-4">
              <h5 className=" text-sm sm:text-base md:text-lg font-medium sm:font-semibold truncate text-center">Aman & bisa Bayar Ditempat</h5>
            </div>
          </div>
          <div className='col-span-6 sm:col-span-6'>
            <div className="aspect-square rounded-t-xl relative group bg-slate-50 " >
              <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="dark:text-slate-100 text-slate-700 rounded-b-xl bg-slate-50 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 h-8 sm:h-12 py-1 sm:py-2 px-2 sm:px-4">
              <h5 className=" text-sm sm:text-base md:text-lg font-medium sm:font-semibold truncate text-center">Kuat & Awet</h5>
            </div>
          </div>
          <div className='col-span-6 sm:col-span-6'>
            <div className="aspect-square rounded-t-xl relative group bg-slate-50 " >
              <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="dark:text-slate-100 text-slate-700 rounded-b-xl bg-slate-50 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 h-8 sm:h-12 py-1 sm:py-2 px-2 sm:px-4">
              <h5 className=" text-sm sm:text-base md:text-lg font-medium sm:font-semibold truncate text-center">Kuat & Awet</h5>
            </div>
          </div>
          <div className='col-span-6 sm:col-span-6'>
            <div className="aspect-square rounded-t-xl relative group bg-slate-50 " >
              <Image src={'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg'} alt={'bor unik'} fill={true} objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="dark:text-slate-100 text-slate-700 rounded-b-xl bg-slate-50 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 h-8 sm:h-12 py-1 sm:py-2 px-2 sm:px-4">
              <h5 className=" text-sm sm:text-base md:text-lg font-medium sm:font-semibold truncate text-center">Kuat & Awet</h5>
            </div>
          </div>
        </div>  
    </div>
  )
}

export default Benefit