import "@/app/globals.css";
import { supabase } from "@/config/supabase";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data, error } = await supabase
    .from("services")
    .select("title, image_urls, slug")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return {
      title: "Jasa Tidak Ditemukan | Sumber Griya Abadi",
      description: "Jasa yang Anda cari tidak ditemukan.",
    };
  }

  return {
    title: `${data.title} | Sumber Griya Abadi`,
    description: `${data.title} Profesional, berpengalaman, Harga bersahabat untuk proyek di Solo, Jawa Tengah. Jasa konstruksi terpercaya hanya di Sumber Griya Abadi`,
    keywords: `${data.title
      .split(" ")
      .join(
        ", "
      )} berkualitas, aman, profesional, toko bangunan di solo, toko plafon`,
    openGraph: {
      images: data.image_urls,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${data.slug}`,
    },
  };
}

export default function ProductDetailLayout({ children }) {
  return <div>{children}</div>;
}
