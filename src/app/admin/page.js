import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AdminTable from "@/components/admin/AdminTable";
import { getAll } from "@/lib/utils/supabaseCRUD";

async function page() {
  const { data } = await getAll("offline_products");
  return (
    <MaxWidthWrapper>
      <AdminTable data={data ?? []} />
    </MaxWidthWrapper>
  );
}

export default page;
