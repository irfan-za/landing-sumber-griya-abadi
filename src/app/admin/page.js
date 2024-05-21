import AdminTable from "@/components/admin/AdminTable";
import { getAll } from "@/lib/utils/supabaseCRUD";

// automatically revalidate data each request
export const revalidate = 0;

async function page() {
  const { data } = await getAll("offline_products");
  return (
    <div className="px-3">
      <AdminTable data={data ?? []} />
    </div>
  );
}

export default page;
