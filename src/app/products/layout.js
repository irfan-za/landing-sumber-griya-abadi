import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jual Plafon PVC, Gypsum & Bahan bangunan | Sumber Griya Abadi",
  description:
    "Belanja berbagai bahan material bangunan, baja ringan, plafon Gypsum dan PVC lengkap & terpercaya hanya di Sumber Griya Abadi.",
  keywords:
    "toko plafon, toko bangunan, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, toko plafon solo, toko bangunan solo",
  openGraph: {
    images: `${process.env.SGA_LOGO_META_TAG}`,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products`,
  },
};

export default function ProductsLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <main className={inter.className}>{children}</main>
        <div>
          <ButtonWA />
        </div>
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
