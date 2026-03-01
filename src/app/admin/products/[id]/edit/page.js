import ProductForm from "@/components/admin/products/ProductForm";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";

export default async function EditProductPage({ params }) {
  const { id } = await params;
  const { data: product, error } = await getItem("offline_products", id);
  if (error || !product) notFound();

  return <ProductForm product={product} />;
}
