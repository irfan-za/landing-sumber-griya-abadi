import CategoryForm from "@/components/admin/categories/CategoryForm";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";

export default async function EditCategoryPage({ params }) {
  const { id } = await params;
  const { data: category, error } = await getItem("categories", id);
  if (error || !category) notFound();

  return <CategoryForm category={category} />;
}
