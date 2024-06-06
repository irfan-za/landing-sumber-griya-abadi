import "@/app/globals.css";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/products`
  );
  const data = await res.json();
  const filteredData =
    data && data.filter((data) => data.id === parseInt(params.id));
  if (filteredData && filteredData.length < 1) notFound();
  return {
    title: `Jual ${filteredData[0].title} | Sumber Griya Abadi`,
    description: `Beli ${filteredData[0].title} Terbaru Harga Murah di Sumber Griya Abadi. Bisa COD, Aman, dan Rating Terbaik. Belanja pasti ready hanya di Sumber Griya Abadi`,
    keywords: `${filteredData[0].title
      .split(" ")
      .join(
        ", "
      )} berkualitas, murah, toko plafon di solo, toko bangunan di solo`,
    openGraph: {
      images: filteredData[0].imageUrl,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products/${params.id}`,
    },
  };
}

export default function ProductDetailLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
