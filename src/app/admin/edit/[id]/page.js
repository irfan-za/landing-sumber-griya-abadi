import CreateProductForm from "@/components/admin/product/CreateProductForm";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";

async function page({ params }) {
  const { id } = await params;
  let product = null;
  if (id !== "add") {
    const { data, error } = await getItem("offline_products", id);
    if (error) return notFound();
    product = data;
  }
  return (
    <div className="mt-16 px-3">
      <CreateProductForm product={product || "add"} />
    </div>
  );
}

export default page;
