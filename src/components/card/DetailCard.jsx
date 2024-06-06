
import React, { useEffect, useState } from 'react'
import { notFound, usePathname } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import ButtonContact from '../ButtonContact'
import Carousel from '../Carousel'
import Link from 'next/link'


export default function DetailCard({id}) {
  const path=usePathname()
  let fetchUrl=path.split('/')[1];
  const [data, setData] = useState(null)
  useEffect(() => {
    const f=async() => {
      const res= await fetch(`/api/${fetchUrl}`)
      const data= await res.json();
      setData(data)
    }
    f()
  }, [])
  const filteredData = data && data.filter((data) =>data.id===parseInt(id));
  if (filteredData && filteredData.length<1) notFound();
  
  return (
    // min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)]
    <div className='mt-8 sm:mt-12 pb-10 sm:pb-20 min-h-screen
     bg-slate-300 dark:bg-slate-800 w-full flex flex-col rounded-t-2xl sm:rounded-t-3xl'>
        {
          filteredData && filteredData.length>0 && (
            <div className='h-full'>
              <div className="text-end relative h-60 sm:h-96">
                <Link href={`/${fetchUrl}`}>
                  <XMarkIcon 
                  className='w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl hover:cursor-pointer hover:bg-primary-hover inline-block relative' />
                </Link>
                <div className="flex space-x-4 overflow-x-scroll rounded-xl snap-x py-4">
                  {
                    filteredData && filteredData[0]?.imageUrl.map((img,i)=>
                      <Carousel key={i} image={img} alt={filteredData[0].title} isSquare={true} />
                  )
                  }
                </div>
              </div>
                  <section className='px-2 sm:px-6 text-base sm:text-lg'>
                    <h1 className='mt-8 mb-4 sm:mt-16 sm:mb-8 font-bold text-xl sm:text-3xl'>{filteredData[0].title}</h1>
                    <strong>Deskripsi :</strong>
                    <div className='mb-4 sm:mb-8' dangerouslySetInnerHTML={{ __html: filteredData[0].description}}></div>
                    <ButtonContact title={filteredData[0].title}/>
                  </section>
              </div>
            )
        }
    </div>
  )
}

