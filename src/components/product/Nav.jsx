import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='flex justify-between px-3 pt-5 mb-12'>
      <Link
        href={"/"}
        className="hidden sm:inline text-xl sm:text-3xl text-primary font-bold"
      >SGA</Link>
      <Link href={'/products'} className='flex items-center space-x-2 p-2 hover:bg-slate-200 rounded-md'>
        <ArrowLeftIcon width={18} height={18} strokeWidth={3} />
        <span className='text-sm lg:text-base'>kembali</span>
      </Link>
  </div>
  )
}

export default Nav