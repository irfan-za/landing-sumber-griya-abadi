import { getAll } from "@/lib/utils/supabaseCRUD";

export default async function sitemap() {
  const resProducts = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/product`
  );
  const offline_products = await resProducts.json();
  const offline_products_url = offline_products.map((product) => {
    return {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/service`);
  const services = await res.json();
  const services_url = services.map((service) => {
    return {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    };
  });
  const { data: products, error } = await getAll("products");
  const products_url = products.map((product) => {
    return {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/p/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });
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
    ...products_url,
  ];
}
