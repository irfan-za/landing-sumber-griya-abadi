
import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Card from "./Card"

function AllCard({pageTitle, fetchUrl}) {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')
  useEffect(() => {
    const f=async() => {
      const res= await fetch(`/api/${fetchUrl}`)
      const data= await res.json()
      setData(data)
    }
    f()
  }, [])
  const filteredData = data && data.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );
  
  
  return (
        <>
          <h1 className='dark:text-white text-slate-700 py-4 sm:py-8 sm:mt-24 text-xl sm:text-3xl font-semibold'>{pageTitle}</h1>
          <div className="border dark:border-slate-500 border-slate-700 flex items-center px-2 py-1 mb-4 sm:mb-8 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            <input type="text" 
            onChange={(e)=>setSearch(e.target.value)} 
            className="bg-transparent outline-none sm:w-96"
            placeholder="Cari data..." />
            <label htmlFor=""><MagnifyingGlassIcon className="w-4 h-4 relative "/></label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 container">
            {
              filteredData && filteredData.map(data=>{
                return <Card key={data.id} imgUrl={data.imageUrl} title={data.title} id={data.id} fetchUrl={fetchUrl} />
              })
            }
          </div>
        </>
  )
}

export default AllCard