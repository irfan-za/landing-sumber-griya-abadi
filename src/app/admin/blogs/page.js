import AdminPageHeader from "@/components/admin/shared/AdminPageHeader";
import BlogsTable from "@/components/admin/blogs/BlogsTable";
import { getAll } from "@/lib/utils/supabaseCRUD";

export const revalidate = 0;

export default async function BlogsPage() {
  const { data } = await getAll("blogs");

  return (
    <>
      <AdminPageHeader
        title="Blog"
        description="Kelola artikel dan konten blog"
        actionLabel="Tambah Artikel"
        actionHref="/admin/blogs/create"
      />
      <BlogsTable data={data ?? []} />
    </>
  );
}
