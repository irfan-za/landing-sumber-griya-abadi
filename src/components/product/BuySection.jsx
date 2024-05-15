import { currencyFormat, discount } from '@/lib/utils'
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

function BuySection({id, title, tagline, normalPrice, discountPrice}) {
  return (
    <div className='px-6 py-10 mt-10 text-center space-y-2' id='buy'>
      <h3 className='font-bold text-yellow-500 text-2xl lg:text-3xl'>{tagline}</h3>
      <p className='font-semibold text-2xl lg:text-3xl'>Diskon {discount(normalPrice, discountPrice)}%</p>
      <h1 className='text-lg'>{title}</h1>
      <p className='sm:text-xl font-bold text-red-500 line-through'>{currencyFormat(normalPrice)}</p>
      <p className='text-2xl font-bold sm:text-3xl'>{currencyFormat(discountPrice)}</p>
      <span className='text-sm text-red-500'>Hemat {currencyFormat(normalPrice-discountPrice)}</span>
      <div className='pt-10'>
        <Link href={`/p/${id}/checkout`}>
          <button className='bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-semibold px-4 py-2 hover:ring-4 ring-yellow-300 text-xl sm:text-2xl rounded-full space-x-2'>
            <ShoppingCartIcon strokeWidth={2} className='inline-block h-6 sm:h-8 w-6 sm:w-8 mr-2'/>
            Beli Disini
          </button>
        </Link>
        <span className='flex mx-auto w-fit my-1'>atau</span>
        <Link href={`https://api.whatsapp.com/send?phone=${process.env.PHONE}&text=Halo%20pak%20saya%20mau%20tanya%20produk%20Judul`} target='_blank'>
          <button className='border-2 border-yellow-500 hover:bg-yellow-100 text-gray-800 font-semibold px-4 py-2  rounded-full space-x-2 text-sm'>
            <ChatBubbleOvalLeftEllipsisIcon strokeWidth={2} className='inline-block h-4 w-4 sm:h-6 sm:w-6 mr-2'/>
            Tanya Admin
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default BuySection