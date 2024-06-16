import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasa Pemasangan Plafon PVC & Gypsum | Toko Plafon di Solo",
  description:
    "Jasa pemasangan plafon Gypsum, PVC dan Baja Ringan, jual berbagai bahan material bangunan lengkap hanya di Sumber Griya Abadi.",
  keywords:
    "toko plafon, pemborong plafon, jasa konstruksi, jasa pasang plafon, toko bangunan, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, pemasangan plafom pvc, toko plafon solo, toko bangunan solo",
  openGraph: {
    images: `${process.env.SGA_LOGO_META_TAG}`,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <main className={inter.className}>{children}</main>
        {/* <div>
          <ButtonWA />
        </div> */}
      </body>
      <Script
        strategy="lazyOnLoad"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Z1EP20ZRED`}
      ></Script>
      <Script id="ga-script" strategy="lazyOnLoad">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', G-Z1EP20ZRED);
        `}
      </Script>
    </html>
  );
}
