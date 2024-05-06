import Benefit from "@/components/product/Benefit";
import BuySection from "@/components/product/BuySection";
import Feature from "@/components/product/Feature";
import Footer from "@/components/product/Footer";
import Hero from "@/components/product/Hero";
import Nav from "@/components/product/Nav";
import Testimony from "@/components/product/Testimony";
import Video from "@/components/product/Video";
import { getItem, getItemsWithFilter } from "@/utils/supabaseCRUD";
import { cookies } from "next/headers";

export default async function page({ params }) {
  const discountDate = cookies().get("date_timer");
  const data = await getItem("products", params.id);
  const benefits = await getItemsWithFilter(
    "benefits",
    "product_id",
    params.id
  );
  return (
    <div className="lg:max-w-[80%] bg-slate-100 rounded-t-lg mx-auto">
      <Nav />
      <Hero
        title={data.title}
        descriptions={data.descriptions}
        image={data.image}
      />
      <Feature
        title={data.title}
        image={data.feature_image}
        descriptions={data.feature_descriptions}
      />
      <Benefit
        benefits={benefits}
        normalPrice={data.normal_price}
        discountPrice={data.discount_price}
        discountDate={discountDate}
        discountDuration={data.discount_duration}
      />
      <Testimony title={data.title} images={data.testimony_images} />
      <Video
        title={data.title}
        youtubeVideoId={data.youtube_video_id}
        normalPrice={data.normal_price}
        discountPrice={data.discount_price}
        discountDate={discountDate}
        discountDuration={data.discount_duration}
      />
      <BuySection
        id={data.id}
        title={data.title}
        tagline={data.promo_tagline}
        normalPrice={data.normal_price}
        discountPrice={data.discount_price}
      />
      <Footer />
    </div>
  );
}
