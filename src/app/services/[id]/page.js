"use client";
import DetailCard from "@/components/card/DetailCard";
import { ThemeProvider } from "next-themes";

export async function generateMetadata({ params }) {
  const res = await fetch(`/api/services`);
  const data = await res.json();
  const filteredData =
    data && data.filter((data) => data.id === parseInt(params.id));
  if (filteredData && filteredData.length < 1) notFound();
  return {
    title: `${filteredData[0].title} | Sumber Griya Abadi`,
    description: `${filteredData[0].title} Profesional, berpengalaman, Harga bersahabat untuk proyek di Solo, Jawa Tengah. Jasa konstruksi terpercaya hanya di Sumber Griya Abadi`,
    keywords: `${filteredData[0].title
      .split(" ")
      .join(
        ", "
      )} berkualitas, aman, profesional, toko bangunan di solo, toko plafon`,
    openGraph: {
      images: filteredData[0].imageUrl,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${params.id}`,
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
