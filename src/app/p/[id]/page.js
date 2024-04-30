'use client'
import Feature from '@/app/components/product/Feature'
import Hero from '@/app/components/product/Hero'
import Nav from '@/app/components/product/Nav'
import Video from '@/app/components/product/Video'
import { ThemeProvider } from 'next-themes'
import React from 'react'

function page() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className='pb-8 lg:max-w-[80%] bg-slate-100 dark:bg-slate-900 rounded-t-lg mx-auto'>
        <Nav/>
        <Hero/>
        <Feature/>
        <Video/>
      </div>
    </ThemeProvider>
  )
}

export default page