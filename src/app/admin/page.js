import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AdminTable from "@/components/admin/AdminTable";
import Sidebar from "@/components/admin/Sidebar";
import { getAll, getItem } from "@/lib/utils/supabaseCRUD";

async function page() {
  const { data } = await getAll("offline_products");
  return (
    <div className="px-3">
      <AdminTable data={data ?? []} />
    </div>
  );
}

export default page;
