import CheckoutForm from "@/components/checkout/CheckoutForm";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";

async function CheckoutPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/province`
  );
  const provinces = await res.json();
  const { data: product, error } = await getItem("products", params.id);
  if (error) notFound();

  return (
    <>
      {product && provinces && (
        <CheckoutForm product={product} provinces={provinces.data} />
      )}
    </>
  );
}

export default CheckoutPage;
