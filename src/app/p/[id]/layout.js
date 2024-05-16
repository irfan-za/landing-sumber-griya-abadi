import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import FacebookPixel from "@/components/product/FacebookPixel";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }) {
  const { data: product, error } = await getItem("products", params.id);
  if (error) notFound();
  return {
    title: `Jual ${product.title} | Sumber Griya Abadi`,
    description: `Beli ${product.title} Terbaru Harga Murah di Sumber Griya Abadi. Bisa COD, Aman, dan Rating Terbaik. Belanja pasti ready hanya di Sumber Griya Abadi`,
    openGraph: {
      images: [product.image],
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/p/${params.id}`,
    },
  };
}

export default function ProductLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <FacebookPixel />
        <ButtonWA />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
