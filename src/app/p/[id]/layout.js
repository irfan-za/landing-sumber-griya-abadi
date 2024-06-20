import "@/app/globals.css";
import { Inter } from "next/font/google";
import FacebookPixel from "@/components/product/FacebookPixel";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }) {
  const { data: product, error } = await getItem("products", params.id);
  if (error) notFound();
  return {
    title: `Jual ${product.title} | Sumber Griya Abadi`,
    description: `Beli ${product.title} Terbaru Harga Murah di Sumber Griya Abadi. Bisa COD, Aman, dan Rating Terbaik. Belanja pasti ready hanya di Sumber Griya Abadi`,
    keywords: `${product.title
      .split(" ")
      .join(
        ", "
      )} berkualitas, murah, toko plafon di solo, toko bangunan di solo`,
    openGraph: {
      images: [product.image],
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/p/${params.id}`,
    },
  };
}

export default function ProductLayout({ children }) {
  return (
    <div className={inter.className}>
      {children}
      <FacebookPixel />
    </div>
  );
}
