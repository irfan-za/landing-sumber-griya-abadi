import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sumber Griya Abadi',
  description: 'Sumber Griya Abadi merupakan perusahaan jasa pemasangan plafon dan distribusi bahan material bangunan. Kami berdiri sejak 2008 di Solo, Jawa Tengah. Hingga saat ini, kami selalu konsisten melayani pemasangan plafon secara professional dan berkualitas.  ',
  keywords: 'toko plafon, pemborong plafon, jasa konstruksi, jasa pasang plafon, toko bangunan, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, pemasangan plafom pvc, toko plafon solo, toko bangunan solo',
  openGraph: {
    images: 'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700575460/logo_rcth5s.png',
  },
  verification: {
    google: 'M7smp6GOF5tNu2OC4jm7WhbeuzyeL2GQM-_tcjOe_xo',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="id">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
