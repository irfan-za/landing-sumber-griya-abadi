import DetailCard from "@/components/card/DetailCard";
import { supabase } from "@/config/supabase";
import { notFound } from "next/navigation";

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const { data, error } = await supabase
    .from("offline_products")
    .select("id, title, slug, descriptions, image_urls")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    notFound();
  }

  return (
      <main className=" bg-slate-200 dark:bg-slate-900">
        <div className="flex min-h-screen px-4 sm:px-12 container sm:max-w-[90%] mx-auto w-full items-center flex-col">
          <DetailCard data={data} type="products" />
        </div>
      </main>
  );
}
