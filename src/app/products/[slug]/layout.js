import "@/app/globals.css";
import { supabase } from "@/config/supabase";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data, error } = await supabase
    .from("offline_products")
    .select("title, image_urls, slug")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return {
      title: "Produk Tidak Ditemukan | Sumber Griya Abadi",
      description: "Produk yang Anda cari tidak ditemukan.",
    };
  }

  return {
    title: `Jual ${data.title} | Sumber Griya Abadi`,
    description: `Beli ${data.title} Terbaru Harga Murah di Sumber Griya Abadi. Bisa COD, Aman, dan Rating Terbaik. Belanja pasti ready hanya di Sumber Griya Abadi`,
    keywords: `${data.title
      .split(" ")
      .join(
        ", "
      )} berkualitas, murah, toko plafon di solo, toko bangunan di solo`,
    openGraph: {
      images: data.image_urls,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products/${data.slug}`,
    },
  };
}

export default function ProductDetailLayout({ children }) {
  return <div>{children}</div>;
}
