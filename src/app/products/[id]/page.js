'use client'
import { ThemeProvider } from "next-themes"
import DetailCard from '@/app/components/card/DetailCard'
import React from 'react'

export default function DetailPage({ params }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <main className=" bg-slate-200 dark:bg-slate-900">
      <div className="flex min-h-screen px-4 sm:px-12 container sm:max-w-[90%] mx-auto w-full items-center flex-col">
      <DetailCard id={params.id} />
    </div>
    </main>
    </ThemeProvider>
  )
}
