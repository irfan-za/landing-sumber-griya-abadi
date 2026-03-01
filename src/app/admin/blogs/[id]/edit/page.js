import BlogForm from "@/components/admin/blogs/BlogForm";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }) {
  const { id } = await params;
  const { data: blog, error } = await getItem("blogs", id);
  if (error || !blog) notFound();

  return <BlogForm blog={blog} />;
}
