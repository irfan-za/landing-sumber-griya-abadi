import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ButtonContact({title}) {
  return (
    <button>
      <Link
        href={`https://api.whatsapp.com/send?phone=6285602904294&text=halo%20pak%2C%20saya%20mau%20tanya%20${title}.`}
        target="_blank"
        className=" 
        transition duration-1000 delay-1000 ease-in font-medium mt-4 px-6 flex py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-600 via-green-500 to-secondary-400 hover:to-green-600 text-white"
      >
        <Image src={'/wa.svg'} alt='Kontak Admin Sumber Griya Abadi' className="invert mr-3" width={24} height={24} />
        Kontak Admin
      </Link>

    </button>
  )
}

export default ButtonContact
