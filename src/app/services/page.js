import AllCard from "@/components/card/AllCard";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/config/supabase";

export default async function Services() {
  const { data } = await supabase
    .from("services")
    .select("id, title, slug, image_urls")
    .order("created_at", { ascending: false });

  return (
      <main className=" bg-slate-200 dark:bg-slate-900">
        <div className="flex min-h-screen py-4 px-0 sm:px-12 container sm:max-w-[90%] mx-auto w-full items-center flex-col">
          <Navbar />
          <AllCard pageTitle={"Jasa Pemasangan"} fetchUrl={"services"} data={data || []} />
        </div>
        <div className="w-full overflow-hidden">
          <Footer />
        </div>
      </main>
  );
}
