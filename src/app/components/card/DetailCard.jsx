
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import ButtonContact from '../ButtonContact'


export default function DetailCard({id}) {
  const router= useRouter()
  const path=usePathname()
  let fetchUrl=path.split('/')[1].slice(0, -1);
  const [data, setData] = useState(null)
  useEffect(() => {
    const f=async() => {
      const res= await fetch(`/api/${fetchUrl}`)
      const data= await res.json()
      setData(data)
    }
    f()
  }, [])
  const filteredData = data && data.filter((data) =>data.id===parseInt(id));
  
  return (
    <div className='mt-8 sm:mt-12 pb-10 sm:pb-20 min-h-screen bg-slate-300 dark:bg-slate-800 w-full flex flex-col rounded-t-2xl sm:rounded-t-3xl'>
        {
          filteredData && (
            <div className='h-full'>
              <div className="text-end relative h-60 sm:h-96">
                <Image fill={true} objectFit='cover' src={filteredData[0].imageUrl} alt={filteredData[0].title} className='rounded-t-2xl sm:rounded-t-3xl'  />
                <XMarkIcon 
                onClick={()=>router.back()}
                className='w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl hover:cursor-pointer hover:bg-primary-400 bg-primary-500 text-white inline-block relative' />
              </div>
                  <section className='px-2 sm:px-6 text-base sm:text-lg'>
                    <h1 className='mt-8 mb-4 sm:mt-16 sm:mb-8 font-bold text-xl sm:text-3xl'>{filteredData[0].title}</h1>
                    <strong>Deskripsi :</strong>
                    <p className='mb-4 sm:mb-8'>{filteredData[0].description}</p>
                    <ButtonContact title={filteredData[0].title}/>
                  </section>
            </div>
            )
        }
    </div>
  )
}

