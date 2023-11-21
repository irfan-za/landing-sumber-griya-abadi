'use client'
import { ThemeProvider } from "next-themes"
import AllCard from "../components/card/AllCard"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer"

export default function Services() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className=" bg-slate-200 dark:bg-slate-900">
      <div className="flex min-h-screen py-4 px-4 sm:px-12 container sm:max-w-[90%] mx-auto w-full items-center flex-col">
          <Navbar />
          <AllCard pageTitle={"Jasa Pemasangan"} fetchUrl={'service'} />
        </div>
        <div className="w-full overflow-hidden">
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  )
}
