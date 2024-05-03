import Link from 'next/link'
import React from 'react'

function ButtonPromo() {
  return (
    <>
      <Link href={'#buy'}>
        <button className="animate-bounce w-fit my-10 ring-4 ring-primary-200 bg-primary-500 text-white font-semibold px-6 py-2 rounded-full">Ambil Promonya</button>
      </Link>
    </>
  )
}

export default ButtonPromo