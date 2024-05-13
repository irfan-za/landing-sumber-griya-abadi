import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import FacebookPixel from "@/components/product/FacebookPixel";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function ProductsLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <FacebookPixel />
        <ButtonWA />
      </body>
      <Script
        strategy="lazyOnLoad"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script id="ga-script" strategy="lazyOnLoad">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-Z1EP20ZRED');
        `}
      </Script>
    </html>
  );
}
