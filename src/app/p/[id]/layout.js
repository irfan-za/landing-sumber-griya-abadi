import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import FacebookPixel from "@/components/product/FacebookPixel";
import Script from "next/script";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }) {
  const { data: product, error } = await getItem("products", params.id);
  if (error) notFound();
  return {
    title: product.title,
    description: product.descriptions[0],
    openGraph: {
      images: [product.image],
    },
  };
}

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
      
        gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
        `}
      </Script>
    </html>
  );
}
