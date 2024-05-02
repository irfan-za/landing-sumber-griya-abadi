'use client'
import BankTransfer from "@/components/thanks/BankTransfer"
import Cod from "@/components/thanks/Cod"
import { useSearchParams } from "next/navigation"

function ThanksPage({params}) {
  const method= params.method
  const searchParams = useSearchParams()
  const orderId=searchParams.get("order_id")

  return (
    <div className='max-w-[90%] lg:max-w-[80%] bg-slate-100 rounded-lg mx-auto container pb-10 px-5'>
      <h1 className="font-bold text-xl sm:text-2xl text-gray-900 text-center pt-5 sm:pt-10 my-5 mx-auto">Terimakasih telah melakukan order Bor Listrik Serbaguna</h1>
      {
        method === 'bank-transfer' &&(
          <BankTransfer orderId={orderId} />
        )
      }
      {
        method === 'cod' &&(
          <Cod orderId={orderId} />
        )
      }
    </div>
  )
}

export default ThanksPage