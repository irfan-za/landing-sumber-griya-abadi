import Benefit from '@/components/product/Benefit'
import BuySection from '@/components/product/BuySection'
import Feature from '@/components/product/Feature'
import Footer from '@/components/product/Footer'
import Hero from '@/components/product/Hero'
import Nav from '@/components/product/Nav'
import Testimony from '@/components/product/Testimony'
import Video from '@/components/product/Video'
import { getAll } from '@/utils/supabaseCRUD'
import { cookies } from 'next/headers'
import React from 'react'

export default async function page({params}) {
  const promoDate= cookies().get('date_timer')
  return (
      <div className='lg:max-w-[80%] bg-slate-100 rounded-t-lg mx-auto'>
        {JSON.stringify(getAll('products'))}
        <Nav/>
        <Hero/>
        <Feature/> 
        <Benefit promoDate={promoDate}/>
        <Testimony/>
        <Video promoDate={promoDate} />
        <BuySection id={params.id} />
        <Footer/>
      </div>
  )
}
