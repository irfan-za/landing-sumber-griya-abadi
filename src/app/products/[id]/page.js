"use client";
import { ThemeProvider } from "next-themes";
import DetailCard from "@/components/card/DetailCard";
import React from "react";

export async function generateMetadata({ params }) {
  const res = await fetch(`/api/products`);
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

export default function DetailPage({ params }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className=" bg-slate-200 dark:bg-slate-900">
        <div className="flex min-h-screen px-4 sm:px-12 container sm:max-w-[90%] mx-auto w-full items-center flex-col">
          <DetailCard id={params.id} />
        </div>
      </main>
    </ThemeProvider>
  );
}
