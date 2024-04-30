import { currencyFormat } from '@/utils'
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

function BuySection({id}) {
  return (
    <div className='px-6 py-10 mt-10 text-center space-y-2'>
      <h3 className='font-bold text-yellow-500 text-2xl lg:text-3xl'>Beli 1 Dapat 2 Baterai</h3>
      <p className='font-semibold text-2xl lg:text-3xl'>Diskon 50%</p>
      <h1 className='text-lg'>Bor Elektrik serbaguna 10inch</h1>
      <p className='sm:text-xl font-bold text-red-500 line-through'>{currencyFormat(500000)}</p>
      <p className='text-xl font-bold sm:text-3xl'>{currencyFormat(249000)}</p>
      <span className='text-sm text-red-500'>Hemat {currencyFormat(200000)}</span>
      <div className='pt-10'>
        <Link href={`/p/${id}/checkout`}>
          <button className='bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-semibold px-4 py-2 hover:ring-4 ring-yellow-300 text-xl sm:text-2xl rounded-full space-x-2'>
            <ShoppingCartIcon strokeWidth={2} className='inline-block h-6 sm:h-8 w-6 sm:w-8 mr-2'/>
            Beli Disini
          </button>
        </Link>
        <span className='flex mx-auto w-fit my-1'><hr />atau<hr /></span>
        <Link href={`https://api.whatsapp.com/send?phone=6285602904294&text=Halo%20pak%20saya%20mau%20tanya%20produk%20Judul`} target='_blank'>
          <button className='border-2 border-yellow-500 hover:bg-yellow-100 text-gray-800 font-semibold px-4 py-2  rounded-full space-x-2'>
            <ChatBubbleOvalLeftEllipsisIcon strokeWidth={2} className='inline-block h-6 w-6 mr-2'/>
            Tanya Admin
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default BuySection