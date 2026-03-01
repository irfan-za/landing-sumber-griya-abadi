import AdminPageHeader from "@/components/admin/shared/AdminPageHeader";
import ProductsTable from "@/components/admin/products/ProductsTable";
import { getAll } from "@/lib/utils/supabaseCRUD";

export const revalidate = 0;

export default async function ProductsPage() {
  const { data } = await getAll("offline_products");

  return (
    <>
      <AdminPageHeader
        title="Produk"
        description="Kelola daftar produk offline"
        actionLabel="Tambah Produk"
        actionHref="/admin/products/create"
      />
      <ProductsTable data={data ?? []} />
    </>
  );
}
