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
  const product = await getItem("products", params.id);
  const benefits = await getItemsWithFilter(
    "benefits",
    "product_id",
    params.id
  );
  return (
    <div className="lg:max-w-[80%] bg-slate-100 rounded-t-lg mx-auto">
      <Nav />
      <Hero
        title={product.title}
        descriptions={product.descriptions}
        image={product.image}
      />
      <Feature
        title={product.title}
        image={product.feature_image}
        descriptions={product.feature_descriptions}
      />
      <Benefit
        benefits={benefits}
        normalPrice={product.normal_price}
        discountPrice={product.discount_price}
        discountDate={discountDate}
        discountDuration={product.discount_duration}
      />
      <Testimony title={product.title} images={product.testimony_images} />
      <Video
        title={product.title}
        youtubeVideoId={product.youtube_video_id}
        normalPrice={product.normal_price}
        discountPrice={product.discount_price}
        discountDate={discountDate}
        discountDuration={product.discount_duration}
      />
      <BuySection
        id={product.id}
        title={product.title}
        tagline={product.promo_tagline}
        normalPrice={product.normal_price}
        discountPrice={product.discount_price}
      />
      <Footer />
    </div>
  );
}
