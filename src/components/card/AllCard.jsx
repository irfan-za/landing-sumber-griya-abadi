"use client";
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Card from "./Card"

function AllCard({pageTitle, fetchUrl, data = []}) {
  const [search, setSearch] = useState('')

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
        <>
          <h1 className='dark:text-white text-slate-700 py-4 sm:py-8 sm:mt-24 text-xl sm:text-3xl font-semibold'>{pageTitle}</h1>
          <div className="border w-[80%] sm:w-fit dark:border-slate-500 border-slate-700 justify-between flex space-x-2 items-center px-2 py-1 mb-4 sm:mb-8 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            <input type="text" 
            onChange={(e)=>setSearch(e.target.value)} 
            className="bg-transparent outline-none w-full sm:w-96"
            placeholder="Cari produk..." />
            <label><MagnifyingGlassIcon className="w-4 h-4 relative "/></label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 container">
            {
              filteredData.map(item=>{
                return <Card key={item.id} imgUrl={item.image_urls} title={item.title} slug={item.slug} fetchUrl={fetchUrl} />
              })
            }
          </div>
        </>
  )
}

export default AllCard