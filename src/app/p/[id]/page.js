import Feature from '@/components/product/Feature'
import Hero from '@/components/product/Hero'
import Nav from '@/components/product/Nav'
import Video from '@/components/product/Video'
import { cookies } from 'next/headers'
import React from 'react'


export default async function page() {
  const promoDate= cookies().get('date_timer')
  return (
      <div className='pb-8 lg:max-w-[80%] bg-slate-100 rounded-t-lg mx-auto'>
        <Nav/>
        <Hero/>
        <Feature/>
        <Video promoDate={promoDate} />
      </div>
  )
}
