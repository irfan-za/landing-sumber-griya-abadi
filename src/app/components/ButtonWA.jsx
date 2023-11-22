import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ButtonWA() {
  return (
    <Link href={'https://api.whatsapp.com/send?phone=6285602904294&text=halo%20pak%2C%20saya%20mau%20konsultasi%20Plafon.'} className='fixed bottom-24 sm:bottom-12 right-14 z-20'>
      <Image src={'/wa.svg'} alt="Whatsapp Admin Sumber Griya Abadi" className="invert bg-red-400 drop-shadow-lg rounded-full p-0.5" width={44} height={44} />
    </Link>
  )
}

export default ButtonWA
