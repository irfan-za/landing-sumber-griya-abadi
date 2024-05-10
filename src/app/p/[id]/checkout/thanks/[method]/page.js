import BankTransfer from "@/components/thanks/BankTransfer";
import Cod from "@/components/thanks/Cod";
import { supabase } from "@/config/supabase";
import { notFound } from "next/navigation";

async function ThanksPage({ params, searchParams }) {
  const method = params.method;
  const checkoutId = searchParams.checkout_id;
  const { data, error } = await supabase
    .from("checkouts")
    .select(
      ` 
        *,
      products (
        title
      )`
    )
    .eq("id", checkoutId)
    .single();
  if (error) notFound();

  return (
    <div className="max-w-[90%] lg:max-w-[80%] bg-slate-100 rounded-lg mx-auto container pb-10 px-5">
      <h1 className="font-bold text-xl sm:text-2xl text-gray-900 text-center pt-5 sm:pt-10 my-5 mx-auto">
        {data && `Terimakasih telah melakukan order ${data.products.title}`}
      </h1>
      {method === "bank-transfer" && data && (
        <BankTransfer
          checkoutId={checkoutId}
          totalPrice={data.total_price}
          title={data.products.title}
        />
      )}
      {method === "cod" && data && (
        <Cod
          checkoutId={checkoutId}
          totalPrice={data.total_price}
          title={data.products.title}
          shippingCost={data.shipping_cost}
          productPrice={data.product_price}
        />
      )}
    </div>
  );
}

export default ThanksPage;
