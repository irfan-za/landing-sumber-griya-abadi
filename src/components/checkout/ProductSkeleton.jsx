import { PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'

function ProductSkeleton() {
  return (
    <div>
    <div className='bg-slate-300 animate-pulse rounded-lg h-8 w-72 sm:w-96 lg:w-[500px] mx-auto my-4'></div>
    <div className="mx-auto aspect-square h-64 sm:h-96 relative">
      <div className="w-full h-full bg-slate-300 animate-pulse rounded-lg flex justify-center items-center">
        <PhotoIcon className="w-24 h-24 text-white" />
      </div>
    </div>
    <div className='bg-slate-300 animate-pulse rounded-lg h-4 w-72 sm:w-96 lg:w-[500px] mx-auto mt-4 mb-1'></div>
    <div className='bg-slate-300 animate-pulse rounded-lg h-4 w-72 sm:w-96 lg:w-[500px] mx-auto mb-4'></div>
  </div>
  )
}

export default ProductSkeleton