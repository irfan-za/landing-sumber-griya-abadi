import { FaceFrownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import Timer from './Timer'
import ButtonPromo from './ButtonPromo'
import { discount } from '@/utils'

function Benefit({ normalPrice, discountPrice, discountDate, discountDuration, benefits }) {
  return (
    <div className='px-6 mt-10 lg:mt-20 sm:px-20 text-center'>
        <p className='font-bold text-yellow-500 text-3xl lg:text-5xl'>Diskon {discount(normalPrice, discountPrice)}%</p>
        <Timer discountDate={discountDate} discountDuration={discountDuration} />
        <div>
          <ButtonPromo/>
        </div>        
      <div className='sm:mt-10 grid grid-cols-12 gap-4 sm:gap-8 max-w-5xl mx-auto'>
        {
          benefits && benefits.map((benefit, index) => (
            <div key={index} className='col-span-6 sm:col-span-6 rounded-xl border'>
              <div className="aspect-square rounded-t-xl relative group bg-slate-50" >
                <Image src={benefit.image} alt={benefit.title} fill={true} objectFit="cover" className="rounded-t-lg" />
              </div>
              <div className="dark:text-slate-100 text-slate-700 rounded-b-xl bg-slate-50 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 h-8 sm:h-12 py-1 sm:py-2 px-2 sm:px-4">
                <h5 className=" text-sm sm:text-base md:text-lg font-medium sm:font-semibold truncate text-center">{benefit.title}</h5>
              </div>
            </div>
          ))
        }
        </div>  
    </div>
  )
}

export default Benefit