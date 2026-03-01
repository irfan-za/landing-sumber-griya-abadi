import AdminPageHeader from "@/components/admin/shared/AdminPageHeader";
import ServicesTable from "@/components/admin/services/ServicesTable";
import { getAll } from "@/lib/utils/supabaseCRUD";

export const revalidate = 0;

export default async function ServicesPage() {
  const { data } = await getAll("services");

  return (
    <>
      <AdminPageHeader
        title="Jasa Layanan"
        description="Kelola daftar jasa pemasangan"
        actionLabel="Tambah Layanan"
        actionHref="/admin/services/create"
      />
      <ServicesTable data={data ?? []} />
    </>
  );
}
