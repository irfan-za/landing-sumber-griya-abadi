'use client'
import DetailCard from '@/components/card/DetailCard'
import { ThemeProvider } from 'next-themes'

export async function generateMetadata({ params }, parent) {
  const id = params.id
  const res= await fetch(`/api/services`)
  const data= await res.json()
  const service = data && data.filter((data) =>data.id===parseInt(id));
  console.log(service);
 
  return {
    title: service[0].title + ' | Sumber Griya Abadi',
    description: service[0].description,
    keywords: 'pemborong plafon, jasa konstruksi, jasa pasang plafon, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, toko plafon solo',
    openGraph: {
      images: [service[0].imageUrl],
    },
  }
}

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
