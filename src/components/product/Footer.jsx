import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='bg-blue-500 text-white px-6 py-10 mt-10 text-center'>
      <p className='font-semibold text-white text-xl sm:text-2xl'>Pesan Sekarang Bayar Nanti</p>
      <p className='font-semibold text-yellow-500 text-xl sm:text-2xl'>Bayar Di Tempat (COD)</p>
      <div className='flex flex-col items-center mt-5 overflow-hidden space-y-2'>
        <div className='relative w-64 h-20 sm:w-80 sm:h-24'>
          <Image src='/footer/cod.webp' alt='COD produk' fill={true} objectFit='contain' />
        </div>
        <div className='flex space-x-2'>
          <Image src='/footer/bni.webp' alt='Beli produk via Bank BNI' width={80} height={60} />
          <Image src='/footer/bca.webp' alt='Beli produk via Bank BCA' width={80} height={60} />
          <Image src='/footer/mandiri.webp' alt='Beli produk via Bank Mandiri' width={80} height={60} />
        </div>
        <div className='flex space-x-2 h-20'>
          <Image src='/footer/recomended.webp' alt='produk rekomendasi' width={70} height={50} />
          <Image src='/footer/terpercaya.webp' alt='produk terpercaya' width={70} height={50} />
        </div>
      </div>
    </div>
  )
}

export default Footer