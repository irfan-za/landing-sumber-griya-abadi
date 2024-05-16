import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DetailProduct from "@/components/admin/product/DetailProduct";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";
async function Page({ params }) {
  const { data: product, error } = await getItem("offline_products", params.id);
  if (error) notFound();
  return (
    <MaxWidthWrapper className="mt-24">
      <DetailProduct data={product} />
    </MaxWidthWrapper>
  );
}

export default Page;
