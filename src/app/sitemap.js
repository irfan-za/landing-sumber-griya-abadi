import { supabase } from "@/config/supabase";

export default async function sitemap() {
  const { data: offlineProducts } = await supabase
    .from("offline_products")
    .select("slug");

  const offline_products_url = (offlineProducts || []).map((product) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const { data: services } = await supabase
    .from("services")
    .select("slug");

  const services_url = (services || []).map((service) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug");

  const blogs_url = (blogs || []).map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...offline_products_url,
    ...services_url,
    ...blogs_url,
  ];
}
