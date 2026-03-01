import AdminPageHeader from "@/components/admin/shared/AdminPageHeader";
import CategoriesTable from "@/components/admin/categories/CategoriesTable";
import { getAll } from "@/lib/utils/supabaseCRUD";

export const revalidate = 0;

export default async function CategoriesPage() {
  const { data } = await getAll("categories");

  return (
    <>
      <AdminPageHeader
        title="Kategori"
        description="Kelola kategori produk dan jasa"
        actionLabel="Tambah Kategori"
        actionHref="/admin/categories/create"
      />
      <CategoriesTable data={data ?? []} />
    </>
  );
}
