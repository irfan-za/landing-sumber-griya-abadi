import CheckoutForm from "@/components/checkout/CheckoutForm";
import { getItem, getItemsWithFilter } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";

async function CheckoutPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/province`
  );
  const provinces = await res.json();
  const { data: product, error } = await getItem("products", params.id);
  const { data: variants, error: errorVariant } = await getItemsWithFilter(
    "variants",
    "product_id",
    params.id
  );
  if (error || errorVariant) notFound();

  return (
    <>
      {product && provinces && (
        <CheckoutForm
          product={product}
          provinces={provinces.data}
          variants={variants}
        />
      )}
    </>
  );
}

export default CheckoutPage;
