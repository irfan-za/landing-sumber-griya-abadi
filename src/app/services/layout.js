import ButtonWA from '@/components/ButtonWA'
import '@/app/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jasa Pemasangan Plafon PVC & Gypsum | Sumber Griya Abadi',
  description: 'Melayani berbagai jasa pemasangan plafon Gypsum, PVC dan Baja Ringan.',
  keywords: 'pemborong plafon, jasa konstruksi, jasa pasang plafon, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, toko plafon solo',
  openGraph: {
    images: `${process.env.SGA_LOGO_META_TAG}`,
  },
}

export default function ServicesLayout({ children }) {

  return (
    <html lang="id">
        <body className={inter.className}>{children}</body>
        <ButtonWA/>
    </html>
  )
}