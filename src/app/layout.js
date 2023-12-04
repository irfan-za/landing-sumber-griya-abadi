import ButtonWA from './components/ButtonWA'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jasa Pemasangan Plafon PVC & Gypsum | Toko Plafon di Solo',
  description: 'Jasa pemasangan plafon Gypsum, PVC dan Baja Ringan, jual berbagai bahan material bangunan lengkap hanya di Sumber Griya Abadi.',
  keywords: 'toko plafon, pemborong plafon, jasa konstruksi, jasa pasang plafon, toko bangunan, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, pemasangan plafom pvc, toko plafon solo, toko bangunan solo',
  openGraph: {
    images: 'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700575460/sga/logo_rcth5s.png',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="id">
        <body className={inter.className}>{children}</body>
        <ButtonWA/>
    </html>
  )
}
