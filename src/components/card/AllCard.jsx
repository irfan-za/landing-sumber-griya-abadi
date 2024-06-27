
import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Card from "./Card"
import { getAll } from '@/lib/utils/supabaseCRUD'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

function AllCard({pageTitle, fetchUrl}) {
  const [data, setData] = useState(null)
  const [products, setProducts] = useState(null)
  const [search, setSearch] = useState('')
  useEffect(() => {
    const f=async() => {
      const res= await fetch(`/api/${fetchUrl}`)
      const data= await res.json()
      const {data: products, error} = await getAll('products');
      if (error) notFound();

      setData(data)
      setProducts(products)
    }
    f()
  }, [])
  const filteredData = data && data.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );
  const filreredProducts = products && products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  
  
  return (
        <>
          <h1 className='dark:text-white text-slate-700 py-4 sm:py-8 sm:mt-24 text-xl sm:text-3xl font-semibold'>{pageTitle}</h1>
          <div className="border w-[80%] sm:w-fit dark:border-slate-500 border-slate-700 justify-between flex space-x-2 items-center px-2 py-1 mb-4 sm:mb-8 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            <input type="text" 
            onChange={(e)=>setSearch(e.target.value)} 
            className="bg-transparent outline-none w-full sm:w-96"
            placeholder="Cari data..." />
            <label htmlFor=""><MagnifyingGlassIcon className="w-4 h-4 relative "/></label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 container">
            {
              filreredProducts && fetchUrl==='products' && filreredProducts.map(product=>{
                return(
                  <Link key={product.id} href={`/p/${product.id}`}>
                  <div className="aspect-square rounded-t-xl relative group bg-slate-50  dark:bg-slate-800" >
                    <Image src={product.image} alt={product.title} fill={true} objectFit="cover" className="rounded-t-lg" />
                  </div>
                  <div className="dark:text-slate-100 text-slate-700 rounded-b-xl bg-slate-50 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 h-12 sm:h-20 py-1 sm:py-2 px-2 sm:px-4">
                    <h5 className=" text-sm sm:text-base md:text-lg font-medium sm:font-semibold line-clamp-2">{product.title}</h5>
                  </div>
                </Link>
                )
              })
            }
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